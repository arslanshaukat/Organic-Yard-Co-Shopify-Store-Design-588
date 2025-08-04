import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCreditCard, FiLock, FiAlertCircle } = FiIcons;

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
  hidePostalCode: true,
};

const CheckoutForm = ({ clientSecret, amount, onSuccess, onError, formData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    setProcessing(true);

    try {
      // Create payment method
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
        billing_details: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          address: {
            line1: formData.address,
            city: formData.city,
            state: formData.state,
            postal_code: formData.postcode,
            country: 'AU',
          },
        },
      });

      if (error) {
        setError(error.message);
        setProcessing(false);
        if (onError) onError(error);
        return;
      }

      // Confirm the payment with the client secret
      const { error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

      if (confirmError) {
        setError(confirmError.message);
        setProcessing(false);
        if (onError) onError(confirmError);
        return;
      }

      // Payment successful
      setPaymentMethod(paymentMethod);
      setProcessing(false);
      if (onSuccess) onSuccess(paymentMethod);

    } catch (err) {
      setError('An unexpected error occurred.');
      setProcessing(false);
      if (onError) onError(err);
    }
  };

  if (paymentMethod) {
    return (
      <div className="text-center p-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <SafeIcon icon={FiCreditCard} className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
        <p className="text-gray-600">Your payment was processed successfully.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Card Details
          </label>
          <div className="flex items-center text-gray-500 text-sm">
            <SafeIcon icon={FiLock} className="w-4 h-4 mr-1" />
            <span>Secure payment</span>
          </div>
        </div>
        
        <div className="border border-gray-300 rounded-xl p-4 focus-within:ring-2 focus-within:ring-green-500 transition-all">
          <CardElement 
            options={CARD_ELEMENT_OPTIONS} 
            onChange={e => setCardComplete(e.complete)}
          />
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start space-x-2">
            <SafeIcon icon={FiAlertCircle} className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start space-x-2">
          <SafeIcon icon={FiLock} className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-blue-700 text-sm">Test Card: 4242 4242 4242 4242</p>
            <p className="text-blue-700 text-sm">Expiry: Any future date, CVC: Any 3 digits</p>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={!stripe || processing || !cardComplete}
        className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {processing ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Processing...</span>
          </>
        ) : (
          <>
            <SafeIcon icon={FiCreditCard} className="w-5 h-5" />
            <span>Pay ${(amount / 100).toFixed(2)}</span>
          </>
        )}
      </button>
    </form>
  );
};

export default CheckoutForm;