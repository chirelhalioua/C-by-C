<script setup lang="ts">
const menuOpen = ref(false)
const closeMenu = () => { menuOpen.value = false }
const processSteps = [
  { number: '01', title: 'On échange', text: 'Vous me racontez votre événement, vos envies et les petits détails qui le rendent unique.', icon: '✳' },
  { number: '02', title: 'On imagine', text: 'Nous imaginons une invitation personnalisée, jusque dans les couleurs, les mots et les finitions.', icon: '✎' },
  { number: '03', title: 'Vous célébrez', text: 'Votre invitation digitale est prête à être partagée avec celles et ceux qui comptent.', icon: '↗' }
]
</script>

<template>
  <div>
    <header class="site-header">
      <a class="brand" href="#accueil" aria-label="C by C, accueil" @click="closeMenu">
        <img class="brand-logo" src="/images/logo-c-by-c.png" alt="C by C — Celebrations by Chirel">
      </a>
      <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-label="Ouvrir le menu" @click="menuOpen = !menuOpen">
        <span></span><span></span>
      </button>
      <nav class="main-nav" :class="{ 'is-open': menuOpen }" aria-label="Navigation principale">
        <a href="#accueil" @click="closeMenu">Accueil</a>
        <a href="#histoire" @click="closeMenu">Notre histoire</a>
        <a href="#fonctionnement" @click="closeMenu">Comment ça fonctionne ?</a>
        <a href="#contact" @click="closeMenu">Contact</a>
        <a class="nav-cta" href="#contact" @click="closeMenu">Parlons de votre projet <span>↗</span></a>
      </nav>
    </header>

    <main>
      <section id="accueil" class="hero">
        <div class="hero-copy">
          <p class="eyebrow"><span class="eyebrow-line"></span> Invitations digitales</p>
          <h1>Les beaux moments méritent <em>une invitation à leur image.</em></h1>
          <p class="hero-intro">Des invitations digitales élégantes et personnalisées pour célébrer ce qui compte vraiment. Une attention délicate, imaginée pour vous et ceux que vous aimez.</p>
          <div class="hero-actions">
            <a class="button button-dark" href="#contact">Imaginons votre invitation <span>↗</span></a>
            <a class="text-link" href="#histoire">Découvrir C by C <span>↓</span></a>
          </div>
          <div class="hero-note"><span class="note-star">✳</span><span>Des créations pensées avec soin,<br>pour des souvenirs qui restent.</span></div>
        </div>
        <div class="hero-art" role="img" aria-label="Ambiance de papeterie de célébration aux tons ivoire et champagne">
          <div class="art-glow"></div><div class="art-branch branch-one">❧</div><div class="art-branch branch-two">❧</div>
          <div class="art-ribbon"></div><div class="invitation-card">
            <span class="card-small">VOUS ÊTES INVITÉS</span><span class="card-flourish">❧</span>
            <span class="card-script">Une belle histoire</span><span class="card-title">commence ici</span>
            <span class="card-rule"></span><span class="card-date">UNE CÉLÉBRATION · UN SOUVENIR</span>
          </div>
          <div class="floating-seal">C<span>✳</span>C</div>
          <div class="hero-image-caption"><span>Un instant précieux</span><span class="caption-rule"></span><span>01 / C by C</span></div>
        </div>
        <div class="hero-bottomline"><span>Pour les instants qui nous réunissent</span><span class="bottomline-center">Fait avec soin, à votre image</span><a href="#histoire">Faire défiler <span>↓</span></a></div>
      </section>

      <section class="occasion-strip" aria-label="Les moments à célébrer">
        <p>Chaque histoire mérite sa façon de célébrer</p>
        <div class="occasion-list"><span><i>♡</i>Mariages</span><span><i>✧</i>Naissances & baptêmes</span><span><i>◇</i>Anniversaires</span><span><i>✳</i>Cérémonies & traditions</span></div>
      </section>

      <section id="histoire" class="story-section section-wrap">
        <div class="section-label"><span>01</span> Une attention qui change tout</div>
        <div class="story-grid">
          <div class="story-heading"><p class="eyebrow">L'histoire de C by C</p><h2>Comment est né <em>C by C&nbsp;?</em></h2><div class="tiny-ornament">✳</div></div>
          <div class="story-copy"><p class="large-copy">Tout commence par une envie simple : <em>faire de chaque invitation le premier souvenir d'un beau moment.</em></p><p>C by C est né de l'amour des détails, des jolies attentions et de ces instants qui rassemblent. Chaque création est imaginée pour raconter votre histoire avec délicatesse, sans jamais ressembler à une autre.</p><a class="text-link" href="#apropos">Rencontrer l'univers C by C <span>↗</span></a></div>
          <div class="story-visual"><div class="story-photo photo-one"></div><div class="photo-note"><span>Les petits détails</span><span>font les grands souvenirs.</span></div><div class="decorative-sun">✳</div></div>
        </div>
      </section>

      <section id="fonctionnement" class="process-section">
        <div class="section-wrap">
          <div class="section-label"><span>02</span> Une expérience tout en douceur</div>
          <div class="process-heading"><div><p class="eyebrow">Simple, humain, personnalisé</p><h2>Comment ça <em>fonctionne&nbsp;?</em></h2></div><p>De la première idée au petit lien que vous partagerez avec vos proches, chaque étape est pensée pour être simple et agréable.</p></div>
          <div class="process-grid"><article v-for="step in processSteps" :key="step.number" class="process-card"><div class="process-card-top"><span>{{ step.number }}</span><span class="process-icon">{{ step.icon }}</span></div><h3>{{ step.title }}</h3><p>{{ step.text }}</p><span class="process-card-line"></span></article></div>
          <div class="process-footnote"><span>✳</span> Une création singulière, à votre rythme et selon vos envies.</div>
        </div>
      </section>

      <section id="apropos" class="founder-section section-wrap">
        <div class="founder-visual"><div class="founder-photo"><span class="portrait-monogram">C.</span></div><div class="founder-stamp"><span>Créé avec</span><strong>♡</strong><span>par Chirel</span></div></div>
        <div class="founder-copy"><div class="section-label"><span>03</span> Derrière chaque création</div><p class="eyebrow">Enchantée, moi c'est Chirel</p><h2>Qui se cache derrière <em>C by C&nbsp;?</em></h2><p class="large-copy">La conviction que les plus beaux souvenirs commencent parfois par une simple attention.</p><p>J'aime imaginer des univers délicats où chaque détail a sa place. Avec C by C, je mets ma créativité et mon sens du détail au service de vos célébrations, pour créer une invitation qui vous ressemble vraiment.</p><a class="button button-outline" href="#contact">Faisons connaissance <span>↗</span></a><div class="signature">Chirel <span>✳</span></div></div>
      </section>

      <section class="quote-band"><span class="quote-mark">“</span><p>Les moments qui nous unissent méritent d'être annoncés avec le cœur.</p><span class="quote-credit">L'esprit C by C</span></section>

      <section id="contact" class="contact-section section-wrap">
        <div class="contact-intro"><p class="eyebrow">Et si on imaginait la suite ensemble ?</p><h2>Un joli moment se prépare.<br><em>Parlons-en.</em></h2><p>Un mariage, une naissance, un anniversaire ou une occasion qui vous tient à cœur ? Racontez-moi votre idée.</p><a class="button button-dark" href="mailto:bonjour@cbyc.fr">M'écrire un message <span>↗</span></a></div>
        <div class="contact-aside"><span class="contact-flower">✳</span><p>Une idée, une question ou simplement envie d'échanger ?</p><a href="mailto:bonjour@cbyc.fr">bonjour@cbyc.fr</a><small>Je serai ravie de vous lire.</small></div>
      </section>
    </main>

    <footer class="site-footer">
      <a class="footer-brand" href="#accueil"><img src="/images/logo-c-by-c.png" alt="C by C — Celebrations by Chirel"></a>
      <p class="footer-tagline">Les moments qui nous unissent.</p>
      <nav aria-label="Navigation de pied de page"><a href="#accueil">Accueil</a><a href="#histoire">Notre histoire</a><a href="#fonctionnement">Comment ça fonctionne ?</a><a href="#contact">Contact</a></nav>
      <div class="footer-legal"><span>© {{ new Date().getFullYear() }} C by C — Célébrations by Chirel</span><a href="#contact">Mentions légales</a><a href="#contact">Confidentialité</a></div>
    </footer>
  </div>
</template>
