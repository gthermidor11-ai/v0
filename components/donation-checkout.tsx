"use client"

import { useCallback } from "react"
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { createDonationSession } from "@/app/actions/stripe"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface DonationCheckoutProps {
  amount: number
  category: string
}

export default function DonationCheckout({ amount, category }: DonationCheckoutProps) {
  const fetchClientSecret = useCallback(() => {
    return createDonationSession(amount, category)
  }, [amount, category])

  return (
    <div id="checkout" className="bg-white rounded-2xl p-6 shadow-lg">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={{ fetchClientSecret }}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
