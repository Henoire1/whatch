<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Excellence Horlogère</h1>
      <p class="hero-subtitle">Découvrez notre collection de montres d'exception</p>
      <button class="cta-button">Explorer la Collection</button>
    </div>
    <div class="hero-image">
      <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Montre de luxe" />
    </div>
  </section>
</template>

<style scoped>
.hero {
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: calc(100vh - 80px);
  align-items: center;
  gap: 4rem;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.hero-content {
  padding: 2rem 0;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--color-primary);
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--color-text-light);
  margin-bottom: 2.5rem;
  line-height: 1.8;
}

.cta-button {
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 2px;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.cta-button:hover {
  background: var(--color-secondary);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.hero-image {
  position: relative;
  height: 600px;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.hero-image:hover img {
  transform: scale(1.05);
}

@media (max-width: 968px) {
  .hero {
    grid-template-columns: 1fr;
    padding: 3rem 2rem;
    gap: 3rem;
  }

  .hero-title {
    font-size: 3rem;
  }

  .hero-image {
    height: 400px;
  }
}

@media (max-width: 640px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-image {
    height: 300px;
  }
}
</style>
