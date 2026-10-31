<script setup lang="ts">
import { ref } from 'vue'
const menuOpen = ref(false)
const closeMenu = () => { menuOpen.value = false }
</script>

<template>
  <div class="site-shell occasion-detail-page">
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
      <section class="occasion-detail-hero">
        <a class="occasion-detail-back" href="/occasions">← Toutes les occasions</a>
        <span class="section-eyebrow">LES PREMIÈRES ÉMOTIONS</span>
        <h1>Une jolie nouvelle,<br><em>un souvenir à partager.</em></h1>
        <p>Une naissance, un baptême ou la rencontre avec un tout-petit : ces instants précieux méritent une annonce douce et personnelle, imaginée pour vos proches.</p>
        <a class="button button-gold" href="/contact">Imaginons votre projet <span>↗</span></a>
      </section>
      <section class="occasion-detail-content section-pad">
        <div class="occasion-detail-heading">
          <span class="section-eyebrow">UNE CRÉATION PENSÉE POUR VOUS</span>
          <h2>Une annonce pleine de douceur</h2>
          <p>Un faire-part digital ou une invitation pour réunir famille et amis autour de ce nouveau chapitre.</p>
        </div>
        <div class="occasion-detail-features">
          <article class="occasion-detail-feature">
            <span class="occasion-detail-number">01</span>
            <h3>Un univers tendre</h3>
            <p>Palette délicate, illustrations, motifs et typographies composent une création à votre goût.</p>
          </article>
          <article class="occasion-detail-feature">
            <span class="occasion-detail-number">02</span>
            <h3>Les mots qui comptent</h3>
            <p>Prénom, date, lieu, petit message ou informations pratiques : votre annonce raconte ce moment.</p>
          </article>
          <article class="occasion-detail-feature">
            <span class="occasion-detail-number">03</span>
            <h3>Une création à partager</h3>
            <p>Un format numérique facile à transmettre à vos proches, avec des options étudiées selon vos envies.</p>
          </article>
        </div>
        <p class="occasion-detail-closing">Une première page, un joli souvenir, beaucoup d’amour à partager.</p>
      </section>
      <section class="occasion-detail-cta">
        <span class="section-eyebrow">ET SI ON EN PARLAIT ?</span>
        <h2>Votre moment est unique.<br><em>Imaginons son invitation.</em></h2>
        <p>Racontez-moi votre événement et vos envies. Nous construirons ensemble une création qui vous ressemble.</p>
        <a class="button button-gold" href="/contact">Parlons de votre projet <span>↗</span></a>
        <a class="occasion-detail-return" href="/occasions">Découvrir les autres occasions</a>
      </section>
    </main>
    <footer class="site-footer">
      <div class="footer-main"><a class="footer-brand" href="/"><img src="https://raw.githubusercontent.com/chirelhalioua/c-by-c/main/images/logo-c-by-c.png" alt="C by C — Célébrations by Chirel"></a><p>Les moments qui nous unissent.<br><span>Invitations digitales imaginées avec cœur.</span></p></div>
      <div class="footer-bottom"><span>© {{ new Date().getFullYear() }} C by C — Célébrations by Chirel</span><nav class="footer-legal-links" aria-label="Liens utiles et réglementaires"><a href="/">Accueil</a><a href="/contact">Contact</a><a href="/mentions-legales">Mentions légales</a><a href="/confidentialite">Confidentialité</a><a href="/cgv">CGV</a></nav><span>FAIT AVEC CŒUR PAR CHIREL</span></div>
    </footer>
  </div>
</template>
