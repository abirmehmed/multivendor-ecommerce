/**
 * Async handler wrapper — eliminates repetitive try/catch blocks in controllers.
 * Catches rejected promises and forwards to Express error middleware.
 * 
 * Usage: router.get('/', asyncHandler(async (req, res) => { ... }))
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;