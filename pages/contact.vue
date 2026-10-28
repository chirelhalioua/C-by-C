<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

const menuOpen = ref(false)
const closeMenu = () => { menuOpen.value = false }
const openDropdown = ref('')
const calendarOpen = ref(false)
const calendarMonth = ref(new Date(new Date().getFullYear(), new Date().getMonth(), 1))
const occasions = ['Mariage', 'Naissance', 'Baptême', 'Anniversaire', 'Cérémonie ou tradition', 'Autre événement']
const formulas = ['L’invitation numérique', 'Le site de célébration', 'Un projet particulier ?', 'Je souhaite être conseillée']
const budgets = ['Moins de 100 €', '100 à 250 €', '250 à 500 €', 'Plus de 500 €']
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

const form = reactive({
  prenom: '',
  nom: '',
  email: '',
  telephone: '',
  occasion: '',
  date: '',
  formule: '',
  options: [''],
  budget: '',
  message: '',
  consentement: false
})

const addOption = () => { form.options.push('') }
const removeOption = (index: number) => { form.options.splice(index, 1) }

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
Options souhaitées : ${form.options.map(option => option.trim()).filter(Boolean).join(', ') || 'Aucune précision'}
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

        <form class="project-form" @submit.prevent="submitForm">
          <div class="project-form-heading">
            <span class="section-eyebrow">VOTRE DEMANDE</span>
            <h2>Faisons connaissance</h2>
            <p>Les champs marqués d’un * sont obligatoires.</p>
          </div>

          <div class="project-form-grid">
            <label>Prénom *<input v-model.trim="form.prenom" autocomplete="given-name" required placeholder="Votre prénom"></label>
            <label>Nom *<input v-model.trim="form.nom" autocomplete="family-name" required placeholder="Votre nom"></label>
            <label class="project-form-full">Adresse courriel *<input v-model.trim="form.email" type="email" autocomplete="email" required placeholder="vous@exemple.fr"></label>
            <label class="project-form-full">Téléphone <span class="field-optional">(facultatif)</span><input v-model.trim="form.telephone" type="tel" autocomplete="tel" placeholder="06 00 00 00 00"></label>
            <label class="custom-field">Type de célébration *<div class="custom-select-wrap">
              <button class="custom-select-trigger" type="button" :aria-expanded="openDropdown === 'occasion'" @click="openDropdown = openDropdown === 'occasion' ? '' : 'occasion'; calendarOpen = false"><span>{{ form.occasion || 'Choisir une occasion' }}</span><span class="custom-chevron" aria-hidden="true"></span></button>
              <div v-if="openDropdown === 'occasion'" class="custom-select-menu"><button v-for="item in occasions" :key="item" type="button" class="custom-select-option" :class="{ 'is-selected': form.occasion === item }" @click="form.occasion = item; openDropdown = ''">{{ item }}<span v-if="form.occasion === item">✓</span></button></div>
            </div></label>
            <label class="custom-field">Date de l’événement<div class="custom-calendar-wrap">
              <button class="custom-select-trigger date-trigger" type="button" :aria-expanded="calendarOpen" @click="calendarOpen = !calendarOpen; openDropdown = ''"><span>{{ displayDate }}</span><svg class="calendar-trigger-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5.5" width="17" height="15" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M7.5 3.5v4M16.5 3.5v4M4 9.5h16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M8 13h2m4 0h2M8 16.5h2m4 0h2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button>
              <div v-if="calendarOpen" class="custom-calendar">
                <div class="calendar-heading"><button class="calendar-nav" type="button" aria-label="Mois précédent" @click="changeMonth(-1)"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="m12 4-6 6 6 6" /></svg></button><strong>{{ monthLabel }}</strong><button class="calendar-nav" type="button" aria-label="Mois suivant" @click="changeMonth(1)"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="m8 4 6 6-6 6" /></svg></button></div>
                <div class="calendar-grid calendar-weekdays"><span v-for="day in ['Lu','Ma','Me','Je','Ve','Sa','Di']" :key="day">{{ day }}</span></div>
                <div class="calendar-grid"><template v-for="cell in calendarDays" :key="cell.key"><span v-if="!cell.day" class="calendar-empty"></span><button v-else type="button" class="calendar-day" :class="{ 'is-selected': form.date === cell.value, 'is-today': cell.value === new Date().toLocaleDateString('sv-SE') }" @click="chooseDate(cell.value)">{{ cell.day }}</button></template></div>
                <button v-if="form.date" type="button" class="calendar-clear" @click="form.date = ''; calendarOpen = false">Effacer la date</button>
              </div>
            </div></label>
            <label class="custom-field">Formule souhaitée<div class="custom-select-wrap">
              <button class="custom-select-trigger" type="button" :aria-expanded="openDropdown === 'formule'" @click="openDropdown = openDropdown === 'formule' ? '' : 'formule'; calendarOpen = false"><span>{{ form.formule || 'Je ne sais pas encore' }}</span><span class="custom-chevron">⌄</span></button>
              <div v-if="openDropdown === 'formule'" class="custom-select-menu"><button v-for="item in formulas" :key="item" type="button" class="custom-select-option" :class="{ 'is-selected': form.formule === item }" @click="form.formule = item; openDropdown = ''">{{ item }}<span v-if="form.formule === item">✓</span></button><button type="button" class="custom-select-option" :class="{ 'is-selected': !form.formule }" @click="form.formule = ''; openDropdown = ''">Je ne sais pas encore<span v-if="!form.formule">✓</span></button></div>
            </div></label>
            <div class="project-form-full project-options-field">
              <div class="project-options-heading">
                <span class="project-field-label">Options souhaitées <span class="field-optional">(facultatif)</span></span>
                <p>Ajoutez une ou plusieurs idées ou prestations que vous aimeriez inclure.</p>
              </div>
              <div v-for="(option, index) in form.options" :key="index" class="project-option-row">
                <input v-model.trim="form.options[index]" type="text" :aria-label="`Option souhaitée ${index + 1}`" :placeholder="`Option ${index + 1} (ex. : RSVP, galerie photos…)`">
                <button v-if="form.options.length > 1" class="project-option-remove" type="button" :aria-label="`Supprimer l’option ${index + 1}`" @click="removeOption(index)">−</button>
              </div>
              <button class="project-option-add" type="button" @click="addOption">＋ Ajouter une option</button>
            </div>
            <label class="custom-field">Budget envisagé<div class="custom-select-wrap">
              <button class="custom-select-trigger" type="button" :aria-expanded="openDropdown === 'budget'" @click="openDropdown = openDropdown === 'budget' ? '' : 'budget'; calendarOpen = false"><span>{{ form.budget || 'À discuter' }}</span><span class="custom-chevron">⌄</span></button>
              <div v-if="openDropdown === 'budget'" class="custom-select-menu"><button v-for="item in budgets" :key="item" type="button" class="custom-select-option" :class="{ 'is-selected': form.budget === item }" @click="form.budget = item; openDropdown = ''">{{ item }}<span v-if="form.budget === item">✓</span></button><button type="button" class="custom-select-option" :class="{ 'is-selected': !form.budget }" @click="form.budget = ''; openDropdown = ''">À discuter<span v-if="!form.budget">✓</span></button></div>
            </div></label>
            <label class="project-form-full">Parlez-moi de votre projet *<textarea v-model.trim="form.message" required rows="5" placeholder="Votre idée, l’ambiance souhaitée, le nombre d’invités, les détails importants…"></textarea></label>
          </div>

          <label class="project-consent"><input v-model="form.consentement" type="checkbox" required><span>J’accepte que les informations saisies soient utilisées pour répondre à ma demande. *</span></label>
          <p class="project-form-privacy">Vos informations servent uniquement à donner suite à votre demande. L’envoi direct sera configuré prochainement ; pour le moment, ce formulaire prépare un courriel dans votre application de messagerie.</p>
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
