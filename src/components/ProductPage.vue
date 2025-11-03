<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { useCartStore } from '../stores/cart';
import { formatPrice } from '../utils/formatters';
import { Watch } from '../types/watch';
import WatchCard from './shared/WatchCard.vue';
// import ConfirmationModal from './shared/ConfirmationModal.vue'; // Removed as SweetAlert2 is used
import Swal from 'sweetalert2'; // Import SweetAlert2

interface ProductVariant {
  color?: string
  strapSize?: string
  priceAdjustment?: number
  image?: string
}

interface Product {
  id: number
  name: string
  description: string
  basePrice: number
  images: string[]
  variants?: {
    colors?: string[]
    strapSizes?: string[]
    options?: ProductVariant[]
  }
  technicalSpecs: { label: string; value: string }[]
  availability: 'En stock' | 'Précommande' | 'Épuisé'
  collection: string
  brand: string
  category: Watch['category'];
}

const props = defineProps<{
  id: string
}>()

const route = useRoute();
const router = useRouter();
const cartStore = useCartStore();

const allProducts: Product[] = [
  {
    id: 1,
    name: 'Casio Carrée Noire Or',
    description: 'Une montre Casio classique avec un cadran noir et un boîtier doré, offrant une élégance intemporelle et une fiabilité reconnue.',
    basePrice: 15000,
    images: [
      '/images/watches/montreC1.jpeg',
      '/images/watches/montreC1.jpeg',
      '/images/ Image 3.jpeg'
    ],
    technicalSpecs: [
      { label: 'Mouvement', value: 'Quartz Japonais' },
      { label: 'Boîtier', value: 'Acier inoxydable doré' },
      { label: 'Diamètre', value: '35 mm' },
      { label: 'Verre', value: 'Minéral' },
      { label: 'Étanchéité', value: '3 ATM' },
      { label: 'Bracelet', value: 'Acier inoxydable doré' }
    ],
    availability: 'En stock',
    collection: 'Classic Square',
    brand: 'Casio',
    category: 'Classique'
  },
  {
    id: 2,
    name: 'Casio Carrée Bleue Or Rose',
    description: 'Un design moderne avec un cadran bleu profond et un boîtier en or rose, parfait pour un style distinctif.',
    basePrice: 16000,
    images: [
      '/images/watches/montresC2.jpeg',
      '/images/watches/montresC2.jpeg',
      '/images/watches/montresC2.jpeg'
    ],
    technicalSpecs: [
      { label: 'Mouvement', value: 'Quartz Japonais' },
      { label: 'Boîtier', value: 'Acier inoxydable or rose' },
      { label: 'Diamètre', value: '35 mm' },
      { label: 'Verre', value: 'Minéral' },
      { label: 'Étanchéité', value: '3 ATM' },
      { label: 'Bracelet', value: 'Acier inoxydable or rose' }
    ],
    availability: 'En stock',
    collection: 'Classic Square',
    brand: 'Casio',
    category: 'Classique'
  },
  {
    id: 3,
    name: 'Casio Carrée Noire Or',
    description: 'Élégance et simplicité définissent cette montre Casio avec un cadran noir et des accents dorés.',
    basePrice: 15500,
    images: [
      '/images/watches/montresC3.jpeg',
      '/images/watches/montresC3.jpeg',
      '/images/watches/montresC3.jpeg'
    ],
    technicalSpecs: [
      { label: 'Mouvement', value: 'Quartz Japonais' },
      { label: 'Boîtier', value: 'Acier inoxydable doré' },
      { label: 'Diamètre', value: '35 mm' },
      { label: 'Verre', value: 'Minéral' },
      { label: 'Étanchéité', value: '3 ATM' },
      { label: 'Bracelet', value: 'Acier inoxydable doré' }
    ],
    availability: 'En stock',
    collection: 'Classic Square',
    brand: 'Casio',
    category: 'Classique'
  },
  {
    id: 4,
    name: 'Casio Carrée Dorée',
    description: 'Une montre entièrement dorée pour un look audacieux et luxueux, parfaite pour se démarquer.',
    basePrice: 17000,
    images: [
      '/images/watches/montresC4.jpeg',
      '/images/watches/montresC4.jpeg',
      '/images/watches/montresC4.jpeg'
    ],
    technicalSpecs: [
      { label: 'Mouvement', value: 'Quartz Japonais' },
      { label: 'Boîtier', value: 'Acier inoxydable doré' },
      { label: 'Diamètre', value: '35 mm' },
      { label: 'Verre', value: 'Minéral' },
      { label: 'Étanchéité', value: '3 ATM' },
      { label: 'Bracelet', value: 'Acier inoxydable doré' }
    ],
    availability: 'En stock',
    collection: 'Classic Square',
    brand: 'Casio',
    category: 'Classique'
  },
  {
    id: 5,
    name: 'Casio Carrée Noire',
    description: 'Minimaliste et chic, cette montre noire offre une touche de modernité à votre poignet.',
    basePrice: 14500,
    images: [
      '/images/watches/montresC5.jpeg',
      '/images/watches/montresC5.jpeg',
      '/images/watches/montresC5.jpeg'
    ],
    technicalSpecs: [
      { label: 'Mouvement', value: 'Quartz Japonais' },
      { label: 'Boîtier', value: 'Acier inoxydable noir' },
      { label: 'Diamètre', value: '35 mm' },
      { label: 'Verre', value: 'Minéral' },
      { label: 'Étanchéité', value: '3 ATM' },
      { label: 'Bracelet', value: 'Acier inoxydable noir' }
    ],
    availability: 'En stock',
    collection: 'Classic Square',
    brand: 'Casio',
    category: 'Classique'
  },
  {
    id: 6,
    name: 'Casio Carrée Bleue Or',
    description: 'Un mélange harmonieux de bleu et d\'or pour une montre qui allie sophistication et style.',
    basePrice: 16500,
    images: [
      '/images/watches/montresC6.jpeg',
      '/images/watches/montresC6.jpeg',
      '/images/watches/montresC6.jpeg'
    ],
    technicalSpecs: [
      { label: 'Mouvement', value: 'Quartz Japonais' },
      { label: 'Boîtier', value: 'Acier inoxydable doré' },
      { label: 'Diamètre', value: '35 mm' },
      { label: 'Verre', value: 'Minéral' },
      { label: 'Étanchéité', value: '3 ATM' },
      { label: 'Bracelet', value: 'Acier inoxydable doré' }
    ],
    availability: 'En stock',
    collection: 'Classic Square',
    brand: 'Casio',
    category: 'Classique'
  },
  {
    id: 7,
    name: 'Casio Carrée Argentée',
    description: 'Classique et polyvalente, cette montre argentée est un accessoire essentiel pour toute garde-robe.',
    basePrice: 13000,
    images: [
      '/images/watches/montresC7.jpeg',
      '/images/watches/montresC7.jpeg',
      '/images/watches/montresC7.jpeg'
    ],
    technicalSpecs: [
      { label: 'Mouvement', value: 'Quartz Japonais' },
      { label: 'Boîtier', value: 'Acier inoxydable argenté' },
      { label: 'Diamètre', value: '35 mm' },
      { label: 'Verre', value: 'Minéral' },
      { label: 'Étanchéité', value: '3 ATM' },
      { label: 'Bracelet', value: 'Acier inoxydable argenté' }
    ],
    availability: 'En stock',
    collection: 'Classic Square',
    brand: 'Casio',
    category: 'Classique'
  },
  {
    id: 8,
    name: 'Casio Carrée Bleue Argentée',
    description: 'Un cadran bleu vibrant dans un boîtier argenté, offrant un style frais et moderne.',
    basePrice: 13500,
    images: [
      '/images/watches/montresC8.jpeg',
      '/images/watches/montresC8.jpeg',
      '/images/watches/montresC8.jpeg'
    ],
    technicalSpecs: [
      { label: 'Mouvement', value: 'Quartz Japonais' },
      { label: 'Boîtier', value: 'Acier inoxydable argenté' },
      { label: 'Diamètre', value: '35 mm' },
      { label: 'Verre', value: 'Minéral' },
      { label: 'Étanchéité', value: '3 ATM' },
      { label: 'Bracelet', value: 'Acier inoxydable argenté' }
    ],
    availability: 'En stock',
    collection: 'Classic Square',
    brand: 'Casio',
    category: 'Classique'
  },
  {
    id: 9,
    name: 'Casio Ronde Grise',
    description: 'Une montre ronde classique avec un cadran gris élégant, parfaite pour un usage quotidien.',
    basePrice: 12000,
    images: [
      '/images/watches/montres1.jpeg',
      '/images/watches/montres1.jpeg',
      '/images/watches/montres1.jpeg'
    ],
    technicalSpecs: [
      { label: 'Mouvement', value: 'Quartz Japonais' },
      { label: 'Boîtier', value: 'Acier inoxydable argenté' },
      { label: 'Diamètre', value: '38 mm' },
      { label: 'Verre', value: 'Minéral' },
      { label: 'Étanchéité', value: '5 ATM' },
      { label: 'Bracelet', value: 'Acier inoxydable argenté' }
    ],
    availability: 'En stock',
    collection: 'Classic Round',
    brand: 'Casio',
    category: 'Classique'
  },
  {
    id: 10,
    name: 'Casio Ronde Verte',
    description: 'Ajoutez une touche de couleur avec cette montre Casio ronde au cadran vert vif.',
    basePrice: 12500,
    images: [
      '/images/watches/montres2.jpeg',
      '/images/watches/montres2.jpeg',
      '/images/watches/montres2.jpeg'
    ],
    technicalSpecs: [
      { label: 'Mouvement', value: 'Quartz Japonais' },
      { label: 'Boîtier', value: 'Acier inoxydable argenté' },
      { label: 'Diamètre', value: '38 mm' },
      { label: 'Verre', value: 'Minéral' },
      { label: 'Étanchéité', value: '5 ATM' },
      { label: 'Bracelet', value: 'Acier inoxydable argenté' }
    ],
    availability: 'En stock',
    collection: 'Classic Round',
    brand: 'Casio',
    category: 'Classique'
  },
  {
    id: 11,
    name: 'Casio Ronde Bleu Clair',
    description: 'Un cadran bleu clair apaisant pour cette montre ronde, idéale pour un style décontracté et élégant.',
    basePrice: 12200,
    images: [
      '/images/watches/montres3.jpeg',
      '/images/watches/montres3.jpeg',
      '/images/watches/montres3.jpeg'
    ],
    technicalSpecs: [
      { label: 'Mouvement', value: 'Quartz Japonais' },
      { label: 'Boîtier', value: 'Acier inoxydable argenté' },
      { label: 'Diamètre', value: '38 mm' },
      { label: 'Verre', value: 'Minéral' },
      { label: 'Étanchéité', value: '5 ATM' },
      { label: 'Bracelet', value: 'Acier inoxydable argenté' }
    ],
    availability: 'En stock',
    collection: 'Classic Round',
    brand: 'Casio',
    category: 'Classique'
  },
  {
    id: 12,
    name: 'Casio Ronde Bleue',
    description: 'La montre ronde classique avec un cadran bleu intemporel, un choix sûr pour toute occasion.',
    basePrice: 12800,
    images: [
      '/images/watches/montres4.jpeg',
      '/images/watches/montres4.jpeg',
      '/images/watches/montres4.jpeg'
    ],
    technicalSpecs: [
      { label: 'Mouvement', value: 'Quartz Japonais' },
      { label: 'Boîtier', value: 'Acier inoxydable argenté' },
      { label: 'Diamètre', value: '38 mm' },
      { label: 'Verre', value: 'Minéral' },
      { label: 'Étanchéité', value: '5 ATM' },
      { label: 'Bracelet', value: 'Acier inoxydable argenté' }
    ],
    availability: 'En stock',
    collection: 'Classic Round',
    brand: 'Casio',
    category: 'Classique'
  }
]

const product = computed(() => allProducts.find(p => p.id === parseInt(props.id)))

const selectedMainImage = ref('')
const selectedColor = ref<string | undefined>(undefined)
const selectedStrapSize = ref<string | undefined>(undefined)

// Initialize selected variants and main image when product changes
watch(product, (newProduct) => {
  if (newProduct) {
    selectedMainImage.value = newProduct.images[0]
    if (newProduct.variants?.colors && newProduct.variants.colors.length > 0) {
      selectedColor.value = newProduct.variants.colors[0]
    } else {
      selectedColor.value = undefined
    }
    if (newProduct.variants?.strapSizes && newProduct.variants.strapSizes.length > 0) {
      selectedStrapSize.value = newProduct.variants.strapSizes[0]
    } else {
      selectedStrapSize.value = undefined
    }
  }
}, { immediate: true })

const selectThumbnail = (image: string) => {
  selectedMainImage.value = image
}

const currentPriceAdjustment = computed(() => {
  if (!product.value || !product.value.variants?.options) return 0;
  const selectedOption = product.value.variants.options.find(option =>
    (option.color === selectedColor.value || !option.color) &&
    (option.strapSize === selectedStrapSize.value || !option.strapSize)
  );
  return selectedOption?.priceAdjustment || 0;
});

const displayedPrice = computed(() => {
  if (!product.value) return '${price}'
  const price = product.value.basePrice + currentPriceAdjustment.value;
  return formatPrice(price)
})

// const similarProducts = computed(() => {
//   if (!product.value) return [];

//   const currentProductId = product.value.id;
//   const currentProductCollection = product.value.collection;
//   const currentProductCategory = product.value.category;
//   const currentProductBrand = product.value.brand;

//   let candidates: Product[] = [];

//   // 1. Find products in the same collection (excluding current product)
//   const sameCollection = allProducts.filter(
//     p => p.id !== currentProductId && p.collection === currentProductCollection
//   );
//   candidates.push(...sameCollection);

//   // 2. If not enough, find products in the same category but different collection
//   if (candidates.length < 3) {
//     const sameCategory = allProducts.filter(
//       p => p.id !== currentProductId &&
//            p.category === currentProductCategory &&
//            p.collection !== currentProductCollection &&
//            !candidates.some(existing => existing.id === p.id) // Avoid duplicates
//     );
//     candidates.push(...sameCategory);
//   }

//   // 3. If still not enough, find other products from the same brand (but different category/collection)
//   if (candidates.length < 3) {
//     const sameBrand = allProducts.filter(
//       p => p.id !== currentProductId &&
//            p.brand === currentProductBrand &&
//            !candidates.some(existing => existing.id === p.id) // Avoid duplicates
//     );
//     candidates.push(...sameBrand);
//   }

//   // Ensure uniqueness and limit to 3
//   const uniqueCandidates = Array.from(new Set(candidates.map(p => p.id)))
//     .map(id => candidates.find(p => p.id === id)!);

//   return uniqueCandidates.slice(0, 3);
// });

const goBack = () => {
  router.back();
}

const handleViewDetailsClick = (productId: number) => {
  router.push({ name: 'ProductDetail', params: { id: productId.toString() } });
}

const addToCart = () => {
  if (product.value) {
    const itemToAdd = {
      id: product.value.id,
      name: product.value.name,
      image: selectedMainImage.value,
      basePrice: product.value.basePrice,
      selectedColor: selectedColor.value,
      selectedStrapSize: selectedStrapSize.value,
      priceAdjustment: currentPriceAdjustment.value,
    };

    Swal.fire({
      title: 'Ajouter au panier ?',
      text: `Voulez-vous ajouter "${itemToAdd.name}" au panier ?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#c9a962',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, ajouter !',
      cancelButtonText: 'Non, annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        cartStore.addItem(itemToAdd);
        Swal.fire(
          'Ajouté !',
          `"${itemToAdd.name}" a été ajouté à votre panier.`,
          'success'
        );
      }
    });
  }
};
</script>

<template>
  <div v-if="product" class="product-page">
    <div class="container">
      <button @click="goBack" class="back-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        Retour au catalogue
      </button>

      <div class="product-details-grid">
        <div class="image-gallery">
          <div class="main-image">
            <img :src="selectedMainImage" :alt="product.name" />
          </div>
          <div class="thumbnails">
            <img
              v-for="(image, index) in product.images"
              :key="index"
              :src="image"
              :alt="`Thumbnail ${index + 1}`"
              :class="{ 'active': image === selectedMainImage }"
              @click="selectThumbnail(image)"
            />
          </div>
        </div>

        <div class="product-info">
          <h1 class="product-title">{{ product.name }}</h1>
          <p class="product-collection">{{ product.collection }} - {{ product.brand }}</p>
          <p class="product-price">{{ displayedPrice }}</p>
          <p class="product-availability" :class="{ 'in-stock': product.availability === 'En stock', 'pre-order': product.availability === 'Précommande', 'out-of-stock': product.availability === 'Épuisé' }">
            {{ product.availability }}
          </p>

          <p class="product-description">{{ product.description }}</p>

          <div v-if="product.variants" class="product-variants">
            <div v-if="product.variants.colors && product.variants.colors.length > 0" class="variant-group">
              <label for="color-select">Couleur:</label>
              <select id="color-select" v-model="selectedColor" class="variant-select">
                <option v-for="color in product.variants.colors" :key="color" :value="color">{{ color }}</option>
              </select>
            </div>
            <div v-if="product.variants.strapSizes && product.variants.strapSizes.length > 0" class="variant-group">
              <label for="strap-size-select">Taille du bracelet:</label>
              <select id="strap-size-select" v-model="selectedStrapSize" class="variant-select">
                <option v-for="size in product.variants.strapSizes" :key="size" :value="size">{{ size }}</option>
              </select>
            </div>
          </div>

          <button @click="addToCart" class="add-to-cart-button bg-blue-600" :disabled="product.availability === 'Épuisé'">
            Ajouter au panier
          </button>
        </div>
      </div>

      <div class="technical-specs">
        <h3 class="specs-title">Caractéristiques techniques</h3>
        <ul class="specs-list">
          <li v-for="(spec, index) in product.technicalSpecs" :key="index">
            <strong>{{ spec.label }}:</strong> {{ spec.value }}
          </li>
        </ul>
      </div>

      <!-- <div v-if="similarProducts.length > 0" class="similar-products" >
        <h3 class="similar-title">Produits similaires</h3>
        <div class="similar-products-grid">
          <WatchCard
            v-for="simProduct in similarProducts"
            :key="simProduct.id"
            :watch="simProduct"
            @view-details="handleViewDetailsClick"
            class="similar-watch-card"
          />
        </div>
      </div> -->
    </div>
  </div>
  <div v-else class="product-not-found">
    <p>Produit non trouvé.</p>
    <button @click="goBack" class="back-button">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      Retour au catalogue
    </button>
  </div>
</template>

<style scoped>
.product-page {
  padding: 6rem 2rem;
  background: var(--color-background-alt);
  margin-top: 80px; /* Adjust for fixed header */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: var(--color-text-light);
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 2rem;
  transition: color 0.3s ease;
}

.back-button:hover {
  color: var(--color-primary);
}

.product-details-grid {
  display: grid;
  
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

.image-gallery {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.main-image {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  height: 500px;
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumbnails {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem; /* For scrollbar */
}

.thumbnails img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: border-color 0.3s ease, transform 0.2s ease;
}

.thumbnails img:hover {
  transform: translateY(-2px);
}

.thumbnails img.active {
  border-color: var(--color-accent);
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.product-title {
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.product-collection {
  font-size: 1rem;
  color: var(--color-accent);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
}

.product-price {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.product-availability {
  font-size: 1rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 1.5rem;
}

.product-availability.in-stock {
  background-color: #e6ffe6; /* Light green */
  color: #28a745; /* Darker green */
}

.product-availability.pre-order {
  background-color: #fff3e0; /* Light orange */
  color: #ff9800; /* Darker orange */
}

.product-availability.out-of-stock {
  background-color: #ffe6e6; /* Light red */
  color: #dc3545; /* Darker red */
}

.product-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text);
  margin-bottom: 2rem;
}

.product-variants {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.variant-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.variant-group label {
  font-weight: 600;
  color: var(--color-primary);
}

.variant-select {
  padding: 0.75rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  max-width: 250px;
}

.variant-select:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(201, 169, 98, 0.2);
}

.add-to-cart-button {
  
  color: white;
  border: none;
  padding: 1.2rem 3rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 4px;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: fit-content;
}

.add-to-cart-button:hover:not(:disabled) {
  background: #dc3545;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.add-to-cart-button:disabled {
  background: #cccccc;
  cursor: not-allowed;
}

.technical-specs {
  background: white;
  padding: 2.5rem;
  border-radius: 4px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  margin-bottom: 4rem;
}

.specs-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  text-align: center;
}

.specs-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem 2rem;
}

.specs-list li {
  font-size: 1rem;
  color: var(--color-text);
  line-height: 1.6;
}

.specs-list li strong {
  color: var(--color-primary);
}

.similar-products {
  margin-top: 4rem;
}

.similar-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 2.5rem;
  text-align: center;
}

.similar-products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

/* Override WatchCard image height for similar products */
.similar-products-grid .similar-watch-card .watch-image {
  height: 250px;
}

.product-not-found {
  text-align: center;
  padding: 10rem 2rem;
  margin-top: 80px;
  font-size: 1.5rem;
  color: var(--color-text-light);
}

@media (max-width: 968px) {
  .product-details-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .main-image {
    height: 400px;
  }
  .product-title {
    font-size: 2.2rem;
  }
  .product-price {
    font-size: 1.8rem;
  }
  .technical-specs {
    padding: 2rem;
  }
  .specs-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .product-page {
    padding: 4rem 1.5rem;
  }
  .main-image {
    height: 300px;
  }
  .thumbnails img {
    width: 80px;
    height: 80px;
  }
  .product-title {
    font-size: 1.8rem;
  }
  .product-price {
    font-size: 1.5rem;
  }
  .product-description {
    font-size: 1rem;
  }
  .add-to-cart-button {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
  .specs-title {
    font-size: 1.5rem;
  }
  .similar-title {
    font-size: 1.6rem;
  }
  .similar-products-grid {
    grid-template-columns: 1fr;
  }
  .similar-products-grid .similar-watch-card .watch-image {
    height: 200px;
  }
}
</style>
