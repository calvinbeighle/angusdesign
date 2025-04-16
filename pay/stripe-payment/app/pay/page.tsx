'use client';

import { useState, useEffect } from 'react';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm';
import styles from './PayPage.module.css';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const PayPage = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    // Set the custom height on mobile devices
    const setDynamicVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setDynamicVH();
    window.addEventListener('resize', setDynamicVH);

    return () => {
      window.removeEventListener('resize', setDynamicVH);
    };
  }, []);

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
    <div className={styles.container} style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}>
      <div className={styles.content}>
        <h1 className={styles.title}>Thank You!</h1>
        {clientSecret ? (
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
          </Elements>
        ) : (
          <p className={styles.loading}>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default PayPage;
