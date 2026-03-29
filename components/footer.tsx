import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  navigation: [
    { href: "/", label: "Accueil" },
    { href: "/a-propos", label: "À propos" },
    { href: "/evenements", label: "Événements" },
  ],
  actions: [
    { href: "/faire-un-don", label: "Faire un don" },
    { href: "/benevolat", label: "Devenir bénévole" },
    { href: "/contact", label: "Nous contacter" },
  ],
  documents: [
    {
      href: "https://blobs.vusercontent.net/blob/PolitiqueCodeConduite1-bwBT6t9Abue9XOIvb32xyggOif6z79.pdf",
      label: "Politique Code de Conduite",
    },
    {
      href: "https://blobs.vusercontent.net/blob/Reglements_generaux.docx-CADD-Bon-qeLFqBcV83I0Nf45PxyUxBUUHeAEZm.pdf",
      label: "Règlements Généraux",
    },
    {
      href: "https://blobs.vusercontent.net/blob/PolitiqueLutteCorruption1-NpJ19U1INWCcd4uJ6Hqgbaz6jRTK0F.pdf",
      label: "Politique Lutte Corruption",
    },
    {
      href: "https://blobs.vusercontent.net/blob/PolitiquePreventionHarcelement1-zQjCb70HpghRZTrX1SJgmRYsPDzQFN.pdf",
      label: "Politique Prévention Harcèlement",
    },
  ],
}

const socialLinks = [
  { href: "https://facebook.com/CADD20", icon: Facebook, label: "Facebook" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 sm:mb-6">
              <Image
                src="/images/cadd-logo.png"
                alt="CADD - Canada-Afrique pour le Développement Durable"
                width={140}
                height={55}
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-semibold text-base sm:text-lg mb-4 sm:mb-6">Navigation</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div>
            <h3 className="font-heading font-semibold text-base sm:text-lg mb-4 sm:mb-6">S'impliquer</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.actions.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-base sm:text-lg mb-4 sm:mb-6">Contact</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  3-225 Frank Selke
                  <br />
                  Montréal, QC H3K 3J6
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+14389363697" className="text-white/70 hover:text-primary transition-colors text-sm">
                  +1 (438) 936-3697
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <a
                  href="mailto:cadeveloppementdurable@gmail.com"
                  className="text-white/70 hover:text-primary transition-colors text-sm break-all"
                >
                  cadeveloppementdurable@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col items-center gap-6">
            {/* Documents section */}
            <div className="w-full">
              <h4 className="font-heading font-semibold text-sm sm:text-base mb-3 sm:mb-4 text-center text-white">
                Documents officiels
              </h4>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                {footerLinks.documents.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-primary transition-colors text-xs sm:text-sm underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <p className="text-white/50 text-xs sm:text-sm text-center">
              © {new Date().getFullYear()} CADD. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
