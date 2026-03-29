"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Users, CheckCircle, Heart, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { createClient } from "@/lib/supabase/client"
import { SectionHeader } from "@/components/section-header"

const benefits = [
  {
    icon: Heart,
    title: "Impact réel",
    description: "Contribuez directement à améliorer la vie des membres de notre communauté.",
  },
  {
    icon: Users,
    title: "Communauté",
    description: "Rejoignez une équipe passionnée et rencontrez des personnes partageant vos valeurs.",
  },
  { icon: Clock, title: "Flexibilité", description: "Choisissez vos disponibilités selon votre emploi du temps." },
  {
    icon: Award,
    title: "Expérience",
    description: "Développez de nouvelles compétences et enrichissez votre parcours.",
  },
]

const interests = [
  "Distribution alimentaire",
  "Accompagnement des nouveaux arrivants",
  "Programmes jeunesse",
  "Événements culturels",
  "Communication et marketing",
  "Collecte de fonds",
  "Administration",
  "Transport et logistique",
]

export default function VolunteerPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])

  const handleInterestChange = (interest: string) => {
    setSelectedInterests((prev) => (prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      availability: formData.get("availability") as string,
      interests: selectedInterests.join(", "),
    }

    try {
      const supabase = createClient()
      const { error: dbError } = await supabase.from("volunteer_applications").insert([data])

      if (dbError) throw dbError
      setIsSuccess(true)
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="pt-16 md:pt-20 min-h-screen bg-muted flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-6 sm:p-8"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Merci pour votre intérêt!</h1>
          <p className="text-muted-foreground mb-6 sm:mb-8 max-w-md text-sm sm:text-base">
            Votre candidature a été reçue. Notre équipe vous contactera prochainement pour discuter des opportunités de
            bénévolat.
          </p>
          <Button asChild className="bg-primary hover:bg-primary-dark rounded-full w-full sm:w-auto">
            <a href="/">Retour à l'accueil</a>
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-muted overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="order-2 lg:order-1">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-1.5 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                Rejoignez-nous
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance">
                Devenez <span className="text-primary">bénévole</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                Votre temps et vos compétences peuvent faire une réelle différence dans la vie des personnes que nous
                accompagnons.
              </p>
              <div className="flex items-center gap-3 sm:gap-4 text-muted-foreground text-sm sm:text-base">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                <span>Rejoignez notre équipe de bénévoles engagés</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
                <Image
                  src="/diverse-volunteers-helping-community-african.jpg"
                  alt="Équipe de bénévoles diversifiée aidant la communauté"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Pourquoi nous rejoindre"
            title="Les avantages du bénévolat"
            description="Le bénévolat chez CADD est une expérience enrichissante à plusieurs niveaux."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg rounded-xl sm:rounded-2xl hover:shadow-xl transition-shadow">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <benefit.icon className="h-5 w-5 sm:h-7 sm:w-7 text-primary" />
                    </div>
                    <h3 className="font-heading text-sm sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm md:text-base hidden sm:block">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 sm:py-20 md:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Card className="border-0 shadow-xl rounded-2xl sm:rounded-3xl overflow-hidden">
                <CardContent className="p-5 sm:p-8 md:p-10">
                  <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                      <Users className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-heading text-xl sm:text-2xl font-bold">Formulaire d'inscription</h2>
                      <p className="text-muted-foreground text-sm sm:text-base">Devenez membre de notre équipe</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm sm:text-base">
                        Nom complet *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Votre nom"
                        className="h-11 sm:h-12 rounded-xl text-base"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm sm:text-base">
                          Courriel *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="votre@email.com"
                          className="h-11 sm:h-12 rounded-xl text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm sm:text-base">
                          Téléphone
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(438) 123-4567"
                          className="h-11 sm:h-12 rounded-xl text-base"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="availability" className="text-sm sm:text-base">
                        Disponibilités *
                      </Label>
                      <Textarea
                        id="availability"
                        name="availability"
                        required
                        placeholder="Ex: Samedi matin, Mercredi après-midi..."
                        className="min-h-[100px] rounded-xl resize-none text-base"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label className="text-sm sm:text-base">Domaines d'intérêt</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {interests.map((interest) => (
                          <div key={interest} className="flex items-center space-x-2">
                            <Checkbox
                              id={interest}
                              checked={selectedInterests.includes(interest)}
                              onCheckedChange={() => handleInterestChange(interest)}
                            />
                            <label
                              htmlFor={interest}
                              className="text-xs sm:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                            >
                              {interest}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 sm:h-14 text-base sm:text-lg bg-primary hover:bg-primary-dark rounded-full"
                    >
                      {isSubmitting ? "Envoi en cours..." : "Soumettre ma candidature"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
