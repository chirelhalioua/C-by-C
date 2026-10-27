<script setup lang="ts">
const showBackToTop = ref(false)

const updateScrollState = () => {
  showBackToTop.value = window.scrollY > 320
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  updateScrollState()
  window.addEventListener('scroll', updateScrollState, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollState)
})
</script>

<template>
  <NuxtPage />
  <Transition name="back-to-top">
    <button
      v-if="showBackToTop"
      class="back-to-top"
      type="button"
      aria-label="Remonter en haut de la page"
      title="Retour en haut"
      @click="scrollToTop"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 19V5M6.5 10.5 12 5l5.5 5.5" />
      </svg>
    </button>
  </Transition>
</template>
