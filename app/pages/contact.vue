<script setup>
import { reactive, ref } from 'vue'

const route = useRoute()
const sujetsDisponibles = [
  'Invitation digitale',
  'Site complet d’invitation',
  'Création sur mesure',
  'Question sur une collection',
  'Demande personnalisée',
  'Autre question'
]
const sujetParDefaut =
  typeof route.query.prestation === 'string' && sujetsDisponibles.includes(route.query.prestation)
    ? route.query.prestation
    : 'Invitation digitale'
const modeleChoisi = typeof route.query.modele === 'string' ? route.query.modele.slice(0, 120) : ''
const occasionChoisie = typeof route.query.occasion === 'string' ? route.query.occasion.slice(0, 120) : ''
const messageParDefaut = modeleChoisi
  ? `Bonjour, je souhaite personnaliser le modèle « ${modeleChoisi} » pour mon événement ${occasionChoisie ? `(${occasionChoisie})` : ''}. Pouvez-vous m’en dire plus ?`
  : ''

const formulaire = reactive({
  nom: '',
  email: '',
  sujet: sujetParDefaut,
  message: messageParDefaut,
  website: '',
  consentement: false
})

const envoiEnCours = ref(false)
const statut = ref('')
const erreur = ref(false)

async function envoyerMessage() {
  statut.value = ''
  erreur.value = false

  if (!formulaire.consentement) {
    erreur.value = true
    statut.value = 'Merci de confirmer que tu acceptes le traitement de tes informations pour répondre à ta demande.'
    return
  }

  envoiEnCours.value = true

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        nom: formulaire.nom,
        email: formulaire.email,
        sujet: formulaire.sujet,
        message: formulaire.message,
        website: formulaire.website
      }
    })

    statut.value = 'Merci pour ton message ! Il a bien été envoyé. Nous te répondrons dès que possible.'

    Object.assign(formulaire, {
      nom: '',
      email: '',
      sujet: sujetParDefaut,
      message: messageParDefaut,
      website: '',
      consentement: false
    })
  } catch (e) {
    erreur.value = true
    statut.value = e?.data?.statusMessage ||
      'Une erreur est survenue lors de l’envoi. Réessaie dans quelques instants.'
  } finally {
    envoiEnCours.value = false
  }
}
</script>

<template>
  <main class="contact-page">
    <section class="intro">
      <p class="eyebrow">ÉCHANGEONS ENSEMBLE</p>
      <h1>Parlons de <em>votre projet.</em></h1>
      <p class="intro-text">
        Une invitation à imaginer, une question ou une envie particulière ?
        Écris-nous, nous serons ravis d'en discuter avec toi.
      </p>
    </section>

    <section class="contact-layout">
      <aside class="contact-aside">
        <p class="category">UNE ATTENTION PARTICULIÈRE</p>
        <h2>Chaque belle création commence par un échange.</h2>
        <p>
          Partage-nous ton idée, ton événement ou tes questions.
          Nous prendrons le temps de découvrir ce que tu imagines.
        </p>

        <div class="aside-separator"></div>

        <p class="aside-note">
          Celebrations by Chirel
        </p>
      </aside>

      <form class="contact-form" @submit.prevent="envoyerMessage">
        <div class="field">
          <label for="nom">Votre nom</label>
          <input
            id="nom"
            v-model.trim="formulaire.nom"
            name="nom"
            type="text"
            autocomplete="name"
            placeholder="Prénom et nom"
            minlength="2"
            maxlength="100"
            required
          />
        </div>

        <div class="field">
          <label for="email">Votre adresse e-mail</label>
          <input
            id="email"
            v-model.trim="formulaire.email"
            name="email"
            type="email"
            autocomplete="email"
            placeholder="vous@exemple.fr"
            maxlength="254"
            required
          />
        </div>

        <div class="field">
          <label for="sujet">Votre demande concerne</label>
          <select id="sujet" v-model="formulaire.sujet" name="sujet" required>
            <option>Invitation digitale</option>
            <option>Site complet d’invitation</option>
            <option>Création sur mesure</option>
            <option>Question sur une collection</option>
            <option>Demande personnalisée</option>
            <option>Autre question</option>
          </select>
        </div>

        <div class="field">
          <label for="message">Votre message</label>
          <textarea
            id="message"
            v-model.trim="formulaire.message"
            name="message"
            rows="6"
            minlength="10"
            maxlength="5000"
            placeholder="Racontez-nous votre projet..."
            required
          ></textarea>
        </div>

        <!-- Champ anti-spam masqué -->
        <div class="website-field" aria-hidden="true">
          <label for="website">Ne pas remplir ce champ</label>
          <input
            id="website"
            v-model="formulaire.website"
            name="website"
            type="text"
            tabindex="-1"
            autocomplete="off"
          />
        </div>

        <label class="consent">
          <input
            v-model="formulaire.consentement"
            type="checkbox"
            required
          />
          <span>
            J'accepte que les informations transmises soient utilisées
            pour répondre à ma demande. Consultez notre
            <NuxtLink to="/confidentialite">politique de confidentialité</NuxtLink>.
          </span>
        </label>

        <button class="submit-button" type="submit" :disabled="envoiEnCours">
          {{ envoiEnCours ? 'Envoi en cours…' : 'Envoyer mon message' }}
          <span v-if="!envoiEnCours">↗</span>
        </button>

        <p
          v-if="statut"
          class="form-status"
          :class="{ 'form-error': erreur, 'form-success': !erreur }"
          role="status"
          aria-live="polite"
        >
          {{ statut }}
        </p>
      </form>
    </section>
  </main>
</template>

<style scoped>
.contact-page {
  max-width: 1180px;
  margin: 0 auto;
  padding: 76px 28px;
  color: #51463d;
}

.intro {
  max-width: 720px;
  margin: 0 auto 58px;
  text-align: center;
}

.eyebrow,
.category {
  color: #a48761;
  font-size: 10px;
  letter-spacing: 2.5px;
  line-height: 1.8;
}

.eyebrow {
  margin: 0 0 20px;
}

.intro h1 {
  margin: 0 0 20px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(36px, 5vw, 54px);
  font-weight: 400;
  line-height: 1.2;
}

.intro h1 em {
  color: #a48761;
  font-weight: 400;
}

.intro-text {
  max-width: 520px;
  margin: 0 auto;
  color: #81766c;
  font-size: 14px;
  line-height: 1.9;
}

.contact-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  gap: 54px;
  align-items: start;
}

.contact-aside {
  padding: 36px 30px;
  border: 1px solid #e9e0d5;
  background: #f7f2ea;
}

.category {
  margin: 0 0 18px;
}

.contact-aside h2 {
  margin: 0 0 18px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(27px, 3vw, 36px);
  font-weight: 400;
  line-height: 1.35;
}

.contact-aside > p:not(.category):not(.aside-note) {
  margin: 0;
  color: #81766c;
  font-size: 14px;
  line-height: 1.9;
}

.aside-separator {
  width: 44px;
  height: 1px;
  margin: 30px 0 22px;
  background: #c9b69b;
}

.aside-note {
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 16px;
}

.aside-note span {
  display: block;
  margin-top: 7px;
  color: #81766c;
  font-family: Arial, sans-serif;
  font-size: 12px;
  line-height: 1.7;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 21px;
  min-width: 0;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.field label {
  color: #51463d;
  font-size: 13px;
}

.field input,
.field select,
.field textarea {
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  padding: 14px 15px;
  border: 1px solid #e4d9cb;
  border-radius: 0;
  outline: none;
  background: #fcfaf6;
  color: #51463d;
  font: inherit;
  font-size: 13px;
  transition: border-color 0.2s ease;
}

.field input,
.field select {
  min-height: 48px;
}

.field textarea {
  min-height: 145px;
  resize: vertical;
  line-height: 1.7;
}

.field input::placeholder,
.field textarea::placeholder {
  color: #a69a8d;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  border-color: #a48761;
}

.consent {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #81766c;
  font-size: 11px;
  line-height: 1.8;
}

.consent input {
  margin-top: 4px;
  accent-color: #77634e;
  flex-shrink: 0;
}

.consent a {
  color: #8b704c;
  text-underline-offset: 3px;
}

.submit-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  min-height: 50px;
  padding: 14px 20px;
  border: 1px solid #77634e;
  background: #77634e;
  color: #fffaf5;
  font-size: 13px;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}

.submit-button:hover:not(:disabled) {
  background: transparent;
  color: #77634e;
}

.submit-button:disabled {
  cursor: wait;
  opacity: 0.7;
}

.form-status {
  margin: 0;
  padding: 13px 15px;
  font-size: 13px;
  line-height: 1.7;
}

.form-success {
  border: 1px solid #d7e3d1;
  background: #f2f7ef;
  color: #42613d;
}

.form-error {
  border: 1px solid #ead1c9;
  background: #fbf1ed;
  color: #8b4334;
}

/* Champ invisible destiné à limiter certains spams */
.website-field {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

@media (max-width: 768px) {
  .contact-page {
    padding: 54px 22px;
  }

  .contact-layout {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .contact-aside {
    padding: 28px 24px;
  }

  .contact-aside h2 {
    font-size: 30px;
  }
}

@media (max-width: 560px) {
  .contact-page {
    padding: 42px 16px;
  }

  .intro {
    margin-bottom: 35px;
  }

  .intro h1 {
    font-size: 35px;
  }

  .intro-text {
    font-size: 13px;
  }

  .contact-layout {
    gap: 22px;
  }

  .contact-aside {
    padding: 25px 21px;
  }

  .contact-aside h2 {
    font-size: 28px;
  }

  .contact-form {
    gap: 18px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .field input,
  .field select,
  .field textarea,
  .submit-button {
    transition: none;
  }
}
</style>
