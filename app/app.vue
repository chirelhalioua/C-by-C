<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const menuOuvert = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { menuOuvert.value = false })
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <NuxtLink to="/" class="brand" aria-label="C by C — accueil">
        <img src="/images/logo-c-by-c.png" alt="C by C — Celebrations by Chirel" />
      </NuxtLink>
      <button class="menu-toggle" type="button" :aria-expanded="menuOuvert" aria-label="Ouvrir le menu" @click="menuOuvert = !menuOuvert">
        <span>{{ menuOuvert ? 'Fermer' : 'Menu' }}</span><span class="menu-symbol">{{ menuOuvert ? '×' : '+' }}</span>
      </button>
      <nav class="site-nav" :class="{ 'is-open': menuOuvert }">
        <NuxtLink to="/">Accueil</NuxtLink>
        <NuxtLink to="/collections">Faire-part</NuxtLink>
        <NuxtLink to="/modeles-sites">Sites d’invitation</NuxtLink>
        <NuxtLink to="/services">Prestations</NuxtLink>
        <NuxtLink to="/univers">L’univers C by C</NuxtLink>
        <NuxtLink to="/faq">FAQ</NuxtLink>
        <NuxtLink to="/contact" class="nav-contact">Parlons de votre projet <span>↗</span></NuxtLink>
      </nav>
    </header>
    <NuxtPage />
    <footer class="site-footer">
      <div class="footer-top">
        <NuxtLink to="/" class="footer-logo"><img src="/images/logo-c-by-c.png" alt="C by C — Celebrations by Chirel" /></NuxtLink>
        <p>Les moments qui nous unissent.<br/><span>Des invitations pensées pour vos plus belles histoires.</span></p>
        <NuxtLink to="/contact" class="footer-contact">Imaginons votre invitation <span>↗</span></NuxtLink>
      </div>
      <div class="footer-bottom">
        <span>© C by C · Celebrations by Chirel</span>
        <div><NuxtLink to="/services">Prestations</NuxtLink><NuxtLink to="/faq">FAQ</NuxtLink><NuxtLink to="/confidentialite">Confidentialité</NuxtLink><NuxtLink to="/conditions-generales">Conditions générales</NuxtLink></div>
        <a href="https://chirelhalioua.fr/" target="_blank" rel="noopener noreferrer">Une création Chirel Dev ↗</a>
      </div>
    </footer>
  </div>
</template>