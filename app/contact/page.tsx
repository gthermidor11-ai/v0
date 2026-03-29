"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, CheckCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { createClient } from "@/lib/supabase/client"

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content: "3-225 Frank Selke\nMontréal, QC H3K 3J6",
    href: "https://maps.google.com/?q=225+Frank+Selke+Montreal",
  },
  {
    icon: Phone,
    title: "Téléphone",
    content: "+1 (438) 936-3697",
    href: "tel:+14389363697",
  },
  {
    icon: Mail,
    title: "Courriel",
    content: "cadeveloppementdurable@gmail.com",
    href: "mailto:cadeveloppementdurable@gmail.com",
  },
  {
    icon: Clock,
    title: "Heures d'ouverture",
    content: "Lundi - Vendredi\n9h00 - 17h00",
    href: null,
  },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }

    try {
      const supabase = createClient()
      const { error: dbError } = await supabase.from("contact_messages").insert([data])

      if (dbError) throw dbError

      // Send email notification
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          ...data,
        }),
      })

      setIsSuccess(true)
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="py-16 sm:py-20 md:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-1.5 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              Contactez-nous
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance">
              Parlons <span className="text-primary">ensemble</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Vous avez des questions ou souhaitez vous impliquer? N'hésitez pas à nous contacter, nous serons ravis de
              vous répondre.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Nos coordonnées</h2>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
                {contactInfo.map((item) => (
                  <Card
                    key={item.title}
                    className="border-0 shadow-lg rounded-xl sm:rounded-2xl hover:shadow-xl transition-shadow"
                  >
                    <CardContent className="p-4 sm:p-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                        <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <h3 className="font-heading font-semibold text-sm sm:text-base mb-1 sm:mb-2">{item.title}</h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line text-xs sm:text-sm break-all"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground whitespace-pre-line text-xs sm:text-sm">{item.content}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map */}
              <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.6066!2d-73.5647!3d45.4847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI5JzA0LjkiTiA3M8KwMzMnNTMuMCJX!5e0!3m2!1sfr!2sca!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte CADD"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="border-0 shadow-xl rounded-2xl sm:rounded-3xl overflow-hidden lg:sticky lg:top-24">
                <CardContent className="p-5 sm:p-8 md:p-10">
                  {isSuccess ? (
                    <div className="text-center py-8 sm:py-12">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                        <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                      </div>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Message envoyé!</h3>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                          <Send className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                        </div>
                        <div>
                          <h2 className="font-heading text-xl sm:text-2xl font-bold">Envoyez-nous un message</h2>
                          <p className="text-muted-foreground text-sm sm:text-base">Nous vous répondrons rapidement</p>
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
                          <Label htmlFor="message" className="text-sm sm:text-base">
                            Message *
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            required
                            placeholder="Comment pouvons-nous vous aider?"
                            className="min-h-[120px] sm:min-h-[150px] rounded-xl resize-none text-base"
                          />
                        </div>

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full h-12 sm:h-14 text-base sm:text-lg bg-primary hover:bg-primary-dark rounded-full"
                        >
                          {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                        </Button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
