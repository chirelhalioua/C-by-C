<script setup lang="ts">
const menuOpen = ref(false)
const invitationRevealed = ref(false)
const processTimeline = ref<HTMLElement | null>(null)
let processObserver: IntersectionObserver | undefined
const closeMenu = () => { menuOpen.value = false }
onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    processTimeline.value?.classList.add('is-active')
    processTimeline.value?.querySelectorAll('.timeline-step').forEach((step) => step.classList.add('is-visible'))
    return
  }
  if (!processTimeline.value) return
  processObserver = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      processTimeline.value?.classList.add('is-active')
      processObserver?.disconnect()
    }
  }, { threshold: 0.15 })
  processObserver.observe(processTimeline.value)
  const stepObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        stepObserver.unobserve(entry.target)
      }
    })
  }, { threshold: 0.2 })
  processTimeline.value.querySelectorAll('.timeline-step').forEach((step) => stepObserver.observe(step))
})
onBeforeUnmount(() => processObserver?.disconnect())
const occasions = [
  { number: '01', name: 'Mariages', eyebrow: 'UNE HISTOIRE À DEUX', detail: 'Une invitation élégante, pensée pour votre histoire.' },
  { number: '02', name: 'Naissances & baptêmes', eyebrow: 'LES PREMIÈRES ÉMOTIONS', detail: 'Une annonce douce à partager avec vos proches.' },
  { number: '03', name: 'Anniversaires', eyebrow: 'UNE ANNÉE À CÉLÉBRER', detail: 'Une invitation festive à votre image.' },
  { number: '04', name: 'Cérémonies & traditions', eyebrow: 'VOS MOMENTS, VOS VALEURS', detail: 'Une création adaptée à vos traditions et vos envies.' }
]
const steps = [
  { number: '01', title: 'Imaginons votre projet', text: 'Échangeons sur votre événement, vos envies, vos inspirations et votre budget.', icon: 'conversation' },
  { number: '02', title: 'Donnons vie à vos idées', text: 'Nous imaginons un univers graphique avec les couleurs, la typographie et les détails qui vous ressemblent.', icon: 'creation' },
  { number: '03', title: 'Affinons chaque détail', text: 'Vous découvrez la proposition et nous ajustons la création ensemble.', icon: 'heart' },
  { number: '04', title: 'Célébrons le résultat', text: 'Votre invitation est prête à être partagée avec vos proches.', icon: 'sparkles' }
]
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <a class="brand" href="/" aria-label="C by C, accueil" @click="closeMenu">
        <img class="brand-logo" src="https://raw.githubusercontent.com/chirelhalioua/c-by-c/main/images/logo-c-by-c.png" alt="C by C — Célébrations by Chirel">
      </a>
      <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-label="Ouvrir le menu" @click="menuOpen = !menuOpen">
        <span></span><span></span>
      </button>
      <nav class="main-nav" :class="{ 'is-open': menuOpen }" aria-label="Navigation principale">
        <a href="/" @click="closeMenu">Accueil</a>
        <a href="/occasions" @click="closeMenu">Les occasions</a>
        <a href="/formules" @click="closeMenu">Nos formules</a>
        <a class="nav-cta" href="/contact" @click="closeMenu">Contact <span>↗</span></a>
      </nav>
    </header>

    <main>
      <section id="accueil" class="hero">
        <div class="hero-content">
          <div class="hero-kicker"><span class="kicker-dot"></span> CÉLÉBRATIONS BY CHIREL</div>
          <h1>Une invitation.<br>Une émotion.<br><span>Votre histoire.</span></h1>
          <p class="hero-description">Des invitations numériques créées avec soin pour annoncer les moments qui comptent — et donner le ton d’un souvenir inoubliable.</p>
          <div class="hero-actions">
            <a class="button button-gold" href="/contact">Imaginons votre invitation <span>↗</span></a>
            <a class="button button-quiet" href="#occasions">Explorer les occasions <span>↓</span></a>
          </div>
          <div class="hero-proof"><span class="proof-star">✳</span><span>Personnalisé avec cœur, pensé pour vous.</span></div>
        </div>
        <div class="hero-visual" aria-label="Illustration d’une invitation numérique élégante">
          <div class="visual-orbit orbit-one"></div><div class="visual-orbit orbit-two"></div>
          <div class="visual-spark spark-one">✦</div><div class="visual-spark spark-two">✳</div>
          <div class="invite-stack">
            <div class="invite-back"></div>
            <div class="invite-front">
              <div class="invite-logo"><img src="https://raw.githubusercontent.com/chirelhalioua/c-by-c/main/images/logo-c-by-c.png" alt="C by C — Célébrations by Chirel"></div>
              <div class="invite-divider"></div>
              <p class="invite-overline">UNE INVITATION À CÉLÉBRER</p>
              <p class="invite-script">Un jour précieux</p>
              <p class="invite-main">Une histoire<br>à partager.</p>
              <div class="invite-divider invite-divider-bottom"></div>
              <p class="invite-small">AVEC TOUT NOTRE AMOUR</p>
            </div>
            <div class="invite-tag">Créé juste<br><strong>pour vous</strong></div>
          </div>
          <div class="visual-caption"><span>DES MOMENTS QUI NOUS UNISSENT</span></div>
        </div>
        <div class="hero-bottom"><span>ÉLÉGANCE DIGITALE</span><span>DES CÉLÉBRATIONS QUI VOUS RESSEMBLENT</span><a href="#occasions">DÉCOUVRIR <span>↓</span></a></div>
      </section>

      <section class="signature-moment" aria-labelledby="signature-title">
        <div class="signature-copy">
          <span class="section-eyebrow">UN AVANT-GOÛT DE L’ÉMOTION</span>
          <h2 id="signature-title">Et si votre invitation<br><em>faisait déjà battre le cœur ?</em></h2>
          <p>Un premier aperçu de cette attention particulière que vos invités découvriront dès l’ouverture.</p>
          <button class="signature-reveal-button" type="button" :aria-expanded="invitationRevealed" @click="invitationRevealed = !invitationRevealed">
            {{ invitationRevealed ? 'Refermer l’invitation' : 'Cliquez sur l’enveloppe pour l’ouvrir' }}
            <span aria-hidden="true">{{ invitationRevealed ? '↻' : '↗' }}</span>
          </button>
        </div>
        <div class="signature-stage" :class="{ 'is-revealed': invitationRevealed }">
          <div class="signature-glow" aria-hidden="true"></div>
          <button class="signature-envelope" type="button" :aria-expanded="invitationRevealed" :aria-label="invitationRevealed ? 'Refermer l’invitation' : 'Ouvrir l’invitation'" @click="invitationRevealed = !invitationRevealed">
            <div class="signature-envelope-back"></div>
            <div class="signature-letter">
              <img class="signature-letter-logo" src="https://raw.githubusercontent.com/chirelhalioua/c-by-c/main/images/logo-c-by-c.png" alt="C by C — Célébrations by Chirel">
              <span class="signature-letter-kicker">UN MOMENT PRÉCIEUX</span>
              <span class="signature-letter-script">Vous êtes invité·e</span>
              <span class="signature-letter-title">À célébrer<br>notre histoire</span>
              <span class="signature-letter-rule"></span>
              <span class="signature-letter-date">UNE JOURNÉE QUI NOUS RESSEMBLE</span>
            </div>
            <div class="signature-envelope-front"></div>
            <div class="signature-envelope-flap"></div>
            <span class="signature-seal" aria-hidden="true">C</span>
          </button>
          <span class="signature-stage-caption">IMAGINÉ AVEC CŒUR · CRÉÉ POUR VOUS</span>
        </div>
      </section>

      <section id="occasions" class="occasions-section section-pad">
        <div class="section-topline"><span>À CHAQUE MOMENT SON ÉCRIN</span></div>
        <div class="occasions-heading"><h2>Qu’avez-vous<br><span>à célébrer ?</span></h2><p>Les grands jours comme les petits bonheurs. Choisissez votre occasion, nous imaginerons une invitation qui en capture l’esprit.</p></div>
        <div class="occasion-grid occasion-word-garden occasion-word-garden-home">
          <a v-for="(occasion, index) in occasions" :key="occasion.number" class="occasion-word-item" :class="'occasion-word-item-' + (index + 1)" href="/occasions">
            <span class="occasion-word-number">{{ occasion.number }}</span>
            <span class="occasion-word-eyebrow">{{ occasion.eyebrow }}</span>
            <h3>{{ occasion.name }}</h3>
            <p>{{ occasion.detail }}</p>
            <span class="occasion-word-link">Parlons de votre projet <span aria-hidden="true">↗</span></span>
          </a>
        </div></section>

      <section id="details" class="details-section section-pad">
        <div class="details-editorial-head">
          <span class="details-kicker">L’ART DU DÉTAIL</span>
          <h2>Votre histoire.<br><em>Votre façon de célébrer.</em></h2>
          <p>Une invitation pensée autour de ce qui rend votre moment unique.</p>
        </div>
        <ul class="details-simple-list">
          <li><span class="details-simple-dot" aria-hidden="true"></span><span><strong>Une esthétique qui vous ressemble</strong><small>Les couleurs et les détails donnent le ton dès la première ouverture.</small></span></li>
          <li><span class="details-simple-dot" aria-hidden="true"></span><span><strong>Des mots choisis pour vous</strong><small>Votre message, votre émotion, votre histoire.</small></span></li>
          <li><span class="details-simple-dot" aria-hidden="true"></span><span><strong>Vos traditions, naturellement</strong><small>Chaque création s’adapte à votre culture et à vos envies.</small></span></li>
        </ul>
      </section>

      <section id="fonctionnement" class="process-section section-pad">
        <div class="section-topline"><span>DU PREMIER ÉCHANGE AU GRAND JOUR</span><span>LE CONCEPT</span></div>
        <div class="process-heading"><h2>De votre idée<br><span>à votre invitation.</span></h2><p>Quatre étapes simples, imaginées avec vous, pour créer une invitation qui vous ressemble jusque dans les moindres détails.</p></div>
        <div ref="processTimeline" class="process-timeline">
          <div class="process-timeline-line" aria-hidden="true"><span></span></div>
          <article v-for="step in steps" :key="step.number" class="timeline-step">
            <div class="timeline-marker" aria-hidden="true">
              <svg v-if="step.icon === 'conversation'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H6l-3 2v-6.5A7.5 7.5 0 1 1 20 11.5Z"/><path d="M8 10h8M8 13h5"/></svg>
              <svg v-else-if="step.icon === 'creation'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z"/></svg>
              <svg v-else-if="step.icon === 'heart'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 8.8c0 5.1-8.8 10-8.8 10s-8.8-4.9-8.8-10A4.8 4.8 0 0 1 12 6.4a4.8 4.8 0 0 1 8.8 2.4Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg>
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 2.7 6.3L21 11l-6.3 2.7L12 20l-2.7-6.3L3 11l6.3-2.7L12 2Z"/><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"/></svg>
            </div>
            <div class="timeline-content">
              <span class="timeline-number">ÉTAPE {{ step.number }}</span>
              <h3>{{ step.title }}</h3>
              <p>{{ step.text }}</p>
            </div>
          </article>
        </div>
        <div class="process-cta"><a class="button button-gold" href="/contact">Imaginons votre projet <span>↗</span></a></div>
      </section>

      <section id="histoire" class="story-section section-pad">
        <div class="story-copy">
          <div class="section-eyebrow">LA PETITE HISTOIRE</div>
          <h2>Comment est né<br><span>C by C ?</span></h2>
          <p class="story-lead">Parce que les beaux moments méritent une attention toute personnelle.</p>
          <p>Enchantée, moi c’est Chirel. J’aime les univers harmonieux et les détails qui font la différence. Avec C by C, je crée des invitations qui racontent votre histoire et célèbrent vos liens, dans le respect de toutes les cultures, religions et traditions.</p>
          <p>Mariage, naissance, anniversaire ou cérémonie traditionnelle : chaque création s’adapte à vos envies. <strong>Toutes les religions et toutes les traditions sont les bienvenues.</strong></p>
        </div>
      </section>

      <section id="contact" class="contact-section section-pad">
        <div class="contact-panel">
          <div class="contact-copy"><div class="section-eyebrow">À VOUS DE JOUER</div><h2>Une belle occasion<br>se prépare ? <span>Parlons-en.</span></h2><p>Racontez-moi ce que vous avez en tête. Même si l’idée n’est pas encore tout à fait définie, on peut commencer par en parler.</p><a class="button button-gold" href="/contact">Écrire à Chirel <span>↗</span></a></div>
          
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-main"><a class="footer-brand" href="/"><img src="https://raw.githubusercontent.com/chirelhalioua/c-by-c/main/images/logo-c-by-c.png" alt="C by C — Célébrations by Chirel"></a><p>Les moments qui nous unissent.<br><span>Invitations digitales imaginées avec cœur.</span></p></div>
      <div class="footer-bottom"><span>© {{ new Date().getFullYear() }} C by C — Célébrations by Chirel</span><nav aria-label="Navigation de pied de page"><a href="/">Accueil</a><a href="/contact">Contact</a></nav><span>FAIT AVEC CŒUR PAR CHIREL</span></div>
    </footer>
  </div>
</template>
