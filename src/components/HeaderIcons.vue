<template>
  
  <div class="header-icons">
   
    <button class="icon-button" aria-label="Mon compte">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    </button>
  
   </div>
</template>

<style scoped>
.header-icons {
  display: flex;
  gap: 1.25rem;
}

.icon-button {
  color: rgb(255, 255, 255);
  background: none;
  border: none;
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
</style>
