<script setup>
const inspirations = [
  {
    titre: 'Tout en douceur',
    description: 'Des teintes délicates pour annoncer une belle nouvelle.',
  },
  {
    titre: 'Floral',
    description: 'Des inspirations fleuries et poétiques.',
  },
  {
    titre: 'Épuré',
    description: 'Une présentation simple et intemporelle.',
  },
]
</script>

<template>
  <main class="detail-page">
    <section class="hero">
      <NuxtLink to="/collections" class="back">
        ← Toutes les collections
      </NuxtLink>

      <p class="eyebrow">LES PREMIERS INSTANTS</p>
      <h1>Naissances &amp; baptêmes <em>de doux souvenirs</em></h1>

      <p class="intro">
        Des créations délicates pour annoncer l'arrivée d'un enfant
        et célébrer ses premiers instants avec ceux que vous aimez.
      </p>

      <img
        src="/images/naissances-baptemes.jpg"
        alt="Faire-part de naissance et de baptême aux tons doux"
      />
    </section>

    <section class="inspirations">
      <p class="eyebrow">TROUVEZ VOTRE STYLE</p>
      <h2>Des créations pleines de tendresse</h2>

      <div class="cards">
        <article v-for="style in inspirations" :key="style.titre">
          <span>✳</span>
          <h3>{{ style.titre }}</h3>
          <p>{{ style.description }}</p>
        </article>
      </div>

      <p class="note">
        Ces inspirations ne représentent pas encore un catalogue de modèles
        disponibles à la commande.
      </p>
    </section>

    <section class="contact">
      <p class="eyebrow">IMAGINONS ENSEMBLE</p>
      <h2>De précieux instants à partager.</h2>
      <p>Parlons de votre projet et de vos envies.</p>
      <NuxtLink to="/contact" class="button">
        Parler de mon projet ↗
      </NuxtLink>
    </section>
  </main>
</template>

<style scoped>
.detail-page {
  color: #51463d;
  background: #faf7f1;
}

.hero {
  padding: 55px 24px 65px;
  background: #f1e9dc;
  text-align: center;
}

.back {
  display: block;
  width: fit-content;
  margin: 0 auto 45px;
  color: #77634e;
  font-size: 12px;
  text-decoration: none;
}

.eyebrow {
  color: #a48761;
  font-size: 10px;
  letter-spacing: 3px;
  line-height: 1.8;
}

.hero h1,
.inspirations h2,
.contact h2 {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(30px, 5vw, 48px);
  font-weight: 400;
  line-height: 1.3;
}

.hero h1 em {
  display: block;
  color: #a48761;
  font-weight: 400;
}

.intro {
  max-width: 510px;
  margin: 18px auto 30px;
  color: #81766c;
  font-size: 14px;
  line-height: 1.9;
}

.hero img {
  display: block;
  width: min(100%, 650px);
  max-height: 420px;
  margin: 0 auto;
  object-fit: cover;
}

.inspirations {
  max-width: 1000px;
  margin: 0 auto;
  padding: 70px 24px;
  text-align: center;
}

.inspirations h2 {
  margin: 10px 0 35px;
  font-size: clamp(27px, 4vw, 36px);
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  text-align: left;
}

.cards article {
  padding: 28px 23px;
  border: 1px solid #e9e0d5;
  background: #fcfaf6;
}

.cards article > span {
  color: #a48761;
  font-size: 22px;
}

.cards h3 {
  margin: 20px 0 10px;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 22px;
  font-weight: 400;
}

.cards p,
.note,
.contact > p:not(.eyebrow) {
  color: #81766c;
  font-size: 13px;
  line-height: 1.9;
}

.note {
  margin-top: 25px;
  font-size: 11px;
}

.contact {
  padding: 55px 24px;
  background: #eee4d5;
  text-align: center;
}

.contact h2 {
  margin: 12px 0;
  font-size: clamp(27px, 4vw, 36px);
}

.button {
  display: inline-block;
  margin-top: 18px;
  padding: 15px 22px;
  background: #77634e;
  color: #fffdf9;
  font-size: 12px;
  text-decoration: none;
}

@media (max-width: 600px) {
  .hero {
    padding: 35px 18px 40px;
  }

  .back {
    margin-bottom: 30px;
  }

  .inspirations {
    padding: 48px 18px;
  }

  .cards {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .cards article {
    padding: 22px;
  }

  .contact {
    padding: 42px 18px;
  }
}
</style>
```