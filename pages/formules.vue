<script setup lang="ts">
const offers = [
  {
    title: 'L’invitation personnalisée',
    label: 'UNE BASE À VOTRE IMAGE',
    description: 'Vous avez repéré un style qui vous plaît ? Nous l’adaptons à votre événement pour créer une invitation qui vous ressemble.',
    details: ['Choix des couleurs et de l’ambiance', 'Textes adaptés à votre célébration', 'Personnalisation des informations pratiques'],
    image: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=1000&q=85'
  },
  {
    title: 'La création sur mesure',
    label: 'UNE CRÉATION UNIQUE',
    description: 'Une page blanche, vos idées et une création imaginée spécialement pour votre histoire, vos envies et vos traditions.',
    details: ['Direction artistique dédiée', 'Univers visuel imaginé pour vous', 'Échanges pour affiner les détails'],
    image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1000&q=85'
  },
  {
    title: 'Les options complémentaires',
    label: 'POUR ALLER PLUS LOIN',
    description: 'Ajoutez les petits services qui rendent votre invitation encore plus pratique et mémorable, selon les besoins de votre événement.',
    details: ['Informations pratiques et programme', 'Réponses des invités selon le projet', 'Espace de messages et de souvenirs, selon faisabilité'],
    image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1000&q=85'
  }
]
</script>

<template>
  <div class="site-shell offers-page">
    <header class="site-header">
      <a class="brand" href="/" aria-label="C by C, accueil">
        <img class="brand-logo" src="https://raw.githubusercontent.com/chirelhalioua/c-by-c/main/images/logo-c-by-c.png" alt="C by C — Célébrations by Chirel">
      </a>
      <nav class="main-nav offers-page-nav" aria-label="Navigation principale">
        <a href="/">Accueil</a>
        <a href="/formules" aria-current="page">Nos formules</a>
        <a class="nav-cta" href="/contact">Demander un devis <span>↗</span></a>
      </nav>
    </header>

    <main>
      <section class="offers-hero section-pad">
        <span class="section-eyebrow">DES CRÉATIONS QUI VOUS RESSEMBLENT</span>
        <h1>Une attention unique.<br><em>Votre histoire, votre invitation.</em></h1>
        <p>Chaque célébration est différente. Découvrez les possibilités, puis parlons ensemble de ce qui correspond à votre événement. Toutes les créations font l’objet d’un devis personnalisé.</p>
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
        <p>Le tarif dépend de votre demande, du niveau de personnalisation et des options souhaitées. Décrivez-nous votre projet : nous étudierons ensemble la solution la plus adaptée, sans tarif standard imposé.</p>
        <a class="button button-gold" href="/contact">Parler de mon projet <span>↗</span></a>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-main"><a class="footer-brand" href="/"><img src="https://raw.githubusercontent.com/chirelhalioua/c-by-c/main/images/logo-c-by-c.png" alt="C by C — Célébrations by Chirel"></a><p>Les moments qui nous unissent.<br><span>Invitations digitales imaginées avec cœur.</span></p></div>
      <div class="footer-bottom"><span>© {{ new Date().getFullYear() }} C by C — Célébrations by Chirel</span><nav aria-label="Navigation de pied de page"><a href="/">Accueil</a><a href="/contact">Contact</a></nav><span>FAIT AVEC CŒUR PAR CHIREL</span></div>
    </footer>
  </div>
</template>
