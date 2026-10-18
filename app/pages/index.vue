
<template>
  <div class="site">


    <main>
      <!-- SECTION PRINCIPALE -->
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">
            <span class="line"></span>
            CELEBRATIONS BY CHIREL
          </p>

          <h1>
            Chaque histoire<br />
            <em>mérite sa célébration.</em>
          </h1>

          <p class="hero-description">
            Des invitations digitales imaginées avec soin pour célébrer
            les instants qui comptent vraiment.
          </p>

          <div class="hero-actions">
            <a href="#collections" class="primary-button">
              Découvrir les collections <span>↗</span>
            </a>
            <a href="#concept" class="text-button">
              Découvrir notre univers
            </a>
          </div>

          <div class="hero-note">
            <span class="note-star">✳</span>
            <span>
              Pour toutes les histoires, toutes les cultures,
              toutes les belles occasions.
            </span>
          </div>
        </div>

        <div class="hero-visual hero-visual-photo">
          <img
            class="hero-photo"
            src="/images/invitation-hero.jpg"
            alt="Mise en scène élégante d’une invitation digitale de mariage"
          />

          <span class="visual-decoration decoration-one">✳</span>
          <span class="visual-decoration decoration-two">✧</span>
        </div>
      </section>

      <!-- BANDEAU DE MARQUE -->
      <section class="trust-strip" aria-label="Nos engagements">
        <span>DES CRÉATIONS SOIGNÉES</span>
        <span class="strip-dot">✳</span>
        <span>DES HISTOIRES SINGULIÈRES</span>
        <span class="strip-dot">✳</span>
        <span>DES MOMENTS À PARTAGER</span>
      </section>

      <!-- COLLECTIONS -->
      <section id="collections" class="collections section">
        <div class="section-heading">
          <p class="eyebrow centered">
            <span class="line"></span>
            NOS COLLECTIONS
            <span class="line"></span>
          </p>

          <h2>
            À chaque instant,<br />
            <em>son invitation.</em>
          </h2>

          <p>
            Une collection pensée pour vous, pour vos proches et
            pour toutes les occasions de se retrouver.
          </p>
        </div>

        <div class="collection-grid">
          <!-- MARIAGES -->
          <NuxtLink to="/collections/mariages" class="collection-card wedding">
            <div class="card-art art-wedding">
              <img
                class="collection-image"
                src="/images/mariages.jpg"
                alt="Exemple de papeterie et d’invitation de mariage"
                loading="lazy"
              />
              <span class="art-number">01</span>
              <span class="art-flower">✳</span>
              <span class="art-script">Pour toujours</span>
              <span class="art-caption">UNE BELLE PROMESSE</span>
            </div>

            <div class="card-footer">
              <span>
                <strong>Mariages</strong>
                <small>Le début d’une histoire</small>
              </span>
              <span class="card-arrow" aria-hidden="true">↗</span>
            </div>
          </NuxtLink>

          <!-- NAISSANCES ET BAPTÊMES -->
          <NuxtLink to="/collections/naissances" class="collection-card family">
            <div class="card-art art-family">
              <img
                class="collection-image"
                src="/images/naissances-baptemes.jpg"
                alt="Exemple d’invitation douce pour une naissance ou un baptême"
                loading="lazy"
              />
              <span class="art-number">02</span>
              <span class="art-sun">☼</span>
              <span class="art-script">Petits bonheurs</span>
              <span class="art-caption">UNE NOUVELLE HISTOIRE</span>
            </div>

            <div class="card-footer">
              <span>
                <strong>Naissances &amp; baptêmes</strong>
                <small>Les premiers instants</small>
              </span>
              <span class="card-arrow" aria-hidden="true">↗</span>
            </div>
          </NuxtLink>

          <!-- ANNIVERSAIRES -->
          <NuxtLink to="/collections/anniversaires" class="collection-card celebration">
            <div class="card-art art-celebration">
              <img
                class="collection-image"
                src="/images/anniversaires.jpg"
                alt="Exemple d’invitation festive pour un anniversaire"
                loading="lazy"
              />
              <span class="art-number">03</span>
              <span class="art-sparkle">✧</span>
              <span class="art-script">À l’honneur</span>
              <span class="art-caption">UN JOUR QUI VOUS RESSEMBLE</span>
            </div>

            <div class="card-footer">
              <span>
                <strong>Anniversaires</strong>
                <small>Une année de plus à célébrer</small>
              </span>
              <span class="card-arrow" aria-hidden="true">↗</span>
            </div>
          </NuxtLink>

          <!-- CÉRÉMONIES ET TRADITIONS -->
          <NuxtLink to="/collections/ceremonies" class="collection-card traditions">
            <div class="card-art art-traditions">
              <img
                class="collection-image"
                src="/images/ceremonies-traditions.jpg"
                alt="Exemple d’invitation élégante pour une cérémonie"
                loading="lazy"
              />
              <span class="art-number">04</span>
              <span class="art-moon">☾</span>
              <span class="art-script">Nos traditions</span>
              <span class="art-caption">DES LIENS QUI NOUS RASSEMBLENT</span>
            </div>

            <div class="card-footer">
              <span>
                <strong>Cérémonies &amp; traditions</strong>
                <small>Toutes les cultures, tous les liens</small>
              </span>
              <span class="card-arrow" aria-hidden="true">↗</span>
            </div>
          </NuxtLink>
        </div>

        <p class="collection-note">
          Et tant d’autres occasions : fiançailles, Bar &amp; Bat Mitsvah,
          fêtes familiales, anniversaires de mariage et bien plus encore.
        </p>
      </section>

      <!-- NOS PRESTATIONS -->
      <section class="services-preview section">
        <div class="section-heading">
          <p class="eyebrow centered"><span class="line"></span> BIEN PLUS QU’UNE INVITATION <span class="line"></span></p>
          <h2>Une expérience pensée<br /><em>pour vos plus beaux instants.</em></h2>
          <p>Invitation digitale, site complet ou création sur mesure : imaginons le format qui correspond à votre célébration.</p>
        </div>
        <div class="services-preview-grid">
          <article><span class="service-preview-number">01</span><span class="service-preview-icon">✧</span><h3>Invitation digitale</h3><p>Un faire-part personnalisé avec la date, le lieu et les informations essentielles, à envoyer facilement à vos invités.</p><NuxtLink to="/services#invitation-digitale" class="service-card-link">Voir cette formule <span>↗</span></NuxtLink></article>
          <article><span class="service-preview-number">02</span><span class="service-preview-icon">⌘</span><h3>Site complet</h3><p>Une page dédiée à votre événement pour réunir programme, accès et informations pratiques.</p><NuxtLink to="/services#site-complet" class="service-card-link">Voir cette formule <span>↗</span></NuxtLink></article>
          <article><span class="service-preview-number">03</span><span class="service-preview-icon">♡</span><h3>Création sur mesure</h3><p>Un format imaginé selon votre idée, votre célébration et vos besoins particuliers.</p><NuxtLink to="/services#creation-sur-mesure" class="service-card-link">Voir cette formule <span>↗</span></NuxtLink></article>
        </div>
        <NuxtLink to="/services" class="services-preview-link">Découvrir nos prestations <span>↗</span></NuxtLink>
      </section>

      <!-- NOTRE UNIVERS -->
      <section id="concept" class="concept">
        <div class="concept-symbol">✳</div>

        <p class="eyebrow">BIEN PLUS QU’UNE INVITATION</p>

        <h2>
          Ce qui compte,<br />
          <em>c’est ce qui nous rassemble.</em>
        </h2>

        <p>
          Une tradition, une rencontre, une famille, une promesse.
          Chaque histoire est différente et mérite une attention
          particulière. Nous imaginons des invitations qui vous
          ressemblent, pour donner le ton de vos plus beaux moments.
        </p>

        <a href="#collections" class="concept-link">
          Trouver mon univers <span>↗</span>
        </a>
      </section>

      <!-- CONTACT -->
      <section id="contact" class="contact section">
        <p class="eyebrow centered">IMAGINONS VOTRE INVITATION</p>

        <h2>
          Votre prochain instant précieux<br />
          <em>commence ici.</em>
        </h2>

        <NuxtLink to="/contact" class="primary-button">
          Parlons de votre projet <span>↗</span>
        </NuxtLink>
      </section>
    </main>


  </div>
  <NuxtPage />
</template>

<style>
.services-preview { padding-top:76px; padding-bottom:78px; background:#f8f4ed; }
.services-preview-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:22px; margin:38px 0 30px; }
.services-preview-grid article { position:relative; padding:28px 25px; border:1px solid #e6dac9; background:#fcfaf6; }
.service-preview-number { color:#a48761; font-size:10px; letter-spacing:2px; }
.service-preview-icon { display:grid; width:44px; height:44px; margin:22px 0 18px; place-items:center; border:1px solid #d8c5aa; border-radius:50%; color:#a48761; font-size:22px; }
.services-preview-grid h3 { margin:0 0 10px; font-family:Georgia,"Times New Roman",serif; font-size:23px; font-weight:400; }
.services-preview-grid p { margin:0; color:#81766c; font-size:13px; line-height:1.8; }
.service-card-link { display:inline-flex; align-items:center; gap:12px; margin-top:18px; padding-bottom:5px; border-bottom:1px solid #c6ad89; color:#80694c; text-decoration:none; font-size:11px; }
.service-card-link:hover { color:#51463d; }
.services-preview-link { display:flex; width:max-content; max-width:100%; margin:0 auto; gap:24px; padding-bottom:8px; border-bottom:1px solid #c6ad89; color:#80694c; text-decoration:none; font-size:12px; }
@media(max-width:700px) { .services-preview-grid { grid-template-columns:1fr; } .services-preview-grid article { padding:23px; } }

/* Ajustement mobile du bloc de contact */
@media (max-width: 560px) {
  .contact {
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    padding-right: 16px;
    padding-left: 16px;
  }

  .contact h2 {
    width: 100%;
    max-width: 100%;
    font-size: clamp(27px, 7.2vw, 34px);
    line-height: 1.16;
    overflow-wrap: anywhere;
  }

  .contact .primary-button {
    box-sizing: border-box;
    max-width: 100%;
    white-space: normal;
    text-align: center;
  }
}
</style>
