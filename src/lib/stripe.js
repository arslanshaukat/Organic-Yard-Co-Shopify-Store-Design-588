import { loadStripe } from '@stripe/stripe-js';

// Replace with your actual Stripe publishable key
// In production, you should use environment variables
const publishableKey = 'pk_test_51NXDUySIKZhKtuDLYxBxZ6RzHGHzrMzQghL8VwsCyNLWcYUNHJQfQvzHIcG1vIRUTs8QLWFCpM5e9wHmxpWqxmMv00bxrNVTOE';

// Initialize Stripe
const stripePromise = loadStripe(publishableKey);

export default stripePromise;