import jwt from 'jsonwebtoken';

/**
 * Generates a signed JWT token.
 * @param {string} id - MongoDB user _id
 * @returns {string} JWT token
 */
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || '30d',
  });
};

export default generateToken;