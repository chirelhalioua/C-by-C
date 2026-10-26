<script setup lang="ts">
import { ref } from 'vue'
const menuOpen = ref(false)
const closeMenu = () => { menuOpen.value = false }
const offers = [
  {
    title: 'L’invitation digitale',
    label: 'UNE INVITATION À PARTAGER',
    description: 'Une invitation à votre image, pensée jusque dans les détails : je crée un univers graphique personnalisé, puis un visuel numérique facile à transmettre à vos proches par message, e-mail ou réseaux sociaux.',
    details: ['Un visuel numérique personnalisé', 'Vos textes, date, lieu et informations essentielles', 'Un format facile à partager avec vos invités'],
    image: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=1000&q=85'
  },
  {
    title: 'Le mini-site de célébration',
    label: 'TOUTES LES INFORMATIONS AU MÊME ENDROIT',
    description: 'Pour réunir toutes les informations de votre événement au même endroit, je conçois un mini-site à votre image. Son univers graphique, ses couleurs, ses textes et son ambiance sont personnalisés pour raconter votre histoire.',
    details: ['Une page dédiée à votre événement', 'Programme, adresse, horaires et informations pratiques', 'Possibilité d’étudier un formulaire de réponse des invités selon le projet'],
    image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1000&q=85'
  },
  {
    title: 'Un projet particulier ?',
    label: 'IMAGINONS-LE ENSEMBLE',
    description: 'Vous avez une idée différente, des besoins spécifiques ou vous hésitez entre plusieurs formats ? Parlons de votre événement pour imaginer une création adaptée à votre envie.',
    details: ['Conseils pour choisir le format adapté', 'Direction graphique pensée autour de votre histoire', 'Fonctionnalités et options étudiées selon votre projet'],
    image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1000&q=85'
  }
]
</script>

<template>
  <div class="site-shell offers-page">
    <header class="site-header">
      <a class="brand" href="/" aria-label="C by C, accueil" @click="closeMenu">
        <img class="brand-logo" src="https://raw.githubusercontent.com/chirelhalioua/c-by-c/main/images/logo-c-by-c.png" alt="C by C — Célébrations by Chirel">
      </a>
      <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-label="Ouvrir le menu" @click="menuOpen = !menuOpen">
        <span></span><span></span>
      </button>
      <nav class="main-nav offers-page-nav" :class="{ 'is-open': menuOpen }" aria-label="Navigation principale">
        <a href="/" @click="closeMenu">Accueil</a>
        <a href="/formules" aria-current="page" @click="closeMenu">Nos formules</a>
        <a class="nav-cta" href="/contact" @click="closeMenu">Demander un devis <span>↗</span></a>
      </nav>
    </header>

    <main>
      <section class="offers-hero section-pad">
        <span class="section-eyebrow">DES CRÉATIONS QUI VOUS RESSEMBLENT</span>
        <h1>Une attention unique.<br><em>Votre histoire, votre invitation.</em></h1>
        <p>Un seul événement, mille façons de le raconter. Invitation digitale ou mini-site, chaque création est imaginée autour de votre histoire. Univers graphique, couleurs, typographies, textes et détails : tout est pensé avec vous pour donner vie à une création qui vous ressemble. Chaque projet fait l’objet d’un devis personnalisé.</p>
      </section>

      <section class="offers-list section-pad">
        <article v-for="(offer, index) in offers" :key="offer.title" class="offer-card" :class="{ 'offer-card-reverse': index === 1 }">
          <div class="offer-image"><img :src="offer.image" :alt="offer.title" loading="lazy"></div>
          <div class="offer-copy">
            <span class="offer-label">{{ offer.label }}</span>
            <h2>{{ offer.title }}</h2>
            <p>{{ offer.description }}</p>
            <ul><li v-for="detail in offer.details" :key="detail">{{ detail }}</li></ul>
            <a class="button button-gold" href="/contact">Demander un devis personnalisé <span>↗</span></a>
          </div>
        </article>
      </section>

      <section class="offers-note section-pad">
        <span class="section-eyebrow">UN PROJET PARTICULIER ?</span>
        <h2>Commençons par en parler.</h2>
        <p>Le devis dépend du format choisi, des contenus à intégrer et du niveau de personnalisation. Rien n’est à choisir définitivement dès maintenant : décrivez votre événement et nous définirons ensemble la solution la plus adaptée.</p>
        <a class="button button-gold" href="/contact">Parler de mon projet <span>↗</span></a>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-main"><a class="footer-brand" href="/"><img src="https://raw.githubusercontent.com/chirelhalioua/c-by-c/main/images/logo-c-by-c.png" alt="C by C — Célébrations by Chirel"></a><p>Les moments qui nous unissent.<br><span>Invitations digitales imaginées avec cœur.</span></p></div>
      <div class="footer-bottom"><span>© {{ new Date().getFullYear() }} C by C — Célébrations by Chirel</span><nav aria-label="Navigation de pied de page"><a href="/">Accueil</a><a href="/contact">Contact</a></nav><span>FAIT AVEC CŒUR PAR CHIREL</span></div>
    </footer>
  </div>
</template>
