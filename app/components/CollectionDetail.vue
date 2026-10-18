<script setup>
defineProps({
  occasion: { type: String, required: true },
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  highlight: { type: String, required: true },
  intro: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  caption: { type: String, required: true },
  storyTitle: { type: String, required: true },
  story: { type: String, required: true },
  styles: { type: Array, required: true },
  details: { type: Array, required: true },
  mockupTitle: { type: String, required: true },
  mockupSubtitle: { type: String, required: true }
})
</script>

<template>
  <main class="collection-detail">
    <section class="detail-hero">
      <div class="hero-copy">
        <NuxtLink to="/collections" class="back-link">← Toutes les collections</NuxtLink>
        <p class="eyebrow">{{ eyebrow }}</p>
        <h1>{{ title }} <em>{{ highlight }}</em></h1>
        <p class="hero-intro">{{ intro }}</p>
        <div class="hero-actions">
          <NuxtLink to="/contact" class="primary-link">Parler de mon projet <span>↗</span></NuxtLink>
          <a href="#inspirations" class="secondary-link">Voir les inspirations ↓</a>
        </div>
      </div>
      <div class="hero-visual">
        <img :src="image" :alt="imageAlt" />
        <div class="visual-caption"><span class="caption-mark">✳</span><span>{{ caption }}</span></div>
      </div>
    </section>

    <section class="story-section">
      <p class="eyebrow">L’ATTENTION QUI FAIT LA DIFFÉRENCE</p>
      <h2>{{ storyTitle }}</h2>
      <p>{{ story }}</p>
    </section>

    <section id="inspirations" class="inspiration-section">
      <div class="section-heading">
        <div><p class="eyebrow">EXEMPLES VISUELS</p><h2>Trois façons de donner le ton.</h2></div>
        <p>Des pistes créatives pour vous aider à imaginer votre invitation. Chaque proposition est une inspiration, pas encore un modèle commandable.</p>
      </div>
      <div class="inspiration-grid">
        <article v-for="(style, index) in styles" :key="style.name" class="inspiration-card">
          <div class="paper-scene" :class="'scene-' + (index + 1)">
            <div class="paper">
              <span class="paper-kicker">{{ style.kicker }}</span>
              <span class="paper-ornament" aria-hidden="true">{{ style.ornament }}</span>
              <span class="paper-title">{{ style.name }}</span>
              <span class="paper-subtitle">{{ style.sample }}</span>
              <span class="paper-rule"></span>
              <span class="paper-date">{{ style.date }}</span>
            </div>
          </div>
          <div class="inspiration-copy"><span class="style-number">0{{ index + 1 }}</span><h3>{{ style.name }}</h3><p>{{ style.description }}</p></div>
        </article>
      </div>
    </section>

    <section class="digital-section">
      <div class="digital-copy">
        <p class="eyebrow">UNE INVITATION DIGITALE, CONCRÈTEMENT</p>
        <h2>Les informations essentielles, réunies au même endroit.</h2>
        <p>Le contenu se construit selon votre événement. Voici les éléments que l’on peut prévoir ensemble :</p>
        <ul class="detail-list"><li v-for="item in details" :key="item">{{ item }}</li></ul>
      </div>
      <div class="digital-card">
        <span class="digital-icon">✳</span>
        <p class="eyebrow">VOTRE ÉVÉNEMENT</p>
        <h3>{{ mockupTitle }}</h3>
        <p>{{ mockupSubtitle }}</p>
        <div class="digital-divider"></div>
        <div class="digital-row"><span>DATE</span><span>À préciser ensemble</span></div>
        <div class="digital-row"><span>LIEU</span><span>Votre lieu de célébration</span></div>
        <div class="digital-row"><span>MESSAGE</span><span>Vos mots, votre histoire</span></div>
        <p class="sample-note">Aperçu illustratif — les informations seront adaptées à votre projet.</p>
      </div>
    </section>

    <section class="offers-section">
      <div class="section-heading">
        <div><p class="eyebrow">VOTRE PROJET, VOTRE STYLE</p><h2>Modèle ou création sur mesure ?</h2></div>
        <p>Deux approches pour trouver l’équilibre entre inspiration, personnalisation et envies.</p>
      </div>
      <div class="offer-grid">
        <article class="offer-card">
          <span class="offer-index">01 / COLLECTION</span><h3>Un modèle à personnaliser</h3>
          <p>Partir d’une direction artistique existante, puis adapter les informations et les détails prévus pour ce modèle.</p>
          <ul><li>Un style défini pour vous guider</li><li>Les informations de votre événement</li><li>Les options confirmées avant validation</li></ul>
        </article>
        <article class="offer-card featured">
          <span class="offer-index">02 / SUR MESURE</span><h3>Une création imaginée pour vous</h3>
          <p>Une approche plus personnalisée pour les projets qui demandent une ambiance, un contenu ou une composition particulière.</p>
          <ul><li>Échange autour de vos envies</li><li>Étude de votre demande</li><li>Proposition et devis avant accord</li></ul>
        </article>
      </div>
      <p class="pricing-note"><span>À propos des tarifs</span> Les prix et les formules définitifs sont en cours de préparation. Pour éviter toute surprise, le tarif, le contenu inclus, les délais et les options seront communiqués avant toute validation de commande.</p>
    </section>

    <section class="keepsake-section">
      <div class="keepsake-symbol" aria-hidden="true">♡</div>
      <div><p class="eyebrow">PROLONGER LE SOUVENIR</p><h2>Et si vos invités laissaient aussi un petit mot ?</h2><p>Une réponse à l’invitation, un message de félicitations ou un souvenir partagé peuvent donner une autre dimension à votre événement. Les modalités de réponse des invités et de collecte des messages souvenirs font partie des options à définir : leur disponibilité et leur fonctionnement seront précisés avant leur mise en vente.</p></div>
    </section>

    <section class="steps-section">
      <p class="eyebrow">COMMENT SE PASSE LE PROJET ?</p><h2>Quatre étapes, en toute simplicité.</h2>
      <div class="steps-grid">
        <article><span>01</span><h3>Vous nous racontez</h3><p>Votre événement, la date, l’ambiance souhaitée et les informations à faire apparaître.</p></article>
        <article><span>02</span><h3>Nous cadrons la demande</h3><p>Nous échangeons sur le modèle ou la création sur mesure, les options, le tarif et le délai.</p></article>
        <article><span>03</span><h3>Vous validez la proposition</h3><p>Le contenu, le prix et les modalités sont confirmés avant de démarrer la commande.</p></article>
        <article><span>04</span><h3>Votre invitation prend forme</h3><p>La livraison et les éventuelles corrections suivent les modalités convenues ensemble.</p></article>
      </div>
    </section>

    <section class="final-cta">
      <p class="eyebrow">CHAQUE HISTOIRE MÉRITE SON ATTENTION</p>
      <h2>Prêt·e à imaginer votre invitation ?</h2>
      <p>Décrivez-nous votre occasion et les détails qui comptent pour vous. Nous pourrons étudier votre demande et vous préciser les prochaines étapes.</p>
      <NuxtLink to="/contact" class="primary-link">Présenter mon projet <span>↗</span></NuxtLink>
      <NuxtLink to="/faq" class="faq-link">Consulter les questions fréquentes</NuxtLink>
    </section>
  </main>
</template>

<style scoped>
.collection-detail{--ink:#51463d;--muted:#81766c;--gold:#a48761;--line:#e6dccf;--cream:#faf7f1;color:var(--ink);background:var(--cream)}
.detail-hero{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:clamp(28px,5vw,72px);align-items:center;max-width:1240px;margin:auto;padding:54px 36px 72px}
.hero-copy{max-width:520px}.back-link{display:inline-block;margin-bottom:45px;color:#8a7459;font-size:12px;text-decoration:none}.eyebrow{margin:0 0 15px;color:var(--gold);font-size:10px;letter-spacing:2.3px;line-height:1.8}.hero-copy h1{margin:0;font:400 clamp(37px,4.4vw,59px)/1.12 Georgia,'Times New Roman',serif;letter-spacing:-.7px}.hero-copy h1 em{display:block;margin-top:7px;color:var(--gold);font-weight:400}.hero-intro{max-width:450px;margin:24px 0 0;color:var(--muted);font-size:14px;line-height:2}.hero-actions{display:flex;flex-wrap:wrap;align-items:center;gap:22px;margin-top:30px}.primary-link{display:inline-flex;align-items:center;gap:18px;padding:15px 20px;background:#77634e;color:#fffdf9;font-size:12px;text-decoration:none;transition:background .2s}.primary-link:hover{background:#5e4b37}.secondary-link,.faq-link{color:#806b50;font-size:12px;text-underline-offset:5px}.hero-visual{position:relative;padding:0 0 28px 28px}.hero-visual:before{content:"";position:absolute;left:0;top:26px;bottom:0;width:74%;border:1px solid #d9c7ad}.hero-visual img{position:relative;display:block;width:100%;height:440px;object-fit:cover}.visual-caption{position:absolute;right:-2px;bottom:0;display:flex;align-items:center;gap:12px;max-width:260px;padding:16px 20px;background:#fffdf9;border:1px solid var(--line);color:#756858;font:italic 13px/1.5 Georgia,serif}.caption-mark{color:var(--gold);font-style:normal;font-size:20px}
.story-section{max-width:850px;margin:0 auto;padding:62px 28px 76px;text-align:center;border-top:1px solid var(--line)}.story-section h2,.section-heading h2,.digital-copy h2,.steps-section>h2,.final-cta h2,.keepsake-section h2{margin:0;font:400 clamp(29px,3.6vw,43px)/1.25 Georgia,serif;letter-spacing:-.4px}.story-section>p:last-child{max-width:680px;margin:20px auto 0;color:var(--muted);font-size:14px;line-height:2}
.inspiration-section,.offers-section,.steps-section{max-width:1160px;margin:auto;padding:55px 30px 80px}.section-heading{display:flex;justify-content:space-between;align-items:end;gap:36px;margin-bottom:30px}.section-heading h2{max-width:560px}.section-heading>p{max-width:370px;margin:0;color:var(--muted);font-size:13px;line-height:1.9}.inspiration-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}.inspiration-card{min-width:0;border:1px solid var(--line);background:#fffdf9}.paper-scene{display:grid;place-items:center;min-height:310px;padding:24px;background:#eee4d5}.scene-2{background:#e8e0d6}.scene-3{background:#f1eadf}.paper{display:flex;flex-direction:column;align-items:center;justify-content:center;width:min(100%,235px);min-height:255px;padding:25px 18px;border:1px solid #d9c5a4;background:#fffdf8;box-shadow:0 8px 25px #66513b12;text-align:center}.scene-2 .paper{border:1px solid #d6c7bd;background:#f9f2ed}.scene-3 .paper{border:1px solid #c7b99f;background:#f8f4e9}.paper-kicker{color:#9a805b;font-size:8px;letter-spacing:2px;text-transform:uppercase}.paper-ornament{margin:15px 0 10px;color:#b19a75;font-size:23px}.paper-title{font:400 27px/1.15 Georgia,serif;color:#5b4b3a}.paper-subtitle{margin-top:8px;color:#8d7d69;font:italic 12px Georgia,serif}.paper-rule{width:40px;height:1px;margin:16px 0;background:#c7b18c}.paper-date{color:#81715d;font-size:8px;letter-spacing:1.5px;text-transform:uppercase}.inspiration-copy{position:relative;padding:22px 22px 25px}.style-number{color:var(--gold);font-size:10px;letter-spacing:2px}.inspiration-copy h3{margin:10px 0;font:400 22px Georgia,serif}.inspiration-copy p{margin:0;color:var(--muted);font-size:12px;line-height:1.8}
.digital-section{display:grid;grid-template-columns:1fr .8fr;gap:clamp(35px,7vw,90px);align-items:center;padding:76px max(30px,calc((100% - 1080px)/2));background:#f2ece2}.digital-copy>p:not(.eyebrow){max-width:500px;color:var(--muted);font-size:13px;line-height:1.9}.detail-list{display:grid;gap:12px;margin:24px 0 0;padding:0;list-style:none}.detail-list li{position:relative;padding-left:23px;color:#65594d;font-size:13px;line-height:1.7}.detail-list li:before{content:"✳";position:absolute;left:0;top:0;color:var(--gold);font-size:11px}.digital-card{padding:32px 28px;border:1px solid #d8c7ad;background:#fffdf9;box-shadow:0 16px 45px #5a483313}.digital-icon{display:block;margin-bottom:15px;color:#b29a73;font-size:24px}.digital-card>.eyebrow{font-size:9px}.digital-card h3{margin:0;font:400 29px Georgia,serif}.digital-card>p:not(.eyebrow):not(.sample-note){margin:10px 0 0;color:var(--muted);font:italic 13px Georgia,serif}.digital-divider{height:1px;margin:25px 0;background:var(--line)}.digital-row{display:flex;justify-content:space-between;gap:16px;padding:11px 0;border-bottom:1px solid #eee7de;font-size:11px}.digital-row span:first-child{color:#a48761;font-size:9px;letter-spacing:1.3px}.digital-row span:last-child{text-align:right;color:#6f6255}.sample-note{margin:20px 0 0;color:#948879;font-size:10px;line-height:1.7}
.offer-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;margin-top:34px}.offer-card{padding:30px;border:1px solid var(--line);background:#fffdf9}.offer-card.featured{background:#f2e9dc;border-color:#d9c6a8}.offer-index{color:#9d8159;font-size:9px;letter-spacing:2px}.offer-card h3{margin:18px 0 12px;font:400 27px Georgia,serif}.offer-card p,.offer-card li{color:var(--muted);font-size:12px;line-height:1.9}.offer-card ul{margin:17px 0 0;padding-left:18px}.pricing-note{margin:24px 0 0;padding:19px 22px;border-left:2px solid #b49a71;background:#f3eee6;color:#766a5e;font-size:12px;line-height:1.9}.pricing-note span{display:block;margin-bottom:5px;color:#8b704c;font-weight:600}
.keepsake-section{display:grid;grid-template-columns:80px minmax(0,720px);justify-content:center;gap:28px;padding:68px 28px;background:#fbf9f5;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.keepsake-symbol{display:grid;place-items:center;width:64px;height:64px;border:1px solid #d7c4a6;border-radius:50%;color:#a48761;font:30px Georgia,serif}.keepsake-section h2{font-size:clamp(27px,3vw,36px)}.keepsake-section>div:last-child>p:last-child{margin:17px 0 0;color:var(--muted);font-size:13px;line-height:1.9}
.steps-section{text-align:center}.steps-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px;margin-top:36px;text-align:left}.steps-grid article{padding-top:20px;border-top:1px solid #d8c6a8}.steps-grid article>span{color:#a48761;font:italic 20px Georgia,serif}.steps-grid h3{margin:14px 0 9px;font:400 19px Georgia,serif}.steps-grid p{margin:0;color:var(--muted);font-size:12px;line-height:1.8}
.final-cta{padding:64px 24px 72px;background:#eee4d5;text-align:center}.final-cta h2{max-width:700px;margin:0 auto}.final-cta>p:not(.eyebrow){max-width:560px;margin:18px auto 0;color:var(--muted);font-size:13px;line-height:1.9}.final-cta .primary-link{margin-top:24px}.faq-link{display:block;width:fit-content;margin:20px auto 0}
@media(max-width:800px){.detail-hero{grid-template-columns:1fr;padding:32px 24px 54px;gap:32px}.hero-copy{max-width:650px}.back-link{margin-bottom:30px}.hero-visual{max-width:650px;width:100%;margin:auto}.hero-visual img{height:370px}.section-heading{display:block}.section-heading>p{margin-top:14px}.digital-section{grid-template-columns:1fr;padding:55px 25px;gap:30px}.digital-card{max-width:500px;width:100%;box-sizing:border-box;margin:auto}.steps-grid{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:28px}}
@media(max-width:560px){.detail-hero{padding:25px 18px 42px}.hero-copy h1{font-size:39px}.hero-intro{font-size:13px}.hero-actions{align-items:flex-start;flex-direction:column;gap:18px}.hero-visual{padding-left:14px}.hero-visual img{height:300px}.visual-caption{right:0;max-width:220px;padding:12px 14px;font-size:11px}.story-section{padding:48px 20px 54px}.inspiration-section,.offers-section,.steps-section{padding:42px 18px 54px}.inspiration-grid,.offer-grid{grid-template-columns:1fr}.paper-scene{min-height:290px}.paper{min-height:240px}.section-heading h2,.digital-copy h2,.steps-section>h2{font-size:31px}.digital-section{padding:45px 18px}.digital-card{padding:25px 20px}.keepsake-section{grid-template-columns:1fr;gap:18px;padding:45px 20px}.keepsake-symbol{width:54px;height:54px}.steps-grid{grid-template-columns:1fr;gap:22px}.final-cta{padding:48px 20px 54px}}
@media(prefers-reduced-motion:reduce){.primary-link{transition:none}}
</style>