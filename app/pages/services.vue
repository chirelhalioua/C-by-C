<script setup>
const prestations = [
  {
    numero: '01',
    titre: 'Invitation digitale',
    sousTitre: 'L’essentiel, avec élégance',
    description: 'Une invitation personnalisée à partager facilement avec vos proches, avec les informations importantes de votre événement.',
    inclus: ['Prénoms et texte personnalisés', 'Date, horaires et lieu', 'Univers graphique adapté à votre occasion'],
    note: 'Idéale pour annoncer un événement simplement.'
  },
  {
    numero: '02',
    titre: 'Site complet d’invitation',
    sousTitre: 'Tout votre événement au même endroit',
    description: 'Une page web dédiée à votre célébration, pensée comme un petit univers à part entière et consultable depuis un téléphone.',
    inclus: ['Page d’accueil aux couleurs de votre événement', 'Programme et informations pratiques', 'Liens utiles et informations d’accès', 'Possibilité de prévoir une réponse des invités selon le projet'],
    note: 'Le contenu est défini ensemble selon vos besoins.'
  },
  {
    numero: '03',
    titre: 'Création sur mesure',
    sousTitre: 'Une création qui ne ressemble qu’à vous',
    description: 'Pour une idée particulière, une tradition familiale ou une direction artistique bien précise, nous imaginons une proposition personnalisée.',
    inclus: ['Échange autour de votre événement', 'Choix des couleurs et de l’ambiance', 'Composition et textes adaptés à votre histoire'],
    note: 'Chaque demande fait l’objet d’un échange préalable.'
  }
]
const options = [
  { symbole: '✳', titre: 'Réponses des invités', texte: 'Prévoir une confirmation de présence et les informations nécessaires à l’organisation, selon la formule retenue.' },
  { symbole: '♡', titre: 'Livre d’or numérique', texte: 'Imaginer un espace où les proches pourront déposer un mot, un vœu ou un souvenir à conserver après la célébration.' },
  { symbole: '⌖', titre: 'Informations pratiques', texte: 'Réunir les horaires, les lieux, le programme et les liens utiles dans un espace facile à consulter.' },
  { symbole: '✧', titre: 'Souvenir après l’événement', texte: 'Réfléchir à une façon de retrouver les messages et les souvenirs partagés par les invités.' }
]
</script>

<template>
  <main class="services-page">
    <section class="services-hero">
      <p class="eyebrow">LES EXPÉRIENCES C BY C</p>
      <h1>Bien plus qu’une invitation,<br /><em>une expérience à partager.</em></h1>
      <p class="hero-description">Du faire-part digital au site complet dédié à votre événement, imaginons ensemble une façon élégante de réunir ceux qui comptent.</p>
      <NuxtLink to="/contact" class="primary-button">Parler de mon projet <span>↗</span></NuxtLink>
      <div class="hero-ornament" aria-hidden="true">✳</div>
    </section>

    <section class="services-offers">
      <div class="section-intro">
        <p class="eyebrow">NOS PRESTATIONS</p>
        <h2>Choisissez l’expérience<br /><em>qui vous ressemble.</em></h2>
        <p>Chaque événement est différent. Nous prenons le temps de comprendre votre envie pour vous orienter vers la création la plus adaptée.</p>
      </div>
      <div class="offer-guide" aria-label="Choisir une prestation">
        <a href="#invitation-digitale">Je veux une invitation à partager <span>↗</span></a>
        <a href="#site-complet">Je veux une page dédiée à l’événement <span>↗</span></a>
        <a href="#creation-sur-mesure">J’ai un besoin particulier <span>↗</span></a>
      </div>
      <div class="offer-grid">
        <article
          v-for="item in prestations"
          :id="item.numero === '01' ? 'invitation-digitale' : item.numero === '02' ? 'site-complet' : 'creation-sur-mesure'"
          :key="item.numero"
          class="offer-card"
        >
          <div class="offer-top"><span>{{ item.numero }}</span><span class="offer-star">✧</span></div>
          <p class="offer-subtitle">{{ item.sousTitre }}</p>
          <h3>{{ item.titre }}</h3>
          <p class="offer-description">{{ item.description }}</p>
          <ul><li v-for="point in item.inclus" :key="point">{{ point }}</li></ul>
          <p class="offer-note">{{ item.note }}</p>
          <NuxtLink :to="{ path: '/contact', query: { prestation: item.titre } }" class="offer-link">Parler de cette prestation <span>↗</span></NuxtLink>
        </article>
      </div>
    </section>

    <section class="experience-section">
      <div class="experience-copy">
        <p class="eyebrow">OPTIONS COMPLÉMENTAIRES</p>
        <h2>Des fonctionnalités<br /><em>à définir ensemble.</em></h2>
        <p>Ces options ne sont pas incluses automatiquement dans chaque création. Nous vérifions avec vous ce qui est possible, utile et adapté à votre projet avant de le confirmer dans la proposition.</p>
        <NuxtLink to="/contact" class="text-link">Parlons de vos besoins <span>↗</span></NuxtLink>
      </div>
      <div class="feature-list">
        <article v-for="option in options" :key="option.titre" class="feature-row">
          <span class="feature-symbol">{{ option.symbole }}</span>
          <div><h3>{{ option.titre }}</h3><p>{{ option.texte }}</p></div>
        </article>
      </div>
    </section>

    <section class="journey-section">
      <div class="section-intro">
        <p class="eyebrow">COMMENT ÇA SE PASSE ?</p>
        <h2>De votre idée à <em>votre invitation.</em></h2>
      </div>
      <div class="journey-grid">
        <article><span>01</span><h3>Vous nous racontez</h3><p>Votre événement, vos envies, le ton souhaité et les informations à transmettre.</p></article>
        <article><span>02</span><h3>Nous imaginons</h3><p>Nous échangeons sur le format, l’univers graphique et les options adaptées au projet.</p></article>
        <article><span>03</span><h3>Nous personnalisons</h3><p>Le contenu et les détails sont ajustés ensemble avant validation.</p></article>
        <article><span>04</span><h3>Vous partagez</h3><p>Une fois la création finalisée, vous pouvez la transmettre à vos invités selon le format convenu.</p></article>
      </div>
      <p class="service-disclaimer">Les réponses des invités, le livre d’or numérique et la conservation des messages sont des options à étudier au cas par cas. Leur disponibilité et leur périmètre sont confirmés avant toute commande.</p>
      <NuxtLink to="/contact" class="primary-button">Construire mon projet <span>↗</span></NuxtLink>
    </section>
  </main>
</template>

<style scoped>
.services-page { color:#51463d; }
.services-hero { position:relative; overflow:hidden; text-align:center; padding:90px 24px 82px; background:linear-gradient(135deg,#f8f3eb,#f2e8dc); }
.eyebrow { margin:0 0 18px; color:#a48761; font-size:10px; letter-spacing:2.7px; line-height:1.8; }
.services-hero h1,.section-intro h2,.experience-copy h2 { margin:0; font-family:Georgia,"Times New Roman",serif; font-size:clamp(34px,5vw,56px); font-weight:400; line-height:1.2; }
.services-hero h1 em,.section-intro h2 em,.experience-copy h2 em { color:#a48761; font-weight:400; }
.hero-description { max-width:610px; margin:24px auto 28px; color:#81766c; font-size:15px; line-height:1.9; }
.primary-button { display:inline-flex; align-items:center; gap:22px; padding:15px 22px; border:1px solid #a48761; background:#a48761; color:#fffdf9; text-decoration:none; font-size:12px; letter-spacing:.3px; transition:background .2s ease,transform .2s ease; }
.primary-button:hover { background:#80694c; transform:translateY(-2px); }
.hero-ornament { position:absolute; right:10%; bottom:14%; color:#c6ad89; font-size:42px; opacity:.55; }
.services-offers,.experience-section,.journey-section { max-width:1180px; margin:0 auto; padding:76px 28px; }
.section-intro { max-width:650px; margin:0 auto 42px; text-align:center; }
.section-intro > p:last-child { max-width:520px; margin:20px auto 0; color:#81766c; font-size:14px; line-height:1.9; }
.offer-guide { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:12px; margin:-12px 0 28px; }
.offer-guide a { display:flex; align-items:center; justify-content:space-between; gap:12px; padding:14px 16px; border:1px solid #e8ded1; background:#f8f4ed; color:#80694c; text-decoration:none; font-size:12px; line-height:1.6; transition:background .2s ease,border-color .2s ease; }
.offer-guide a:hover { background:#f2e8dc; border-color:#c6ad89; }
.offer-guide a span { flex-shrink:0; color:#a48761; } 
.offer-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:20px; align-items:stretch; }
.offer-card { scroll-margin-top:24px; }
.offer-card { display:flex; flex-direction:column; padding:28px 25px; border:1px solid #e8ded1; background:#fcfaf6; }
.offer-top { display:flex; align-items:center; justify-content:space-between; padding-bottom:22px; border-bottom:1px solid #e9e0d5; color:#a48761; font-size:11px; letter-spacing:2px; }
.offer-star { font-size:23px; }
.offer-subtitle { margin:24px 0 8px; color:#a48761; font-size:11px; }
.offer-card h3,.feature-row h3,.journey-grid h3 { margin:0; font-family:Georgia,"Times New Roman",serif; font-size:24px; font-weight:400; line-height:1.35; }
.offer-description { color:#81766c; font-size:13px; line-height:1.85; }
.offer-card ul { display:grid; gap:11px; margin:8px 0 22px; padding:0; list-style:none; }
.offer-card li { position:relative; padding-left:18px; color:#64594f; font-size:12px; line-height:1.7; }
.offer-card li:before { position:absolute; left:0; color:#a48761; content:'✧'; }
.offer-note { margin-top:auto; padding-top:16px; border-top:1px solid #e9e0d5; color:#8b7c6c; font-size:11px; line-height:1.7; }
.offer-link,.text-link { display:inline-flex; align-items:center; justify-content:space-between; gap:12px; margin-top:20px; padding-bottom:7px; border-bottom:1px solid #c6ad89; color:#80694c; text-decoration:none; font-size:12px; }
.experience-section { display:grid; grid-template-columns:.85fr 1.15fr; gap:60px; align-items:center; background:#f8f4ed; max-width:none; padding-left:max(28px,calc((100% - 1124px)/2)); padding-right:max(28px,calc((100% - 1124px)/2)); }
.experience-copy > p:not(.eyebrow) { color:#81766c; font-size:14px; line-height:1.9; }
.feature-list { border-top:1px solid #e5d9ca; }
.feature-row { display:grid; grid-template-columns:48px 1fr; gap:16px; padding:21px 0; border-bottom:1px solid #e5d9ca; }
.feature-symbol { display:grid; width:42px; height:42px; place-items:center; border:1px solid #d8c5aa; border-radius:50%; color:#a48761; font-size:20px; }
.feature-row h3 { font-size:20px; }
.feature-row p { margin:7px 0 0; color:#81766c; font-size:12px; line-height:1.8; }
.journey-grid { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:22px; margin:44px 0 28px; }
.journey-grid article { padding-top:20px; border-top:1px solid #cbb697; }
.journey-grid article > span { display:block; margin-bottom:20px; color:#a48761; font-size:11px; letter-spacing:2px; }
.journey-grid h3 { font-size:21px; }
.journey-grid p { color:#81766c; font-size:12px; line-height:1.8; }
.service-disclaimer { max-width:800px; margin:0 auto 26px; color:#8b7c6c; font-size:11px; line-height:1.8; text-align:center; }
.journey-section > .primary-button { display:flex; width:max-content; margin:0 auto; }
@media(max-width:850px) { .offer-guide { grid-template-columns:1fr; max-width:580px; margin:0 auto 24px; } .offer-grid { grid-template-columns:1fr; max-width:580px; margin:auto; } .offer-card { padding:25px; } .experience-section { grid-template-columns:1fr; gap:30px; } .journey-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } .hero-ornament { right:5%; bottom:6%; } }
@media(max-width:520px) { .services-hero { padding:64px 22px 58px; } .services-offers,.experience-section,.journey-section { padding:55px 20px; } .journey-grid { grid-template-columns:1fr; gap:12px; } .journey-grid article { padding:16px 0; } .hero-ornament { display:none; } .section-intro { margin-bottom:30px; } }
</style>