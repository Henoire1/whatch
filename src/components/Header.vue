<script setup lang="ts">
import { ref } from 'vue'
// import HeaderIcons from './HeaderIcons.vue'
import { useCartStore } from '../stores/cart'; // Import cart store
import { RouterLink } from 'vue-router'; // Import RouterLink

const isMenuOpen = ref(false)
const cartStore = useCartStore(); // Use the cart store

const emit = defineEmits(['toggle-cart']); // Declare emit for toggle-cart

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const openCart = () => {
  emit('toggle-cart');
}
</script>

<template>
  <header class=" header ">
    <div class="container">
      <div class="header-grid">
        <RouterLink to="/" class="logo" @click="isMenuOpen = false">
          <span class="h-10 w-10 text-center rounded-4xl text-white flex items-center justify-center bg-[var(--color-accent)]">D</span>
          <span class="logo-text text-white">Def store</span>
        </RouterLink>

        <nav class="nav" :class="{ 'nav-open': isMenuOpen }">
          <RouterLink to="/#hero" class="nav-link" @click="isMenuOpen = false">Accueil</RouterLink>
          <RouterLink to="/#collection" class="nav-link" @click="isMenuOpen = false">Collections</RouterLink>
          <RouterLink to="/#collection" class="nav-link" @click="isMenuOpen = false">Homme</RouterLink>
          <RouterLink to="/#collection" class="nav-link" @click="isMenuOpen = false">Femme</RouterLink>
          <RouterLink to="/#faq" class="nav-link" @click="isMenuOpen = false">FAQ</RouterLink>
          <RouterLink to="/#contact" class="nav-link" @click="isMenuOpen = false">Contact</RouterLink>
        </nav>

        <div class="header-actions">
          <!-- <HeaderIcons class="hidden md:flex" /> -->
          <!-- Cart icon with item count -->
          <button class="icon-button cart-icon-button" @click="openCart" aria-label="Panier">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span v-if="cartStore.itemCount > 0" class="cart-item-count">{{ cartStore.itemCount }}</span>
          </button>
          <button class="menu-toggle md:hidden" @click="toggleMenu" aria-label="Menu">
            <span class="menu-icon" :class="{ 'menu-icon-open': isMenuOpen }"></span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color : white;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  z-index: 1000;
  border-bottom: 1px solid #e0e0e0;
  transition: all 0.3s ease;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.header-grid {
  display: grid;
  grid-template-columns: auto 1fr auto; /* Logo, Nav (takes space), Actions */
  align-items: center;
  height: 80px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 2px;
  color: var(--color-primary);
  text-decoration: none; /* Ensure it doesn't look like a standard link */
}

.logo-icon {
  font-size: 1.5rem;
}

.nav {
  display: flex;
  justify-content: center; /* Center nav links within its grid column */
  gap: 3rem;
}

.nav-link {
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--color-accent);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-accent);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem; /* Gap between icons and menu toggle */
  justify-self: end; /* Push actions to the right */
}

.icon-button {
  background: none;
  border: none;
  color: var( --color-background-alt);

  cursor: pointer;
  padding: 0.25rem;
  transition: color 0.3s ease, transform 0.3s ease;
}

.icon-button:hover {
  color: var(--color-accent);
  transform: translateY(-2px);
}

.icon {
  width: 24px;
  height: 24px;
}

.cart-icon-button {
  position: relative;
}

.cart-item-count {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: var(--color-accent);
  color: white;
  border-radius: 50%;
  font-size: 0.75rem;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.menu-toggle {
  color: #e0e0e0;
  display: none; /* Hidden by default, shown by media query */
  background: none;
  border: none;
  padding: 0.5rem;
  z-index: 1001; /* Ensure it's above the nav when open */
}

.menu-icon {
  color: #f0f0f0;
  display: block;
  width: 25px;
  height: 2px;
  background: var(--color-background);
  position: relative;
  transition: background 0.3s ease;
}

.menu-icon::before,
.menu-icon::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 2px;
  
 background: var(--color-background);
  transition: transform 0.3s ease, top 0.3s ease, bottom 0.3s ease;
}

.menu-icon::before {

  top: -8px;
}

.menu-icon::after {
  
  bottom: -8px;
}

/* Animation for open menu icon */
.menu-icon-open {
  
  background: transparent; /* Hide middle bar */
}

.menu-icon-open::before {
  top: 0;
  
  transform: rotate(45deg);
}

.menu-icon-open::after {
  bottom: 0;
  transform: rotate(-45deg);
}

@media (max-width: 768px) {
  .header-grid {
    grid-template-columns: auto 1fr; /* Logo, Actions (nav is hidden/off-screen) */
  }

  .nav {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    gap: 0;
    padding: 2rem;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    border-bottom: 1px solid #e0e0e0;
    height: calc(100vh - 80px); /* Full height minus header */
    overflow-y: auto; /* Enable scrolling for long menus */
  }

  .nav-open {
    transform: translateX(0);
  }

  .nav-link {
    color: black;
    padding: 1rem 0;
    border-bottom: 1px solid #f0f0f0;
  }

  .menu-toggle {
    color: rgb(255, 255, 255);
    display: block;
  }

  .header-actions {
    gap: 1rem;
  }
}
</style>
