<script setup>
const features = [
  { icon: '✳', title: 'Modèles uniques', text: 'Des créations qui vous ressemblent.' },
  { icon: '✎', title: 'Personnalisation simple', text: 'Adaptez les détails à votre événement.' },
  { icon: '▣', title: 'Formulaire RSVP intégré', text: 'Centralisez les réponses de vos invités.' },
  { icon: '▧', title: 'Galerie photos', text: 'Rassemblez les souvenirs partagés.' },
  { icon: '♡', title: 'Messages des invités', text: 'Gardez leurs mots précieux.' },
  { icon: '✧', title: 'Souvenir inoubliable', text: 'Prolongez la magie après le jour J.' }
]
const occasions = [
 { number:'01', title:'Mariages', note:'Le début d’une belle histoire', image:'/images/mariages.jpg', to:'/collections/mariages' },
 { number:'02', title:'Naissances & baptêmes', note:'Les premières grandes émotions', image:'/images/naissances-baptemes.jpg', to:'/collections/naissances' },
 { number:'03', title:'Anniversaires', note:'Toutes les raisons de célébrer', image:'/images/anniversaires.jpg', to:'/collections/anniversaires' },
 { number:'04', title:'Cérémonies & traditions', note:'Les moments qui nous unissent', image:'/images/ceremonies-traditions.jpg', to:'/collections/ceremonies' }
]
</script>

<template>
<main class="home-redesign">
  <section class="home-hero">
    <div class="hero-copy">
      <p class="eyebrow"><span></span> INVITATIONS DIGITALES</p>
      <h1>Vos plus beaux moments méritent une <em>invitation unique.</em></h1>
      <p class="hero-intro">Des invitations digitales personnalisables pour célébrer tous les moments de la vie : mariages, naissances, anniversaires, baptêmes et cérémonies.</p>
      <div class="hero-actions">
        <NuxtLink to="/modeles" class="button button-primary">Découvrir les modèles <span>↗</span></NuxtLink>
        <NuxtLink to="/services" class="button button-secondary">Comment ça marche ?</NuxtLink>
      </div>
      <div class="hero-note"><span class="note-star">✳</span><span>Imaginé avec soin, pensé pour vous.<br><b>Les moments qui nous unissent.</b></span></div>
    </div>
    <div class="hero-art">
      <div class="hero-flower flower-one">✿</div>
      <div class="hero-photo"><img src="/images/invitation-hero.jpg" alt="Exemple d’invitation digitale pour une célébration"/></div>
      <div class="hero-invite-card"><span>UNE INVITATION À VOTRE IMAGE</span><strong>J & R</strong><i>25.06.2026 · 16H00</i><span class="invite-flower">✿</span></div>
      <div class="hero-sticker"><small>YOUR DAY</small><strong>YOUR<br/>STORY.</strong><small>BY C BY C</small></div>
      <div class="hero-image-caption"><span>01 — L’ART D’INVITER</span><span>FAIT AVEC ♡</span></div>
    </div>
  </section>

  <section class="feature-strip" aria-label="Fonctionnalités">
    <article v-for="feature in features" :key="feature.title" class="feature-item">
      <span class="feature-icon">{{ feature.icon }}</span><strong>{{ feature.title }}</strong><small>{{ feature.text }}</small>
    </article>
  </section>

  <section class="collections-section">
    <div class="section-heading">
      <div><p class="eyebrow">01 / LES COLLECTIONS</p><h2>Nos collections</h2></div>
      <p>Des univers imaginés pour annoncer les moments qui comptent, avec délicatesse et personnalité.</p>
    </div>
    <div class="collection-grid">
      <NuxtLink v-for="item in occasions" :key="item.number" :to="item.to" class="collection-card">
        <div class="collection-image"><img :src="item.image" :alt="item.title" loading="lazy"/><span class="collection-number">{{ item.number }}</span><span class="collection-arrow">↗</span></div>
        <div class="collection-info"><div><h3>{{ item.title }}</h3><p>{{ item.note }}</p></div><span class="info-arrow">↗</span></div>
      </NuxtLink>
    </div>
    <div class="section-cta"><NuxtLink to="/collections" class="text-link">Explorer toutes les collections <span>↗</span></NuxtLink></div>
  </section>

  <section class="how-section">
    <div class="how-visual"><img src="/images/mariages.jpg" alt="Inspiration florale pour une invitation" loading="lazy"/><div class="how-note"><span>LE PETIT PLUS</span><strong>Une expérience<br/>qui vous ressemble.</strong><span>CRÉÉ POUR VOS MOMENTS PRÉCIEUX</span></div></div>
    <div class="how-copy"><p class="eyebrow">02 / SIMPLE COMME BONJOUR</p><h2>Une invitation.<br/>Mille façons de la rendre <em>unique.</em></h2><p>Choisissez un modèle, ajoutez vos informations, personnalisez les détails et partagez votre invitation avec vos proches.</p><ul><li><span>✓</span> Des modèles à personnaliser</li><li><span>✓</span> Les réponses des invités au même endroit</li><li><span>✓</span> Des messages et des photos à conserver</li></ul><NuxtLink to="/modeles" class="button button-primary">Découvrir les modèles <span>↗</span></NuxtLink></div>
  </section>

  <section class="formats-section">
    <div class="section-heading"><div><p class="eyebrow">03 / À CHACUN SON FORMAT</p><h2>Votre événement.<br/><em>Votre façon d’inviter.</em></h2></div><p>Un faire-part à partager ou un site complet pour réunir toutes les informations de votre journée.</p></div>
    <div class="format-grid">
      <article class="format-card"><span class="format-index">01 / DIGITAL</span><div class="format-symbol">✉</div><h3>Faire-part digital</h3><p>Une invitation élégante et personnalisée, facile à envoyer à tous vos proches.</p><NuxtLink to="/collections" class="text-link">Voir les collections <span>↗</span></NuxtLink></article>
      <article class="format-card format-highlight"><span class="format-index">02 / SITE WEB</span><div class="format-symbol">▤</div><h3>Site d’invitation</h3><p>Programme, adresses, informations pratiques et réponses réunis sur une seule page.</p><NuxtLink to="/modeles" class="text-link">Voir les modèles <span>↗</span></NuxtLink></article>
      <article class="format-card format-dark"><span class="format-index">03 / SUR MESURE</span><div class="format-symbol">✧</div><h3>Création sur mesure</h3><p>Un univers imaginé spécialement pour votre histoire et votre célébration.</p><NuxtLink to="/contact?prestation=Création%20sur%20mesure" class="text-link">Parler de mon projet <span>↗</span></NuxtLink></article>
    </div>
  </section>

  <section class="home-final-cta">
    <div class="final-flower">✿</div><p class="eyebrow">ON COMMENCE PAR UNE IDÉE</p><h2>Prêts à annoncer<br/>un moment <em>inoubliable ?</em></h2><p>Créons ensemble l’invitation qui donnera le ton à votre événement.</p><NuxtLink to="/contact" class="button button-white">Parler de mon projet <span>↗</span></NuxtLink>
    <div class="final-foot"><span>CELEBRATIONS BY CHIREL</span><span>LES MOMENTS QUI NOUS UNISSENT</span></div>
  </section>
</main>
</template>

<style scoped>
.home-redesign{--ink:#25153f;--violet:#6330a5;--violet-dark:#4b217f;--lilac:#eee5ff;--lilac-pale:#f8f4ff;--pink:#f8eaf4;--muted:#746982;--line:#e4d8f6;background:#fcfaff;color:var(--ink);font-family:'DM Sans',sans-serif;overflow:hidden}
.home-redesign *{box-sizing:border-box}.eyebrow{display:flex;align-items:center;gap:10px;margin:0 0 20px;color:var(--violet);font-size:10px;font-weight:800;letter-spacing:2px}.eyebrow>span{width:22px;height:2px;background:currentColor}
.home-hero{position:relative;display:grid;grid-template-columns:.94fr 1.06fr;align-items:center;gap:5%;min-height:610px;padding:65px max(6vw,calc((100% - 1220px)/2)) 72px;background:linear-gradient(115deg,#f8f4ff 0%,#f5edff 55%,#faedf7 100%)}
.hero-copy{position:relative;z-index:2}.home-hero h1,.section-heading h2,.how-copy h2,.home-final-cta h2{margin:0;font-family:'Outfit','DM Sans',sans-serif;font-size:clamp(44px,5vw,69px);font-weight:600;letter-spacing:-2.7px;line-height:1.04}.home-hero h1 em,.section-heading h2 em,.how-copy h2 em,.home-final-cta h2 em{color:var(--violet);font-style:normal}.hero-intro{max-width:440px;margin:22px 0;color:var(--muted);font-size:14px;line-height:1.85}.hero-actions{display:flex;align-items:center;flex-wrap:wrap;gap:11px}.button{display:inline-flex;align-items:center;justify-content:center;gap:18px;min-height:46px;padding:13px 18px;border:1px solid var(--violet);border-radius:999px;font-size:11px;font-weight:700;transition:transform .2s,background .2s}.button:hover{transform:translateY(-2px)}.button-primary{background:var(--violet);color:white}.button-primary:hover{background:var(--violet-dark)}.button-secondary{background:#fff;color:var(--violet)}.hero-note{display:flex;align-items:center;gap:12px;margin-top:32px;color:var(--muted);font-size:10px;line-height:1.7}.note-star{display:grid;place-items:center;width:36px;height:36px;border:1px solid #d9c5f4;border-radius:50%;color:var(--violet);font-size:18px}.hero-note b{color:var(--ink);font-weight:700}
.hero-art{position:relative;min-width:0;padding:0 0 35px 16px}.hero-photo{height:420px;overflow:hidden;border-radius:4px 42px 4px 4px;background:var(--lilac)}.hero-photo img{width:100%;height:100%;object-fit:cover}.hero-flower{position:absolute;z-index:1;color:#a779cf;text-shadow:0 4px 20px #a779cf55}.flower-one{top:-31px;right:9%;font-size:88px}.hero-invite-card{position:absolute;right:8%;bottom:54px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;width:155px;height:205px;padding:16px;border:1px solid #e4c7f0;background:#fffafc;color:var(--violet-dark);box-shadow:0 16px 35px #43225c22;transform:rotate(4deg)}.hero-invite-card>span:first-child{font-size:6px;letter-spacing:1.4px;text-align:center}.hero-invite-card strong{font-family:Georgia,serif;font-size:38px;font-style:italic;font-weight:400}.hero-invite-card i{font-size:8px;font-style:normal;letter-spacing:1px}.invite-flower{font-size:25px;color:#c28bca}.hero-sticker{position:absolute;right:-20px;bottom:77px;display:flex;flex-direction:column;justify-content:space-between;width:125px;height:135px;padding:14px;background:#eee5ff;color:var(--ink);box-shadow:0 12px 25px #43225c12;transform:rotate(5deg)}.hero-sticker small{font-size:8px;font-weight:800;letter-spacing:1.5px}.hero-sticker strong{font-size:25px;line-height:.96;letter-spacing:-1px}.hero-image-caption{position:absolute;right:0;bottom:5px;left:16px;display:flex;justify-content:space-between;color:var(--muted);font-size:8px;font-weight:700;letter-spacing:1.2px}
.feature-strip{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));padding:22px max(5vw,calc((100% - 1220px)/2));border-bottom:1px solid var(--line);background:#fff;gap:12px}.feature-item{display:flex;flex-direction:column;align-items:center;gap:7px;padding:6px;text-align:center}.feature-icon{display:grid;place-items:center;width:37px;height:37px;border-radius:50%;background:var(--lilac-pale);color:var(--violet);font-size:19px}.feature-item strong{font-size:10px}.feature-item small{max-width:145px;color:var(--muted);font-size:9px;line-height:1.5}
.collections-section,.formats-section{padding:82px max(6vw,calc((100% - 1220px)/2));background:#fff}.section-heading{display:flex;align-items:end;justify-content:space-between;gap:35px;margin-bottom:30px}.section-heading h2,.how-copy h2{font-size:clamp(38px,4.3vw,56px)}.section-heading>p{max-width:350px;margin:0 0 5px;color:var(--muted);font-size:12px;line-height:1.9}.collection-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:17px}.collection-card{min-width:0;color:inherit}.collection-image{position:relative;aspect-ratio:4/4.7;overflow:hidden;border-radius:4px 25px 4px 4px;background:var(--lilac)}.collection-image:after{position:absolute;inset:35% 0 0;background:linear-gradient(transparent,#241542a8);content:''}.collection-image img{width:100%;height:100%;object-fit:cover;transition:transform .4s}.collection-card:hover .collection-image img{transform:scale(1.04)}.collection-number{position:absolute;z-index:1;top:12px;left:13px;color:#fff;font-size:10px;font-weight:800}.collection-arrow{position:absolute;z-index:1;right:12px;bottom:12px;display:grid;place-items:center;width:33px;height:33px;border-radius:50%;background:#fff;color:var(--violet);font-size:16px}.collection-info{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:14px 0;border-bottom:1px solid var(--line)}.collection-info h3{margin:0;font-family:'Outfit',sans-serif;font-size:17px;font-weight:600;line-height:1.3}.collection-info p{margin:5px 0 0;color:var(--muted);font-size:10px;line-height:1.5}.info-arrow{color:var(--violet)}.section-cta{margin-top:28px;text-align:center}.text-link{display:inline-flex;align-items:center;gap:12px;padding:7px 0;border-bottom:1px solid #b995ec;color:var(--violet-dark);font-size:11px;font-weight:700}
.how-section{display:grid;grid-template-columns:1fr .9fr;align-items:center;gap:9%;padding:82px max(8vw,calc((100% - 1120px)/2));background:var(--lilac-pale)}.how-visual{position:relative;height:420px;padding:10px;border:1px solid #c5a9e9}.how-visual>img{width:100%;height:100%;object-fit:cover}.how-note{position:absolute;right:-18px;bottom:25px;display:flex;flex-direction:column;gap:9px;padding:17px;background:var(--violet);color:#fff;box-shadow:0 10px 25px #43225c24}.how-note span{font-size:7px;letter-spacing:1.5px}.how-note strong{font-family:'Outfit',sans-serif;font-size:21px;line-height:1.12}.how-copy>p:not(.eyebrow){color:var(--muted);font-size:13px;line-height:1.9}.how-copy ul{display:grid;gap:12px;margin:22px 0 27px;padding:0;list-style:none}.how-copy li{display:flex;align-items:center;gap:10px;font-size:11px}.how-copy li span{display:grid;place-items:center;width:21px;height:21px;border-radius:50%;background:#e4d6fb;color:var(--violet);font-weight:800}
.formats-section{background:#fff}.format-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:15px}.format-card{display:flex;flex-direction:column;min-height:275px;padding:23px;border:1px solid var(--line);border-radius:5px 24px 5px 5px;background:#fff}.format-highlight{background:var(--lilac);border-color:var(--lilac)}.format-dark{background:var(--violet-dark);border-color:var(--violet-dark);color:#fff}.format-index{color:var(--violet);font-size:9px;font-weight:800;letter-spacing:1.4px}.format-dark .format-index{color:#e0c9ff}.format-symbol{margin-top:25px;color:var(--violet);font-size:27px}.format-dark .format-symbol{color:#e0c9ff}.format-card h3{margin:9px 0;font-family:'Outfit',sans-serif;font-size:23px;letter-spacing:-.5px}.format-card p{margin:0 0 22px;color:var(--muted);font-size:12px;line-height:1.8}.format-dark p{color:#e8ddfa}.format-card .text-link{margin-top:auto;align-self:flex-start}.format-dark .text-link{color:#fff;border-color:#b995ec}
.home-final-cta{position:relative;display:flex;flex-direction:column;align-items:center;padding:70px 24px 26px;background:linear-gradient(130deg,#4b217f,#6330a5 62%,#7545b4);color:#fff;text-align:center}.final-flower{display:grid;place-items:center;width:51px;height:51px;margin-bottom:21px;border:1px solid #d8c3fa;border-radius:50%;font-size:25px;color:#e0c9ff}.home-final-cta .eyebrow{color:#e0c9ff}.home-final-cta h2{font-size:clamp(38px,4.8vw,58px)}.home-final-cta h2 em{color:#e0c9ff}.home-final-cta>p:not(.eyebrow){max-width:400px;margin:17px 0 24px;color:#f1e8ff;font-size:12px;line-height:1.8}.button-white{background:#fff;color:var(--violet-dark);border-color:#fff}.final-foot{display:flex;justify-content:space-between;gap:20px;width:100%;margin-top:58px;padding-top:16px;border-top:1px solid #b995ec88;color:#f1e8ff;font-size:8px;letter-spacing:1.4px}
@media(max-width:900px){.home-hero{gap:4%;padding-right:5vw;padding-left:5vw}.hero-photo{height:370px}.collections-section,.formats-section{padding-right:5vw;padding-left:5vw}.collection-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:24px 15px}.how-section{padding-right:6vw;padding-left:6vw;gap:7%}.how-visual{height:360px}.feature-strip{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media(max-width:650px){.home-hero{display:flex;flex-direction:column;align-items:stretch;gap:27px;min-height:0;padding:30px 21px 44px}.hero-art{order:0;padding:0 10px 26px 0}.hero-photo{height:clamp(235px,68vw,320px);border-radius:4px 30px 4px 4px}.hero-flower{top:-24px;right:7%;font-size:65px}.hero-invite-card{right:9%;bottom:45px;width:116px;height:155px;gap:8px;padding:10px}.hero-invite-card strong{font-size:30px}.hero-invite-card>span:first-child{font-size:5px}.hero-sticker{right:-3px;bottom:52px;width:91px;height:102px;padding:10px}.hero-sticker strong{font-size:20px}.hero-sticker small{font-size:6px}.hero-image-caption{left:0;font-size:6px}.hero-copy{order:1}.home-hero .eyebrow{margin-bottom:14px;font-size:8px;letter-spacing:1.5px}.home-hero h1{font-size:clamp(39px,10.5vw,53px);letter-spacing:-1.8px}.hero-intro{margin:15px 0 18px;font-size:12px;line-height:1.8}.hero-actions{align-items:stretch;flex-direction:column}.hero-actions .button{width:100%}.hero-note{margin-top:23px}.feature-strip{grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;padding:17px 12px}.feature-item{padding:5px 2px}.feature-item strong{font-size:9px}.feature-item small{font-size:8px}.feature-icon{width:32px;height:32px;font-size:16px}.collections-section,.formats-section{padding:52px 20px}.section-heading{display:block;margin-bottom:23px}.section-heading h2,.how-copy h2{font-size:39px;letter-spacing:-1.8px}.section-heading>p{margin-top:13px;font-size:12px}.collection-grid{gap:22px 11px}.collection-image{border-radius:3px 17px 3px 3px;aspect-ratio:4/4.8}.collection-info{align-items:flex-start;padding:10px 0}.collection-info h3{font-size:15px}.collection-info p{font-size:9px}.how-section{grid-template-columns:1fr;gap:33px;padding:48px 22px}.how-visual{height:300px}.how-note{right:-8px;bottom:18px;padding:12px}.how-note strong{font-size:18px}.how-copy>p:not(.eyebrow){font-size:12px}.format-grid{grid-template-columns:1fr;gap:11px}.format-card{min-height:220px;padding:20px}.format-symbol{margin-top:19px}.format-card h3{font-size:22px}.home-final-cta{padding:52px 20px 22px}.home-final-cta h2{font-size:40px;letter-spacing:-1.8px}.final-foot{align-items:center;flex-direction:column;gap:8px;margin-top:42px}.button{min-height:45px}}
</style>