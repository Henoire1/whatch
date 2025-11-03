<script>
import { useRouter } from 'vue-router';
import WatchGallery from '../components/WatchGallery.vue';
</script>
<template>
  <section id="hero" class="hero" >
    <div class="hero-content">
      <h1 class="hero-title">L'Art de Mesurer le Temps</h1>
      <p class="hero-subtitle">Découvrez notre collection de montres d'exception, où chaque pièce raconte une histoire de précision et d'élégance.</p>
      <router-link to="/#collection">
        <button class="cta-button">Découvrir la collection</button>
      </router-link>
      
    </div>
    <div class="hero-image">
      <img src="/images/hero-watch.jpeg" alt="Montre de luxe" />
    </div>
  </section>
</template>

<style scoped>
.hero {
  margin-top: 0px; /* Adjust for fixed header height */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  padding: 4rem 2rem;
  color: white; /* Default text color for hero content */
  text-align: center;
  overflow: hidden; /* Ensure image doesn't overflow */
}

.hero-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -2; /* Behind content and overlay */
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6); /* Dark overlay */
  z-index: -1; /* Between image and content */
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  animation: fadeIn 1s ease-out forwards;
  animation-delay: 0.2s;
  opacity: 0; /* Start hidden for animation */
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
  line-height: 1.1;
  animation: fadeInDown 1s ease-out forwards;
  animation-delay: 0.4s;
  opacity: 0;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
  line-height: 1.6;
  animation: fadeInDown 1s ease-out forwards;
  animation-delay: 0.6s;
  opacity: 0;
}

.cta-button {
  background: var(--color-accent);
  color: white;
  border: none;
  padding: 1.2rem 3rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 4px;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  animation: fadeInUp 1s ease-out forwards;
  animation-delay: 0.8s;
  opacity: 0;
}

.cta-button:hover {
  background: #d4b87e; /* Slightly lighter accent on hover */
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
}

/* Keyframe Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 968px) {
  .hero {
    padding: 1rem 1.5rem;
  }
  .hero-title {
    font-size: 3.5rem;
  }
  .hero-subtitle {
    font-size: 1.3rem;
  }
}

@media (max-width: 640px) {
  .hero-title {
    font-size: 2.8rem;
  }
  .hero-subtitle {
    font-size: 1.1rem;
  }
  .cta-button {
    padding: 1rem 2.5rem;
    font-size: 1rem;
  }
}
</style>
