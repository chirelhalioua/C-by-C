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
        <span class="section-eyebrow">UNE HISTOIRE À DEUX</span>
        <h1>Le début d’une<br><em>histoire à célébrer.</em></h1>
        <p>Un mariage est fait de détails, d’émotions et de traditions qui vous ressemblent. Imaginons une invitation digitale qui donne le ton de cette journée si particulière.</p>
        <a class="button button-gold" href="/contact">Imaginons votre projet <span>↗</span></a>
      </section>
      <section class="occasion-detail-content section-pad">
        <div class="occasion-detail-heading">
          <span class="section-eyebrow">UNE CRÉATION PENSÉE POUR VOUS</span>
          <h2>Une invitation à votre image</h2>
          <p>Du premier faire-part aux informations pratiques, chaque élément trouve sa place dans un univers graphique harmonieux.</p>
        </div>
        <div class="occasion-detail-features" aria-label="Les détails de votre création">
          <article class="occasion-detail-feature">
            <span class="occasion-detail-number">01</span>
            <h3>Un univers élégant</h3>
            <p>Couleurs, typographies, motifs et ambiance sont choisis avec vous pour refléter votre histoire.</p>
          </article>
          <article class="occasion-detail-feature">
            <span class="occasion-detail-number">02</span>
            <h3>Toutes les informations réunies</h3>
            <p>Date, lieu, horaires, programme, dress code ou détails utiles : votre invitation s’adapte à votre organisation.</p>
          </article>
          <article class="occasion-detail-feature">
            <span class="occasion-detail-number">03</span>
            <h3>Des attentions personnalisées</h3>
            <p>Message d’accueil, réponse des invités ou options complémentaires peuvent être envisagés selon votre projet.</p>
          </article>
        </div>
        <p class="occasion-detail-closing">Du premier oui au grand jour, chaque détail mérite son écrin.</p>
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
