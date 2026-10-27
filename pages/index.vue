<script setup lang="ts">
const menuOpen = ref(false)
const closeMenu = () => { menuOpen.value = false }
const occasions = [
  { number: '01', name: 'Mariage', detail: 'Le début d’une belle histoire', icon: '♧', image: '' },
  { number: '02', name: 'Naissance & baptême', detail: 'Les premières grandes émotions', icon: '✳', image: '' },
  {number: '03', name: 'Anniversaire', detail: 'Une année de plus à célébrer', icon: '✦', image: '' },
  { number: '04', name: 'Cérémonies & traditions', detail: 'Vos moments, vos valeurs', icon: '◇', image: '' }
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
      <a class="brand" href="https://c-by-c-zeta.vercel.app/" aria-label="C by C, accueil" @click="closeMenu">
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

      <section id="occasions" class="occasions-section section-pad">
        <div class="section-topline"><span>À CHAQUE MOMENT SON ÉCRIN</span></div>
        <div class="occasions-heading"><h2>Qu’avez-vous<br><span>à célébrer ?</span></h2><p>Les grands jours comme les petits bonheurs. Choisissez votre occasion, nous imaginerons une invitation qui en capture l’esprit.</p></div>
        <div class="occasion-grid">
          <a v-for="occasion in occasions" :key="occasion.number" class="occasion-card" href="/occasions">
            <div class="occasion-image occasion-icon-only" aria-hidden="true"><span>{{ occasion.icon }}</span></div><div class="occasion-card-top"><span class="occasion-icon">{{ occasion.icon }}</span></div>
            <div class="occasion-card-bottom"><h3>{{ occasion.name }}</h3><p>{{ occasion.detail }}</p><span class="card-arrow">↗</span></div>
          </a>
        </div>
      </section>

      <section id="details" class="details-section section-pad">
        <div class="details-editorial-head">
          <span class="details-kicker">L’ART DU DÉTAIL</span>
          <h2>Votre histoire.<br><em>Votre façon de célébrer.</em></h2>
          <p>Une invitation pensée autour de ce qui rend votre moment unique.</p>
        </div>
        <div class="details-showcase">
          <div class="details-photo">
            <img src="https://images.squarespace-cdn.com/content/v1/69529d9062a2127adec0fea0/a89f19d4-46cd-42e2-9136-b00006c4577f/lola-julien-mariage-paris-caf%C3%A9-tour-eiffel-louvre-robe-costume-homme-femme-7406109.jpg" alt="Détails délicats d’une célébration élégante" loading="lazy">
            <span class="details-photo-note">IMAGINÉ AVEC CŒUR</span>
          </div>
          <div class="details-points">
            <article class="details-point"><span class="details-point-label">L’ESTHÉTIQUE</span><div><h3>Une esthétique qui vous ressemble</h3><p>Les couleurs et les détails donnent le ton dès la première ouverture.</p></div></article>
            <article class="details-point"><span class="details-point-label">LES MOTS</span><div><h3>Des mots choisis pour vous</h3><p>Votre message, votre émotion, votre histoire.</p></div></article>
            <article class="details-point"><span class="details-point-label">VOS TRADITIONS</span><div><h3>Vos traditions, naturellement</h3><p>Chaque création s’adapte à votre culture et à vos envies.</p></div></article>
          </div>
        </div>
      </section>

      <section id="fonctionnement" class="process-section section-pad">
        <div class="section-topline"><span>DU PREMIER ÉCHANGE AU GRAND JOUR</span><span>LE CONCEPT</span></div>
        <div class="process-heading"><h2>Simple à imaginer.<br><span>Facile à partager.</span></h2><p>Pas de parcours compliqué : juste une vraie conversation, une création soignée et une invitation prête à rejoindre vos proches.</p></div>
        <div class="steps-grid">
          <article v-for="step in steps" :key="step.number" class="step-card">
            
            <h3>{{ step.title }}</h3><p>{{ step.text }}</p><div class="step-line"></div>
          </article>
        </div>
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
      <div class="footer-main"><a class="footer-brand" href="https://c-by-c-zeta.vercel.app/"><img src="https://raw.githubusercontent.com/chirelhalioua/c-by-c/main/images/logo-c-by-c.png" alt="C by C — Célébrations by Chirel"></a><p>Les moments qui nous unissent.<br><span>Invitations digitales imaginées avec cœur.</span></p></div>
      <div class="footer-bottom"><span>© {{ new Date().getFullYear() }} C by C — Célébrations by Chirel</span><nav aria-label="Navigation de pied de page"><a href="/">Accueil</a><a href="/contact">Contact</a></nav><span>FAIT AVEC CŒUR PAR CHIREL</span></div>
    </footer>
  </div>
</template>
