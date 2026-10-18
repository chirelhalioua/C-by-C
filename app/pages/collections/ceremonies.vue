<script setup>
const styles = [
  {
    titre: 'Traditionnel',
    description: 'Des invitations qui mettent à l’honneur vos traditions familiales.',
  },
  {
    titre: 'Raffiné',
    description: 'Des détails élégants pour une célébration mémorable.',
  },
  {
    titre: 'Contemporain',
    description: 'Une approche moderne, sobre et personnalisée.',
  },
]
</script>

<template>
  <main class="ceremonies-page">
    <section class="hero">
      <NuxtLink to="/collections" class="back-link">
        ← Toutes les collections
      </NuxtLink>

      <p class="eyebrow">DES MOMENTS UNIQUES</p>
      <h1>
        Cérémonies <em>&amp; traditions</em>
      </h1>

      <p class="intro">
        Des invitations imaginées pour honorer vos traditions,
        réunir vos proches et célébrer les moments qui comptent.
      </p>

      <img
        src="/images/ceremonies-traditions.jpg"
        alt="Invitation élégante pour une cérémonie"
      />
    </section>

    <section class="styles-section">
      <p class="eyebrow">VOTRE CÉLÉBRATION, VOTRE STYLE</p>
      <h2>Des attentions qui ont du sens</h2>

      <div class="styles-grid">
        <article v-for="style in styles" :key="style.titre">
          <span class="decoration">✳</span>
          <h3>{{ style.titre }}</h3>
          <p>{{ style.description }}</p>
        </article>
      </div>

      <p class="note">
        Ces propositions sont des inspirations, et non un catalogue
        de modèles actuellement disponibles à la commande.
      </p>
    </section>

    <section class="contact-section">
      <p class="eyebrow">IMAGINONS ENSEMBLE</p>
      <h2>Un moment précieux à votre image.</h2>
      <p>
        Présentez-nous votre cérémonie et vos envies afin d’imaginer
        une invitation adaptée à votre événement.
      </p>
      <NuxtLink to="/contact" class="button">
        Parler de mon projet ↗
      </NuxtLink>
    </section>
  </main>
</template>

<style scoped>
.ceremonies-page {
  color: #51463d;
  background: #faf7f1;
}

.hero {
  padding: 45px 24px 65px;
  background: #f1e9dc;
  text-align: center;
}

.back-link {
  display: block;
  width: fit-content;
  margin: 0 auto 42px;
  color: #77634e;
  font-size: 12px;
  text-decoration: none;
}

.eyebrow {
  color: #a48761;
  font-size: 10px;
  letter-spacing: 2.7px;
  line-height: 1.8;
}

.hero h1,
.styles-section h2,
.contact-section h2 {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(30px, 4.5vw, 46px);
  font-weight: 400;
  line-height: 1.3;
}

.hero h1 em {
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

.styles-section {
  max-width: 1050px;
  margin: 0 auto;
  padding: 70px 24px 80px;
  text-align: center;
}

.styles-section h2 {
  margin: 12px 0 35px;
  font-size: clamp(27px, 3.5vw, 36px);
}

.styles-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  text-align: left;
}

.styles-grid article {
  padding: 27px 23px;
  border: 1px solid #e9e0d5;
  background: #fcfaf6;
}

.decoration {
  color: #a48761;
  font-size: 22px;
}

.styles-grid h3 {
  margin: 18px 0 10px;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 22px;
  font-weight: 400;
}

.styles-grid article p,
.note,
.contact-section > p:not(.eyebrow) {
  color: #81766c;
  font-size: 13px;
  line-height: 1.9;
}

.note {
  margin-top: 25px;
  font-size: 11px;
}

.contact-section {
  padding: 55px 24px;
  background: #eee4d5;
  text-align: center;
}

.contact-section h2 {
  margin: 14px 0;
  font-size: clamp(27px, 3.5vw, 36px);
}

.contact-section > p:not(.eyebrow) {
  max-width: 480px;
  margin: 0 auto;
}

.button {
  display: inline-block;
  margin-top: 22px;
  padding: 15px 22px;
  background: #77634e;
  color: #fffdf9;
  font-size: 12px;
  text-decoration: none;
}

@media (max-width: 600px) {
  .hero {
    padding: 32px 18px 42px;
  }

  .styles-section {
    padding: 48px 18px;
  }

  .styles-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .styles-grid article {
    padding: 22px;
  }

  .contact-section {
    padding: 42px 18px;
  }
}
</style>
