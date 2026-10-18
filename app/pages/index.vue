<template>
  <main class="home-page">
    <section class="home-hero">
      <div class="home-hero-copy">
        <p class="home-eyebrow"><span></span> CÉLÉBRATIONS BY CHIREL</p>
        <h1>Les beaux moments<br /><em>méritent une belle invitation.</em></h1>
        <p class="home-lead">Faire-part digital, site dédié à votre événement ou création personnalisée : trouvez simplement le format qui vous convient.</p>
        <div class="home-actions">
          <NuxtLink to="/collections" class="home-button">Choisir une occasion <span>↗</span></NuxtLink>
          <NuxtLink to="/services" class="home-text-link">Comparer les prestations</NuxtLink>
        </div>
        <p class="home-note">Mariages · Naissances · Anniversaires · Cérémonies et traditions</p>
      </div>
      <div class="home-hero-visual">
        <img src="/images/invitation-hero.jpg" alt="Exemple d’univers élégant pour une invitation digitale" />
        <div class="home-visual-caption"><span>✧</span><div><strong>Imaginé avec soin</strong><small>Pour votre histoire, à votre image</small></div></div>
      </div>
    </section>

    <section class="home-trust" aria-label="Notre approche">
      <span>UNE IDENTITÉ QUI VOUS RESSEMBLE</span><i>✳</i>
      <span>UN PARCOURS SIMPLE</span><i>✳</i>
      <span>DES OPTIONS SELON VOS BESOINS</span>
    </section>

    <section class="home-section home-occasions">
      <div class="home-section-heading">
        <p class="home-eyebrow">ÉTAPE 1 · VOTRE ÉVÉNEMENT</p>
        <h2>Quelle occasion souhaitez-vous <em>célébrer ?</em></h2>
        <p>Commencez par choisir votre univers. Vous pourrez ensuite découvrir les possibilités de création.</p>
      </div>
      <div class="home-occasion-grid">
        <NuxtLink to="/collections/mariages" class="home-occasion-card">
          <img src="/images/mariages.jpg" alt="Invitation de mariage" loading="lazy" />
          <span class="home-card-body"><small>01 · LE GRAND JOUR</small><strong>Mariages</strong><span>Découvrir la collection ↗</span></span>
        </NuxtLink>
        <NuxtLink to="/collections/naissances" class="home-occasion-card">
          <img src="/images/naissances-baptemes.jpg" alt="Invitation de naissance ou de baptême" loading="lazy" />
          <span class="home-card-body"><small>02 · LES PREMIERS INSTANTS</small><strong>Naissances &amp; baptêmes</strong><span>Découvrir la collection ↗</span></span>
        </NuxtLink>
        <NuxtLink to="/collections/anniversaires" class="home-occasion-card">
          <img src="/images/anniversaires.jpg" alt="Invitation d’anniversaire" loading="lazy" />
          <span class="home-card-body"><small>03 · LES JOLIS RENDEZ-VOUS</small><strong>Anniversaires</strong><span>Découvrir la collection ↗</span></span>
        </NuxtLink>
        <NuxtLink to="/collections/ceremonies" class="home-occasion-card">
          <img src="/images/ceremonies-traditions.jpg" alt="Invitation de cérémonie ou de tradition" loading="lazy" />
          <span class="home-card-body"><small>04 · LES MOMENTS SYMBOLIQUES</small><strong>Cérémonies &amp; traditions</strong><span>Découvrir la collection ↗</span></span>
        </NuxtLink>
      </div>
      <div class="home-centered-link"><NuxtLink to="/collections">Voir toutes les collections <span>↗</span></NuxtLink></div>
    </section>

    <section class="home-section home-formats">
      <div class="home-section-heading">
        <p class="home-eyebrow">ÉTAPE 2 · LE FORMAT</p>
        <h2>De quoi avez-vous <em>besoin ?</em></h2>
        <p>Trois possibilités, selon les informations à partager et l’expérience que vous souhaitez proposer à vos invités.</p>
      </div>
      <div class="home-format-grid">
        <article class="home-format-card">
          <span class="home-format-number">01</span><span class="home-format-symbol">✧</span>
          <h3>Une invitation digitale</h3>
          <p>Un faire-part personnalisé avec le texte, la date, le lieu et les informations essentielles, prêt à être partagé.</p>
          <NuxtLink :to="{ path: '/contact', query: { prestation: 'Invitation digitale' } }">Choisir cette formule <span>↗</span></NuxtLink>
        </article>
        <article class="home-format-card home-format-featured">
          <span class="home-format-number">02</span><span class="home-format-symbol">⌘</span>
          <h3>Un site complet</h3>
          <p>Une page dédiée à votre événement pour réunir programme, accès et informations pratiques au même endroit.</p>
          <NuxtLink :to="{ path: '/contact', query: { prestation: 'Site complet d’invitation' } }">Choisir cette formule <span>↗</span></NuxtLink>
        </article>
        <article class="home-format-card">
          <span class="home-format-number">03</span><span class="home-format-symbol">♡</span>
          <h3>Une création sur mesure</h3>
          <p>Une demande particulière, une tradition ou une idée originale à construire ensemble autour de votre histoire.</p>
          <NuxtLink :to="{ path: '/contact', query: { prestation: 'Création sur mesure' } }">Parler de mon idée <span>↗</span></NuxtLink>
        </article>
      </div>
      <p class="home-clarification">Les réponses des invités, le livre d’or numérique et la conservation des messages sont des options à étudier selon le projet. Elles sont confirmées avant toute commande.</p>
      <div class="home-centered-link"><NuxtLink to="/services">Voir le détail des prestations et options <span>↗</span></NuxtLink></div>
    </section>

    <section class="home-process">
      <div class="home-process-intro">
        <p class="home-eyebrow">ÉTAPE 3 · ON DONNE VIE À VOTRE IDÉE</p>
        <h2>Simple, clair, <em>personnalisé.</em></h2>
        <p>Vous n’avez pas besoin d’avoir tout décidé pour nous contacter. Nous avançons ensemble, étape par étape.</p>
        <NuxtLink to="/services#etapes" class="home-process-link">Découvrir le déroulement <span>↗</span></NuxtLink>
      </div>
      <ol class="home-steps">
        <li><span>01</span><div><strong>Vous nous racontez</strong><p>Votre occasion, vos envies et les informations à transmettre.</p></div></li>
        <li><span>02</span><div><strong>Nous définissons le format</strong><p>Nous précisons la création, le contenu et les éventuelles options.</p></div></li>
        <li><span>03</span><div><strong>Vous partagez</strong><p>Après validation, votre invitation est prête selon le format convenu.</p></div></li>
      </ol>
    </section>

    <section class="home-final-cta">
      <p class="home-eyebrow">VOUS AVEZ UNE IDÉE ?</p>
      <h2>Parlons de votre <em>célébration.</em></h2>
      <p>Un projet précis ou simplement quelques questions ? Nous vous aiderons à identifier la formule adaptée.</p>
      <NuxtLink to="/contact" class="home-button">Parler de mon projet <span>↗</span></NuxtLink>
      <NuxtLink to="/faq" class="home-faq-link">Vous avez une question ? Consultez la FAQ.</NuxtLink>
    </section>
  </main>
</template>

<style scoped>
.home-page { color:#51463d; }
.home-hero { display:grid; grid-template-columns:minmax(0,1fr) minmax(0,.9fr); align-items:center; gap:clamp(34px,6vw,88px); padding:clamp(54px,8vw,100px) max(6vw,calc((100% - 1180px)/2)); background:linear-gradient(120deg,#fffaf3 0%,#f1e5d3 100%); }
.home-hero-copy { max-width:590px; }
.home-eyebrow { display:flex; align-items:center; gap:10px; margin:0 0 18px; color:#a48761; font-family:Arial,sans-serif; font-size:10px; letter-spacing:2.2px; line-height:1.8; }
.home-eyebrow > span { width:28px; height:1px; background:#bd914b; }
.home-hero h1,.home-section-heading h2,.home-process h2,.home-final-cta h2 { margin:0; color:#38271f; font-family:Georgia,"Times New Roman",serif; font-size:clamp(36px,4.6vw,60px); font-weight:400; line-height:1.08; letter-spacing:-.7px; }
.home-hero h1 em,.home-section-heading h2 em,.home-process h2 em,.home-final-cta h2 em { color:#a48761; font-weight:400; }
.home-lead { max-width:490px; margin:23px 0 26px; color:#74665a; font-size:16px; line-height:1.9; }
.home-actions { display:flex; flex-wrap:wrap; align-items:center; gap:14px 24px; }
.home-button { display:inline-flex; align-items:center; justify-content:center; gap:22px; min-height:50px; padding:14px 22px; border:1px solid #a48761; color:#fffdf9; background:#80694c; font-family:Arial,sans-serif; font-size:11px; letter-spacing:.5px; text-decoration:none; transition:background .2s,transform .2s; }
.home-button:hover { background:#654c3d; transform:translateY(-2px); }
.home-text-link,.home-process-link { display:inline-flex; align-items:center; gap:10px; padding:8px 0 5px; border-bottom:1px solid #c6ad89; color:#80694c; font-family:Arial,sans-serif; font-size:11px; text-decoration:none; }
.home-note { margin:27px 0 0; color:#8b7967; font-size:12px; line-height:1.8; }
.home-hero-visual { position:relative; min-width:0; padding:0 10px 18px 0; }
.home-hero-visual::before { position:absolute; z-index:0; top:18px; right:0; bottom:0; left:18px; border:1px solid #c6ad89; content:""; }
.home-hero-visual img { position:relative; z-index:1; width:100%; height:clamp(310px,38vw,470px); border:1px solid rgba(184,138,69,.4); object-fit:cover; }
.home-visual-caption { position:absolute; z-index:2; right:-10px; bottom:0; display:flex; align-items:center; gap:12px; max-width:260px; padding:14px 18px; border:1px solid #e8ded1; background:#fffdf9; box-shadow:0 10px 25px #49301c16; }
.home-visual-caption>span { color:#bd914b; font-size:25px; }
.home-visual-caption strong,.home-visual-caption small { display:block; }
.home-visual-caption strong { color:#51463d; font-size:14px; font-weight:500; }
.home-visual-caption small { margin-top:2px; color:#81766c; font-size:11px; }
.home-trust { display:flex; align-items:center; justify-content:center; flex-wrap:wrap; gap:14px 28px; padding:17px 20px; border-top:1px solid #e6d2b9; border-bottom:1px solid #e6d2b9; background:#fffaf4; color:#80694c; font-family:Arial,sans-serif; font-size:9px; letter-spacing:1.3px; text-align:center; }
.home-trust i { color:#bd914b; font-style:normal; }
.home-section { padding:clamp(55px,7vw,86px) max(6vw,calc((100% - 1180px)/2)); }
.home-occasions { background:#f8f2e9; }
.home-section-heading { max-width:720px; margin:0 auto 35px; text-align:center; }
.home-section-heading .home-eyebrow { justify-content:center; }
.home-section-heading h2,.home-process h2,.home-final-cta h2 { font-size:clamp(32px,3.5vw,46px); }
.home-section-heading>p:last-child { max-width:590px; margin:14px auto 0; color:#81766c; font-size:14px; line-height:1.85; }
.home-occasion-grid { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:16px; }
.home-occasion-card { display:flex; flex-direction:column; min-width:0; overflow:hidden; border:1px solid #e2d1bd; background:#fffdf9; color:#51463d; text-decoration:none; transition:transform .2s,border-color .2s,box-shadow .2s; }
.home-occasion-card:hover { transform:translateY(-4px); border-color:#bd914b; box-shadow:0 12px 26px #49301c12; }
.home-occasion-card img { width:100%; height:clamp(130px,16vw,205px); object-fit:cover; }
.home-card-body { display:flex; flex:1; flex-direction:column; align-items:flex-start; padding:17px 16px 19px; }
.home-card-body small { color:#a48761; font-family:Arial,sans-serif; font-size:8px; letter-spacing:1.2px; line-height:1.7; }
.home-card-body strong { margin:7px 0 13px; font-size:20px; font-weight:400; line-height:1.2; }
.home-card-body>span { margin-top:auto; color:#80694c; font-family:Arial,sans-serif; font-size:10px; }
.home-centered-link { margin-top:27px; text-align:center; }
.home-centered-link a { display:inline-flex; align-items:center; gap:12px; padding-bottom:5px; border-bottom:1px solid #c6ad89; color:#80694c; font-family:Arial,sans-serif; font-size:11px; text-decoration:none; }
.home-formats { background:#fffaf4; }
.home-format-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; }
.home-format-card { position:relative; display:flex; flex-direction:column; min-width:0; padding:28px 25px 24px; border:1px solid #e2d1bd; background:#fffdf9; }
.home-format-featured { border-color:#bd914b; background:#f6eddf; }
.home-format-number { color:#a48761; font-family:Arial,sans-serif; font-size:10px; letter-spacing:1.5px; }
.home-format-symbol { margin-top:16px; color:#bd914b; font-size:25px; }
.home-format-card h3 { margin:12px 0 10px; color:#51463d; font-family:Georgia,"Times New Roman",serif; font-size:25px; font-weight:400; line-height:1.2; }
.home-format-card p { margin:0 0 22px; color:#81766c; font-size:13px; line-height:1.85; }
.home-format-card>a { display:inline-flex; align-items:center; gap:12px; align-self:flex-start; margin-top:auto; padding-bottom:5px; border-bottom:1px solid #c6ad89; color:#80694c; font-family:Arial,sans-serif; font-size:10px; text-decoration:none; }
.home-clarification { max-width:790px; margin:25px auto 0; padding:15px 18px; border-left:2px solid #bd914b; background:#f8f2e9; color:#81766c; font-size:12px; line-height:1.8; }
.home-process { display:grid; grid-template-columns:minmax(0,.8fr) minmax(0,1fr); gap:clamp(35px,7vw,90px); padding:clamp(55px,7vw,85px) max(6vw,calc((100% - 1180px)/2)); background:#f1e5d3; }
.home-process-intro>p:not(.home-eyebrow) { max-width:420px; margin:17px 0 22px; color:#81766c; font-size:14px; line-height:1.9; }
.home-steps { margin:0; padding:0; list-style:none; }
.home-steps li { display:flex; gap:18px; padding:17px 0; border-bottom:1px solid #dfccb5; }
.home-steps li:first-child { padding-top:0; }
.home-steps li>span { flex:0 0 36px; color:#a48761; font-family:Arial,sans-serif; font-size:11px; letter-spacing:1px; }
.home-steps strong { color:#51463d; font-size:18px; font-weight:400; }
.home-steps p { margin:5px 0 0; color:#81766c; font-size:13px; line-height:1.8; }
.home-final-cta { display:flex; flex-direction:column; align-items:center; padding:clamp(55px,7vw,82px) 24px; border-top:1px solid #e6d2b9; background:#fffaf4; text-align:center; }
.home-final-cta .home-eyebrow { justify-content:center; }
.home-final-cta>p:not(.home-eyebrow) { max-width:560px; margin:15px 0 24px; color:#81766c; font-size:14px; line-height:1.8; }
.home-faq-link { margin-top:17px; color:#80694c; font-size:12px; text-decoration:underline; text-underline-offset:4px; }
@media(max-width:900px) { .home-occasion-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } .home-hero { gap:35px; } }
@media(max-width:680px) { .home-hero { grid-template-columns:1fr; gap:34px; padding:45px 22px 48px; } .home-hero h1 { font-size:clamp(36px,9vw,48px); } .home-lead { font-size:14px; } .home-hero-visual { margin:0 7px 8px 0; } .home-hero-visual img { height:300px; } .home-visual-caption { right:-7px; max-width:235px; padding:11px 13px; } .home-trust { gap:8px 13px; font-size:8px; } .home-section { padding:48px 20px; } .home-section-heading { margin-bottom:26px; } .home-section-heading h2,.home-process h2,.home-final-cta h2 { font-size:34px; } .home-occasion-grid,.home-format-grid { grid-template-columns:1fr; gap:13px; } .home-occasion-card { display:grid; grid-template-columns:39% minmax(0,1fr); } .home-occasion-card img { height:100%; min-height:145px; } .home-card-body { padding:15px 13px; } .home-card-body strong { font-size:18px; } .home-card-body small { font-size:7px; letter-spacing:.8px; } .home-process { grid-template-columns:1fr; gap:28px; padding:48px 22px; } .home-steps li { gap:12px; } .home-format-card { padding:23px 20px; } .home-actions { align-items:flex-start; flex-direction:column; gap:12px; } .home-final-cta { padding:48px 22px; } }
</style>
