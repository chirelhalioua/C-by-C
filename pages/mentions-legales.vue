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
        <span class="section-eyebrow">INFORMATIONS LÉGALES</span>
        <h1>Mentions légales</h1>
        <p> C by C — Célébrations by Chirel </p>
      </header>
      <article class="legal-content">

        <section><h2>Éditeur du site</h2><p>Le site C by C — Célébrations by Chirel est édité par <strong>Chirel Halioua</strong>, exerçant sous le nom commercial C by C.</p><ul><li>Statut : projet en cours de création, activité non immatriculée à ce jour</li><li>Adresse : Paris, France</li><li>SIREN / SIRET : non attribué à ce jour</li><li>Immatriculation : aucune à ce jour</li><li>TVA : situation à préciser avant le début de toute activité commerciale</li><li>Adresse de contact : <a href="mailto:contact@chirelhalioua.fr">contact@chirelhalioua.fr</a></li><li>Directrice de la publication : Chirel Halioua</li></ul></section>
        <section><h2>Hébergement</h2><p>Le site est hébergé par Vercel Inc. Les coordonnées complètes de l’hébergeur devront être vérifiées et ajoutées avant la mise en ligne définitive.</p></section>
        <section><h2>Propriété intellectuelle</h2><p>Sauf mention contraire, les contenus, textes, éléments graphiques, identités visuelles et créations présentés sur ce site sont protégés par les règles applicables en matière de propriété intellectuelle. Toute reproduction ou réutilisation non autorisée est interdite.</p><p>Les conditions d’utilisation des créations livrées aux clients sont précisées dans les conditions contractuelles applicables à la commande.</p></section>
        <section><h2>Contact</h2><p>Pour toute question relative au site, vous pouvez écrire à <a href="mailto:contact@chirelhalioua.fr">contact@chirelhalioua.fr</a>.</p></section>

      </article>
      <p class="legal-updated">Projet en préparation : les informations et obligations applicables doivent être vérifiées avant la mise en ligne définitive.</p>
    </main>
    <footer class="site-footer">
      <div class="footer-main"><a class="footer-brand" href="/"><img src="https://raw.githubusercontent.com/chirelhalioua/c-by-c/main/images/logo-c-by-c.png" alt="C by C — Célébrations by Chirel"></a><p>Les moments qui nous unissent.<br><span>Invitations digitales imaginées avec cœur.</span></p></div>
      <div class="footer-bottom"><span>© {{ new Date().getFullYear() }} C by C — Célébrations by Chirel</span><nav aria-label="Liens utiles et réglementaires"><a href="/mentions-legales">Mentions légales</a><a href="/confidentialite">Confidentialité</a><a href="/cgv">CGV</a><a href="/cookies">Cookies</a><a href="/contact">Contact</a></nav><span>FAIT AVEC CŒUR PAR CHIREL</span></div>
    </footer>
  </div>
</template>
