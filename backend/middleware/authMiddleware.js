import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import asyncHandler from './asyncHandler.js';

/**
 * Protects routes — verifies JWT token and attaches user to request object.
 * Expects: Authorization: Bearer <token>
 */
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Attach user (excluding password) to request for downstream use
      req.user = await User.findById(decoded.id).select('-password');
      
      if (!req.user) {
        res.status(401);
        throw new Error('User not found. Token may be invalid.');
      }
      
      next();
    } catch (error) {
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

/**
 * Role-based access control middleware.
 * Usage: router.get('/admin-only', protect, authorize('admin'), handler)
 */
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      res.status(403);
      throw new Error(
        `Role (${req.user.role}) is not authorized to access this resource`
      );
    }
    next();
  };
};

export { protect, authorize };