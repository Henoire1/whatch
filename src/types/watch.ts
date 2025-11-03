export interface Watch {
  id: number
  name: string
  collection: string
  category: 'Homme' | 'Femme' | 'Sport' | 'Classique' | 'Haute Joaillerie' | 'Nautique' | 'Complications' | 'Modern' | 'Voyage' | 'Cosmos'
  brand: string
  price: number
  image: string
  isNew?: boolean
  isPromo?: boolean
}
