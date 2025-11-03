<template>
  <section id="about" class="about">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">À propos de Def store</h2>
        <p class="section-subtitle">Notre histoire, notre passion, notre engagement</p>
      </div>
      <div class="about-content">
        <div class="about-image">
          <img src="https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Atelier d'horlogerie" />
        </div>
        <div class="about-text">
          <p>
            Depuis 2024, Def store incarne l'excellence horlogère, perpétuant un savoir-faire artisanal transmis de génération en génération. Chaque montre est le fruit d'une passion inébranlable pour la précision, l'innovation et le design intemporel.
          </p>
          <p>
            Nous sélectionnons les matériaux les plus nobles et utilisons des techniques de fabrication avant-gardistes pour créer des garde-temps qui sont de véritables œuvres d'art. Notre engagement est de vous offrir une montre qui ne se contente pas de mesurer le temps, mais qui raconte une histoire, la vôtre.
          </p>
          <p>
            Chez Def store, nous croyons que le luxe réside dans les détails, la qualité irréprochable et un service client exceptionnel. Découvrez notre univers et trouvez la montre qui vous accompagnera à travers les moments les plus précieux de votre vie.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 6rem 2rem;
  background: var(--color-background);
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

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-image {
  position: relative;
  height: 450px;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.about-image:hover img {
  transform: scale(1.05);
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text);
}

.about-text p {
  margin-bottom: 1.5rem;
}

@media (max-width: 968px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about-image {
    height: 350px;
  }
}

@media (max-width: 640px) {
  .about {
    padding: 4rem 1.5rem;
  }

  .section-title {
    font-size: 2.25rem;
  }

  .about-image {
    height: 280px;
  }
}
</style>
