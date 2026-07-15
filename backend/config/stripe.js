import Stripe from 'stripe';

/**
 * Initializes Stripe SDK with platform secret key.
 * Stripe Connect requires the 'express' or 'standard' account type for vendors.
 */
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-06-20', // Pin to stable API version
});

export default stripe;