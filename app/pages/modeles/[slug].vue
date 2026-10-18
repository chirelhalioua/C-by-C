<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const modeles = [
  { slug:'elegance-florale', nom:'Élégance florale', evenement:'Mariage', style:'Floral', couleur:'Lilas', image:'/images/mariages.jpg', description:'Une composition florale délicate et intemporelle, imaginée pour annoncer votre grand jour.', ambiance:'Romantique, lumineuse et délicate', details:['Personnalisation des prénoms et de la date','Informations pratiques de votre événement','Version optimisée pour le partage sur mobile'] },
  { slug:'lilas-moderne', nom:'Lilas moderne', evenement:'Mariage', style:'Moderne', couleur:'Lilas', image:'/images/invitation-hero.jpg', description:'Des lignes épurées et une touche de douceur pour une invitation contemporaine.', ambiance:'Épurée, contemporaine et douce', details:['Personnalisation des textes','Choix des informations à afficher','Format pensé pour le partage numérique'] },
  { slug:'jardin-romantique', nom:'Jardin romantique', evenement:'Naissance', style:'Floral', couleur:'Crème', image:'/images/naissances-baptemes.jpg', description:'Une annonce tendre aux détails fleuris pour présenter un nouveau chapitre de votre histoire.', ambiance:'Tendre, poétique et florale', details:['Prénom et date de naissance','Message personnalisé','Partage facile avec les proches'] },
  { slug:'champetre-chic', nom:'Champêtre chic', evenement:'Anniversaire', style:'Champêtre', couleur:'Crème', image:'/images/anniversaires.jpg', description:'Un esprit naturel et chaleureux pour réunir ceux que vous aimez.', ambiance:'Naturelle, chaleureuse et festive', details:['Nom et âge célébré','Date, horaires et lieu','Message d’invitation personnalisé'] },
  { slug:'douce-celebration', nom:'Douce célébration', evenement:'Cérémonie', style:'Minimaliste', couleur:'Lilas', image:'/images/ceremonies-traditions.jpg', description:'Une invitation élégante, simple et lumineuse pour une cérémonie qui vous ressemble.', ambiance:'Sobre, élégante et intemporelle', details:['Informations sur la cérémonie','Texte et détails personnalisés','Lien facile à envoyer aux invités'] },
  { slug:'fleurs-de-coton', nom:'Fleurs de coton', evenement:'Naissance', style:'Minimaliste', couleur:'Crème', image:'/images/naissances-baptemes.jpg', description:'Une mise en page légère et douce pour partager les premiers instants.', ambiance:'Délicate, légère et naturelle', details:['Prénom et date','Petit mot aux proches','Format adapté au téléphone'] },
]
const modele = computed(() => modeles.find(item => item.slug === route.params.slug))
const lienPersonnalisation = computed(() => ({ path:'/contact', query:{ prestation:'Personnalisation de modèle', modele: modele.value?.nom || '' } }))
</script>

<template>
  <main v-if="modele" class="modele-detail">
    <div class="detail-breadcrumb"><NuxtLink to="/">Accueil</NuxtLink><span>／</span><NuxtLink to="/modeles">Nos modèles</NuxtLink><span>／</span><span>{{ modele.nom }}</span></div>
    <section class="detail-hero">
      <div class="detail-visual">
        <img :src="modele.image" :alt="'Inspiration du modèle ' + modele.nom" />
        <span class="detail-image-label">C BY C · COLLECTION {{ modele.evenement.toUpperCase() }}</span>
      </div>
      <div class="detail-copy">
        <p class="detail-eyebrow">{{ modele.evenement }} · {{ modele.style }}</p>
        <h1>{{ modele.nom }}</h1>
        <p class="detail-intro">{{ modele.description }}</p>
        <div class="detail-tags"><span>{{ modele.couleur }}</span><span>{{ modele.ambiance }}</span></div>
        <div class="detail-rule"></div>
        <h2>Une invitation à votre image</h2>
        <p>Ce modèle est un point de départ : les informations et le texte seront adaptés à votre événement. Nous vous accompagnons pour imaginer une invitation cohérente avec votre univers.</p>
        <ul><li v-for="detail in modele.details" :key="detail"><span>✳</span>{{ detail }}</li></ul>
        <NuxtLink :to="lienPersonnalisation" class="detail-primary">Personnaliser ce modèle <span>↗</span></NuxtLink>
        <NuxtLink to="/modeles" class="detail-secondary">← Retour aux modèles</NuxtLink>
        <p class="detail-note">La personnalisation et les options définitives seront précisées avant publication.</p>
      </div>
    </section>
    <section class="detail-more">
      <p class="detail-eyebrow">POUR VOTRE ÉVÉNEMENT</p><h2>Vous imaginez, nous donnons forme à vos idées.</h2>
      <p>Vous avez une couleur, une ambiance ou un détail en tête ? Parlons de votre projet pour créer une invitation qui vous ressemble.</p>
      <NuxtLink :to="lienPersonnalisation" class="detail-primary">Parler de mon projet <span>↗</span></NuxtLink>
    </section>
  </main>
  <main v-else class="detail-not-found">
    <p class="detail-eyebrow">C BY C</p><h1>Ce modèle est introuvable.</h1><p>Il a peut-être changé de collection.</p><NuxtLink to="/modeles" class="detail-primary">Découvrir les modèles</NuxtLink>
  </main>
</template>

<style scoped>
.modele-detail,.detail-not-found{--violet:#6330a5;--ink:#291746;--muted:#716783;--line:#e6dcf5;background:#fcfaff;color:var(--ink);min-height:70vh}
.detail-breadcrumb{display:flex;flex-wrap:wrap;gap:9px;padding:24px max(22px,calc((100% - 1220px)/2));color:#8b809b;font-size:11px}.detail-breadcrumb a{color:var(--violet)}
.detail-hero{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,.9fr);gap:clamp(28px,6vw,90px);max-width:1220px;margin:0 auto;padding:22px 28px 90px;align-items:center}
.detail-visual{position:relative;overflow:hidden;min-height:560px;border-radius:24px;background:#f1e8ff}.detail-visual img{width:100%;height:100%;min-height:560px;position:absolute;inset:0;object-fit:cover}.detail-image-label{position:absolute;left:18px;bottom:18px;padding:10px 13px;border-radius:999px;background:#fffdf0ed;color:var(--violet);font-size:9px;font-weight:800;letter-spacing:1.3px}
.detail-eyebrow{margin:0 0 13px;color:var(--violet);font-size:10px;font-weight:800;letter-spacing:2px;text-transform:uppercase}
.detail-copy h1,.detail-more h2,.detail-not-found h1{margin:0;font-family:Georgia,serif;font-size:clamp(38px,5vw,62px);font-weight:500;letter-spacing:-1.5px;line-height:1.08}
.detail-intro{margin:19px 0;color:var(--muted);font-size:15px;line-height:1.8}
.detail-tags{display:flex;flex-wrap:wrap;gap:8px}.detail-tags span{padding:7px 12px;border:1px solid var(--line);border-radius:999px;background:white;color:var(--violet);font-size:10px}
.detail-rule{height:1px;margin:26px 0;background:var(--line)}
.detail-copy h2{margin:0 0 10px;font-family:Georgia,serif;font-size:23px;font-weight:500}
.detail-copy h2+p{color:var(--muted);font-size:12px;line-height:1.8}
.detail-copy ul{display:grid;gap:11px;margin:23px 0 28px;padding:0;list-style:none}.detail-copy li{display:flex;gap:10px;color:#57496d;font-size:12px}.detail-copy li span{color:var(--violet)}
.detail-primary{display:inline-flex;align-items:center;justify-content:center;gap:22px;padding:14px 22px;border:0;border-radius:999px;background:var(--violet);color:#fff;font-size:12px;font-weight:800}.detail-secondary{display:block;width:max-content;margin-top:17px;color:var(--violet);font-size:11px;font-weight:700}
.detail-note{margin-top:18px;color:#8b809b;font-size:10px;line-height:1.6}
.detail-more{padding:75px 24px 85px;text-align:center;background:linear-gradient(120deg,#f4edff,#fff8fc)}.detail-more h2{max-width:720px;margin:0 auto;font-size:clamp(30px,4vw,48px)}.detail-more>p:not(.detail-eyebrow){max-width:570px;margin:18px auto 24px;color:var(--muted);font-size:13px;line-height:1.8}
.detail-not-found{padding:90px 24px;text-align:center}.detail-not-found>p:not(.detail-eyebrow){color:var(--muted)}
@media(max-width:760px){.detail-breadcrumb{padding:18px 18px;font-size:10px}.detail-hero{grid-template-columns:1fr;gap:30px;padding:10px 18px 55px}.detail-visual,.detail-visual img{min-height:420px}.detail-copy h1{font-size:43px}.detail-more{padding:56px 20px}.detail-image-label{left:12px;bottom:12px;font-size:8px}}
</style>
