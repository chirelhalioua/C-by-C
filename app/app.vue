
<script setup>
import { ref } from 'vue'

const menuOuvert = ref(false)
</script>

<template>
  <div class="site">
    <header class="header">
      <NuxtLink to="/" class="brand" aria-label="C by C — accueil" @click="menuOuvert = false">
        <svg class="brand-emblem" viewBox="0 0 112 74" role="img" aria-label="Monogramme C by C">
          <defs>
            <linearGradient id="logoGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#f0d89f" />
              <stop offset="48%" stop-color="#bd8b3f" />
              <stop offset="100%" stop-color="#81531f" />
            </linearGradient>
          </defs>
          <path d="M44 12 C20 -1 3 16 5 36 C7 57 26 66 44 53" fill="none" stroke="url(#logoGold)" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M68 12 C92 -1 109 16 107 36 C105 57 86 66 68 53" fill="none" stroke="url(#logoGold)" stroke-width="2.5" stroke-linecap="round"/>
          <text x="29" y="51" fill="url(#logoGold)" font-family="Georgia,serif" font-size="48" font-weight="400">C</text>
          <text x="56" y="51" fill="url(#logoGold)" font-family="Georgia,serif" font-size="48" font-weight="400">C</text>
          <path d="M17 63 Q28 54 36 61 T55 61 T75 61 T95 63" fill="none" stroke="#bd914b" stroke-width=".8"/>
          <path d="M53 63 Q48 55 43 57 Q47 64 53 63 M56 63 Q61 55 66 57 Q62 64 56 63" fill="#bd914b"/>
          <text x="56" y="43" text-anchor="middle" fill="#7c5128" font-family="cursive" font-size="15" font-style="italic">by</text>
        </svg>
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
        <span class="footer-emblem" aria-hidden="true">C<span>by</span>C</span>
        <span>C by C</span>
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
