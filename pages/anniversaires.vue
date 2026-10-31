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
        <span class="section-eyebrow">UNE ANNÉE À CÉLÉBRER</span>
        <h1>Une année de plus,<br><em>une fête à votre image.</em></h1>
        <p>Anniversaire d’enfant, soirée entre amis ou grande célébration : donnez rendez-vous à vos invités avec une invitation qui annonce déjà l’ambiance.</p>
        <a class="button button-gold" href="/contact">Imaginons votre projet <span>↗</span></a>
      </section>
      <section class="occasion-detail-content section-pad">
        <div class="occasion-detail-heading">
          <span class="section-eyebrow">UNE CRÉATION PENSÉE POUR VOUS</span>
          <h2>Le ton de votre fête, dès l’invitation</h2>
          <p>Graphique, chic, colorée ou minimaliste : imaginons une création qui correspond à votre thème et à votre personnalité.</p>
        </div>
        <div class="occasion-orbit" aria-hidden="true">
          <svg viewBox="0 0 320 320" role="presentation">
            <defs><path id="occasion-orbit-circle" d="M160,160 m-126,0 a126,126 0 1,1 252,0 a126,126 0 1,1 -252,0"/></defs>
            <circle cx="160" cy="160" r="104" class="occasion-orbit-line"/>
            <text><textPath href="#occasion-orbit-circle">CÉLÉBRER · PARTAGER · RÉUNIR · CÉLÉBRER · PARTAGER · RÉUNIR · </textPath></text>
          </svg>
          <span class="occasion-orbit-center"><span class="occasion-orbit-brand">C</span><i class="occasion-orbit-by">by</i><span class="occasion-orbit-brand">C</span></span>
          <span class="occasion-orbit-spark">✳</span>
        </div>
        <div class="occasion-detail-features" aria-label="Les détails de votre création">
          <article class="occasion-detail-feature">
            <h3>Un thème qui vous ressemble</h3>
            <p>Couleurs, style et détails graphiques s’accordent à l’ambiance que vous souhaitez créer.</p>
          </article>
          <article class="occasion-detail-feature">
            <h3>Toutes les infos au bon endroit</h3>
            <p>Date, horaires, adresse, programme, dress code et consignes particulières peuvent être intégrés.</p>
          </article>
          <article class="occasion-detail-feature">
            <h3>Un partage tout simple</h3>
            <p>Votre invitation numérique est pensée pour être envoyée facilement à vos proches.</p>
          </article>
        </div>
        <p class="occasion-detail-closing">Parce qu’une belle fête commence souvent par une belle invitation.</p>
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
