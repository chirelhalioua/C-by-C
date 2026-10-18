
<template>
  <main class="page">
    <!-- Introduction -->
    <section class="intro">
      <p class="eyebrow">CELEBRATIONS BY CHIREL</p>

      <h1>
        Une histoire,
        <em>mille émotions.</em>
      </h1>

      <p class="description">
        Derrière chaque invitation, il y a une intention, une attention
        et surtout une histoire qui mérite d'être célébrée. C by C accueille
        toutes les religions, toutes les cultures et toutes les traditions,
        avec la même écoute et le même soin.
      </p>
    </section>

    <!-- Petite introduction -->
    <section class="opening">
      <div class="opening-line"></div>
      <p>
        Mariage, naissance, fête familiale ou cérémonie religieuse :
        chaque moment de vie mérite une invitation qui respecte votre histoire,
        vos convictions et vos traditions.
      </p>
    </section>

    <!-- Chronologie -->
    <section class="timeline">

      <!-- Étape 1 -->
      <article class="timeline-item">
        <div class="timeline-marker">
          <span>01</span>
        </div>

        <div class="timeline-image">
          <img
            src="/images/invitation-hero.jpg"
            alt="Une invitation délicate dans des tons crème et champagne"
            loading="lazy"
          />
        </div>

        <div class="timeline-content">
          <p class="category">L'INSPIRATION</p>
          <h2>Tout commence par <em>une émotion.</em></h2>
          <p>
            Un événement à annoncer, une nouvelle à partager,
            des proches à réunir. Chaque création naît de cette
            envie de donner une place particulière aux moments qui comptent.
          </p>
        </div>
      </article>

      <!-- Étape 2 -->
      <article class="timeline-item reverse">
        <div class="timeline-marker">
          <span>02</span>
        </div>

        <div class="timeline-image">
          <img
            src="/images/mariages.jpg"
            alt="Une papeterie élégante aux détails raffinés"
            loading="lazy"
          />
        </div>

        <div class="timeline-content">
          <p class="category">LA CRÉATION</p>
          <h2>Le charme est dans <em>les détails.</em></h2>
          <p>
            Une harmonie de couleurs, une typographie élégante,
            une présentation épurée. Nous aimons les créations
            où chaque détail trouve naturellement sa place.
          </p>
        </div>
      </article>

      <!-- Étape 3 -->
      <article class="timeline-item">
        <div class="timeline-marker">
          <span>03</span>
        </div>

        <div class="timeline-image">
          <img
            src="/images/naissances-baptemes.jpg"
            alt="Une invitation douce pour un moment précieux en famille"
            loading="lazy"
          />
        </div>

        <div class="timeline-content">
          <p class="category">VOTRE HISTOIRE</p>
          <h2>Chaque moment a <em>son caractère.</em></h2>
          <p>
            Mariage, naissance, anniversaire ou cérémonie religieuse :
            nous souhaitons accompagner toutes les célébrations, quelles que
            soient la religion, la culture ou la tradition de chacun.
            Votre invitation est imaginée dans le respect de ce qui compte pour vous.
          </p>
        </div>
      </article>

      <!-- Étape 4 -->
      <article class="timeline-item reverse">
        <div class="timeline-marker">
          <span>04</span>
        </div>

        <div class="timeline-image">
          <img
            src="/images/ceremonies-traditions.jpg"
            alt="Une ambiance raffinée pour une célébration à partager"
            loading="lazy"
          />
        </div>

        <div class="timeline-content">
          <p class="category">LE PLAISIR DE PARTAGER</p>
          <h2>Réunir ceux qui <em>comptent.</em></h2>
          <p>
            Une invitation digitale permet de transmettre
            votre annonce simplement et de faire entrer vos
            proches dans l'histoire avant même le grand jour.
          </p>
        </div>
      </article>

    </section>

    <!-- Signature -->
    <section class="signature">
      <p class="signature-eyebrow">NOTRE PHILOSOPHIE</p>

      <h2>
        Chaque histoire mérite
        <em>sa célébration.</em>
      </h2>

      <p class="signature-description">
        Quelle que soit votre religion, votre culture ou votre tradition,
        votre histoire a sa place ici. Nous créons avec vous une invitation
        qui respecte vos convictions et reflète l'esprit de votre célébration.
      </p>

      <NuxtLink to="/collections" class="button">
        Découvrir les collections <span>↗</span>
      </NuxtLink>
    </section>
  </main>
</template>

<style scoped>
.page {
  max-width: 1180px;
  margin: 0 auto;
  padding: 76px 28px;
  color: #51463d;
}

/* Introduction */
.intro {
  max-width: 720px;
  margin: 0 auto 44px;
  text-align: center;
}

.eyebrow {
  margin-bottom: 22px;
  color: #a48761;
  font-size: 11px;
  letter-spacing: 3px;
}

.intro h1 {
  margin: 0 0 22px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(34px, 5vw, 54px);
  font-weight: 400;
  line-height: 1.2;
}

.intro h1 em,
.timeline-content h2 em,
.signature h2 em {
  color: #a48761;
  font-weight: 400;
}

.description {
  max-width: 520px;
  margin: 0 auto;
  color: #81766c;
  font-size: 15px;
  line-height: 1.9;
}

/* Introduction à la chronologie */
.opening {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  max-width: 620px;
  margin: 0 auto 75px;
}

.opening-line {
  width: 38px;
  height: 1px;
  flex-shrink: 0;
  background: #c9b69b;
}

.opening p {
  margin: 0;
  color: #81766c;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 15px;
  font-style:normal;
  line-height: 1.8;
}

/* Chronologie */
.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 66px;
}

/* Ligne verticale centrale */
.timeline::before {
  position: absolute;
  top: 15px;
  bottom: 15px;
  left: 50%;
  width: 1px;
  background: #e9e0d5;
  content: "";
}

.timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: center;
  gap: 66px;
  min-width: 0;
}

/* Inversion de l'image et du texte */
.timeline-item.reverse .timeline-image {
  order: 2;
}

.timeline-item.reverse .timeline-content {
  order: 1;
  text-align: right;
}

.timeline-item.reverse .timeline-content p:not(.category) {
  margin-right: 0;
  margin-left: auto;
}

/* Numéro sur la ligne */
.timeline-marker {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  display: flex;
  width: 43px;
  height: 43px;
  align-items: center;
  justify-content: center;
  border: 1px solid #e9e0d5;
  border-radius: 50%;
  background: #fcfaf6;
  color: #a48761;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 13px;
  transform: translate(-50%, -50%);
}

/* Photos */
.timeline-image {
  height: 350px;
  overflow: hidden;
  border: 1px solid #e9e0d5;
  background: #f1e9df;
}

.timeline-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.6s ease;
}

.timeline-item:hover .timeline-image img {
  transform: scale(1.035);
}

/* Textes */
.timeline-content {
  padding: 20px 0;
}

.category {
  margin: 0 0 15px;
  color: #a48761;
  font-size: 10px;
  letter-spacing: 2px;
  line-height: 1.7;
}

.timeline-content h2 {
  margin: 0 0 17px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(27px, 3vw, 36px);
  font-weight: 400;
  line-height: 1.3;
}

.timeline-content > p:not(.category) {
  max-width: 410px;
  margin: 0;
  color: #81766c;
  font-size: 14px;
  line-height: 1.95;
}

/* Conclusion */
.signature {
  margin-top: 90px;
  padding: 48px 24px;
  border: 1px solid #eee4d7;
  background: #f7f2ea;
  text-align: center;
}

.signature-eyebrow {
  margin: 0 0 16px;
  color: #a48761;
  font-size: 10px;
  letter-spacing: 3px;
}

.signature h2 {
  max-width: 600px;
  margin: 0 auto 16px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(27px, 3.5vw, 38px);
  font-weight: 400;
  line-height: 1.4;
}

.signature-description {
  max-width: 480px;
  margin: 0 auto;
  color: #81766c;
  font-size: 14px;
  line-height: 1.8;
}

/* Bouton */
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 25px;
  padding: 15px 24px;
  border: 1px solid #77634e;
  background: #77634e;
  color: #fffdf9;
  font-size: 13px;
  text-decoration: none;
  transition:
    background 0.2s ease,
    color 0.2s ease;
}

.button:hover {
  background: transparent;
  color: #77634e;
}

/* Tablettes */
@media (max-width: 768px) {
  .page {
    padding: 54px 22px;
  }

  .opening {
    margin-bottom: 55px;
  }

  .timeline {
    gap: 50px;
  }

  .timeline-item {
    gap: 45px;
  }

  .timeline-image {
    height: 280px;
  }

  .timeline-content h2 {
    font-size: 28px;
  }

  .timeline-content > p:not(.category) {
    font-size: 13px;
  }

  .signature {
    margin-top: 65px;
    padding: 38px 20px;
  }
}

/* Téléphones */
@media (max-width: 560px) {
  .page {
    padding: 42px 16px;
  }

  .intro {
    margin-bottom: 35px;
  }

  .intro h1 {
    font-size: 35px;
  }

  .intro > .description {
    font-size: 14px;
  }

  .opening {
    align-items: flex-start;
    justify-content: flex-start;
    gap: 12px;
    margin-bottom: 42px;
  }

  .opening-line {
    width: 24px;
    margin-top: 12px;
  }

  .opening p {
    font-size: 14px;
  }

  .timeline {
    gap: 40px;
  }

  /* Ligne et numéros placés à gauche */
  .timeline::before {
    left: 17px;
  }

  .timeline-item,
  .timeline-item.reverse {
    grid-template-columns: 35px minmax(0, 1fr);
    gap: 13px;
    align-items: start;
  }

  .timeline-marker {
    top: 15px;
    left: 17px;
    width: 35px;
    height: 35px;
    font-size: 11px;
    transform: translateX(-50%);
  }

  /* Sur mobile, photo puis texte */
  .timeline-item .timeline-image,
  .timeline-item.reverse .timeline-image {
    grid-column: 2;
    grid-row: 1;
    order: 1;
    height: 230px;
  }

  .timeline-item .timeline-content,
  .timeline-item.reverse .timeline-content {
    grid-column: 2;
    grid-row: 2;
    order: 2;
    padding: 16px 0 0;
    text-align: left;
  }

  .timeline-item.reverse .timeline-content p:not(.category) {
    margin-right: 0;
    margin-left: 0;
  }

  .category {
    margin-bottom: 10px;
    font-size: 9px;
  }

  .timeline-content h2 {
    margin-bottom: 12px;
    font-size: 27px;
  }

  .timeline-content > p:not(.category) {
    font-size: 13px;
    line-height: 1.85;
  }

  .signature {
    margin-top: 55px;
    padding: 32px 18px;
  }

  .signature h2 {
    font-size: 28px;
  }

  .signature-description {
    font-size: 13px;
  }

  .button {
    padding: 14px 18px;
  }
}

/* Réduction des animations */
@media (prefers-reduced-motion: reduce) {
  .timeline-image img,
  .button {
    transition: none;
  }

  .timeline-item:hover .timeline-image img {
    transform: none;
  }
}
</style>
