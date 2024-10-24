import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { amount, currency } = await req.json();
    
    // Create a PaymentIntent with the specified amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    // Return the client secret to the frontend
    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    // Return an error response if something goes wrong
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
