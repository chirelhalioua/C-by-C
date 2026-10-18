<script setup>
const prestations = [
  {
    numero: '01',
    titre: 'Invitation digitale',
    sousTitre: 'L’essentiel, avec élégance',
    description: 'Un faire-part personnalisé à partager facilement avec vos proches, avec le texte et les informations clés de votre événement.',
    inclus: ['Prénoms et texte personnalisés', 'Date, horaires et lieu', 'Univers graphique adapté à votre occasion'],
    note: 'Pour annoncer et inviter simplement.'
  },
  {
    numero: '02',
    titre: 'Site complet d’invitation',
    sousTitre: 'Toutes les informations au même endroit',
    description: 'Une page web dédiée à votre célébration, consultable sur téléphone, pour réunir les informations pratiques.',
    inclus: ['Page dédiée à votre événement', 'Programme et informations pratiques', 'Accès, horaires et liens utiles'],
    note: 'Le contenu est défini ensemble selon vos besoins.'
  },
  {
    numero: '03',
    titre: 'Création sur mesure',
    sousTitre: 'Une création qui ne ressemble qu’à vous',
    description: 'Pour une idée particulière, une tradition familiale ou une direction artistique précise, imaginons un format adapté.',
    inclus: ['Échange autour de votre événement', 'Choix des couleurs et de l’ambiance', 'Composition et textes adaptés à votre histoire'],
    note: 'Chaque demande commence par un échange.'
  }
]
const options = [
  { symbole: '✳', titre: 'Réponses des invités', texte: 'Possibilité de prévoir une confirmation de présence, selon la formule et les besoins du projet.' },
  { symbole: '♡', titre: 'Livre d’or numérique', texte: 'Un espace de messages, de vœux ou de souvenirs à étudier selon le projet.' },
  { symbole: '⌖', titre: 'Informations pratiques', texte: 'Programme, horaires, lieux et liens utiles réunis dans un espace facile à consulter.' },
  { symbole: '✧', titre: 'Souvenirs après l’événement', texte: 'Une façon de conserver les messages partagés par les invités, si cette option est retenue.' }
]
</script>

<template>
  <main class="service-page">
    <section class="service-hero">
      <p class="service-eyebrow">NOS PRESTATIONS</p>
      <h1>Trois façons de donner vie<br /><em>à votre invitation.</em></h1>
      <p>Commencez par le format qui correspond à votre besoin. Le contenu et les options sont ensuite définis ensemble, en toute clarté.</p>
      <div class="service-hero-actions">
        <NuxtLink to="#formats" class="service-button">Comparer les formats <span>↓</span></NuxtLink>
        <NuxtLink to="/contact" class="service-secondary-link">Je ne sais pas encore <span>↗</span></NuxtLink>
      </div>
    </section>

    <section id="formats" class="service-formats">
      <div class="service-section-heading">
        <p class="service-eyebrow">CHOISIR SIMPLEMENT</p>
        <h2>Quelle formule vous <em>correspond ?</em></h2>
        <p>Voici la différence entre les trois prestations principales.</p>
      </div>
      <div class="service-format-grid">
        <article v-for="item in prestations" :key="item.numero" class="service-format-card">
          <div class="service-format-top"><span>{{ item.numero }}</span><span>✧</span></div>
          <p class="service-format-subtitle">{{ item.sousTitre }}</p>
          <h3>{{ item.titre }}</h3>
          <p class="service-format-description">{{ item.description }}</p>
          <p class="service-includes-label">CE QUE NOUS DÉFINISSONS ENSEMBLE</p>
          <ul><li v-for="point in item.inclus" :key="point">{{ point }}</li></ul>
          <p class="service-format-note">{{ item.note }}</p>
          <NuxtLink :to="{ path: '/contact', query: { prestation: item.titre } }" class="service-format-link">Demander cette formule <span>↗</span></NuxtLink>
        </article>
      </div>
    </section>

    <section class="service-options">
      <div class="service-options-copy">
        <p class="service-eyebrow">EN COMPLÉMENT, SI BESOIN</p>
        <h2>Des options pour aller<br /><em>plus loin.</em></h2>
        <p>Ces fonctionnalités ne sont pas incluses automatiquement dans chaque prestation. Nous vérifions avec vous ce qui est réalisable et utile, puis nous le confirmons avant toute commande.</p>
        <NuxtLink to="/contact" class="service-secondary-link">Discuter de mes besoins <span>↗</span></NuxtLink>
      </div>
      <div class="service-option-list">
        <article v-for="option in options" :key="option.titre" class="service-option-row">
          <span>{{ option.symbole }}</span><div><h3>{{ option.titre }}</h3><p>{{ option.texte }}</p></div>
        </article>
      </div>
    </section>

    <section id="etapes" class="service-steps-section">
      <div class="service-section-heading">
        <p class="service-eyebrow">COMMENT ÇA SE PASSE ?</p>
        <h2>Un parcours en <em>trois étapes.</em></h2>
      </div>
      <ol class="service-steps">
        <li><span>01</span><div><h3>Vous nous expliquez votre projet</h3><p>Votre événement, vos envies, votre date et les informations à transmettre.</p></div></li>
        <li><span>02</span><div><h3>Nous validons le format ensemble</h3><p>Nous précisons le contenu, l’univers graphique, les options et le périmètre de la création.</p></div></li>
        <li><span>03</span><div><h3>Votre création est préparée</h3><p>Après accord sur les détails, votre invitation est finalisée selon le format convenu.</p></div></li>
      </ol>
    </section>

    <section class="service-final">
      <p class="service-eyebrow">BESOIN D’UN CONSEIL ?</p>
      <h2>Nous vous aidons à choisir <em>le bon format.</em></h2>
      <p>Vous hésitez entre une invitation et un site complet ? Décrivez-nous simplement votre événement.</p>
      <NuxtLink to="/contact" class="service-button">Parler de mon projet <span>↗</span></NuxtLink>
      <NuxtLink to="/faq" class="service-faq-link">Lire les questions fréquentes</NuxtLink>
    </section>
  </main>
</template>

<style scoped>
.service-page { color:#51463d; }
.service-hero { padding:clamp(54px,8vw,90px) 22px; background:linear-gradient(120deg,#fffaf3,#f1e5d3); text-align:center; }
.service-eyebrow { margin:0 0 16px; color:#a48761; font-family:Arial,sans-serif; font-size:10px; letter-spacing:2.3px; line-height:1.8; }
.service-hero h1,.service-section-heading h2,.service-options h2,.service-final h2 { margin:0; color:#38271f; font-family:Georgia,"Times New Roman",serif; font-size:clamp(36px,4.5vw,54px); font-weight:400; line-height:1.12; }
.service-hero h1 em,.service-section-heading h2 em,.service-options h2 em,.service-final h2 em { color:#a48761; font-weight:400; }
.service-hero>p:not(.service-eyebrow) { max-width:650px; margin:20px auto 26px; color:#81766c; font-size:15px; line-height:1.9; }
.service-hero-actions { display:flex; flex-wrap:wrap; justify-content:center; align-items:center; gap:14px 24px; }
.service-button { display:inline-flex; align-items:center; justify-content:center; gap:18px; min-height:48px; padding:13px 21px; border:1px solid #a48761; background:#80694c; color:#fffdf9; font-family:Arial,sans-serif; font-size:11px; text-decoration:none; transition:background .2s,transform .2s; }
.service-button:hover { background:#654c3d; transform:translateY(-2px); }
.service-secondary-link { display:inline-flex; align-items:center; gap:10px; padding:7px 0 5px; border-bottom:1px solid #c6ad89; color:#80694c; font-family:Arial,sans-serif; font-size:11px; text-decoration:none; }
.service-formats { max-width:1220px; margin:0 auto; padding:clamp(54px,7vw,82px) 28px; }
.service-section-heading { max-width:650px; margin:0 auto 34px; text-align:center; }
.service-section-heading>p:last-child { margin:13px 0 0; color:#81766c; font-size:14px; line-height:1.8; }
.service-section-heading h2,.service-options h2,.service-final h2 { font-size:clamp(32px,3.4vw,44px); }
.service-format-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; align-items:stretch; }
.service-format-card { display:flex; flex-direction:column; min-width:0; padding:27px 23px 23px; border:1px solid #e4d6c5; background:#fffdf9; }
.service-format-card:nth-child(2) { border-color:#bd914b; background:#f7eee1; }
.service-format-top { display:flex; justify-content:space-between; color:#a48761; font-family:Arial,sans-serif; font-size:11px; letter-spacing:1.5px; }
.service-format-top span:last-child { font-family:Georgia,serif; font-size:24px; }
.service-format-subtitle { margin:22px 0 7px; color:#a48761; font-family:Arial,sans-serif; font-size:9px; letter-spacing:1px; line-height:1.7; text-transform:uppercase; }
.service-format-card h3 { margin:0 0 13px; color:#51463d; font-family:Georgia,"Times New Roman",serif; font-size:25px; font-weight:400; line-height:1.2; }
.service-format-description { margin:0 0 20px; color:#81766c; font-size:13px; line-height:1.85; }
.service-includes-label { margin:0 0 9px; color:#a48761; font-family:Arial,sans-serif; font-size:8px; letter-spacing:1.1px; line-height:1.7; }
.service-format-card ul { margin:0 0 18px; padding-left:17px; color:#6e6258; font-size:12px; line-height:1.9; }
.service-format-note { margin:auto 0 18px; padding-top:13px; border-top:1px solid #e8ded1; color:#81766c; font-size:12px; font-style:italic; line-height:1.7; }
.service-format-link { display:inline-flex; align-items:center; justify-content:space-between; gap:12px; padding-bottom:5px; border-bottom:1px solid #c6ad89; color:#80694c; font-family:Arial,sans-serif; font-size:10px; text-decoration:none; }
.service-options { display:grid; grid-template-columns:minmax(0,.8fr) minmax(0,1fr); gap:clamp(35px,7vw,90px); padding:clamp(50px,7vw,78px) max(6vw,calc((100% - 1120px)/2)); background:#f2e5d3; }
.service-options-copy>p:not(.service-eyebrow) { margin:17px 0 23px; color:#81766c; font-size:14px; line-height:1.9; }
.service-option-list { border-top:1px solid #dfccb5; }
.service-option-row { display:flex; gap:17px; padding:17px 0; border-bottom:1px solid #dfccb5; }
.service-option-row>span { flex:0 0 26px; color:#bd914b; font-size:23px; }
.service-option-row h3 { margin:0 0 5px; color:#51463d; font-family:Georgia,"Times New Roman",serif; font-size:19px; font-weight:400; }
.service-option-row p { margin:0; color:#81766c; font-size:12px; line-height:1.8; }
.service-steps-section { max-width:900px; margin:0 auto; padding:clamp(52px,7vw,80px) 28px; }
.service-steps { margin:0; padding:0; list-style:none; }
.service-steps li { display:flex; gap:22px; padding:20px 0; border-bottom:1px solid #e4d6c5; }
.service-steps li>span { flex:0 0 38px; color:#a48761; font-family:Arial,sans-serif; font-size:11px; letter-spacing:1px; }
.service-steps h3 { margin:0 0 6px; color:#51463d; font-family:Georgia,"Times New Roman",serif; font-size:21px; font-weight:400; }
.service-steps p { margin:0; color:#81766c; font-size:13px; line-height:1.8; }
.service-final { display:flex; flex-direction:column; align-items:center; padding:clamp(50px,7vw,75px) 22px; border-top:1px solid #e6d2b9; background:#fffaf4; text-align:center; }
.service-final>p:not(.service-eyebrow) { max-width:560px; margin:15px 0 23px; color:#81766c; font-size:14px; line-height:1.8; }
.service-faq-link { margin-top:16px; color:#80694c; font-size:12px; text-decoration:underline; text-underline-offset:4px; }
@media(max-width:850px) { .service-format-grid { grid-template-columns:1fr; max-width:650px; margin:auto; } .service-format-card { padding:24px 22px; } .service-options { grid-template-columns:1fr; gap:28px; padding:48px 22px; } }
@media(max-width:600px) { .service-hero { padding:48px 20px; } .service-hero h1 { font-size:36px; } .service-formats { padding:46px 18px; } .service-section-heading h2,.service-options h2,.service-final h2 { font-size:32px; } .service-steps-section { padding:46px 22px; } .service-steps li { gap:13px; } }
</style>
