<template>
  <main class="page">
    <!-- Introduction -->
    <section class="intro">
      <p class="eyebrow">CELEBRATIONS BY CHIREL</p>

      <h1>
        Des invitations pour
        <em>vos plus beaux instants.</em>
      </h1>

      <p class="description">
        Découvrez nos univers et trouvez l'invitation qui racontera
        votre histoire avec élégance.
      </p>
    </section>

    <!-- Collections -->
    <section class="collections">
      <!-- Mariages -->
      <article class="collection">
        <div class="image-wrapper">
          <img
            class="collection-image"
            src="/images/mariages.jpg"
            alt="Invitation de mariage élégante aux tons ivoire et champagne"
            loading="lazy"
          />
        </div>

        <div class="collection-content">
          <p class="category">POUR LES GRANDS OUI</p>
          <h2>Mariages</h2>
          <p class="description-card">
            Une invitation délicate pour célébrer votre histoire
            et partager la magie de votre grand jour.
          </p>

          <NuxtLink to="/collections/mariages" class="link">
            Découvrir l'univers <span>↗</span>
          </NuxtLink>
        </div>
      </article>

      <!-- Naissances et baptêmes -->
      <article class="collection">
        <div class="image-wrapper">
          <img
            class="collection-image"
            src="/images/naissances-baptemes.jpg"
            alt="Faire-part délicat de naissance et de baptême"
            loading="lazy"
          />
        </div>

        <div class="collection-content">
          <p class="category">LES PREMIERS INSTANTS</p>
          <h2>Naissances &amp; baptêmes</h2>
          <p class="description-card">
            Des créations douces et délicates pour annoncer
            l'arrivée d'un enfant et célébrer ses premiers instants.
          </p>

          <NuxtLink to="/collections/naissances" class="link">
            Découvrir l'univers <span>↗</span>
          </NuxtLink>
        </div>
      </article>

      <!-- Anniversaires -->
      <article class="collection">
        <div class="image-wrapper">
          <img
            class="collection-image"
            src="/images/anniversaires.jpg"
            alt="Invitation raffinée pour une fête d'anniversaire"
            loading="lazy"
          />
        </div>

        <div class="collection-content">
          <p class="category">LES JOLIS RENDEZ-VOUS</p>
          <h2>Anniversaires</h2>
          <p class="description-card">
            Une belle façon de réunir ceux qui comptent
            et de créer des souvenirs inoubliables.
          </p>

          <NuxtLink to="/collections/anniversaires" class="link">
            Découvrir l'univers <span>↗</span>
          </NuxtLink>
        </div>
      </article>

      <!-- Cérémonies et traditions -->
      <article class="collection">
        <div class="image-wrapper">
          <img
            class="collection-image"
            src="/images/ceremonies-traditions.jpg"
            alt="Invitation raffinée pour une cérémonie traditionnelle"
            loading="lazy"
          />
        </div>

        <div class="collection-content">
          <p class="category">DES MOMENTS UNIQUES</p>
          <h2>Cérémonies &amp; traditions</h2>
          <p class="description-card">
            Des invitations pensées avec soin pour honorer
            vos traditions et les histoires qui vous sont chères.
          </p>

          <NuxtLink to="/collections/ceremonies" class="link">
            Découvrir l'univers <span>↗</span>
          </NuxtLink>
        </div>
      </article>
    </section>

    <!-- Conclusion -->
    <section class="closing">
      <p class="closing-eyebrow">IMAGINONS ENSEMBLE</p>

      <h2>Chaque détail compte, chaque histoire est unique.</h2>

      <p class="closing-description">
        Vous avez une idée en tête ? Donnons vie à une invitation
        qui vous ressemble.
      </p>

      <NuxtLink to="/contact" class="button">
        Parlons de votre projet <span>↗</span>
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
  margin: 0 auto 58px;
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

.intro h1 em {
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

/* Grille des collections */
.collections {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 30px;
}

.collection {
  min-width: 0;
  overflow: hidden;
  border: 1px solid #e9e0d5;
  background: #fcfaf6;
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;
}

.collection:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(81, 70, 61, 0.08);
}

/* Images */
.image-wrapper {
  width: 100%;
  height: 270px;
  overflow: hidden;
  background: #f1e9df;
}

.collection-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.6s ease;
}

.collection:hover .collection-image {
  transform: scale(1.04);
}

/* Texte des cartes */
.collection-content {
  padding: 27px 28px 30px;
}

.category {
  margin: 0 0 13px;
  color: #a48761;
  font-size: 10px;
  letter-spacing: 2px;
  line-height: 1.7;
}

.collection h2 {
  margin: 0 0 13px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(23px, 2.5vw, 29px);
  font-weight: 400;
  line-height: 1.35;
}

.description-card {
  margin: 0;
  color: #81766c;
  font-size: 14px;
  line-height: 1.9;
}

.link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 22px;
  padding-bottom: 6px;
  border-bottom: 1px solid #c9b69b;
  color: #8b704c;
  font-size: 13px;
  text-decoration: none;
  transition:
    color 0.2s ease,
    gap 0.2s ease;
}

.link:hover {
  gap: 15px;
  color: #51463d;
}

.link span {
  font-size: 16px;
}

/* Bloc de conclusion */
.closing {
  margin-top: 72px;
  padding: 48px 24px;
  border: 1px solid #eee4d7;
  background: #f7f2ea;
  text-align: center;
}

.closing-eyebrow {
  margin: 0 0 16px;
  color: #a48761;
  font-size: 10px;
  letter-spacing: 3px;
}

.closing h2 {
  max-width: 600px;
  margin: 0 auto 16px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(25px, 3vw, 34px);
  font-weight: 400;
  line-height: 1.4;
}

.closing-description {
  max-width: 480px;
  margin: 0 auto;
  color: #81766c;
  font-size: 14px;
  line-height: 1.8;
}

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

/* Tablettes et téléphones */
@media (max-width: 768px) {
  .page {
    padding: 54px 22px;
  }

  .intro {
    margin-bottom: 40px;
  }

  .collections {
    gap: 20px;
  }

  .image-wrapper {
    height: 210px;
  }

  .collection-content {
    padding: 22px 20px 25px;
  }

  .closing {
    margin-top: 48px;
    padding: 38px 20px;
  }
}

/* Petit écran : une carte par ligne */
@media (max-width: 560px) {
  .page {
    padding: 42px 16px;
  }

  .intro {
    margin-bottom: 34px;
  }

  .intro h1 {
    font-size: 35px;
  }

  .intro > .description {
    font-size: 14px;
  }

  .collections {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .image-wrapper {
    height: 230px;
  }

  .collection-content {
    padding: 24px 22px 26px;
  }

  .collection h2 {
    font-size: 27px;
  }

  .closing {
    margin-top: 38px;
    padding: 32px 18px;
  }

  .closing h2 {
    font-size: 27px;
  }
}

/* Respect des préférences de réduction des animations */
@media (prefers-reduced-motion: reduce) {
  .collection,
  .collection-image,
  .link,
  .button {
    transition: none;
  }

  .collection:hover {
    transform: none;
  }

  .collection:hover .collection-image {
    transform: none;
  }
}
</style>
