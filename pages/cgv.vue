<script setup lang="ts">
const menuOpen = ref(false)
const closeMenu = () => { menuOpen.value = false }
</script>

<template>
  <div class="site-shell legal-page">
    <header class="site-header">
      <a class="brand" href="/" aria-label="C by C, accueil" @click="closeMenu">
        <img class="brand-logo" src="https://raw.githubusercontent.com/chirelhalioua/c-by-c/main/images/logo-c-by-c.png" alt="C by C — Célébrations by Chirel">
      </a>
      <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-label="Ouvrir le menu" @click="menuOpen = !menuOpen"><span></span><span></span></button>
      <nav class="main-nav" :class="{ 'is-open': menuOpen }" aria-label="Navigation principale">
        <a href="/" @click="closeMenu">Accueil</a>
        <a href="/occasions" @click="closeMenu">Les occasions</a>
        <a href="/formules" @click="closeMenu">Nos formules</a>
        <a class="nav-cta" href="/contact" @click="closeMenu">Contact <span>↗</span></a>
      </nav>
    </header>

    <main class="legal-main section-pad">
      <header class="legal-heading">
        <span class="section-eyebrow">INFORMATIONS COMMERCIALES</span>
        <h1>Conditions générales de vente</h1>
        <p>C by C — Célébrations by Chirel</p>
      </header>
      <article class="legal-content">
        <section>
          <h2>Le projet est en préparation</h2>
          <p>C by C prépare actuellement le lancement de son activité de création d’invitations numériques et de sites de célébration personnalisés.</p>
          <p><strong>Les commandes ne sont pas encore ouvertes.</strong> Cette page présente la situation actuelle du projet ; elle ne constitue pas encore des conditions générales de vente définitives.</p>
        </section>
        <section>
          <h2>Vous avez un projet en tête ?</h2>
          <p>Vous pouvez dès maintenant nous contacter pour présenter votre événement, partager vos idées et obtenir des informations sur les créations envisagées.</p>
          <p>Chaque demande pourra être étudiée afin d’échanger sur vos besoins et, si cela est possible, de préparer une proposition adaptée à votre projet.</p>
          <p><strong>Les demandes de renseignements ne constituent pas une commande et n’engagent pas les personnes qui nous contactent.</strong> Aucun acompte ni paiement n’est demandé à ce stade.</p>
          <p><a href="/contact">Présenter votre projet ↗</a></p>
        </section>
        <section>
          <h2>Avant l’ouverture des commandes</h2>
          <p>Les conditions commerciales définitives seront complétées et communiquées avant l’ouverture des commandes et la conclusion de tout contrat, avec les informations légales et les modalités applicables aux prestations proposées.</p>
        </section>
      </article>
      <p class="legal-updated">Page provisoire — projet en préparation.</p>
    </main>

    <footer class="site-footer">
      <div class="footer-main"><a class="footer-brand" href="/"><img src="https://raw.githubusercontent.com/chirelhalioua/c-by-c/main/images/logo-c-by-c.png" alt="C by C — Célébrations by Chirel"></a><p>Les moments qui nous unissent.<br><span>Invitations digitales imaginées avec cœur.</span></p></div>
      <div class="footer-bottom"><span>© {{ new Date().getFullYear() }} C by C — Célébrations by Chirel</span><nav class="footer-legal-links" aria-label="Liens utiles et réglementaires"><a href="/">Accueil</a><a href="/contact">Contact</a><a href="/mentions-legales">Mentions légales</a><a href="/confidentialite">Confidentialité</a><a href="/cgv">CGV</a></nav><span>FAIT AVEC CŒUR PAR CHIREL</span></div>
    </footer>
  </div>
</template>
