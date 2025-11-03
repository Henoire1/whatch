<script setup lang="ts">
import { useCartStore } from '../stores/cart';
import { formatPrice } from '../utils/formatters';

const cartStore = useCartStore();

const props = defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits(['close']);

const closeCart = () => {
  emit('close');
};

const incrementQuantity = (uniqueId: string) => {
  const item = cartStore.items.find(i => i.uniqueId === uniqueId);
  if (item) {
    cartStore.updateQuantity(uniqueId, item.quantity + 1);
  }
};

const decrementQuantity = (uniqueId: string) => {
  const item = cartStore.items.find(i => i.uniqueId === uniqueId);
  if (item && item.quantity > 1) {
    cartStore.updateQuantity(uniqueId, item.quantity - 1);
  } else if (item && item.quantity === 1) {
    cartStore.removeItem(uniqueId);
  }
};

const checkout = () => {
  if (cartStore.items.length === 0) {
    alert('Votre panier est vide. Veuillez ajouter des articles avant de procéder au paiement.');
    return;
  }

  let message = "Bonjour, je souhaite passer la commande suivante \n\n";
  cartStore.items.forEach(item => {
    message += `- ${item.name}`;
    if (item.selectedColor) message += ` (Couleur: ${item.selectedColor})`;
    if (item.selectedStrapSize) message += ` (Taille: ${item.selectedStrapSize})`;
    message += ` x ${item.quantity} à ${formatPrice(item.price)} chacun.\n`;
  });
  message += `\nSous-total: ${formatPrice(cartStore.subtotal)}\n`;
  message += `Livraison: ${formatPrice(cartStore.shippingCost)}\n`;
  message += `Total de la commande: ${formatPrice(cartStore.total)}\n\n`;
  message += "Merci de confirmer ma commande.";

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/+2250152108178?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank'); // Ouvre le lien WhatsApp dans un nouvel onglet
   // Ferme le panier après avoir initié la commande
};
</script>

<template>
  <div :class="['shopping-cart-overlay', { 'is-open': isOpen }]" @click.self="closeCart">
    <div :class="['shopping-cart-panel', { 'is-open': isOpen }]">
      <div class="cart-header">
        <h2 class="cart-title">Votre Panier ({{ cartStore.itemCount }})</h2>
        <button @click="closeCart" class="close-button" aria-label="Fermer le panier">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>

      <div v-if="cartStore.items.length === 0" class="empty-cart">
        <p>Votre panier est vide.</p>
        <button @click="closeCart" class="continue-shopping-button">Continuer mes achats</button>
      </div>

      <div v-else class="cart-content">
        <ul class="cart-items-list">
          <li v-for="item in cartStore.items" :key="item.uniqueId" class="cart-item">
            <img :src="item.image" :alt="item.name" class="item-image" />
            <div class="item-details">
              <h3 class="item-name">{{ item.name }}</h3>
              <p class="item-variants" v-if="item.selectedColor || item.selectedStrapSize">
                <span v-if="item.selectedColor">Couleur: {{ item.selectedColor }}</span>
                <span v-if="item.selectedStrapSize">Taille: {{ item.selectedStrapSize }}</span>
              </p>
              <p class="item-price">{{ formatPrice(item.price) }}</p>
              <div class="item-quantity-controls">
                <button @click="decrementQuantity(item.uniqueId)" class="quantity-button">-</button>
                <span class="quantity-display">{{ item.quantity }}</span>
                <button @click="incrementQuantity(item.uniqueId)" class="quantity-button">+</button>
                <button @click="cartStore.removeItem(item.uniqueId)" class="remove-button" aria-label="Supprimer l'article">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                </button>
              </div>
            </div>
          </li>
        </ul>

        <div class="cart-summary">
          <div class="summary-row">
            <span>Sous-total:</span>
            <span>{{ formatPrice(cartStore.subtotal) }}</span>
          </div>
          <div class="summary-row">
            <span>Livraison:</span>
            <span>{{ formatPrice(cartStore.shippingCost) }}</span>
          </div>
          <div class="summary-row total">
            <span>Total:</span>
            <span>{{ formatPrice(cartStore.total) }}</span>
          </div>
          <button @click="checkout" class="checkout-button">Procéder au paiement</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shopping-cart-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.shopping-cart-overlay.is-open {
  visibility: visible;
  opacity: 1;
}

.shopping-cart-panel {
  width: 100%;
  max-width: 450px;
  height: 100%;
  background: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translateX(100%);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
}

.shopping-cart-panel.is-open {
  transform: translateX(0);
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #e0e0e0;
}

.cart-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-primary);
}

.close-button {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text-light);
  transition: color 0.3s ease;
}

.close-button:hover {
  color: var(--color-primary);
}

.empty-cart {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  color: var(--color-text-light);
  font-size: 1.1rem;
}

.continue-shopping-button {
  margin-top: 1.5rem;
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.continue-shopping-button:hover {
  background: var(--color-accent);
  transform: translateY(-2px);
}

.cart-content {
  flex-grow: 1;
  overflow-y: auto;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
}

.cart-items-list {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.cart-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #f0f0f0;
}

.cart-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.item-image {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 4px;
}

.item-details {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.item-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 0.25rem;
}

.item-variants {
  font-size: 0.85rem;
  color: var(--color-text-light);
  margin-bottom: 0.5rem;
}

.item-variants span:not(:last-child)::after {
  content: ' / ';
}

.item-price {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.75rem;
}

.item-quantity-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.quantity-button {
  background: #f0f0f0;
  border: 1px solid #e0e0e0;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
}

.quantity-button:hover {
  background: #e0e0e0;
}

.quantity-display {
  min-width: 20px;
  text-align: center;
  font-size: 1rem;
  color: var(--color-primary);
}

.remove-button {
  background: none;
  border: none;
  color: var(--color-text-light);
  cursor: pointer;
  margin-left: auto; /* Push to the right */
  transition: color 0.3s ease;
}

.remove-button:hover {
  color: #dc3545; /* Red for delete */
}

.cart-summary {
  padding-top: 1.5rem;
  border-top: 1px solid #e0e0e0;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-size: 1rem;
  color: var(--color-text);
}

.summary-row.total {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-top: 1rem;
  margin-bottom: 1.5rem;
}

.checkout-button {
  width: 100%;
  background: var(--color-accent);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 4px;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.checkout-button:hover {
  background: #d4b87e;
  transform: translateY(-2px);
}

@media (max-width: 480px) {
  .shopping-cart-panel {
    max-width: 100%;
  }
  .cart-header, .cart-content {
    padding: 1rem 1.5rem;
  }
  .cart-title {
    font-size: 1.5rem;
  }
  .item-image {
    width: 70px;
    height: 70px;
  }
  .item-name {
    font-size: 1rem;
  }
  .item-price {
    font-size: 0.9rem;
  }
  .quantity-button {
    width: 24px;
    height: 24px;
    font-size: 1rem;
  }
  .remove-button svg {
    width: 16px;
    height: 16px;
  }
  .checkout-button {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
}
</style>
