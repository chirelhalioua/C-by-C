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
        <span class="section-eyebrow">LES MODALITÉS DE NOS PRESTATIONS</span>
        <h1>Conditions générales de vente</h1>
        <p> C by C — Célébrations by Chirel </p>
      </header>
      <article class="legal-content">

        <p>Les présentes conditions constituent une base de travail pour les prestations d’invitations numériques et de sites de célébration proposées par C by C. Elles doivent être complétées et vérifiées selon le fonctionnement commercial réel avant d’être opposées aux clients.</p>
        <section><h2>Prestataire</h2><p>Les prestations sont proposées par <strong>[nom légal / dénomination, statut et adresse à compléter]</strong>, sous le nom commercial C by C — Célébrations by Chirel. Contact : <a href="mailto:contact@chirelhalioua.fr">contact@chirelhalioua.fr</a>.</p></section>
        <section><h2>Prestations et commande</h2><p>Les prestations peuvent comprendre la création d’invitations numériques, de pages ou sites de célébration et des options définies avec le client. Le périmètre, les livrables, les délais et le prix sont précisés dans la proposition ou le devis. Une demande envoyée via le formulaire de contact ne constitue pas une commande et n’engage pas le visiteur.</p><p>La commande est considérée comme confirmée selon les modalités expressément acceptées par le client dans le devis ou le contrat.</p></section>
        <section><h2>Prix et paiement</h2><p>Les prix, taxes applicables, moyens de paiement, échéances et éventuel acompte doivent être indiqués avant la confirmation de commande dans le devis ou le parcours d’achat.</p><p><strong>[Préciser ici les moyens de paiement, l’échéancier et le traitement des retards ou impayés.]</strong></p></section>
        <section><h2>Délais et validation</h2><p>Le calendrier est défini selon la date de l’événement, la complexité du projet et la transmission des contenus nécessaires par le client. Le client s’engage à vérifier soigneusement les textes, dates, liens et informations avant la validation finale.</p><p><strong>[Préciser le nombre de séries de modifications incluses, le délai de retour du client et les éventuels frais supplémentaires.]</strong></p></section>
        <section><h2>Annulation et rétractation</h2><p>Les modalités d’annulation doivent être précisées dans le devis ou le contrat. Pour les contrats conclus à distance avec des consommateurs, un droit de rétractation peut s’appliquer. Les exceptions et les règles applicables au commencement anticipé d’une prestation doivent être examinées selon le service proposé et les consentements recueillis ; la personnalisation ne supprime pas automatiquement ce droit.</p><p><strong>[Faire vérifier et compléter cette section avant toute vente, notamment pour les demandes d’exécution avant la fin du délai de rétractation.]</strong></p></section>
        <section><h2>Propriété intellectuelle et droit d’utilisation</h2><p>Les droits d’utilisation accordés au client sur la création livrée, ainsi que les éventuelles restrictions de reproduction ou de modification, doivent être décrits dans le devis ou le contrat. Les éléments fournis par le client restent sous sa responsabilité, notamment quant aux autorisations nécessaires.</p></section>
        <section><h2>Responsabilité et contenus fournis</h2><p>Le client est responsable de la vérification des informations communiquées et validées. Les modalités relatives à l’accès au site, à l’hébergement, à la durée de disponibilité et aux éventuels services tiers doivent être précisées selon la formule achetée.</p></section>
        <section><h2>Réclamations et médiation</h2><p>Pour toute question ou réclamation, contactez <a href="mailto:contact@chirelhalioua.fr">contact@chirelhalioua.fr</a>. Si l’activité relève de l’obligation de médiation de la consommation, les coordonnées du médiateur compétent doivent être ajoutées ici avant la vente : <strong>[médiateur désigné et coordonnées à compléter]</strong>.</p></section>
        <section><h2>Droit applicable</h2><p>Les présentes conditions sont soumises au droit français, sous réserve des dispositions impératives applicables aux consommateurs.</p></section>

      </article>
      <p class="legal-updated">Document préparé pour le site C by C. Les informations entre crochets doivent être complétées et vérifiées avant publication définitive.</p>
    </main>
    <footer class="site-footer">
      <div class="footer-main"><a class="footer-brand" href="/"><img src="https://raw.githubusercontent.com/chirelhalioua/c-by-c/main/images/logo-c-by-c.png" alt="C by C — Célébrations by Chirel"></a><p>Les moments qui nous unissent.<br><span>Invitations digitales imaginées avec cœur.</span></p></div>
      <div class="footer-bottom"><span>© {{ new Date().getFullYear() }} C by C — Célébrations by Chirel</span><nav aria-label="Liens utiles et réglementaires"><a href="/mentions-legales">Mentions légales</a><a href="/confidentialite">Confidentialité</a><a href="/cgv">CGV</a><a href="/cookies">Cookies</a><a href="/contact">Contact</a></nav><span>FAIT AVEC CŒUR PAR CHIREL</span></div>
    </footer>
  </div>
</template>
