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
        <span class="section-eyebrow">VOTRE NAVIGATION</span>
        <h1>Cookies et traceurs</h1>
        <p> C by C — Célébrations by Chirel </p>
      </header>
      <article class="legal-content">

        <p>Cette page décrit les principes applicables aux cookies et traceurs. Elle doit correspondre aux outils effectivement installés sur le site et être actualisée si des outils de mesure d’audience, de publicité, de vidéo ou de réseaux sociaux sont ajoutés.</p>
        <section><h2>Qu’est-ce qu’un cookie ?</h2><p>Un cookie ou traceur est un élément qui peut être enregistré sur votre appareil lorsque vous consultez un site. Certains sont nécessaires au fonctionnement du service ; d’autres servent à mesurer l’audience ou à proposer des contenus personnalisés.</p></section>
        <section><h2>Quels traceurs sont utilisés sur C by C ?</h2><p>Les traceurs réellement déposés par le site doivent être recensés et listés ici, avec leur finalité, leur fournisseur et leur durée de conservation. <strong>Vérifier les cookies et traceurs réellement utilisés sur le site avant publication.</strong></p></section>
        <section><h2>Votre choix</h2><p>Les traceurs strictement nécessaires au service peuvent être exemptés de consentement dans les conditions prévues par la réglementation. Les traceurs qui nécessitent un consentement ne doivent être activés qu’après un choix valable ; le refus doit être aussi simple que l’acceptation. Si le site n’utilise aucun traceur soumis à consentement, un bandeau de consentement n’est pas automatiquement nécessaire.</p></section>
        <section><h2>Modifier vos préférences</h2><p>Si des traceurs soumis à consentement sont utilisés, un moyen de consulter ou modifier vos préférences doit être accessible à tout moment. <strong>Si des traceurs soumis à consentement sont utilisés, ajouter un mécanisme permettant de gérer les préférences.</strong></p></section>
        <section><h2>En savoir plus</h2><p>Pour toute question relative aux données personnelles, écrivez à <a href="mailto:contact@chirelhalioua.fr">contact@chirelhalioua.fr</a>. Vous pouvez également consulter les informations de la CNIL sur les cookies et autres traceurs.</p></section>

      </article>
      <p class="legal-updated">Projet en préparation : les informations et obligations applicables doivent être vérifiées avant la mise en ligne définitive.</p>
    </main>
    <footer class="site-footer">
      <div class="footer-main"><a class="footer-brand" href="/"><img src="https://raw.githubusercontent.com/chirelhalioua/c-by-c/main/images/logo-c-by-c.png" alt="C by C — Célébrations by Chirel"></a><p>Les moments qui nous unissent.<br><span>Invitations digitales imaginées avec cœur.</span></p></div>
      <div class="footer-bottom"><span>© {{ new Date().getFullYear() }} C by C — Célébrations by Chirel</span><nav aria-label="Liens utiles et réglementaires"><a href="/mentions-legales">Mentions légales</a><a href="/confidentialite">Confidentialité</a><a href="/cgv">CGV</a><a href="/cookies">Cookies</a><a href="/contact">Contact</a></nav><span>FAIT AVEC CŒUR PAR CHIREL</span></div>
    </footer>
  </div>
</template>
