
<script setup>
import { ref } from 'vue'

const menuOuvert = ref(false)
</script>

<template>
  <div class="site">
    <header class="header">
      <NuxtLink to="/" class="brand" aria-label="C by C — accueil" @click="menuOuvert = false">
        <svg class="brand-emblem" viewBox="0 0 280 150" role="img" aria-label="Monogramme doré C by C">
          <defs>
            <linearGradient id="logoGold" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#e9ca83" />
              <stop offset="48%" stop-color="#b98235" />
              <stop offset="100%" stop-color="#8c5b25" />
            </linearGradient>
          </defs>
          <!-- Deux grands C ouverts, en miroir, comme sur le logo de référence -->
          <path d="M113 28 C79 7 43 13 27 44 C10 78 28 119 63 128 C82 133 99 126 113 116"
            fill="none" stroke="url(#logoGold)" stroke-width="5.5" stroke-linecap="round"/>
          <path d="M167 28 C201 7 237 13 253 44 C270 78 252 119 217 128 C198 133 181 126 167 116"
            fill="none" stroke="url(#logoGold)" stroke-width="5.5" stroke-linecap="round"/>
          <!-- Lettres centrales superposées -->
          <text x="86" y="111" fill="url(#logoGold)" font-family="Georgia, 'Times New Roman', serif" font-size="92" font-weight="400">C</text>
          <text x="131" y="111" fill="url(#logoGold)" font-family="Georgia, 'Times New Roman', serif" font-size="92" font-weight="400">C</text>
          <text x="140" y="91" text-anchor="middle" fill="#805126" font-family="'Brush Script MT', 'Segoe Script', cursive" font-size="35" font-style="italic">by</text>
          <!-- Fines volutes sous le monogramme -->
          <path d="M53 132 C77 118 88 145 112 136 C124 132 128 125 140 131 C152 125 156 132 168 136 C192 145 203 118 227 132"
            fill="none" stroke="url(#logoGold)" stroke-width="1.8" stroke-linecap="round"/>
          <path d="M107 132 C96 119 88 124 94 132 C98 138 104 137 107 132 M173 132 C184 119 192 124 186 132 C182 138 176 137 173 132"
            fill="url(#logoGold)"/>
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
