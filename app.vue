<script setup lang="ts">
const menuOpen = ref(false)
const closeMenu = () => { menuOpen.value = false }
const occasions = [
  { number: '01', name: 'Mariage', detail: 'Le début d’une belle histoire', icon: '♡', image: 'https://images.unsplash.com/photo-1770217613300-c34b17172c5f?auto=format&fit=crop&crop=faces&exp=18&w=1200&q=90' },
  { number: '02', name: 'Naissance & baptême', detail: 'Les premières grandes émotions', icon: '✳', image: 'https://images.unsplash.com/photo-1723205753025-60466996e204?auto=format&fit=crop&w=900&q=80' },
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
        <img class="brand-logo" src="https://raw.githubusercontent.com/chirelhalioua/c-by-c/main/images/logo-c-by-c.png" alt="C by C — Célébrations by Chirel">
      </a>
      <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-label="Ouvrir le menu" @click="menuOpen = !menuOpen">
        <span></span><span></span>
      </button>
      <nav class="main-nav" :class="{ 'is-open': menuOpen }" aria-label="Navigation principale">
        <a href="#occasions" @click="closeMenu">Les occasions</a>
        <a href="#details" @click="closeMenu">Personnalisation</a>
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
          <a v-for="occasion in occasions" :key="occasion.number" class="occasion-card" href="#contact">
            <div class="occasion-image" :class="{ 'occasion-image-birth': occasion.number === '02' }"><img :src="occasion.image" :alt="occasion.name" loading="lazy"></div><div class="occasion-card-top"><span class="occasion-icon">{{ occasion.icon }}</span></div>
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
            <img src="https://images.unsplash.com/photo-1770217613300-c34b17172c5f?auto=format&fit=crop&crop=faces&exp=18&w=1200&q=90" alt="Détails délicats d’une célébration élégante" loading="lazy">
            <span class="details-photo-note">IMAGINÉ AVEC CŒUR</span>
          </div>
          <div class="details-points">
            <article class="details-point"><span class="details-point-label">L’ESTHÉTIQUE</span><div><h3>Une esthétique qui vous ressemble</h3><p>Les couleurs et les détails donnent le ton dès la première ouverture.</p></div></article>
            <article class="details-point"><span class="details-point-label">LES MOTS</span><div><h3>Des mots choisis pour vous</h3><p>Votre message, votre émotion, votre histoire.</p></div></article>
            <article class="details-point"><span class="details-point-label">VOS TRADITIONS</span><div><h3>Vos traditions, naturellement</h3><p>Chaque création s’adapte à votre culture et à vos envies.</p></div></article>
          </div>
        </div>
      </section>

      <section id="histoire" class="story-section section-pad">
        <div class="story-visual story-visual-framed">
          <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85" alt="Une table de célébration fleurie, dressée avec élégance" loading="lazy">
          <div class="story-photo-caption"><span>LES MOMENTS QUI NOUS UNISSENT</span><i>✳</i><span>IMAGINÉS AVEC CŒUR</span></div>
        </div>
        <div class="story-copy">
          <div class="section-eyebrow">LA PETITE HISTOIRE</div>
          <h2>Comment est né<br><span>C by C ?</span></h2>
          <p class="story-lead">D’une envie de rendre les beaux moments encore plus personnels.</p>
          <p>C by C est né de l’amour des attentions qui touchent, des détails qui racontent et des célébrations qui rapprochent. J’ai imaginé un espace où chaque invitation devient le premier geste d’un moment précieux, quelle que soit votre culture, votre religion ou votre tradition.</p>
          <p>Mariage, naissance, anniversaire ou cérémonie traditionnelle : chaque création est pensée avec respect et s’adapte à vos convictions, à vos coutumes et à vos envies. <strong>Toutes les religions et toutes les traditions sont les bienvenues.</strong></p>
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

      <section id="apropos" class="about-section section-pad">
        <div class="about-emblem"><img src="https://raw.githubusercontent.com/chirelhalioua/c-by-c/main/images/logo-c-by-c.png" alt="Logo C by C — Célébrations by Chirel"></div>
        <div class="about-copy">
          <div class="section-eyebrow">DERRIÈRE C BY C</div>
          <h2>Qui se cache<br><span>derrière C by C ?</span></h2>
          <p class="about-lead">Enchantée, moi c’est Chirel.</p>
          <p>J’aime les idées qui prennent vie, les univers harmonieux et les détails qui font toute la différence. Avec C by C, je mets ma créativité au service de vos moments de vie, pour que votre invitation soit aussi singulière que votre histoire.</p>
          <p>Mon envie : vous accompagner avec simplicité et créer quelque chose qui vous ressemble vraiment.</p>
        </div>
      </section>

      <section class="statement-band"><span class="statement-icon">✳</span><p>Les moments qui nous unissent<br><em>méritent une invitation à leur image.</em></p><span class="statement-sign">C BY C — CÉLÉBRATIONS BY CHIREL</span></section>

      <section id="contact" class="contact-section section-pad">
        <div class="contact-panel">
          <div class="contact-copy"><div class="section-eyebrow">À VOUS DE JOUER</div><h2>Une belle occasion<br>se prépare ? <span>Parlons-en.</span></h2><p>Racontez-moi ce que vous avez en tête. Même si l’idée n’est pas encore tout à fait définie, on peut commencer par en parler.</p><a class="button button-gold" href="mailto:contact@chirelhalioua.fr">Écrire à Chirel <span>↗</span></a></div>
          
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-main"><a class="footer-brand" href="#accueil"><img src="https://raw.githubusercontent.com/chirelhalioua/c-by-c/main/images/logo-c-by-c.png" alt="C by C — Célébrations by Chirel"></a><p>Les moments qui nous unissent.<br><span>Invitations digitales imaginées avec cœur.</span></p></div>
      <div class="footer-bottom"><span>© {{ new Date().getFullYear() }} C by C — Célébrations by Chirel</span><nav aria-label="Navigation de pied de page"><a href="#histoire">Notre histoire</a><a href="#fonctionnement">Le concept</a><a href="#contact">Contact</a></nav><span>FAIT AVEC CŒUR PAR CHIREL</span></div>
    </footer>
  </div>
</template>
