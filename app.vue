<script setup lang="ts">
const menuOpen = ref(false)
const closeMenu = () => { menuOpen.value = false }
const occasions = [
  { number: '01', name: 'Mariage', detail: 'Le début d’une belle histoire', icon: '♡', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85' },
  { number: '02', name: 'Naissance & baptême', detail: 'Les premières grandes émotions', icon: '✳', image: 'https://images.unsplash.com/photo-1637071805852-dce2e1d8ec31?auto=format&fit=crop&w=900&q=75' },
  {number: '03', name: 'Anniversaire', detail: 'Une année de plus à célébrer', icon: '✦', image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=85' },
  { number: '04', name: 'Cérémonies & traditions', detail: 'Vos moments, vos valeurs', icon: '◇', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85' }
]
const steps = [
  { number: '01', title: 'Vous me racontez', text: 'Votre événement, vos envies, les détails qui comptent. On commence par une conversation.' },
  { number: '02', title: 'Je crée pour vous', text: 'Une invitation imaginée autour de votre histoire, avec les couleurs et l’esprit qui vous ressemblent.' },
  { number: '03', title: 'Vous partagez', text: 'Votre invitation est prête à être envoyée à vos proches, en quelques clics.' }
]
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <a class="brand" href="#accueil" aria-label="C by C, accueil" @click="closeMenu">
        <img class="brand-logo" src="/images/logo-c-by-c.svg" alt="C by C — Célébrations by Chirel">
      </a>
      <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-label="Ouvrir le menu" @click="menuOpen = !menuOpen">
        <span></span><span></span>
      </button>
      <nav class="main-nav" :class="{ 'is-open': menuOpen }" aria-label="Navigation principale">
        <a href="#occasions" @click="closeMenu">Les occasions</a>
        <a href="#histoire" @click="closeMenu">L’histoire</a>
        <a href="#fonctionnement" @click="closeMenu">Le concept</a>
        <a href="#apropos" @click="closeMenu">À propos</a>
        <a class="nav-cta" href="#contact" @click="closeMenu">Parlons de votre projet <span>↗</span></a>
      </nav>
    </header>

    <main>
      <section id="accueil" class="hero">
        <div class="hero-content">
          <div class="hero-kicker"><span class="kicker-dot"></span> CÉLÉBRATIONS BY CHIREL</div>
          <h1>Une invitation.<br>Une émotion.<br><span>Votre histoire.</span></h1>
          <p class="hero-description">Des invitations digitales créées avec soin pour annoncer les moments qui comptent — et donner le ton d’un souvenir inoubliable.</p>
          <div class="hero-actions">
            <a class="button button-gold" href="#contact">Imaginons votre invitation <span>↗</span></a>
            <a class="button button-quiet" href="#occasions">Explorer les occasions <span>↓</span></a>
          </div>
          <div class="hero-proof"><span class="proof-star">✳</span><span>Personnalisé avec cœur, pensé pour vous.</span></div>
        </div>
        <div class="hero-visual" aria-label="Illustration d’une invitation digitale élégante">
          <div class="visual-orbit orbit-one"></div><div class="visual-orbit orbit-two"></div>
          <div class="visual-spark spark-one">✦</div><div class="visual-spark spark-two">✳</div>
          <div class="invite-stack">
            <div class="invite-back"></div>
            <div class="invite-front">
              <div class="invite-logo">C <span>✳</span> C</div>
              <div class="invite-divider"></div>
              <p class="invite-overline">UNE INVITATION À CÉLÉBRER</p>
              <p class="invite-script">Un jour précieux</p>
              <p class="invite-main">Une histoire<br>à partager.</p>
              <div class="invite-divider invite-divider-bottom"></div>
              <p class="invite-small">AVEC TOUT NOTRE AMOUR</p>
            </div>
            <div class="invite-tag">Créé juste<br><strong>pour vous</strong></div>
          </div>
          <div class="visual-caption"><span>DES MOMENTS QUI NOUS UNISSENT</span><span>01 — 04</span></div>
        </div>
        <div class="hero-bottom"><span>ÉLÉGANCE DIGITALE</span><span>DES CÉLÉBRATIONS QUI VOUS RESSEMBLENT</span><a href="#occasions">DÉCOUVRIR <span>↓</span></a></div>
      </section>

      <section id="occasions" class="occasions-section section-pad">
        <div class="section-topline"><span>À CHAQUE MOMENT SON ÉCRIN</span><span>01 / LES OCCASIONS</span></div>
        <div class="occasions-heading"><h2>Qu’avez-vous<br><span>à célébrer ?</span></h2><p>Les grands jours comme les petits bonheurs. Choisissez votre occasion, nous imaginerons une invitation qui en capture l’esprit.</p></div>
        <div class="occasion-grid">
          <a v-for="occasion in occasions" :key="occasion.number" class="occasion-card" href="#contact">
            <div class="occasion-image"><img :src="occasion.image" :alt="occasion.name" loading="lazy"></div><div class="occasion-card-top"><span>{{ occasion.number }}</span><span class="occasion-icon">{{ occasion.icon }}</span></div>
            <div class="occasion-card-bottom"><h3>{{ occasion.name }}</h3><p>{{ occasion.detail }}</p><span class="card-arrow">↗</span></div>
          </a>
        </div>
      </section>

      <section id="histoire" class="story-section section-pad">
        <div class="story-visual">
          <div class="story-shape shape-main"><span class="shape-monogram">C<span>✳</span>C</span><span class="shape-label">LES MOMENTS QUI NOUS UNISSENT</span></div>
          <div class="story-shape shape-small"><span>UNE IDÉE</span><strong>♡</strong><span>UN SOUVENIR</span></div>
          <span class="story-spark">✳</span>
        </div>
        <div class="story-copy">
          <div class="section-eyebrow"><span>02</span> LA PETITE HISTOIRE</div>
          <h2>Comment est né<br><span>C by C ?</span></h2>
          <p class="story-lead">D’une envie de rendre les beaux moments encore plus personnels.</p>
          <p>C by C est né de l’amour des attentions qui touchent, des détails qui racontent et des célébrations qui rapprochent. J’ai imaginé un espace où chaque invitation devient le premier geste d’un moment précieux, quelle que soit votre culture, votre religion ou votre tradition.</p>
          <p>Mariage, naissance, anniversaire ou cérémonie traditionnelle : chaque création est pensée avec respect et s’adapte à vos convictions, à vos coutumes et à vos envies. <strong>Toutes les religions et toutes les traditions sont les bienvenues.</strong></p>
          <a class="inline-link" href="https://chirelhalioua.fr/" target="_blank" rel="noopener noreferrer">Découvrir Chirel Dev <span>↗</span></a>
        </div>
      </section>

      <section id="fonctionnement" class="process-section section-pad">
        <div class="section-topline"><span>DU PREMIER ÉCHANGE AU GRAND JOUR</span><span>03 / LE CONCEPT</span></div>
        <div class="process-heading"><h2>Simple à imaginer.<br><span>Facile à partager.</span></h2><p>Pas de parcours compliqué : juste une vraie conversation, une création soignée et une invitation prête à rejoindre vos proches.</p></div>
        <div class="steps-grid">
          <article v-for="step in steps" :key="step.number" class="step-card">
            <div class="step-number">{{ step.number }}</div><div class="step-symbol">{{ step.number === '01' ? '↗' : step.number === '02' ? '✳' : '♡' }}</div>
            <h3>{{ step.title }}</h3><p>{{ step.text }}</p><div class="step-line"></div>
          </article>
        </div>
      </section>

      <section id="apropos" class="about-section section-pad">
        <div class="about-emblem" aria-hidden="true"><div class="about-emblem-ring"><span class="about-emblem-top">CÉLÉBRATIONS BY CHIREL</span><strong>C<span>✳</span>C</strong><span class="about-emblem-bottom">LES MOMENTS QUI NOUS UNISSENT</span></div></div>
        <div class="about-copy">
          <div class="section-eyebrow"><span>04</span> DERRIÈRE C BY C</div>
          <h2>Qui se cache<br><span>derrière C by C ?</span></h2>
          <p class="about-lead">Enchantée, moi c’est Chirel.</p>
          <p>J’aime les idées qui prennent vie, les univers harmonieux et les détails qui font toute la différence. Avec C by C, je mets ma créativité au service de vos moments de vie, pour que votre invitation soit aussi singulière que votre histoire.</p>
          <p>Mon envie : vous accompagner avec simplicité et créer quelque chose qui vous ressemble vraiment.</p>
          <a class="button button-outline" href="https://chirelhalioua.fr/" target="_blank" rel="noopener noreferrer">Découvrir Chirel Dev <span>↗</span></a>
        </div>
      </section>

      <section class="statement-band"><span class="statement-icon">✳</span><p>Les moments qui nous unissent<br><em>méritent une invitation à leur image.</em></p><span class="statement-sign">C BY C — CÉLÉBRATIONS BY CHIREL</span></section>

      <section id="contact" class="contact-section section-pad">
        <div class="contact-panel">
          <div class="contact-copy"><div class="section-eyebrow"><span>05</span> À VOUS DE JOUER</div><h2>Une belle occasion<br>se prépare ? <span>Parlons-en.</span></h2><p>Racontez-moi ce que vous avez en tête. Même si l’idée n’est pas encore tout à fait définie, on peut commencer par en parler.</p><a class="button button-gold" href="mailto:contact@chirelhalioua.fr">Écrire à Chirel <span>↗</span></a></div>
          <div class="contact-side"><div class="contact-seal">C <span>✳</span> C</div><span>VOTRE HISTOIRE COMMENCE ICI</span><a href="mailto:contact@chirelhalioua.fr">bonjour@cbyc.fr</a><small>Un mot suffit pour commencer.</small></div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-main"><a class="footer-brand" href="#accueil"><img src="/images/logo-c-by-c.svg" alt="C by C — Célébrations by Chirel"></a><p>Les moments qui nous unissent.<br><span>Invitations digitales imaginées avec cœur.</span></p><a class="footer-contact" href="mailto:bonjour@cbyc.fr">bonjour@cbyc.fr <span>↗</span></a></div>
      <div class="footer-bottom"><span>© {{ new Date().getFullYear() }} C by C — Célébrations by Chirel</span><nav aria-label="Navigation de pied de page"><a href="#histoire">Notre histoire</a><a href="#fonctionnement">Le concept</a><a href="#contact">Contact</a></nav><span>FAIT AVEC CŒUR PAR CHIREL</span></div>
    </footer>
  </div>
</template>
