<script setup lang="ts">
import { ref } from 'vue'
const menuOpen = ref(false)
const closeMenu = () => { menuOpen.value = false }
const occasions = [
  { number: '01', title: 'Mariages', eyebrow: 'UNE HISTOIRE À DEUX', text: 'Une invitation digitale élégante et personnalisée, à envoyer facilement à tous vos proches.', inviteTitle: 'Nous nous marions', inviteNames: 'Sarah & David', inviteMeta: 'SAMEDI · 14 JUIN 2027', inviteSymbol: '✿', inviteStyle: 'wedding' },
  { number: '02', title: 'Naissances & baptêmes', eyebrow: 'LES PREMIÈRES ÉMOTIONS', text: 'Une annonce digitale toute en douceur, avec le prénom de bébé et les informations à partager avec vos proches.', inviteTitle: 'Bienvenue au monde', inviteNames: 'Léa', inviteMeta: 'NOTRE PETIT TRÉSOR', inviteSymbol: '♡', inviteStyle: 'birth' },
  { number: '03', title: 'Anniversaires', eyebrow: 'UNE ANNÉE À CÉLÉBRER', text: 'Une invitation numérique festive et personnalisée pour annoncer la date, le lieu et l’ambiance de votre fête.', inviteTitle: 'Joyeux anniversaire', inviteNames: '30 ans', inviteMeta: 'ON FAIT LA FÊTE !', inviteSymbol: '✦', inviteStyle: 'birthday' },
  { number: '04', title: 'Cérémonies & traditions', eyebrow: 'VOS MOMENTS, VOS VALEURS', text: 'Une création digitale adaptée à votre tradition et à vos envies, dans le respect de ce qui rend votre célébration unique.', inviteTitle: 'Célébrons ensemble', inviteNames: 'Une journée précieuse', inviteMeta: 'INVITATION PERSONNALISÉE', inviteSymbol: '◇', inviteStyle: 'tradition' }
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
          <div class="occasion-collection-image" :class="'mockup-' + occasion.inviteStyle">
            <span class="occasion-collection-number">{{ occasion.number }}</span>
            <div class="digital-preview">
              <div class="preview-window-bar"><i></i><i></i><i></i><span>votre-invitation.fr</span></div>
              <div class="preview-layout">
                <div class="preview-invitation">
                  <span class="preview-ornament">{{ occasion.inviteSymbol }}</span>
                  <span class="preview-kicker">{{ occasion.inviteTitle }}</span>
                  <strong>{{ occasion.inviteNames }}</strong>
                  <span class="preview-rule"></span>
                  <span class="preview-meta">{{ occasion.inviteMeta }}</span>
                </div>
                <div class="preview-side">
                  <span>⌂ <small>Accueil</small></span>
                  <span>♡ <small>Informations</small></span>
                  <span>✉ <small>Confirmer ma présence</small></span>
                </div>
              </div>
              <div class="preview-phone">
                <div class="phone-speaker"></div>
                <span class="preview-ornament">{{ occasion.inviteSymbol }}</span>
                <span class="preview-kicker">{{ occasion.inviteTitle }}</span>
                <strong>{{ occasion.inviteNames }}</strong>
                <span class="preview-rule"></span>
                <span class="preview-meta">{{ occasion.inviteMeta }}</span>
              </div>
            </div>
            <span class="digital-label"><span></span> Invitation 100 % digitale</span>
          </div>
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
