'use client';

import { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import styles from '../pay/PayPage.module.css';

const CheckoutForm = () => {
  const [loading, setLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      console.error('Stripe or Elements not initialized');
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    });

    if (error) {
      console.error(error.message);
      setLoading(false);
    } else {
      console.log('Payment successful!');
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 100 }}>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div className={styles.stripeInput}>
          <PaymentElement />
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            marginTop: '20px',
            width: '100%',
            padding: '10px',
            backgroundColor: '#f8f8f8',
            color: '#4a4a4a',
            border: '1px solid #4a4a4a',
            borderRadius: '5px',
            fontFamily: "'Helvetica Neue', sans-serif",
            fontWeight: 100,
            fontSize: '1.1rem',
            letterSpacing: '-0.02em',
          }}
        >
          {loading ? 'Processing' : 'Pay'}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
