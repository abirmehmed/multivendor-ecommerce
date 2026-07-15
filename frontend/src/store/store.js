import { configureStore } from '@reduxjs/toolkit';
// Slices will be imported here in subsequent phases
// import authReducer from '@features/auth/authSlice';
// import cartReducer from '@features/cart/cartSlice';

/**
 * Redux store configuration.
 * Redux Toolkit automatically configures Redux DevTools and thunk middleware.
 */
const store = configureStore({
  reducer: {
    // auth: authReducer,
    // cart: cartReducer,
    // vendor: vendorReducer,
    // admin: adminReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore non-serializable values in specific actions (e.g., dates)
        ignoredActions: [],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;