<script setup lang="ts">
import { reactive, ref } from 'vue'

const menuOpen = ref(false)
const closeMenu = () => { menuOpen.value = false }

const form = reactive({
  prenom: '',
  nom: '',
  email: '',
  telephone: '',
  occasion: '',
  date: '',
  formule: '',
  budget: '',
  message: '',
  consentement: false
})

const submitForm = () => {
  const subject = encodeURIComponent(`Demande C by C — ${form.occasion || 'Nouvelle demande'}`)
  const body = encodeURIComponent(
`Bonjour Chirel,

Je souhaite vous parler de mon projet.

Prénom : ${form.prenom}
Nom : ${form.nom}
E-mail : ${form.email}
Téléphone : ${form.telephone || 'Non renseigné'}
Type de célébration : ${form.occasion}
Date de l'événement : ${form.date || 'À définir'}
Formule souhaitée : ${form.formule || 'À définir'}
Budget envisagé : ${form.budget || 'À discuter'}

Mon projet :
${form.message}

Consentement aux données personnelles : oui

Bien cordialement,
${form.prenom} ${form.nom}`)
  window.location.href = `mailto:contact@chirelhalioua.fr?subject=${subject}&body=${body}`
}
</script>

<template>
  <div class="site-shell contact-page">
    <header class="site-header">
      <a class="brand" href="/" aria-label="C by C, accueil" @click="closeMenu">
        <img class="brand-logo" src="https://raw.githubusercontent.com/chirelhalioua/c-by-c/main/images/logo-c-by-c.png" alt="C by C — Célébrations by Chirel">
      </a>
      <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-label="Ouvrir le menu" @click="menuOpen = !menuOpen">
        <span></span><span></span>
      </button>
      <nav class="main-nav contact-page-nav" :class="{ 'is-open': menuOpen }" aria-label="Navigation principale">
        <a href="/" @click="closeMenu">Accueil</a>
        <a href="/formules" @click="closeMenu">Nos formules</a>
        <a class="nav-cta" href="/contact" aria-current="page" @click="closeMenu">Contact <span>↗</span></a>
      </nav>
    </header>

    <main>
      <section class="contact-form-hero section-pad">
        <div class="contact-form-intro">
          <span class="section-eyebrow">PARLONS DE VOTRE PROJET</span>
          <h1>Chaque belle histoire<br>commence par <em>un échange.</em></h1>
          <p>Racontez-moi votre événement, vos envies et les petits détails qui comptent. Même si tout n’est pas encore défini, nous pouvons commencer ici.</p>
          <div class="contact-reassurance"><span>✳</span> Une création pensée avec cœur, pour vous.</div>
        </div>

        <form class="project-form" @submit.prevent="submitForm">
          <div class="project-form-heading">
            <span class="section-eyebrow">VOTRE DEMANDE</span>
            <h2>Faisons connaissance</h2>
            <p>Les champs marqués d’un * sont obligatoires.</p>
          </div>

          <div class="project-form-grid">
            <label>Prénom *<input v-model.trim="form.prenom" autocomplete="given-name" required placeholder="Votre prénom"></label>
            <label>Nom *<input v-model.trim="form.nom" autocomplete="family-name" required placeholder="Votre nom"></label>
            <label class="project-form-full">Adresse e-mail *<input v-model.trim="form.email" type="email" autocomplete="email" required placeholder="vous@exemple.fr"></label>
            <label class="project-form-full">Téléphone <span class="field-optional">(facultatif)</span><input v-model.trim="form.telephone" type="tel" autocomplete="tel" placeholder="06 00 00 00 00"></label>
            <label>Type de célébration *<select v-model="form.occasion" required><option value="" disabled>Choisir une occasion</option><option>Mariage</option><option>Naissance</option><option>Baptême</option><option>Anniversaire</option><option>Cérémonie ou tradition</option><option>Autre événement</option></select></label>
            <label>Date de l’événement<input v-model="form.date" type="date"></label>
            <label>Formule souhaitée<select v-model="form.formule"><option value="">Je ne sais pas encore</option><option>Invitation personnalisée</option><option>Création sur mesure</option><option>J’aimerais être conseillée</option></select></label>
            <label>Budget envisagé<select v-model="form.budget"><option value="">À discuter</option><option>Moins de 100 €</option><option>100 à 250 €</option><option>250 à 500 €</option><option>Plus de 500 €</option></select></label>
            <label class="project-form-full">Parlez-moi de votre projet *<textarea v-model.trim="form.message" required rows="5" placeholder="Votre idée, l’ambiance souhaitée, le nombre d’invités, les détails importants…"></textarea></label>
          </div>

          <label class="project-consent"><input v-model="form.consentement" type="checkbox" required><span>J’accepte que les informations saisies soient utilisées pour répondre à ma demande. *</span></label>
          <p class="project-form-privacy">Vos informations servent uniquement à donner suite à votre demande. L’envoi direct sera configuré prochainement ; pour le moment, ce formulaire prépare un e-mail dans votre application de messagerie.</p>
          <button class="button button-gold project-submit" type="submit">Préparer ma demande <span>↗</span></button>
        </form>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-main"><a class="footer-brand" href="/"><img src="https://raw.githubusercontent.com/chirelhalioua/c-by-c/main/images/logo-c-by-c.png" alt="C by C — Célébrations by Chirel"></a><p>Les moments qui nous unissent.<br><span>Invitations digitales imaginées avec cœur.</span></p></div>
      <div class="footer-bottom"><span>© {{ new Date().getFullYear() }} C by C — Célébrations by Chirel</span><nav aria-label="Navigation de pied de page"><a href="/">Accueil</a><a href="/contact">Contact</a></nav><span>FAIT AVEC CŒUR PAR CHIREL</span></div>
    </footer>
  </div>
</template>
