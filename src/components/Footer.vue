<template>
  <footer id="contact" class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <RouterLink to="/" class="footer-logo">
            <span class="h-10 w-10 text-center rounded-4xl text-white flex items-center justify-center bg-[var(--color-accent)]">D</span>
            <span class="logo-text">Def store</span>
          </RouterLink>
          <p class="footer-tagline">L'excellence horlogère depuis 2024</p>
        </div>

        <div class="footer-section">
          <h4 class="footer-title">Navigation</h4>
          <nav class="footer-nav">
            <RouterLink to="/#collection" class="footer-link">Collection</RouterLink>
            <RouterLink to="/#caracteristiques" class="footer-link">Caractéristiques</RouterLink>
            <RouterLink to="/#faq" class="footer-link">FAQ</RouterLink>
            <RouterLink to="/#contact" class="footer-link">Contact</RouterLink>
          </nav>
        </div>

        <div class="footer-section">
          <h4 class="footer-title">Contact</h4>
          <div class="contact-info">
            <p>225 Abidjan, Côte d'Ivoire </p>
            <p>contact@defstore.ci</p>
            <p>+225 01 52 10 81 78</p>
          </div>
        </div>

        <div class="footer-section">
          <h4 class="footer-title">Suivez-nous</h4>
          <div class="social-links">
            <a href="#" class="social-link flex "><Facebook /> &nbsp; Facebook </a>
            <a href="#" class="social-link flex"> <Instagram /> &nbsp; Instagram</a>
            <a href="https://wa.me/+2250152108178" class="social-link flex "> <MessageCircleMore />&nbsp; Whatsapp</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2025 Def store. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'; // Import RouterLink
import { Facebook , Instagram , MessageCircleMore } from 'lucide-vue-next';
</script>

<style scoped>
.footer {
  background: var(--color-primary);
  color: white;
  padding: 4rem 2rem 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
  color: white; /* Ensure logo text is white */
  text-decoration: none;
}

.logo-icon {
  font-size: 1.5rem;
}

.footer-tagline {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
}

.footer-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-link {
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.3s ease;
  font-size: 0.95rem;
}

.footer-link:hover {
  color: var(--color-accent);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.social-link {
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.3s ease;
  font-size: 0.95rem;
}

.social-link:hover {
  color: var(--color-accent);
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 1.5rem 1.5rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
