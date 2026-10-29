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
        <span class="section-eyebrow">VOS DONNÉES, EN TOUTE TRANSPARENCE</span>
        <h1>Politique de confidentialité</h1>
        <p> C by C — Célébrations by Chirel </p>
      </header>
      <article class="legal-content">

        <p>Cette politique explique comment C by C traite les informations transmises via le formulaire de contact. Elle doit être ajustée aux outils effectivement utilisés et aux durées de conservation réellement appliquées.</p>
        <section><h2>Responsable du traitement</h2><p>Le responsable du traitement est <strong>Chirel Halioua, pour le projet C by C</strong>, joignable à <a href="mailto:contact@chirelhalioua.fr">contact@chirelhalioua.fr</a>.</p></section>
        <section><h2>Quelles données sont collectées ?</h2><p>Lorsque vous remplissez le formulaire, les informations demandées peuvent inclure votre prénom, nom, adresse e-mail, téléphone facultatif, type et date de l’événement, formule envisagée, budget, options souhaitées et message.</p></section>
        <section><h2>Pourquoi les utiliser ?</h2><p>Ces données servent à recevoir et traiter votre demande, échanger avec vous au sujet de votre projet et préparer, si vous le souhaitez, une proposition commerciale. Elles ne doivent pas être utilisées à des fins de prospection non sollicitée sans base légale appropriée.</p></section>
        <section><h2>Base légale et caractère obligatoire</h2><p>Le traitement des informations nécessaires pour répondre à votre demande repose généralement sur les démarches précontractuelles que vous sollicitez. Les champs obligatoires sont indiqués dans le formulaire ; sans eux, il peut être impossible de traiter la demande.</p></section>
        <section><h2>Destinataires et prestataires</h2><p>Les données sont accessibles aux personnes chargées de gérer les demandes. Le site utilise des prestataires techniques d’hébergement et d’envoi d’e-mails, notamment Vercel et Brevo selon la configuration actuelle. Les prestataires, leurs rôles et les éventuels transferts hors de l’Espace économique européen doivent être confirmés dans la configuration réelle du service.</p></section>
        <section><h2>Durée de conservation</h2><p>Les données sont conservées uniquement pendant la durée nécessaire au traitement de la demande et au suivi de la relation. <strong>Avant publication, définir une durée de conservation précise et s’assurer qu’elle est effectivement appliquée.</strong> Si une commande est conclue, certaines données peuvent être conservées plus longtemps pour satisfaire aux obligations légales et comptables.</p></section>
        <section><h2>Vos droits</h2><p>Selon les conditions prévues par la réglementation, vous pouvez demander l’accès à vos données, leur rectification, leur effacement, la limitation du traitement ou vous opposer à certains traitements. Pour exercer vos droits, écrivez à <a href="mailto:contact@chirelhalioua.fr">contact@chirelhalioua.fr</a>. Vous pouvez également introduire une réclamation auprès de la CNIL.</p></section>
        <section><h2>Sécurité</h2><p>Des mesures techniques et organisationnelles adaptées doivent être mises en œuvre pour protéger les informations. Ne transmettez pas d’informations sensibles dans le formulaire.</p></section>
        <section><h2>Mise à jour</h2><p>Cette politique peut être actualisée en cas d’évolution du site, des outils utilisés ou de la réglementation.</p></section>

      </article>
      <p class="legal-updated">Projet en préparation : les informations et obligations applicables doivent être vérifiées avant la mise en ligne définitive.</p>
    </main>
    <footer class="site-footer">
      <div class="footer-main"><a class="footer-brand" href="/"><img src="https://raw.githubusercontent.com/chirelhalioua/c-by-c/main/images/logo-c-by-c.png" alt="C by C — Célébrations by Chirel"></a><p>Les moments qui nous unissent.<br><span>Invitations digitales imaginées avec cœur.</span></p></div>
      <div class="footer-bottom"><span>© {{ new Date().getFullYear() }} C by C — Célébrations by Chirel</span><nav aria-label="Liens utiles et réglementaires"><a href="/mentions-legales">Mentions légales</a><a href="/confidentialite">Confidentialité</a><a href="/contact">Contact</a></nav><span>FAIT AVEC CŒUR PAR CHIREL</span></div>
    </footer>
  </div>
</template>
