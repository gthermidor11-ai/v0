"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, Utensils, Users, GraduationCap, Handshake, Check, UserRound, Globe, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DONATION_AMOUNTS, DONATION_CATEGORIES } from "@/lib/donations"
import { SectionHeader } from "@/components/section-header"
import DonationCheckout from "@/components/donation-checkout"

const categoryIcons: Record<string, typeof Utensils> = {
  alimentaire: Utensils,
  "nouveaux-arrivants": Users,
  "programmes-jeunesse": GraduationCap,
  "aines-vulnerables": UserRound,
  multiculturalisme: Globe,
  "changements-climatiques": Leaf,
  "soutien-general": Handshake,
}

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(2500)
  const [customAmount, setCustomAmount] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("alimentaire")
  const [showCheckout, setShowCheckout] = useState(false)

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount(null)
  }

  const finalAmount = selectedAmount || (customAmount ? Number.parseInt(customAmount) * 100 : 0)

  const handleProceedToCheckout = () => {
    if (finalAmount >= 100) {
      setShowCheckout(true)
    }
  }

  if (showCheckout && finalAmount >= 100) {
    return (
      <div className="pt-16 md:pt-20">
        <section className="py-16 sm:py-20 md:py-24 bg-muted min-h-screen">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 sm:mb-8">
              <Button variant="ghost" onClick={() => setShowCheckout(false)} className="mb-3 sm:mb-4 -ml-2">
                ← Retour
              </Button>
              <h1 className="font-heading text-2xl sm:text-3xl font-bold mb-2">Finaliser votre don</h1>
              <p className="text-muted-foreground text-sm sm:text-base">
                Don de {(finalAmount / 100).toFixed(2)} $ -{" "}
                {DONATION_CATEGORIES.find((c) => c.id === selectedCategory)?.name}
              </p>
            </motion.div>
            <DonationCheckout amount={finalAmount} category={selectedCategory} />
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="py-16 sm:py-20 md:py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-balance">
              Faites un don
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed px-2">
              Votre générosité permet de soutenir les familles dans le besoin et de financer nos programmes
              communautaires essentiels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              {/* Amount Selection */}
              <div className="mb-8 sm:mb-12">
                <h2 className="font-heading text-xl sm:text-2xl font-bold mb-4 sm:mb-6">1. Choisissez un montant</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  {DONATION_AMOUNTS.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleAmountSelect(option.amount)}
                      className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 transition-all ${
                        selectedAmount === option.amount
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <span className="font-heading text-xl sm:text-2xl font-bold block">{option.label}</span>
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <Label htmlFor="custom-amount" className="text-muted-foreground mb-2 block text-sm sm:text-base">
                    Ou entrez un montant personnalisé
                  </Label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      id="custom-amount"
                      type="number"
                      min="1"
                      placeholder="Montant"
                      value={customAmount}
                      onChange={(e) => handleCustomAmountChange(e.target.value)}
                      className="pl-8 h-12 sm:h-14 text-base sm:text-lg rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Category Selection */}
              <div className="mb-8 sm:mb-12">
                <h2 className="font-heading text-xl sm:text-2xl font-bold mb-4 sm:mb-6">2. Choisissez une catégorie</h2>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {DONATION_CATEGORIES.map((category) => {
                    const Icon = categoryIcons[category.id]
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 text-left transition-all ${
                          selectedCategory === category.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div
                            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 ${
                              selectedCategory === category.id ? "bg-primary" : "bg-muted"
                            }`}
                          >
                            <Icon
                              className={`h-5 w-5 sm:h-6 sm:w-6 ${
                                selectedCategory === category.id ? "text-white" : "text-muted-foreground"
                              }`}
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-heading font-semibold text-base sm:text-lg mb-0.5 sm:mb-1">
                              {category.name}
                            </h3>
                            <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2">
                              {category.description}
                            </p>
                          </div>
                          {selectedCategory === category.id && (
                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center shrink-0">
                              <Check className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                            </div>
                          )}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Summary & Checkout */}
              <Card className="border-0 shadow-xl rounded-2xl sm:rounded-3xl overflow-hidden">
                <CardContent className="p-5 sm:p-8">
                  <h2 className="font-heading text-xl sm:text-2xl font-bold mb-4 sm:mb-6">3. Résumé de votre don</h2>
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-muted-foreground text-sm sm:text-base">Montant</span>
                      <span className="font-heading text-xl sm:text-2xl font-bold text-primary">
                        {finalAmount ? `${(finalAmount / 100).toFixed(2)} $` : "0.00 $"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-muted-foreground text-sm sm:text-base">Catégorie</span>
                      <span className="font-medium text-sm sm:text-base">
                        {DONATION_CATEGORIES.find((c) => c.id === selectedCategory)?.name}
                      </span>
                    </div>
                  </div>
                  <Button
                    onClick={handleProceedToCheckout}
                    disabled={finalAmount < 100}
                    className="w-full h-12 sm:h-14 text-base sm:text-lg bg-primary hover:bg-primary-dark rounded-full"
                  >
                    <Heart className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Procéder au paiement
                  </Button>
                  <p className="text-center text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
                    Paiement sécurisé par Stripe. Un reçu vous sera envoyé par courriel.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Votre impact"
            title="Comment votre don aide"
            description="Chaque dollar compte et contribue directement à améliorer la vie des membres de notre communauté."
          />
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { amount: "25 $", description: "Fournit des repas pour une famille pendant une semaine" },
              { amount: "50 $", description: "Finance une session d'aide à l'intégration" },
              { amount: "100 $", description: "Supporte un mois d'activités pour un jeune" },
            ].map((item, index) => (
              <motion.div
                key={item.amount}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg rounded-xl sm:rounded-2xl text-center">
                  <CardContent className="p-5 sm:p-8">
                    <span className="font-heading text-3xl sm:text-4xl font-bold text-primary block mb-2 sm:mb-4">
                      {item.amount}
                    </span>
                    <p className="text-muted-foreground text-sm sm:text-base">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
