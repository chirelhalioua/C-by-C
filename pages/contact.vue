<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'

const menuOpen = ref(false)
const closeMenu = () => { menuOpen.value = false }
const openDropdown = ref('')
const calendarOpen = ref(false)
const calendarMonth = ref(new Date(new Date().getFullYear(), new Date().getMonth(), 1))
const occasions = ['Mariage', 'Naissance', 'Baptême', 'Anniversaire', 'Cérémonie ou tradition', 'Autre événement']
const formulas = ['L’invitation numérique', 'Le site de célébration', 'Un projet particulier ?', 'Je souhaite être conseillée']
const budgets = ['Moins de 100 €', '100 à 250 €', '250 à 500 €', 'Plus de 500 €']
const optionChoices = ['RSVP / confirmation de présence', 'Galerie photos', 'Plan d’accès', 'Programme de l’événement', 'Informations pratiques', 'Hébergement et transports', 'Liste de cadeaux', 'Plan de table', 'Dress code', 'Compte à rebours', 'Livre d’or / messages des invités', 'Autre option']
const monthLabel = computed(() => calendarMonth.value.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' }))
const calendarDays = computed(() => {
  const year = calendarMonth.value.getFullYear()
  const month = calendarMonth.value.getMonth()
  const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  return Array.from({ length: 42 }, (_, i) => {
    const day = i - firstWeekday + 1
    if (day < 1 || day > daysInMonth) return { key: `empty-${i}`, day: null, value: '' }
    return { key: `${year}-${month}-${day}`, day, value: `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}` }
  })
})
const changeMonth = (amount: number) => {
  calendarMonth.value = new Date(calendarMonth.value.getFullYear(), calendarMonth.value.getMonth() + amount, 1)
}
const chooseDate = (value: string) => {
  form.date = value
  calendarOpen.value = false
}
const displayDate = computed(() => form.date ? new Date(form.date + 'T12:00:00').toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Choisir une date')

const sending = ref(false)
const successMessage = ref('')
const submitted = ref(false)
onMounted(() => {
  submitted.value = sessionStorage.getItem('cbyc-contact-submitted') === '1'
})
const errorMessage = ref('')
const currentStep = ref(1)
const stepError = ref('')
const stepTitles = ['Faisons connaissance', 'Quelle occasion ?', 'Votre projet', 'Les petits détails', 'Votre message']
const stepCount = stepTitles.length
const stepProgress = computed(() => (currentStep.value / stepCount) * 100)

const nextStep = () => {
  stepError.value = ''
  if (currentStep.value === 1 && (!form.prenom.trim() || !form.nom.trim())) {
    stepError.value = 'Indiquez votre prénom et votre nom pour continuer.'
    return
  }
  if (currentStep.value === 1 && (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email))) {
    stepError.value = 'Indiquez une adresse e-mail valide pour continuer.'
    return
  }
  if (currentStep.value === 2 && (!form.occasion || !form.date)) {
    stepError.value = !form.occasion ? 'Choisissez l’occasion que vous souhaitez célébrer.' : 'La date de l’événement est nécessaire pour continuer.'
    return
  }
  if (currentStep.value < stepCount) currentStep.value += 1
}
const previousStep = () => {
  stepError.value = ''
  if (currentStep.value > 1) currentStep.value -= 1
}

const form = reactive({
  prenom: '',
  nom: '',
  email: '',
  telephone: '',
  occasion: '',
  date: '',
  formule: '',
  options: [] as string[],
  budget: '',
  message: '',
  consentement: false
})

const toggleOption = (option: string) => {
  const index = form.options.indexOf(option)
  if (index >= 0) form.options.splice(index, 1)
  else form.options.push(option)
}

const submitForm = async () => {
  stepError.value = ''
  if (!form.message.trim()) {
    stepError.value = 'Ajoutez quelques mots sur votre projet pour continuer.'
    return
  }
  if (!form.consentement) {
    stepError.value = 'Merci de confirmer votre accord pour le traitement des informations.'
    return
  }
  sending.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        ...form,
        options: [...form.options]
      }
    })

    successMessage.value = 'Votre demande a bien été envoyée. Merci pour votre confiance !'
    submitted.value = true
    sessionStorage.setItem('cbyc-contact-submitted', '1')
    Object.assign(form, {
      prenom: '',
      nom: '',
      email: '',
      telephone: '',
      occasion: '',
      date: '',
      formule: '',
      options: [],
      budget: '',
      message: '',
      consentement: false
    })
    openDropdown.value = ''
    calendarOpen.value = false
    currentStep.value = 1
    stepError.value = ''
  } catch (error: any) {
    errorMessage.value = error?.data?.statusMessage || 'Votre message n’a pas pu être envoyé. Réessayez dans quelques instants.'
  } finally {
    sending.value = false
  }
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
        <a href="/occasions" @click="closeMenu">Les occasions</a>
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

        <form v-if="!submitted" class="project-form" @submit.prevent="submitForm">
          <div class="project-form-heading">
            <span class="section-eyebrow">VOTRE DEMANDE · 2 MINUTES</span>
            <p>Quelques questions simples pour imaginer votre invitation.</p>
          </div>

          <div class="wizard-heading">
            <span class="wizard-step-label">ÉTAPE {{ currentStep }} SUR {{ stepCount }}</span>
            <h3>{{ stepTitles[currentStep - 1] }}</h3>
            <p v-if="currentStep === 1">Commençons par faire connaissance.</p>
            <p v-else-if="currentStep === 2">Quel joli moment préparons-nous ensemble ?</p>
            <p v-else-if="currentStep === 3">Nous ajusterons la création à vos envies.</p>
            <p v-else-if="currentStep === 4">Choisissez seulement ce qui vous serait utile.</p>
            <p v-else>Quelques mots suffisent pour commencer.</p>
          </div>

          <div class="wizard-content" :key="currentStep">
            <div v-if="currentStep === 1" class="wizard-fields">
              <label>Prénom *<input v-model.trim="form.prenom" autocomplete="given-name" placeholder="Votre prénom"></label>
              <label>Nom *<input v-model.trim="form.nom" autocomplete="family-name" placeholder="Votre nom"></label>
              <label class="wizard-field-full">Adresse e-mail *<input v-model.trim="form.email" type="email" autocomplete="email" placeholder="vous@exemple.fr"></label>
              <label class="wizard-field-full">Téléphone <span class="field-optional">(facultatif)</span><input v-model.trim="form.telephone" type="tel" autocomplete="tel" placeholder="06 00 00 00 00"></label>
            </div>

            <div v-else-if="currentStep === 2" class="wizard-fields">
              <div class="wizard-field-full">
                <span class="project-field-label">Quelle occasion souhaitez-vous célébrer ? *</span>
                <div class="wizard-choice-grid">
                  <button v-for="item in occasions" :key="item" type="button" class="wizard-choice" :class="{ 'is-selected': form.occasion === item }" @click="form.occasion = item">{{ item }}<span v-if="form.occasion === item">✓</span></button>
                </div>
              </div>
              <label class="wizard-field-full">Date de l’événement *<input v-model="form.date" type="date" required></label>
            </div>

            <div v-else-if="currentStep === 3" class="wizard-fields">
              <div class="wizard-field-full">
                <span class="project-field-label">Quelle formule vous attire ?</span>
                <div class="wizard-choice-grid wizard-choice-grid-single">
                  <button v-for="item in formulas" :key="item" type="button" class="wizard-choice" :class="{ 'is-selected': form.formule === item }" @click="form.formule = form.formule === item ? '' : item">{{ item }}<span v-if="form.formule === item">✓</span></button>
                </div>
              </div>
              <div class="wizard-field-full">
                <span class="project-field-label">Quel budget envisagez-vous ?</span>
                <div class="wizard-choice-grid">
                  <button v-for="item in budgets" :key="item" type="button" class="wizard-choice" :class="{ 'is-selected': form.budget === item }" @click="form.budget = form.budget === item ? '' : item">{{ item }}<span v-if="form.budget === item">✓</span></button>
                </div>
              </div>
            </div>

            <div v-else-if="currentStep === 4" class="wizard-fields">
              <div class="wizard-field-full">
                <span class="project-field-label">Des options qui vous intéressent ? <span class="field-optional">(facultatif)</span></span>
                <p class="wizard-help">Choisissez uniquement celles qui vous seraient utiles. Vous pourrez en reparler ensemble.</p>
                <div class="wizard-option-grid">
                  <button v-for="item in optionChoices" :key="item" type="button" class="wizard-option" :class="{ 'is-selected': form.options.includes(item) }" @click="toggleOption(item)"><span class="wizard-option-check">{{ form.options.includes(item) ? '✓' : '+' }}</span>{{ item }}</button>
                </div>
              </div>
            </div>

            <div v-else class="wizard-fields">
              <label class="wizard-field-full">Parlez-moi de votre projet *<textarea v-model.trim="form.message" rows="5" placeholder="L’ambiance souhaitée, le nombre d’invités, vos idées ou les détails importants…"></textarea></label>
              <label class="project-consent wizard-field-full"><input v-model="form.consentement" type="checkbox"><span>J’accepte que les informations saisies soient utilisées pour répondre à ma demande. *</span></label>
              <p class="project-form-privacy wizard-field-full">Vos informations sont utilisées uniquement pour répondre à votre demande.</p>
            </div>
          </div>

          <p v-if="stepError" class="wizard-error" role="alert">{{ stepError }}</p>
          <div class="wizard-footer">
            <div class="wizard-progress-copy"><span>Votre demande</span><strong>{{ currentStep }} / {{ stepCount }}</strong></div>
            <div class="wizard-progress-track" role="progressbar" :aria-valuenow="currentStep" :aria-valuemin="1" :aria-valuemax="stepCount" :aria-label="'Étape ' + currentStep + ' sur ' + stepCount"><span :style="{ width: stepProgress + '%' }"></span></div>
            <div class="wizard-actions">
              <button v-if="currentStep > 1" class="wizard-back" type="button" @click="previousStep">← Retour</button>
              <span v-else class="wizard-note">Cela ne prend que quelques instants.</span>
              <button v-if="currentStep < stepCount" class="button button-gold wizard-next" type="button" @click="nextStep">Continuer <span>↗</span></button>
              <button v-else class="button button-gold project-submit" type="submit" :disabled="sending">
                {{ sending ? 'Envoi en cours…' : 'Envoyer ma demande' }} <span v-if="!sending">↗</span>
              </button>
            </div>
          </div>

          <p v-if="successMessage" class="project-form-privacy" role="status">{{ successMessage }}</p>
          <p v-if="errorMessage" class="project-form-privacy" role="alert">{{ errorMessage }}</p>
        </form>

        <section v-else class="project-form project-success-card" role="status" aria-live="polite">
          <div class="success-icon" aria-hidden="true">✓</div>
          <span class="section-eyebrow">DEMANDE ENVOYÉE</span>
          <h2>Votre message a bien été envoyé</h2>
          <p>Merci pour votre confiance. Votre demande a bien été transmise ; je reviendrai vers vous dès que possible.</p>
          <div class="success-decoration" aria-hidden="true">✳</div>
        </section>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-main"><a class="footer-brand" href="/"><img src="https://raw.githubusercontent.com/chirelhalioua/c-by-c/main/images/logo-c-by-c.png" alt="C by C — Célébrations by Chirel"></a><p>Les moments qui nous unissent.<br><span>Invitations digitales imaginées avec cœur.</span></p></div>
      <div class="footer-bottom"><span>© {{ new Date().getFullYear() }} C by C — Célébrations by Chirel</span><nav aria-label="Navigation de pied de page"><a href="/">Accueil</a><a href="/contact">Contact</a></nav><span>FAIT AVEC CŒUR PAR CHIREL</span></div>
    </footer>
  </div>
</template>
