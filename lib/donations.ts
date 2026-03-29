export interface DonationOption {
  id: string
  amount: number
  label: string
}

export interface DonationCategory {
  id: string
  name: string
  description: string
}

export const DONATION_AMOUNTS: DonationOption[] = [
  { id: "don-10", amount: 1000, label: "10 $" },
  { id: "don-25", amount: 2500, label: "25 $" },
  { id: "don-50", amount: 5000, label: "50 $" },
  { id: "don-100", amount: 10000, label: "100 $" },
]

export const DONATION_CATEGORIES: DonationCategory[] = [
  {
    id: "alimentaire",
    name: "Aide Alimentaire",
    description: "Soutenir les familles dans le besoin avec des denrées alimentaires essentielles",
  },
  {
    id: "nouveaux-arrivants",
    name: "Nouveaux Arrivants",
    description: "Aider les immigrants et réfugiés dans leur intégration",
  },
  {
    id: "programmes-jeunesse",
    name: "Programmes Jeunesse",
    description: "Financer des activités éducatives et sportives pour les jeunes",
  },
  {
    id: "aines-vulnerables",
    name: "Aînés et Personnes Vulnérables",
    description: "Accompagner et soutenir les aînés et personnes vulnérables de notre communauté",
  },
  {
    id: "multiculturalisme",
    name: "Promotion du Multiculturalisme",
    description: "Promouvoir la diversité culturelle et l'inclusion dans notre société",
  },
  {
    id: "changements-climatiques",
    name: "Lutte Changements Climatiques",
    description: "Soutenir nos initiatives environnementales et la lutte contre les GES",
  },
  {
    id: "soutien-general",
    name: "Soutien Général",
    description: "Contribuer aux opérations quotidiennes et projets spéciaux de l'organisation",
  },
]
