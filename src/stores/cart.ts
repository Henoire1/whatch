import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface CartItem {
  productId: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  selectedColor?: string;
  selectedStrapSize?: string;
  uniqueId: string; // To differentiate items with same productId but different variants
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([]);
  const shippingCost = ref(2000); // Coût de livraison mis à jour à 2000

  const subtotal = computed(() => {
    return items.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
  });

  const total = computed(() => {
    return subtotal.value + shippingCost.value;
  });

  const itemCount = computed(() => {
    return items.value.reduce((count, item) => count + item.quantity, 0);
  });

  function addItem(product: {
    id: number;
    name: string;
    image: string;
    basePrice: number;
    selectedColor?: string;
    selectedStrapSize?: string;
    priceAdjustment?: number;
  }) {
    const uniqueId = `${product.id}-${product.selectedColor || 'no-color'}-${product.selectedStrapSize || 'no-size'}`;
    const existingItem = items.value.find(item => item.uniqueId === uniqueId);

    const itemPrice = product.basePrice + (product.priceAdjustment || 0);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      items.value.push({
        productId: product.id,
        name: product.name,
        image: product.image,
        price: itemPrice,
        quantity: 1,
        selectedColor: product.selectedColor,
        selectedStrapSize: product.selectedStrapSize,
        uniqueId: uniqueId,
      });
    }
  }

  function removeItem(uniqueId: string) {
    items.value = items.value.filter(item => item.uniqueId !== uniqueId);
  }

  function updateQuantity(uniqueId: string, quantity: number) {
    const item = items.value.find(item => item.uniqueId === uniqueId);
    if (item) {
      if (quantity <= 0) {
        removeItem(uniqueId);
      } else {
        item.quantity = quantity;
      }
    }
  }

  return {
    items,
    shippingCost,
    subtotal,
    total,
    itemCount,
    addItem,
    removeItem,
    updateQuantity,
  };
});
