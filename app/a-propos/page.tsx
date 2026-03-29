"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Heart, Users, Globe, Target, Eye, ArrowRight, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"

const values = [
  {
    icon: Heart,
    title: "Solidarité",
    description: "Nous croyons en la force de l'entraide et du soutien mutuel pour surmonter les défis.",
  },
  {
    icon: Users,
    title: "Inclusion",
    description: "Chaque personne mérite d'être accueillie avec dignité, respect et ouverture.",
  },
  {
    icon: Globe,
    title: "Diversité",
    description: "La richesse culturelle est une force qui enrichit notre communauté et notre société.",
  },
  {
    icon: Leaf,
    title: "Durabilité",
    description: "Nous agissons pour un avenir durable et la protection de l'environnement.",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-muted overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                À propos de nous
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                <span className="text-primary">CADD</span> - Canada-Afrique pour le Développement Durable
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
                Créé en juin 2020, Canada-Afrique pour le Développement Durable (CADD) est un organisme communautaire à
                but non lucratif qui depuis sa création a mis l'épanouissement des communautés multiculturelles au cœur
                de ses actions.
              </p>
              <Button asChild className="bg-primary hover:bg-primary-dark rounded-full">
                <Link href="/benevolat">
                  Rejoignez notre équipe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden">
                <Image
                  src="/diverse-community-volunteers-working-together-mult.jpg"
                  alt="Équipe CADD"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Card className="h-full border-0 shadow-xl rounded-3xl overflow-hidden">
                <CardContent className="p-8 md:p-10">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Notre Mission</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Favoriser une société intégrée et cohésive, par des actions interculturelles, d'entraide et les
                    services aux immigrants et réfugiés. Nous offrons le dépannage alimentaire, l'aide à la recherche
                    d'emploi et de logement, ainsi que l'information et l'orientation aux nouveaux arrivants.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full border-0 shadow-xl rounded-3xl overflow-hidden bg-primary text-white">
                <CardContent className="p-8 md:p-10">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Notre Vision</h2>
                  <p className="text-white/90 leading-relaxed text-lg">
                    Promouvoir la diversité et le multiculturalisme. Lutter contre le racisme et la discrimination à
                    travers des conférences, ateliers et actions de sensibilisation. Contribuer à la lutte contre le
                    changement climatique pour un développement véritablement durable.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Nos Valeurs"
            title="Ce qui nous guide"
            description="Nos valeurs fondamentales orientent chacune de nos actions et décisions."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Multicultural Support */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src="/african-family-new-immigrants-canada-happy.jpg"
                      alt="Famille africaine"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <Image
                      src="/community-event-multicultural-celebration.jpg"
                      alt="Événement communautaire"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <Image
                      src="/refugee-support-helping-hands.jpg"
                      alt="Support aux réfugiés"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src="/youth-program-african-children-learning.jpg"
                      alt="Programme jeunesse"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent-dark rounded-full text-sm font-medium mb-4">
                Multiculturalisme
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-balance">
                Soutien aux immigrants et réfugiés
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Nous comprenons les défis uniques auxquels font face les immigrants et réfugiés africains lors de leur
                arrivée au Canada. Notre approche personnalisée prend en compte les besoins spécifiques de chaque
                individu et famille.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Accompagnement dans les démarches administratives",
                  "Cours de français et d'anglais",
                  "Aide à la recherche d'emploi et de logement",
                  "Soutien psychosocial et intégration communautaire",
                  "Programmes culturels et événements de réseautage",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-primary hover:bg-primary-dark rounded-full">
                <Link href="/contact">
                  Contactez-nous
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à faire partie du changement?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Rejoignez notre communauté de bénévoles ou soutenez notre mission par un don.
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
