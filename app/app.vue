
<script setup>
import { ref } from 'vue'

const menuOuvert = ref(false)
</script>

<template>
  <div class="site">
    <header class="header">
      <NuxtLink to="/" class="brand" aria-label="Accueil" @click="menuOuvert = false">
        <span class="brand-name">C by C</span>
        <span class="brand-signature">CELEBRATIONS BY CHIREL</span>
        <span class="brand-subtitle">INVITATIONS DIGITALES</span>
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
        <NuxtLink to="/collections" @click="menuOuvert = false">Collections</NuxtLink>
        <NuxtLink to="/univers" @click="menuOuvert = false">Notre univers</NuxtLink>
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
        C by C <span>✳</span>
      </NuxtLink>
      <span class="footer-signature">Celebrations by Chirel</span>
      <span>Les moments qui nous unissent.</span>

      <div class="footer-links">
        <NuxtLink to="/univers">Notre univers</NuxtLink>
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
