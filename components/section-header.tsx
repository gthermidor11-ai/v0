"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  centered?: boolean
  light?: boolean
}

export function SectionHeader({ badge, title, description, centered = true, light = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-8 sm:mb-10 md:mb-12`}
    >
      {badge && (
        <span
          className={`inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 ${
            light ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-balance ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-sm sm:text-base md:text-lg leading-relaxed text-pretty ${light ? "text-white/80" : "text-muted-foreground"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
