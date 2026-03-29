"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, ExternalLink, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"

const events = [
  {
    id: 1,
    title: "Mois de l'Histoire des Noirs – Sud-Ouest",
    date: "20 février 2026 @ 12:30 – 17:00",
    location: "Bibliothèque Réjean Ducharme, 2450 rue Workman, Montréal",
    description:
      "Guidés par nos valeurs de diversité, d'inclusivité, de respect et d'intégrité, nous soutenons des actions concrètes qui mettent en lumière les talents, rapprochent les communautés ethnoculturelles et renforcent le tissu social. Le Mois de l'Histoire des Noirs est l'occasion de célébrer les communautés, de reconnaître leur apport essentiel à notre société et de poursuivre, ensemble, la construction. Trois panélistes exceptionnels: un agent de la diaspora, des représentants policiers et une auteure.",
    image: "/images/black-history-month.jpg",
    category: "Culturel",
  },
  {
    id: 2,
    title: "Fête Nationale du Québec",
    date: "24 juin 2026",
    location: "À annoncer",
    description:
      "Célébrons ensemble la Fête nationale du Québec dans un esprit de diversité et d'inclusion. Activités communautaires et festivités multiculturelles.",
    image: "/images/fete-nationale.jpg",
    category: "Culturel",
  },
  {
    id: 3,
    title: "Fête du Multiculturalisme",
    date: "27 juin 2026",
    location: "À annoncer",
    description:
      "Une célébration de la diversité culturelle canadienne. Venez découvrir les traditions, cuisines et arts des différentes communautés qui enrichissent notre société.",
    image: "/images/multiculturalism-celebration.jpg",
    category: "Culturel",
  },
  {
    id: 4,
    title: "Fête du Canada",
    date: "1er juillet 2026",
    location: "À annoncer",
    description:
      "Célébrons la diversité canadienne et l'unité dans la différence. Rejoignez-nous pour des activités familiales et communautaires.",
    image: "/images/canada-day-celebration.jpg",
    category: "Culturel",
  },
  {
    id: 5,
    title: "Festival Black & White",
    date: "29 Août 2026",
    location: "Parc Le Ber, 202 rue Ash, Montréal",
    description:
      "Un festival célébrant l'unité et la diversité culturelle. Rejoignez-nous pour une journée mémorable de musique, culture et rencontres communautaires!",
    image: "/images/festival-bw-logo.png",
    category: "Festival",
    website: "https://festivalbw.com",
  },
]

const categoryColors: Record<string, string> = {
  "Aide alimentaire": "bg-primary/10 text-primary",
  Formation: "bg-blue-100 text-blue-700",
  Culturel: "bg-accent/20 text-accent-dark",
  Jeunesse: "bg-green-100 text-green-700",
  Conférence: "bg-purple-100 text-purple-700",
  "Collecte de fonds": "bg-rose-100 text-rose-700",
  Festival: "bg-gradient-to-r from-gray-900 to-gray-100 text-white",
}

export default function EventsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Calendrier
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Nos <span className="text-primary">événements</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Découvrez nos prochains événements et activités communautaires. Rejoignez-nous pour faire partie du
              changement!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="À venir"
            title="Prochains événements 2026"
            description="Restez à l'affût de nos prochaines activités communautaires."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="relative aspect-[3/2] overflow-hidden bg-white flex items-center justify-center p-8">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={300}
                      height={200}
                      className="object-contain"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[event.category]}`}>
                        {event.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-accent text-black">À venir</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="font-semibold text-foreground">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    {event.website && (
                      <Button asChild variant="outline" className="w-full rounded-full bg-transparent">
                        <a href={event.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Visiter festivalbw.com
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">Soutenez nos événements</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Votre soutien nous permet d'organiser des événements communautaires qui font la différence dans la vie de
              nombreuses familles.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full">
                <Link href="/faire-un-don">
                  <Heart className="mr-2 h-5 w-5" />
                  Faire un don
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-full bg-transparent"
              >
                <Link href="/benevolat">Devenir bénévole</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
