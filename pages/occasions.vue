<script setup lang="ts">
import { ref } from 'vue'
const menuOpen = ref(false)
const closeMenu = () => { menuOpen.value = false }
const occasions = [
  { number: '01', title: 'Mariages', eyebrow: 'UNE HISTOIRE À DEUX', text: 'Une invitation délicate pour annoncer votre union et donner le ton de cette journée unique.', image: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=1200&q=85', alt: 'Papeterie de mariage élégante aux tons ivoire' },
  { number: '02', title: 'Naissances & baptêmes', eyebrow: 'LES PREMIÈRES ÉMOTIONS', text: 'Une création douce pour partager une merveilleuse nouvelle ou réunir vos proches autour d’un moment précieux.', image: 'https://images.unsplash.com/photo-1723205753025-60466996e204?auto=format&fit=crop&w=1200&q=85', alt: 'Annonce délicate pour une naissance' },
  { number: '03', title: 'Anniversaires', eyebrow: 'UNE ANNÉE À CÉLÉBRER', text: 'Une invitation joyeuse, chic ou pleine de fantaisie, imaginée selon votre personnalité et l’ambiance souhaitée.', image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=85', alt: 'Gâteau festif et coloré pour un anniversaire' },
  { number: '04', title: 'Cérémonies & traditions', eyebrow: 'VOS MOMENTS, VOS VALEURS', text: 'Des invitations pensées avec soin et respect, quelle que soit votre culture, votre religion ou votre tradition.', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85', alt: 'Décoration élégante pour une célébration' }
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

      <section class="occasion-collections section-pad" aria-label="Découvrir les occasions">
        <a v-for="occasion in occasions" :key="occasion.number" class="occasion-collection-card" href="/contact">
          <div class="occasion-collection-image"><img :src="occasion.image" :alt="occasion.alt" loading="lazy"><span class="occasion-collection-number">{{ occasion.number }}</span></div>
          <div class="occasion-collection-copy">
            <span class="section-eyebrow">{{ occasion.eyebrow }}</span>
            <h2>{{ occasion.title }}</h2>
            <p>{{ occasion.text }}</p>
            <span class="occasion-collection-link">Imaginons votre invitation <span aria-hidden="true">↗</span></span>
          </div>
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
