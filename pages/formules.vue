<script setup lang="ts">
import { ref } from 'vue'
const menuOpen = ref(false)
const closeMenu = () => { menuOpen.value = false }
const offers = [
  {
    title: 'L’invitation numérique',
    label: 'UNE INVITATION À PARTAGER',
    description: 'Une invitation à votre image, pensée jusque dans les détails : je crée un univers graphique personnalisé, puis un visuel numérique facile à transmettre à vos proches par message, courriel ou réseaux sociaux.',
    details: ['Un visuel numérique personnalisé', 'Vos textes, date, lieu et informations essentielles', 'Un format facile à partager avec vos invités'],
    image: 'https://images.squarespace-cdn.com/content/v1/5c3185170dbda321bc69ecd7/1594226267825-X4NNPK93LW49PCZ0TZ3R/classic%2Bcustom%2Bwedding%2Bivnitatons.jpg?format=2500w'
  },
  {
    title: 'Le site de célébration',
    label: 'UN SITE AU DESIGN PERSONNALISÉ',
    description: 'Pour réunir toutes les informations de votre événement au même endroit, je conçois un site à votre image. Son univers graphique, ses couleurs, ses textes et son ambiance sont personnalisés pour raconter votre histoire.',
    details: ['Un univers graphique personnalisé : couleurs, typographies et ambiance', 'Une page dédiée avec programme, adresse, horaires et informations pratiques', 'Possibilité d’ajouter un formulaire de réponse des invités selon le projet'],
    image: 'https://i.etsystatic.com/51367786/r/il/a78c3f/6664665884/il_fullxfull.6664665884_h868.jpg'
  },
  {
    title: 'Un projet particulier ?',
    label: 'IMAGINONS-LE ENSEMBLE',
    description: 'Vous avez une idée différente, des besoins spécifiques ou vous hésitez entre plusieurs formats ? Parlons de votre événement pour imaginer une création adaptée à votre envie.',
    details: ['Conseils pour choisir le format adapté', 'Personnalisation graphique complète selon votre histoire : couleurs, typographies, textes et ambiance', 'Fonctionnalités et options étudiées selon votre projet'],
    image: 'https://rlv.zcache.com/luxury_white_gold_elegant_floral_birthday_invitation-r_illy65_644.webp'
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
        <a href="/occasions" @click="closeMenu">Les occasions</a>
        <a href="/formules" aria-current="page" @click="closeMenu">Nos formules</a>
        <a class="nav-cta" href="/contact" @click="closeMenu">Contact <span>↗</span></a>
      </nav>
    </header>

    <main>
      <section class="offers-hero section-pad">
        <span class="section-eyebrow">DES CRÉATIONS QUI VOUS RESSEMBLENT</span>
        <h1>Une attention unique.<br><em>Votre histoire, votre invitation.</em></h1>
        <p>Un seul événement, mille façons de le raconter. Invitation digitale ou site de célébration, chaque création est imaginée autour de votre histoire. Univers graphique, couleurs, typographies, textes et détails : tout est pensé avec vous pour donner vie à une création qui vous ressemble. Chaque projet fait l’objet d’un devis personnalisé.</p>
      </section>

      <section class="offers-list section-pad">
        <details v-for="(offer, index) in offers" :key="offer.title" class="offer-item">
          <summary>
            <img class="offer-thumb" :src="offer.image" :alt="''" loading="lazy">
            <span class="offer-summary-copy">
              <span class="offer-label">{{ offer.label }}</span>
              <span class="offer-summary-title">{{ offer.title }}</span>
            </span>
            <span class="offer-toggle" aria-hidden="true">+</span>
          </summary>
          <div class="offer-expanded">
            <img class="offer-expanded-image" :src="offer.image" :alt="offer.title" loading="lazy">
            <div class="offer-copy">
              <p>{{ offer.description }}</p>
              <ul><li v-for="detail in offer.details" :key="detail">{{ detail }}</li></ul>
              <a class="button button-gold" href="/contact">Demander un devis personnalisé <span>↗</span></a>
            </div>
          </div>
        </details>
      </section>

      <section class="options-section section-pad">
        <div class="options-heading">
          <span class="section-eyebrow">POUR ALLER PLUS LOIN</span>
          <h2>Les petits plus qui font <em>la différence.</em></h2>
          <p>Ajoutez une attention particulière à votre invitation ou à votre site. Les options sont proposées selon votre événement, vos envies et la faisabilité du projet.</p>
        </div>
        <div class="options-grid">
          <details class="option-item">
            <summary><span class="option-symbol">✳</span><span class="option-title">Réponse des invités</span><span class="option-toggle" aria-hidden="true">+</span></summary>
            <p>Un bouton « Je confirme ma présence » renvoie vers un formulaire de réponse. Il peut être proposé avec l’invitation numérique ou intégré au site de célébration, selon le projet.</p>
          </details>
          <details class="option-item">
            <summary><span class="option-symbol">♡</span><span class="option-title">Livre d’or numérique</span><span class="option-toggle" aria-hidden="true">+</span></summary>
            <p>Un espace pour recevoir les vœux, petits mots et souvenirs de vos proches.</p>
          </details>
          <details class="option-item">
            <summary><span class="option-symbol">⌖</span><span class="option-title">Programme détaillé</span><span class="option-toggle" aria-hidden="true">+</span></summary>
            <p>Un déroulé personnalisé de la célébration : accueil des invités, cérémonie, cocktail, repas, animations et horaires des différents temps forts.</p>
          </details>
          <details class="option-item">
            <summary><span class="option-symbol">▧</span><span class="option-title">Galerie de photos</span><span class="option-toggle" aria-hidden="true">+</span></summary>
            <p>Un espace pour rassembler et partager les souvenirs de votre célébration.</p>
          </details>
          <details class="option-item">
            <summary><span class="option-symbol">◷</span><span class="option-title">Compte à rebours</span><span class="option-toggle" aria-hidden="true">+</span></summary>
            <p>Un compte à rebours personnalisé pour faire patienter vos invités jusqu’au grand jour.</p>
          </details>
          <details class="option-item">
            <summary><span class="option-symbol">✧</span><span class="option-title">Invitation animée</span><span class="option-toggle" aria-hidden="true">+</span></summary>
            <p>Des animations délicates pour donner vie à votre invitation numérique.</p>
          </details>
          <details class="option-item">
            <summary><span class="option-symbol">❋</span><span class="option-title">Signature graphique</span><span class="option-toggle" aria-hidden="true">+</span></summary>
            <p>Initiales, monogramme ou motif personnalisé, assorti à l’univers de votre événement.</p>
          </details>
        </div>
        <p class="options-footnote">Chaque option est étudiée ensemble et peut faire l’objet d’un supplément au devis.</p>
        <a class="button button-gold" href="/contact">Imaginer mes options <span>↗</span></a>
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
