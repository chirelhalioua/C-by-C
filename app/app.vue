
<script setup>
import { ref } from 'vue'

const menuOuvert = ref(false)
</script>

<template>
  <div class="site">
    <header class="header">
      <NuxtLink to="/" class="brand" aria-label="C by C — accueil" @click="menuOuvert = false">
        <img class="brand-emblem" src="/images/logo-c-by-c.png" alt="Logo C by C — Celebrations by Chirel" />
      </NuxtLink>

      <button
        class="hamburger"
        type="button"
        :aria-expanded="menuOuvert"
        aria-label="Ouvrir le menu"
        @click="menuOuvert = !menuOuvert"
      >
        <span>{{ menuOuvert ? '✕' : '☰' }}</span>
      </button>

      <nav class="main-nav" :class="{ 'menu-ouvert': menuOuvert }">
        <NuxtLink to="/" @click="menuOuvert = false">Accueil</NuxtLink>
        <NuxtLink to="/collections" @click="menuOuvert = false">Faire-part digitaux</NuxtLink>
        <NuxtLink to="/modeles-sites" @click="menuOuvert = false">Modèles de sites</NuxtLink>
        <NuxtLink to="/services" @click="menuOuvert = false">Prestations</NuxtLink>
        <NuxtLink to="/faq" @click="menuOuvert = false">FAQ</NuxtLink>
        <NuxtLink to="/contact" @click="menuOuvert = false">Contact</NuxtLink>

        <NuxtLink
          to="/collections"
          class="mobile-cta"
          @click="menuOuvert = false"
        >
          Créer une invitation ↗
        </NuxtLink>
      </nav>

      <NuxtLink to="/collections" class="header-button">
        Créer une invitation <span>↗</span>
      </NuxtLink>
    </header>
    

    <NuxtPage />

    <footer class="footer">
      <NuxtLink to="/" class="footer-brand">
        <img class="footer-logo-image" src="/images/logo-c-by-c.png" alt="C by C — Celebrations by Chirel" />
      </NuxtLink>
      <span>Les moments qui nous unissent.</span>

      <div class="footer-links">
        <NuxtLink to="/univers">Notre univers</NuxtLink>
        <NuxtLink to="/modeles-sites">Modèles de sites</NuxtLink>
        <NuxtLink to="/services">Nos prestations</NuxtLink>
        <NuxtLink to="/faq">FAQ</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
        <NuxtLink to="/confidentialite">Confidentialité</NuxtLink>
        <NuxtLink to="/conditions-generales">Conditions générales</NuxtLink>
      </div>

      <a href="https://chirelhalioua.fr/" target="_blank" rel="noopener noreferrer">
        Une création signée Chirel Dev ↗
      </a>
    </footer>
  </div>
</template>
