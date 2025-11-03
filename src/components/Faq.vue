<script setup lang="ts">
import { ref } from 'vue';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

const faqItems = ref<FaqItem[]>([
  {
    question: 'Quels sont vos délais de livraison ?',
    answer: 'Nos délais de livraison standard peut varie de 2 à 7 jours ouvrables en fonction de la destination. . ',
    isOpen: false,
  },
  {
    question: 'Proposez-vous une garantie sur vos montres ?',
    answer: 'Oui, toutes nos montres sont couvertes par une garantie à vie limitée contre les défauts de fabrication. Veuillez consulter notre page de garantie pour plus de détails.',
    isOpen: false,
  },
  {
    question: 'Comment commander ?',
    answer: 'une fois la commande effectuer , vous cliquez sur *Proceder au paiement * cela vas prendre 1 à 2 minutes puis vous allez être rediriger dans whatsapp pour terminer la commande , Merci ',
    isOpen: false,
  },

  {
    question: 'Puis-je retourner une montre si je ne suis pas satisfait ?',
    answer: 'Nous offrons une politique de retour de 30 jours. Si vous n\'êtes pas entièrement satisfait de votre achat, vous pouvez nous retourner la montre dans son état d\'origine pour un remboursement complet ou un échange.',
    isOpen: false,
  },
  {
    question: 'Comment entretenir ma montre Def store ?',
    answer: 'Pour maintenir l\'éclat et la précision de votre montre, nous recommandons un nettoyage régulier avec un chiffon doux et sec. Évitez l\'exposition à des températures extrêmes et aux produits chimiques. Un service professionnel est conseillé tous les 3 à 5 ans.',
    isOpen: false,
  },

]);

const toggleFaq = (index: number) => {
  faqItems.value[index].isOpen = !faqItems.value[index].isOpen;
};
</script>

<template>
  <section id="faq" class="faq">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Questions Fréquentes</h2>
        <p class="section-subtitle">Trouvez les réponses à vos interrogations</p>
      </div>

      <div class="faq-list">
        <div v-for="(item, index) in faqItems" 
             :key="index" 
             class="faq-item"
        >
          <button @click="toggleFaq(index)" class="faq-question">
            {{ item.question }}
            <span class="faq-icon">{{ item.isOpen ? '−' : '+' }}</span>
          </button>
          <div v-if="item.isOpen" class="faq-answer">
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  padding: 6rem 2rem;
  background: var(--color-background);
}

.container {
  max-width: 900px;
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

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.25rem 1.5rem;
  background: none;
  border: none;
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--color-primary);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.3s ease;
}

.faq-question:hover {
  background-color: #f8f8f8;
}

.faq-icon {
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--color-accent);
  margin-left: 1rem;
}

.faq-answer {
  padding: 1rem 1.5rem 1.25rem;
  border-top: 1px solid #f0f0f0;
  color: var(--color-text);
  line-height: 1.7;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .faq {
    padding: 4rem 1.5rem;
  }

  .section-title {
    font-size: 2.25rem;
  }

  .faq-question {
    font-size: 1rem;
    padding: 1rem 1.25rem;
  }

  .faq-answer {
    font-size: 0.95rem;
    padding: 0.8rem 1.25rem 1rem;
  }
}
</style>
