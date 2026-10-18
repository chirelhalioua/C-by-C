<script setup>
import { computed, ref } from 'vue'

const recherche = ref('')
const evenement = ref('Tous')
const style = ref('Tous')
const couleur = ref('Toutes')
const tri = ref('popularite')

const modeles = [
  { id: 1, nom: 'Élégance florale', evenement: 'Mariage', style: 'Floral', couleur: 'Lil as', image: '/images/mariages.jpg', description: 'Une composition florale délicate et intemporelle.', popularite: 1 },
  { id: 2, nom: 'Lilas moderne', evenement: 'Mariage', style: 'Moderne', couleur: 'Lilas', image: '/images/invitation-hero.jpg', description: 'Des lignes épurées et une touche de douceur.', popularite: 2 },
  { id: 3, nom: 'Jardin romantique', evenement: 'Naissance', style: 'Floral', couleur: 'Crème', image: '/images/naissances-baptemes.jpg', description: 'Une annonce tendre aux détails fleuris.', popularite: 3 },
  { id: 4, nom: 'Champêtre chic', evenement: 'Anniversaire', style: 'Champêtre', couleur: 'Crème', image: '/images/anniversaires.jpg', description: 'Un esprit naturel pour une belle célébration.', popularite: 4 },
  { id: 5, nom: 'Douce célébration', evenement: 'Cérémonie', style: 'Minimaliste', couleur: 'Lilas', image: '/images/ceremonies-traditions.jpg', description: 'Une invitation élégante, simple et lumineuse.', popularite: 5 },
  { id: 6, nom: 'Fleurs de coton', evenement: 'Naissance', style: 'Minimaliste', couleur: 'Crème', image: '/images/naissances-baptemes.jpg', description: 'Une mise en page légère pour les premiers instants.', popularite: 6 },
]

const modelesFiltres = computed(() => {
  const terme = recherche.value.trim().toLocaleLowerCase('fr')
  const resultat = modeles.filter((modele) => {
    const correspondRecherche = !terme || (modele.nom + ' ' + modele.description + ' ' + modele.evenement + ' ' + modele.style).toLocaleLowerCase('fr').includes(terme)
    const correspondEvenement = evenement.value === 'Tous' || modele.evenement === evenement.value
    const correspondStyle = style.value === 'Tous' || modele.style === style.value
    const correspondCouleur = couleur.value === 'Toutes' || modele.couleur === couleur.value
    return correspondRecherche && correspondEvenement && correspondStyle && correspondCouleur
  })
  if (tri.value === 'nom') return resultat.sort((a, b) => a.nom.localeCompare(b.nom, 'fr'))
  if (tri.value === 'recent') return resultat.sort((a, b) => b.id - a.id)
  return resultat.sort((a, b) => a.popularite - b.popularite)
})

function reinitialiserFiltres() {
  recherche.value = ''
  evenement.value = 'Tous'
  style.value = 'Tous'
  couleur.value = 'Toutes'
  tri.value = 'popularite'
}
</script>

<template>
  <main class="modeles-page">
    <section class="modeles-hero">
      <p class="modeles-eyebrow">C BY C · INVITATIONS DIGITALES</p>
      <h1>Le modèle qui raconte <em>votre histoire.</em></h1>
      <p>Parcourez les créations, filtrez selon votre événement et trouvez l’univers qui vous ressemble.</p>
      <a class="modeles-hero-link" href="#catalogue">Explorer les modèles <span>↓</span></a>
    </section>

    <section id="catalogue" class="modeles-catalogue">
      <div class="modeles-heading">
        <div>
          <p class="modeles-eyebrow">LA COLLECTION</p>
          <h2>Nos modèles</h2>
          <p class="modeles-count">{{ modelesFiltres.length }} modèle{{ modelesFiltres.length > 1 ? 's' : '' }} à découvrir</p>
        </div>
        <label class="modeles-sort">Trier par
          <select v-model="tri" aria-label="Trier les modèles">
            <option value="popularite">Sélection C by C</option>
            <option value="recent">Ajouts récents</option>
            <option value="nom">Nom A à Z</option>
          </select>
        </label>
      </div>

      <div class="modeles-layout">
        <aside class="modeles-filters" aria-label="Filtres du catalogue">
          <div class="modeles-filter-title"><h3>Affiner la recherche</h3><button type="button" @click="reinitialiserFiltres">Tout effacer</button></div>
          <label class="modeles-search">Rechercher
            <input v-model="recherche" type="search" placeholder="Ex. floral, mariage…" />
          </label>
          <label>Événement
            <select v-model="evenement">
              <option>Tous</option><option>Mariage</option><option>Naissance</option><option>Anniversaire</option><option>Cérémonie</option>
            </select>
          </label>
          <label>Style
            <select v-model="style">
              <option>Tous</option><option>Floral</option><option>Moderne</option><option>Champêtre</option><option>Minimaliste</option>
            </select>
          </label>
          <label>Couleur dominante
            <select v-model="couleur">
              <option>Toutes</option><option>Lilas</option><option>Crème</option>
            </select>
          </label>
          <p class="modeles-filter-note">Les filtres se mettent à jour automatiquement.</p>
        </aside>

        <div class="modeles-grid" aria-live="polite">
          <article v-for="modele in modelesFiltres" :key="modele.id" class="modele-card">
            <NuxtLink :to="{ path: '/contact', query: { prestation: 'Personnalisation de modèle', modele: modele.nom } }" class="modele-image-link" :aria-label="'Personnaliser le modèle ' + modele.nom">
              <img :src="modele.image" :alt="'Inspiration de faire-part : ' + modele.nom" loading="lazy" />
              <span class="modele-badge">{{ modele.evenement }}</span>
              <span class="modele-heart" aria-hidden="true">♡</span>
            </NuxtLink>
            <div class="modele-card-copy">
              <div class="modele-card-meta"><span>{{ modele.style }}</span><span>{{ modele.couleur }}</span></div>
              <h3>{{ modele.nom }}</h3>
              <p>{{ modele.description }}</p>
              <NuxtLink :to="{ path: '/contact', query: { prestation: 'Personnalisation de modèle', modele: modele.nom } }" class="modele-card-link">Personnaliser ce modèle <span>↗</span></NuxtLink>
            </div>
          </article>
          <div v-if="modelesFiltres.length === 0" class="modeles-empty">
            <span>✳</span><h3>Aucun modèle pour cette recherche</h3><p>Essayez d’autres filtres pour découvrir nos inspirations.</p><button type="button" @click="reinitialiserFiltres">Réinitialiser les filtres</button>
          </div>
        </div>
      </div>
    </section>
    <section class="modeles-bottom-cta">
      <p class="modeles-eyebrow">UNE ENVIE PARTICULIÈRE ?</p><h2>Imaginons une invitation <em>à votre image.</em></h2>
      <NuxtLink to="/contact" class="modeles-cta-button">Parler de mon projet <span>↗</span></NuxtLink>
    </section>
  </main>
</template>

<style scoped>
.modeles-page{--violet:#6330a5;--violet-dark:#291746;--lilac:#f1e8ff;--line:#e6dcf5;--ink:#291746;background:#fcfaff;color:var(--ink)}
.modeles-hero{padding:clamp(52px,8vw,112px) 24px 70px;text-align:center;background:radial-gradient(ellipse at 12% 20%,#f4eaff 0,transparent 34%),radial-gradient(ellipse at 90% 15%,#faeaf2 0,transparent 30%),#fcfaff}
.modeles-eyebrow{margin:0 0 14px;color:var(--violet);font-size:10px;font-weight:800;letter-spacing:2px}
.modeles-hero h1,.modeles-heading h2,.modeles-bottom-cta h2{margin:0;font-family:Georgia,serif;font-size:clamp(34px,5vw,64px);font-weight:500;letter-spacing:-1.8px;line-height:1.08}
.modeles-hero h1 em,.modeles-bottom-cta h2 em{color:var(--violet);font-weight:400}
.modeles-hero>p:not(.modeles-eyebrow){max-width:580px;margin:20px auto;color:#716783;font-size:15px}
.modeles-hero-link{display:inline-flex;gap:18px;align-items:center;margin-top:12px;padding:13px 22px;border-radius:999px;background:var(--violet);color:white;font-size:12px;font-weight:700}
.modeles-catalogue{max-width:1320px;margin:0 auto;padding:30px 28px 90px}
.modeles-heading{display:flex;align-items:end;justify-content:space-between;gap:24px;margin-bottom:28px}
.modeles-heading h2{font-size:clamp(30px,4vw,42px)}
.modeles-count{margin:8px 0 0;color:#837894;font-size:12px}
.modeles-sort,.modeles-filters label{display:grid;gap:8px;color:#655777;font-size:11px;font-weight:700}
.modeles-sort select,.modeles-filters select,.modeles-filters input{width:100%;min-height:44px;padding:0 13px;border:1px solid var(--line);border-radius:12px;background:white;color:var(--ink);font-size:12px}
.modeles-sort select{min-width:190px}
.modeles-layout{display:grid;grid-template-columns:230px minmax(0,1fr);gap:28px;align-items:start}
.modeles-filters{position:sticky;top:18px;display:grid;gap:19px;padding:22px;border:1px solid var(--line);border-radius:20px;background:white}
.modeles-filter-title{display:flex;align-items:center;justify-content:space-between;gap:10px}
.modeles-filter-title h3{margin:0;font-size:15px}
.modeles-filter-title button{padding:0;border:0;background:none;color:var(--violet);font-size:10px;cursor:pointer}
.modeles-filter-note{margin:0;color:#887c98;font-size:10px;line-height:1.5}
.modeles-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}
.modele-card{overflow:hidden;border:1px solid var(--line);border-radius:18px;background:#fff;transition:transform .2s,box-shadow .2s}
.modele-card:hover{transform:translateY(-4px);box-shadow:0 16px 38px #44236d12}
.modele-image-link{position:relative;display:block;overflow:hidden;aspect-ratio:4/4.5;background:var(--lilac)}
.modele-image-link img{width:100%;height:100%;object-fit:cover;transition:transform .35s}
.modele-card:hover .modele-image-link img{transform:scale(1.035)}
.modele-badge{position:absolute;top:12px;left:12px;padding:6px 10px;border-radius:999px;background:#fffdf9eF;color:var(--violet);font-size:9px;font-weight:700}
.modele-heart{position:absolute;right:12px;bottom:12px;display:grid;width:32px;height:32px;place-items:center;border-radius:50%;background:white;color:var(--violet);font-size:22px}
.modele-card-copy{padding:17px}
.modele-card-meta{display:flex;gap:7px;flex-wrap:wrap;color:var(--violet);font-size:9px;font-weight:700}
.modele-card-meta span{padding:4px 8px;border-radius:999px;background:var(--lilac)}
.modele-card h3{margin:10px 0 5px;font-family:Georgia,serif;font-size:21px;font-weight:500}
.modele-card p{min-height:40px;margin:0 0 16px;color:#786c88;font-size:11px;line-height:1.6}
.modele-card-link{display:flex;align-items:center;justify-content:space-between;gap:10px;padding-top:12px;border-top:1px solid #f0eaf8;color:var(--violet);font-size:10px;font-weight:800}
.modeles-empty{grid-column:1/-1;padding:55px 20px;text-align:center;border:1px dashed var(--line);border-radius:18px}
.modeles-empty>span{color:var(--violet);font-size:26px}.modeles-empty h3{margin:10px 0}.modeles-empty p{color:#786c88;font-size:12px}
.modeles-empty button{padding:11px 18px;border:0;border-radius:999px;background:var(--violet);color:white;cursor:pointer}
.modeles-bottom-cta{padding:70px 24px 80px;text-align:center;background:linear-gradient(120deg,#f4edff,#fff9fc)}
.modeles-bottom-cta h2{max-width:680px;margin:0 auto 25px;font-size:clamp(30px,4vw,48px)}
.modeles-cta-button{display:inline-flex;gap:18px;align-items:center;padding:14px 22px;border-radius:999px;background:var(--violet);color:white;font-size:12px;font-weight:700}
@media(max-width:1050px){.modeles-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.modeles-layout{grid-template-columns:205px minmax(0,1fr);gap:18px}}
@media(max-width:680px){.modeles-hero{padding:54px 20px 48px}.modeles-catalogue{padding:24px 16px 56px}.modeles-heading{align-items:start;flex-direction:column}.modeles-sort{width:100%}.modeles-sort select{min-width:0}.modeles-layout{grid-template-columns:1fr}.modeles-filters{position:static;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;padding:16px}.modeles-filter-title,.modeles-search,.modeles-filter-note{grid-column:1/-1}.modeles-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:11px}.modele-card{border-radius:13px}.modele-card-copy{padding:11px}.modele-card h3{font-size:16px}.modele-card p{font-size:10px;min-height:50px}.modele-card-link{font-size:9px}.modele-badge{top:7px;left:7px;padding:5px 7px;font-size:8px}.modele-heart{right:7px;bottom:7px;width:27px;height:27px}.modeles-bottom-cta{padding:54px 20px}}
</style>
