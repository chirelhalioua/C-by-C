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
        <span class="section-eyebrow">VOS MOMENTS, VOS VALEURS</span>
        <h1>Vos traditions,<br><em>votre façon de célébrer.</em></h1>
        <p>Cérémonie familiale, fête traditionnelle ou moment symbolique : chaque culture possède ses codes et chaque famille son histoire. Votre invitation est imaginée dans le respect de ce qui compte pour vous.</p>
        <a class="button button-gold" href="/contact">Imaginons votre projet <span>↗</span></a>
      </section>
      <section class="occasion-detail-content section-pad">
        <div class="occasion-detail-heading">
          <span class="section-eyebrow">UNE CRÉATION PENSÉE POUR VOUS</span>
          <h2>Une création respectueuse de votre histoire</h2>
          <p>Nous prenons le temps de comprendre le sens de votre célébration, vos habitudes et les informations à transmettre à vos invités.</p>
        </div>
        <div class="occasion-orbit" aria-hidden="true">
          <svg viewBox="0 0 320 320" role="presentation">
            <defs><path id="occasion-orbit-circle" d="M160,160 m-126,0 a126,126 0 1,1 252,0 a126,126 0 1,1 -252,0"/></defs>
            <circle cx="160" cy="160" r="104" class="occasion-orbit-line"/>
            <text><textPath href="#occasion-orbit-circle">CÉLÉBRER ✦ PARTAGER ✦ RÉUNIR ✦ CÉLÉBRER ✦ PARTAGER ✦ RÉUNIR ✦ </textPath></text>
          </svg>
          <span class="occasion-orbit-center">C <i>by</i> C</span>
          <span class="occasion-orbit-spark">✳</span>
        </div>
        <div class="occasion-detail-features" aria-label="Les détails de votre création">
          <article class="occasion-detail-feature">
            <h3>Une identité qui vous correspond</h3>
            <p>Ambiance, couleurs, symboles et détails sont définis avec vous, selon vos souhaits.</p>
          </article>
          <article class="occasion-detail-feature">
            <h3>Des informations adaptées</h3>
            <p>Lieu, horaires, déroulé, plusieurs temps de célébration ou précisions particulières : tout est organisé clairement.</p>
          </article>
          <article class="occasion-detail-feature">
            <h3>Une approche ouverte et attentive</h3>
            <p>Toutes les traditions et toutes les familles sont les bienvenues. Chaque projet est conçu au cas par cas.</p>
          </article>
        </div>
        <p class="occasion-detail-closing">Vos valeurs, vos liens, votre célébration : une invitation qui vous ressemble.</p>
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
