"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Heart, Users, Handshake, Globe, Leaf, Home, Mail, Phone, MapPin, ArrowRight, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"

const missionAxes = [
  {
    icon: Home,
    title: "Lutte contre la pauvreté",
    description: "Dépannage alimentaire et aide aux familles dans le besoin.",
  },
  {
    icon: Heart,
    title: "Inclusion sociale",
    description: "Favoriser l'intégration et la cohésion sociale pour tous.",
  },
  {
    icon: Users,
    title: "Intégration des immigrants",
    description: "Aide à l'emploi, au logement et orientation des nouveaux arrivants.",
  },
  {
    icon: Globe,
    title: "Promotion du multiculturalisme",
    description: "Célébrer la diversité et lutter contre le racisme et la discrimination.",
  },
  {
    icon: Leaf,
    title: "Lutte contre les changements climatiques",
    description: "Actions pour un développement durable et la protection de l'environnement.",
  },
]

const engagementBlocks = [
  {
    icon: Handshake,
    title: "Engagement",
    description:
      "Renforcer le développement et l'engagement communautaire pour favoriser une société intégrée et cohésive, par des actions interculturelles, entraide et services aux immigrants et réfugiés.",
  },
  {
    icon: Heart,
    title: "Aide",
    description:
      "Donner le dépannage alimentaire, aide à la recherche de l'emploi, de logement. Information, orientation aux immigrants et réfugiés.",
  },
  {
    icon: Globe,
    title: "Diversité",
    description:
      "Promouvoir la diversité et le multiculturalisme. Lutter contre le racisme et la discrimination. Des conférences, ateliers pour la promotion de la diversité et du multiculturalisme.",
  },
  {
    icon: Users,
    title: "Soutien Communautaire",
    description:
      "Accompagnement personnalisé et programmes de soutien pour les membres de la communauté dans leurs démarches d'intégration et d'épanouissement.",
  },
]

const projects = [
  {
    title: "Banque alimentaire",
    description: "Distribution de denrées alimentaires aux familles dans le besoin chaque semaine.",
    image: "/african-family-food-bank-distribution.jpg",
  },
  {
    title: "Aide aux nouveaux arrivants",
    description: "Accompagnement des immigrants dans leurs démarches d'intégration et de recherche d'emploi.",
    image: "/arab-african-immigrants-welcome-integration.jpg",
  },
  {
    title: "Programmes jeunesse",
    description: "Activités éducatives et sportives pour les jeunes de la communauté.",
    image: "/african-arab-youth-education-program.jpg",
  },
]

const teamMembers = [
  {
    name: "Hakima Bouasria",
    role: "Présidente",
    image: "/images/hakima-bouasria.png",
  },
  {
    name: "Gabriel Ngarlem",
    role: "Directeur Général",
    image: "/images/gabriel-ngarlem.png",
  },
  {
    name: "Soti Mbalnoudji",
    role: "Trésorière",
    image: null,
  },
]

const partners = [
  { name: "IGA Marché Carl Zimmermann Mullins", logo: "/images/partners/iga.png" },
  { name: "Assemblée Nationale du Québec", logo: "/images/partners/assemblee-nationale.png" },
  { name: "Brasseur de Montréal", logo: "/images/partners/brasseur-montreal.png" },
  { name: "YMCA", logo: "/images/partners/ymca.png" },
  { name: "Groupe 373", logo: "/images/partners/groupe-373.png" },
]

export default function HomePage() {
  return (
    <div className="pt-20 sm:pt-16 md:pt-20">
      <section className="relative min-h-[85vh] sm:min-h-[90vh] md:min-h-screen flex items-center bg-gradient-to-br from-primary/5 via-white to-accent/10 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-0 w-48 md:w-80 h-48 md:h-80 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-6 sm:pt-0">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                Organisation communautaire à but non lucratif
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
                <span className="text-primary">CADD</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-foreground font-medium mb-4 sm:mb-6">
                Canada-Afrique pour le Développement Durable
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-xl">
                Créé en juin 2020, CADD est un organisme communautaire à but non lucratif qui met l'épanouissement des
                communautés multiculturelles au cœur de ses actions. Notre raison d'être est de favoriser une société
                intégrée et cohésive.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-white rounded-full px-6 sm:px-8 h-12 sm:h-14 text-base sm:text-lg shadow-lg shadow-primary/30 w-full sm:w-auto"
                >
                  <Link href="/faire-un-don">
                    <Heart className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Faire un don
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-foreground/20 text-foreground hover:bg-foreground/5 rounded-full px-6 sm:px-8 h-12 sm:h-14 text-base sm:text-lg w-full sm:w-auto bg-transparent"
                >
                  <Link href="/benevolat">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Devenir bénévole
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative aspect-[4/3] lg:aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/diverse-african-arab-community-volunteers-helping-.jpg"
                  alt="Communauté multiculturelle CADD"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              {/* Floating card */}
              <div className="hidden sm:block absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm sm:text-base">Depuis 2020</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Au service de la communauté</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Notre mission"
            title="Nos axes d'intervention"
            description="CADD agit sur plusieurs fronts pour soutenir les communautés multiculturelles."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {missionAxes.map((axis, index) => (
              <motion.div
                key={axis.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl sm:rounded-2xl group hover:-translate-y-1">
                  <CardContent className="p-4 sm:p-5 md:p-6 text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary transition-colors">
                      <axis.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-heading font-semibold text-xs sm:text-sm md:text-base mb-1 sm:mb-2">
                      {axis.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm hidden md:block">{axis.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 sm:py-20 md:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden">
                <Image
                  src="/african-community-center-volunteers-helping-immigr.jpg"
                  alt="À propos de CADD"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="hidden sm:block absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-accent rounded-2xl sm:rounded-3xl -z-10" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                À propos
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-balance">
                Une organisation au service des <span className="text-primary">communautés</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                Créé en juin 2020, Canada-Afrique pour le Développement Durable (CADD) est un organisme communautaire à
                but non lucratif qui met l'épanouissement des communautés multiculturelles au cœur de ses actions.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                Une des raisons d'être de CADD est de favoriser une société intégrée et cohésive, par des actions
                interculturelles, d'entraide et les services aux immigrants et réfugiés.
              </p>
              <Button
                asChild
                className="bg-primary hover:bg-primary-dark rounded-full px-6 sm:px-8 h-11 sm:h-12 w-full sm:w-auto"
              >
                <Link href="/a-propos">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engagement Blocks */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Notre engagement"
            title="Comment nous aidons"
            description="Découvrez nos différentes formes d'engagement envers la communauté."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {engagementBlocks.map((block, index) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl sm:rounded-2xl group">
                  <CardContent className="p-5 sm:p-6 md:p-8">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary transition-colors">
                      <block.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold mb-2 sm:mb-3">{block.title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{block.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Nos projets"
            title="Projets de sensibilisation"
            description="Découvrez nos initiatives pour soutenir et renforcer notre communauté."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl sm:rounded-2xl overflow-hidden group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <p className="text-muted-foreground text-sm sm:text-base">{project.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Notre équipe"
            title="L'équipe dirigeante"
            description="Des personnes dévouées au service de notre communauté."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-4 sm:mb-6">
                  {member.image ? (
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover border-4 border-primary/20"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center border-4 border-primary/20">
                      <User className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-primary/40" />
                    </div>
                  )}
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary text-sm sm:text-base font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Nos partenaires"
            title="Ils nous font confiance"
            description="Merci à nos partenaires pour leur soutien continu."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow aspect-[3/2]"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-h-12 sm:max-h-14 md:max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">
                Contactez-nous
              </h2>
              <p className="text-white/80 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto">
                Vous avez des questions ou souhaitez vous impliquer? N'hésitez pas à nous contacter.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
                <a
                  href="https://maps.google.com/?q=225+Frank+Selke+Montreal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <MapPin className="h-6 w-6 sm:h-8 sm:w-8 mb-2 sm:mb-3" />
                  <span className="font-medium text-sm sm:text-base">3-225 Frank Selke</span>
                  <span className="text-white/70 text-xs sm:text-sm">Montréal, QC H3K 3J6</span>
                </a>
                <a
                  href="tel:+14389363697"
                  className="flex flex-col items-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Phone className="h-6 w-6 sm:h-8 sm:w-8 mb-2 sm:mb-3" />
                  <span className="font-medium text-sm sm:text-base">+1 (438) 936-3697</span>
                  <span className="text-white/70 text-xs sm:text-sm">Appelez-nous</span>
                </a>
                <a
                  href="mailto:cadeveloppementdurable@gmail.com"
                  className="flex flex-col items-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Mail className="h-6 w-6 sm:h-8 sm:w-8 mb-2 sm:mb-3" />
                  <span className="font-medium text-sm sm:text-base break-all">cadeveloppementdurable@gmail.com</span>
                  <span className="text-white/70 text-xs sm:text-sm">Écrivez-nous</span>
                </a>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 rounded-full px-6 sm:px-8 h-12 sm:h-14 text-base sm:text-lg w-full sm:w-auto"
              >
                <Link href="/contact">
                  Nous contacter
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
