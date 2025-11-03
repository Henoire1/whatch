<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean;
  message: string;
}>();

const emit = defineEmits(['confirm', 'cancel']);

const handleConfirm = () => {
  emit('confirm');
};

const handleCancel = () => {
  emit('cancel');
};
</script>

<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="handleCancel">
    <div class="modal-content">
      <p class="modal-message">{{ message }}</p>
      <div class="modal-actions">
        <button @click="handleConfirm" class="confirm-button">Oui</button>
        <button @click="handleCancel" class="cancel-button">Non</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000; /* Higher than shopping cart */
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 400px;
  width: 90%;
  animation: fadeInScale 0.3s ease-out forwards;
}

.modal-message {
  font-size: 1.2rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
}

.modal-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.confirm-button,
.cancel-button {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.confirm-button {
  background: var(--color-accent);
  color: white;
  border: none;
}

.confirm-button:hover {
  background: #d4b87e;
  transform: translateY(-2px);
}

.cancel-button {
  background: #e0e0e0;
  color: var(--color-primary);
  border: 1px solid #ccc;
}

.cancel-button:hover {
  background: #d0d0d0;
  transform: translateY(-2px);
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
