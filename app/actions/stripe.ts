"use server"

import { stripe } from "@/lib/stripe"
import { DONATION_CATEGORIES } from "@/lib/donations"

export async function createDonationSession(amount: number, categoryId: string) {
  const category = DONATION_CATEGORIES.find((c) => c.id === categoryId)

  if (!category) {
    throw new Error("Catégorie de don invalide")
  }

  if (amount < 100) {
    throw new Error("Le montant minimum est de 1$")
  }

  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    redirect_on_completion: "never",
    line_items: [
      {
        price_data: {
          currency: "cad",
          product_data: {
            name: `Don - ${category.name}`,
            description: category.description,
          },
          unit_amount: amount,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    metadata: {
      category: categoryId,
      type: "donation",
    },
  })

  return session.client_secret!
}
