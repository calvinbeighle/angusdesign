'use client';

import { useState, useEffect } from 'react';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const PayPage = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the client secret when the component mounts
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 1000, currency: 'usd' }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to create payment intent');
        }
        return res.json();
      })
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => console.error('Error fetching clientSecret:', error));
  }, []);

  const options: StripeElementsOptions = {
    clientSecret: clientSecret!,
    appearance: {
      theme: 'flat',
      variables: {
        colorPrimaryText: '#262626',
        fontFamily: "'Helvetica Neue', sans-serif",
      },
    },
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      padding: '40px', 
      fontFamily: "'Helvetica Neue', sans-serif", 
      fontWeight: 100,
      fontSize: '1.1rem' // Slightly increased font size
    }}>
      <h3 style={{ fontWeight: 100, textAlign: 'center', fontSize: '1.8rem' }}>thanks</h3>
      {clientSecret ? (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      ) : (
        <p style={{ fontSize: '1.2rem' }}>Loading...</p>
      )}
    </div>
  );
};

export default PayPage;
