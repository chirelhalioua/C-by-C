<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const collections = {
  mariages: {
    number: '01',
    eyebrow: 'POUR LES GRANDS OUI',
    title: 'Mariages',
    intro: 'Une invitation délicate pour célébrer votre histoire et partager la magie de votre grand jour.',
    image: '/images/mariages.jpg',
    alt: 'Invitation de mariage élégante aux tons ivoire et champagne',
    details: 'Du premier faire-part aux informations pratiques de votre célébration, imaginons une invitation à votre image : élégante, personnelle et pensée jusque dans les détails.',
    suggestions: ['Mariage civil ou cérémonie', 'Save the date', 'Informations et programme du jour']
  },
  naissances: {
    number: '02',
    eyebrow: 'LES PREMIERS INSTANTS',
    title: 'Naissances & baptêmes',
    intro: 'Des créations douces et délicates pour annoncer l’arrivée d’un enfant et célébrer ses premiers instants.',
    image: '/images/naissances-baptemes.jpg',
    alt: 'Faire-part délicat de naissance et de baptême',
    details: 'Une annonce pleine de tendresse, un baptême ou une réunion de famille : chaque création est pensée pour partager cette nouvelle avec celles et ceux qui vous sont chers.',
    suggestions: ['Annonce de naissance', 'Baptême', 'Célébration en famille']
  },
  anniversaires: {
    number: '03',
    eyebrow: 'LES JOLIS RENDEZ-VOUS',
    title: 'Anniversaires',
    intro: 'Une belle façon de réunir ceux qui comptent et de créer des souvenirs inoubliables.',
    image: '/images/anniversaires.jpg',
    alt: 'Invitation raffinée pour une fête d’anniversaire',
    details: 'Un anniversaire intime ou une grande fête : donnez le ton dès l’invitation avec une création raffinée, joyeuse et fidèle à votre événement.',
    suggestions: ['Anniversaire adulte ou enfant', 'Anniversaire de mariage', 'Fête surprise']
  },
  ceremonies: {
    number: '04',
    eyebrow: 'DES MOMENTS UNIQUES',
    title: 'Cérémonies & traditions',
    intro: 'Des invitations pensées avec soin pour honorer vos traditions et les histoires qui vous sont chères.',
    image: '/images/ceremonies-traditions.jpg',
    alt: 'Invitation raffinée pour une cérémonie traditionnelle',
    details: 'Chaque tradition et chaque famille possède ses propres codes. Nous imaginons une invitation respectueuse de votre célébration, de vos envies et de votre histoire.',
    suggestions: ['Bar & Bat Mitsvah', 'Cérémonies et fêtes traditionnelles', 'Réunions familiales et moments symboliques']
  }
}

const collection = computed(() => collections[String(route.params.slug)] || null)
</script>

<template>
  <main v-if="collection" class="collection-page">
    <nav class="breadcrumbs" aria-label="Fil d’Ariane">
      <NuxtLink to="/">Accueil</NuxtLink><span>／</span><NuxtLink to="/collections">Collections</NuxtLink><span>／</span><span>{{ collection.title }}</span>
    </nav>

    <section class="collection-hero">
      <div class="collection-copy">
        <p class="eyebrow"><span class="gold-line"></span>{{ collection.eyebrow }}</p>
        <p class="collection-number">{{ collection.number }} <span>— COLLECTION C BY C</span></p>
        <h1>{{ collection.title }}</h1>
        <p class="intro">{{ collection.intro }}</p>
        <p class="body-copy">{{ collection.details }}</p>
        <NuxtLink to="/contact" class="gold-button">Parlons de votre projet <span>↗</span></NuxtLink>
      </div>
      <div class="collection-visual">
        <img :src="collection.image" :alt="collection.alt">
        <span class="image-frame" aria-hidden="true"></span>
        <span class="image-caption">LES MOMENTS QUI NOUS UNISSENT</span>
      </div>
    </section>

    <section class="ideas">
      <p class="eyebrow centered">IMAGINONS VOTRE INVITATION</p>
      <h2>Une attention particulière à <em>chaque détail.</em></h2>
      <p class="ideas-intro">Votre histoire est unique. Créons une invitation qui lui ressemble.</p>
      <div class="idea-grid">
        <article v-for="(suggestion, index) in collection.suggestions" :key="suggestion" class="idea-card">
          <span class="idea-number">0{{ index + 1 }}</span>
          <h3>{{ suggestion }}</h3>
          <span class="idea-star">✳</span>
        </article>
      </div>
      <div class="bottom-actions">
        <NuxtLink to="/collections" class="back-link">← Toutes les collections</NuxtLink>
        <NuxtLink to="/contact" class="text-link">Personnaliser mon projet ↗</NuxtLink>
      </div>
    </section>
  </main>
  <main v-else class="not-found">
    <p class="eyebrow">COLLECTION C BY C</p>
    <h1>Cette collection se prépare.</h1>
    <NuxtLink to="/collections" class="gold-button">Revenir aux collections ↗</NuxtLink>
  </main>
</template>

<style scoped>
.collection-page { color: var(--brown); }
.breadcrumbs { display:flex; flex-wrap:wrap; gap:10px; padding:20px max(5vw,calc((100% - 1320px)/2)); color:var(--muted); font:10px Arial,sans-serif; letter-spacing:.4px; }
.breadcrumbs a:hover,.back-link:hover,.text-link:hover { color:var(--gold-dark); }
.collection-hero { display:grid; grid-template-columns:minmax(0,.92fr) minmax(0,1.08fr); align-items:center; gap:clamp(38px,6vw,90px); padding:38px max(5vw,calc((100% - 1320px)/2)) 70px; background:linear-gradient(115deg,#fffaf3 0%,#f2e2c9 100%); }
.collection-copy { max-width:550px; }
.eyebrow { display:flex; align-items:center; gap:10px; margin:0 0 20px; color:var(--gold-dark); font:10px Arial,sans-serif; letter-spacing:1.8px; }
.gold-line { display:inline-block; width:28px; height:1px; background:var(--gold); }
.collection-number { margin:0 0 12px; color:var(--gold-dark); font:10px Arial,sans-serif; letter-spacing:1.3px; }
.collection-number span { color:var(--muted); }
h1 { margin:0; font:400 clamp(42px,5vw,68px)/1.04 Georgia,serif; letter-spacing:-1.6px; }
.intro { margin:22px 0 14px; color:var(--brown-soft); font:italic 20px/1.55 Georgia,serif; }
.body-copy { max-width:450px; margin:0 0 26px; color:var(--muted); font-size:14px; line-height:1.85; }
.gold-button { display:inline-flex; align-items:center; gap:14px; padding:14px 21px; border:1px solid #9c702f; border-radius:999px; color:#fffdf8; background:linear-gradient(135deg,#e5ca8d 0%,#c39a54 42%,#93662f 100%); box-shadow:0 8px 20px rgba(129,87,36,.18); font:11px Arial,sans-serif; transition:transform .2s,box-shadow .2s; }
.gold-button:hover { transform:translateY(-2px); box-shadow:0 12px 26px rgba(129,87,36,.24); }
.collection-visual { position:relative; min-width:0; padding:0 8px 16px 0; }
.collection-visual img { position:relative; z-index:1; display:block; width:100%; aspect-ratio:4/4.2; object-fit:cover; border:1px solid rgba(184,138,69,.5); box-shadow:0 22px 50px rgba(61,39,22,.18); }
.image-frame { position:absolute; z-index:2; inset:9px 17px 25px 9px; border:1px solid rgba(255,247,226,.85); pointer-events:none; }
.image-caption { position:absolute; z-index:3; right:0; bottom:0; padding:12px 15px; color:#fffdf8; background:linear-gradient(120deg,#c6a060,#8e642f); font:8px Arial,sans-serif; letter-spacing:1.4px; }
.ideas { padding:62px max(5vw,calc((100% - 1120px)/2)) 68px; text-align:center; background:radial-gradient(ellipse at 50% 0%,#fffdf9,transparent 65%),#f7efe3; }
.centered { justify-content:center; }
.ideas h2 { margin:0; font:400 clamp(30px,3.5vw,44px)/1.15 Georgia,serif; }
.ideas h2 em { color:var(--gold-dark); font-weight:400; }
.ideas-intro { margin:13px 0 28px; color:var(--muted); font-size:14px; }
.idea-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:16px; }
.idea-card { position:relative; display:flex; flex-direction:column; align-items:flex-start; min-height:145px; padding:22px; border:1px solid rgba(173,129,60,.35); background:rgba(255,253,249,.82); text-align:left; }
.idea-number { color:var(--gold-dark); font:10px Arial,sans-serif; letter-spacing:1px; }
.idea-card h3 { margin:17px 0 12px; font:400 19px/1.3 Georgia,serif; }
.idea-star { margin-top:auto; color:var(--gold); }
.bottom-actions { display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:16px; margin-top:28px; padding-top:20px; border-top:1px solid var(--line); }
.back-link,.text-link { color:var(--brown-soft); font:11px Arial,sans-serif; }
.not-found { min-height:55vh; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:18px; padding:50px 20px; text-align:center; }
.not-found h1 { font-size:clamp(32px,5vw,52px); }
@media(max-width:760px) {
 .breadcrumbs { padding:16px 22px; font-size:9px; }
 .collection-hero { grid-template-columns:1fr; gap:28px; padding:30px 22px 42px; }
 h1 { font-size:clamp(42px,10vw,58px); }
 .intro { font-size:18px; }
 .collection-visual { width:100%; max-width:570px; margin:0 auto; }
 .collection-visual img { aspect-ratio:1/1.02; }
 .ideas { padding:44px 22px 48px; }
 .idea-grid { grid-template-columns:1fr; gap:10px; }
 .idea-card { min-height:105px; padding:18px; }
 .idea-card h3 { margin:12px 0; }
 .bottom-actions { align-items:flex-start; flex-direction:column; }
}
</style>
