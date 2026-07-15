/**
 * Role constants for type safety and consistency across the app.
 */
export const ROLES = {
  ADMIN: 'admin',
  VENDOR: 'vendor',
  CUSTOMER: 'customer',
};

/**
 * Check if user has required role(s).
 * @param {string} userRole - Current user's role
 * @param {string|string[]} allowedRoles - Required role(s)
 * @returns {boolean}
 */
export const hasRole = (userRole, allowedRoles) => {
  if (!userRole) return false;
  const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];
  return roles.includes(userRole);
};

/**
 * Route guard helper — returns redirect path based on role.
 * @param {string} role 
 * @returns {string} Default dashboard path for role
 */
export const getDashboardPath = (role) => {
  switch (role) {
    case ROLES.ADMIN:
      return '/admin/dashboard';
    case ROLES.VENDOR:
      return '/vendor/dashboard';
    case ROLES.CUSTOMER:
      return '/';
    default:
      return '/login';
  }
};