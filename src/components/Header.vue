<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <span class="bg-red-500 h-10 w-10 text-center rounded-4xl text-white  ">D</span>
          <span class="logo-text">DASIO</span>
        </div>

        <nav class="nav" :class="{ 'nav-open': isMenuOpen }">
          <a href="#collection" class="nav-link">Collection</a>
          <a href="#caracteristiques" class="nav-link">Caractéristiques</a>
          <a href="#contact" class="nav-link">Contact</a>
        </nav>

        <button class="menu-toggle" @click="toggleMenu" aria-label="Menu">
          <span class="menu-icon"></span>
        </button>
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
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid #e0e0e0;
  transition: all 0.3s ease;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.header-content {
  display: flex;
  justify-content: space-between;
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
}

.logo-icon {
  font-size: 1.5rem;
}

.nav {
  display: flex;
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

.menu-toggle {
  display: none;
  background: none;
  border: none;
  padding: 0.5rem;
}

.menu-icon {
  display: block;
  width: 25px;
  height: 2px;
  background: var(--color-primary);
  position: relative;
  transition: background 0.3s ease;
}

.menu-icon::before,
.menu-icon::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 2px;
  background: var(--color-primary);
  transition: transform 0.3s ease;
}

.menu-icon::before {
  top: -8px;
}

.menu-icon::after {
  bottom: -8px;
}

@media (max-width: 768px) {
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
  }

  .nav-open {
    transform: translateX(0);
  }

  .nav-link {
    padding: 1rem 0;
    border-bottom: 1px solid #f0f0f0;
  }

  .menu-toggle {
    display: block;
  }
}
</style>
