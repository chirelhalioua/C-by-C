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
    icon: '♡'
  },
  {
    title: 'Le site de célébration',
    label: 'UN SITE AU DESIGN PERSONNALISÉ',
    description: 'Pour réunir toutes les informations de votre événement au même endroit, je conçois un site à votre image. Son univers graphique, ses couleurs, ses textes et son ambiance sont personnalisés pour raconter votre histoire.',
    details: ['Un univers graphique personnalisé : couleurs, typographies et ambiance', 'Une page dédiée avec programme, adresse, horaires et informations pratiques', 'Possibilité d’ajouter un formulaire de réponse des invités selon le projet'],
    icon: '⌂'
  },
  {
    title: 'Un projet particulier ?',
    label: 'IMAGINONS-LE ENSEMBLE',
    description: 'Vous avez une idée différente, des besoins spécifiques ou vous hésitez entre plusieurs formats ? Parlons de votre événement pour imaginer une création adaptée à votre envie.',
    details: ['Conseils pour choisir le format adapté', 'Personnalisation graphique complète selon votre histoire : couleurs, typographies, textes et ambiance', 'Fonctionnalités et options étudiées selon votre projet'],
    icon: '✧'
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
            <span class="offer-thumb offer-icon" aria-hidden="true">{{ offer.icon }}</span>
            <span class="offer-summary-copy">
              <span class="offer-label">{{ offer.label }}</span>
              <span class="offer-summary-title">{{ offer.title }}</span>
            </span>
            <span class="offer-toggle" aria-hidden="true">+</span>
          </summary>
          <div class="offer-expanded">
            <div class="offer-expanded-image offer-icon-large" aria-hidden="true">{{ offer.icon }}</div>
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
            <summary><span class="option-symbol" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="4" width="13" height="15" rx="2"/><path d="m6.5 11 2.2 2.2 4-4.2M16.5 15.5H21m-3-3 3 3-3 3"/></svg></span><span class="option-title">Réponse des invités</span><span class="option-toggle" aria-hidden="true">+</span></summary>
            <p>Un bouton « Je confirme ma présence » renvoie vers un formulaire de réponse. Il peut être proposé avec l’invitation numérique ou intégré au site de célébration, selon le projet.</p>
          </details>
          <details class="option-item">
            <summary><span class="option-symbol" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3v6M8 3v6M5 6h3M6.5 9v12M16 3c-2 2-2.5 5-2.5 8h4V3M15.5 11v10"/></svg></span><span class="option-title">Plan de table</span><span class="option-toggle" aria-hidden="true">+</span></summary>
            <p>Si cette option est incluse dans votre invitation, vos invités ayant confirmé leur présence pourront retrouver leur table. Le placement reste masqué pendant la préparation et n’apparaît qu’au moment où vous publiez le plan finalisé.</p>
          </details>
          <details class="option-item">
            <summary><span class="option-symbol" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 2 4-2 3 5-3 2-1.5-2L17 21H7l2.5-13L8 10 5 8l3-5Z"/><path d="M9.5 8h5"/></svg></span><span class="option-title">Dress code</span><span class="option-toggle" aria-hidden="true">+</span></summary>
            <p>Précisez le thème vestimentaire ou les couleurs souhaitées pour aider vos invités à se préparer, dans une présentation assortie à votre invitation.</p>
          </details>
          <details class="option-item">
            <summary><span class="option-symbol" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6c-2.5-2-5.5-2-9-1v14c3.5-1 6.5-1 9 1 2.5-2 5.5-2 9-1V5c-3.5-1-6.5-1-9 1Z"/><path d="M12 6v14M5.5 8.5c1.5-.3 3-.2 4.5.5M14 9c1.5-.7 3-.8 4.5-.5"/></svg></span><span class="option-title">Livre d’or numérique</span><span class="option-toggle" aria-hidden="true">+</span></summary>
            <p>Un espace pour recevoir les vœux, petits mots et souvenirs de vos proches.</p>
          </details>
          <details class="option-item">
            <summary><span class="option-symbol" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10h18v11H3zM2 7h20v3H2zM12 7v14"/><path d="M12 7H7.5a2.5 2.5 0 1 1 2.2-3.7L12 7Zm0 0h4.5a2.5 2.5 0 1 0-2.2-3.7L12 7Z"/></svg></span><span class="option-title">Liste de cadeaux</span><span class="option-toggle" aria-hidden="true">+</span></summary>
            <p>Partagez avec vos invités une sélection d’idées cadeaux ou un lien vers votre liste de souhaits. Ils peuvent ainsi découvrir ce qui vous ferait plaisir et choisir un cadeau qui vous correspond. Les modalités (liens externes, liste personnalisée ou participation) sont définies ensemble selon votre projet.</p>
          </details>
          <details class="option-item">
            <summary><span class="option-symbol" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4v16M5 6h3M5 12h3M5 18h3"/><circle cx="13" cy="6" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="13" cy="18" r="2"/><path d="M15 6h4M18 12h2M15 18h4"/></svg></span><span class="option-title">Programme détaillé</span><span class="option-toggle" aria-hidden="true">+</span></summary>
            <p>Un déroulé personnalisé de la célébration : accueil des invités, cérémonie, cocktail, repas, animations et horaires des différents temps forts.</p>
          </details>
          <details class="option-item">
            <summary><span class="option-symbol" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="14" rx="2"/><path d="M8 6 9.5 3.5h5L16 6"/><circle cx="12" cy="13" r="4"/><circle cx="12" cy="13" r="1.3"/></svg></span><span class="option-title">Galerie de photos</span><span class="option-toggle" aria-hidden="true">+</span></summary>
            <p>Un espace pour rassembler et partager les souvenirs de votre célébration.</p>
          </details>
          <details class="option-item">
            <summary><span class="option-symbol" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M9 2h6M12 5V3M12 13l4-2M18 7l1.5-1.5"/></svg></span><span class="option-title">Compte à rebours</span><span class="option-toggle" aria-hidden="true">+</span></summary>
            <p>Un compte à rebours personnalisé pour faire patienter vos invités jusqu’au grand jour.</p>
          </details>
          <details class="option-item">
            <summary><span class="option-symbol" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 2.7 6.3L21 11l-6.3 2.7L12 20l-2.7-6.3L3 11l6.3-2.7L12 2Z"/><path d="m19 16 1.2 2.8L23 20l-2.8 1.2L19 24l-1.2-2.8L15 20l2.8-1.2L19 16Z" transform="translate(-1 -2) scale(.9)"/></svg></span><span class="option-title">Invitation animée</span><span class="option-toggle" aria-hidden="true">+</span></summary>
            <p>Des animations délicates pour donner vie à votre invitation numérique.</p>
          </details>
          <details class="option-item">
            <summary><span class="option-symbol" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m4 16-.8 4.8L8 20l11.5-11.5a2.5 2.5 0 0 0-3.5-3.5L4 16Z"/><path d="m14.5 7.5 3.5 3.5M3 22h18"/></svg></span><span class="option-title">Signature graphique</span><span class="option-toggle" aria-hidden="true">+</span></summary>
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
