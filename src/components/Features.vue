<script setup lang="ts">
interface Feature {
  icon: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: '🏆',
    title: 'Qualité Exceptionnelle',
    description: 'Chaque montre est fabriquée avec les matériaux les plus nobles et selon les standards les plus élevés.'
  },
  {
    icon: '✨',
    title: 'Savoir-Faire Artisanal',
    description: 'Nos horlogers perpétuent une tradition d\'excellence transmise depuis des générations.'
  },
  {
    icon: '🔒',
    title: 'Garantie à Vie',
    description: 'Nous garantissons nos montres et offrons un service après-vente d\'exception.'
  },
  {
    icon: '🌍',
    title: 'Livraison Mondiale',
    description: 'Vos montres sont livrées dans le monde entier dans un écrin de luxe sécurisé.'
  }
]
</script>

<template>
  <section id="caracteristiques" class="features">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Excellence & Raffinement</h2>
        <p class="section-subtitle">Un engagement envers la perfection</p>
      </div>

      <div class="features-grid">
        <div v-for="(feature, index) in features" :key="index" class="feature-card">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  padding: 6rem 2rem;
  background: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.section-subtitle {
  font-size: 1.25rem;
  color: var(--color-text-light);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
}

.feature-card {
  text-align: center;
  padding: 2rem;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
}

.feature-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  display: inline-block;
  transition: transform 0.3s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1);
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.feature-description {
  font-size: 1rem;
  color: var(--color-text-light);
  line-height: 1.8;
}

@media (max-width: 768px) {
  .features {
    padding: 4rem 1.5rem;
  }

  .section-title {
    font-size: 2.25rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
