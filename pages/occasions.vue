<script setup lang="ts">
import { ref } from 'vue'
const menuOpen = ref(false)
const closeMenu = () => { menuOpen.value = false }
const occasions = [
  { number: '01', title: 'Mariages', eyebrow: 'UNE HISTOIRE À DEUX', text: 'Une invitation numérique élégante et personnalisée, à envoyer facilement à tous vos proches.' },
  { number: '02', title: 'Naissances & baptêmes', eyebrow: 'LES PREMIÈRES ÉMOTIONS', text: 'Une annonce numérique toute en douceur, avec le prénom de bébé et les informations à partager avec vos proches.' },
  { number: '03', title: 'Anniversaires', eyebrow: 'UNE ANNÉE À CÉLÉBRER', text: 'Une invitation numérique festive et personnalisée pour annoncer la date, le lieu et l’ambiance de votre fête.' },
  { number: '04', title: 'Cérémonies & traditions', eyebrow: 'VOS MOMENTS, VOS VALEURS', text: 'Une création numérique adaptée à votre tradition et à vos envies, dans le respect de ce qui rend votre célébration unique.' }
]
</script>

<template>
  <div class="site-shell occasions-page">
    <header class="site-header">
      <a class="brand" href="/" aria-label="C by C, accueil" @click="closeMenu"><img class="brand-logo" src="https://raw.githubusercontent.com/chirelhalioua/c-by-c/main/images/logo-c-by-c.png" alt="C by C — Célébrations by Chirel"></a>
      <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-label="Ouvrir le menu" @click="menuOpen = !menuOpen"><span></span><span></span></button>
      <nav class="main-nav" :class="{ 'is-open': menuOpen }" aria-label="Navigation principale">
        <a href="/" @click="closeMenu">Accueil</a>
        <a href="/occasions" aria-current="page" @click="closeMenu">Les occasions</a>
        <a href="/formules" @click="closeMenu">Nos formules</a>
        <a class="nav-cta" href="/contact" @click="closeMenu">Contact <span>↗</span></a>
      </nav>
    </header>

    <main>
      <section class="occasions-page-hero">
        <span class="section-eyebrow">CHAQUE MOMENT A SON ÉCRIN</span>
        <h1>Chaque occasion mérite<br><em>une invitation qui lui ressemble.</em></h1>
        <p>Un grand jour, une heureuse nouvelle ou une tradition qui vous est chère : imaginons ensemble une création à votre image.</p>
      </section>

      <section class="occasion-collections occasion-word-garden section-pad" aria-label="Découvrir les occasions">
        <a v-for="(occasion, index) in occasions" :key="occasion.number" class="occasion-word-item" :class="'occasion-word-item-' + (index + 1)" href="/contact">
          <span class="occasion-word-number">{{ occasion.number }}</span>
          <span class="occasion-word-eyebrow">{{ occasion.eyebrow }}</span>
          <h2>{{ occasion.title }}</h2>
          <p>{{ occasion.text }}</p>
          <span class="occasion-word-link">Parlons de votre projet <span aria-hidden="true">↗</span></span>
        </a>
      </section>

      <section class="occasion-page-cta">
        <span class="section-eyebrow">UNE ENVIE PARTICULIÈRE ?</span>
        <h2>Votre histoire est unique.<br><em>Votre invitation aussi.</em></h2>
        <p>Vous avez une idée en tête, même encore floue ? Parlons-en et donnons-lui forme ensemble.</p>
        <a class="button button-gold" href="/contact">Parlons de votre projet <span>↗</span></a>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-main"><a class="footer-brand" href="/"><img src="https://raw.githubusercontent.com/chirelhalioua/c-by-c/main/images/logo-c-by-c.png" alt="C by C — Célébrations by Chirel"></a><p>Les moments qui nous unissent.<br><span>Invitations digitales imaginées avec cœur.</span></p></div>
      <div class="footer-bottom"><span>© {{ new Date().getFullYear() }} C by C — Célébrations by Chirel</span><nav aria-label="Navigation de pied de page"><a href="/">Accueil</a><a href="/contact">Contact</a></nav><span>FAIT AVEC CŒUR PAR CHIREL</span></div>
    </footer>
  </div>
</template>
