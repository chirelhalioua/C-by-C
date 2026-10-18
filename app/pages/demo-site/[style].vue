<script setup>
const route = useRoute()
const demos = {
  floral: {
    theme:'floral', style:'Romantique & floral', occasion:'NOTRE MARIAGE',
    noms:'Camille & Gabriel', date:'SAMEDI 18 SEPTEMBRE 2027', lieu:'Domaine des Oliviers · Provence',
    intro:'Deux chemins, une belle histoire… et le bonheur de la célébrer avec vous.',
    histoire:'Nous avons hâte de partager cette journée pleine d’amour, de rires et de souvenirs avec les personnes qui comptent le plus pour nous.',
    programme:[['15:00','Cérémonie'],['16:30','Cocktail dans les jardins'],['19:00','Dîner & soirée']],
    note:'Votre présence sera notre plus beau cadeau.'
  },
  epure: {
    theme:'epure', style:'Minimaliste & élégant', occasion:'SAVE THE DATE',
    noms:'Sarah & Thomas', date:'12 JUIN 2027', lieu:'Maison des Vignes · Bordeaux',
    intro:'Un jour important. Des personnes chères. Un souvenir à créer ensemble.',
    histoire:'Nous serions heureux de vous accueillir pour célébrer notre union dans une atmosphère simple et chaleureuse.',
    programme:[['16:00','Cérémonie'],['17:30','Réception'],['20:00','Dîner']],
    note:'Merci de réserver cette date.'
  },
  festif: {
    theme:'festif', style:'Chaleureux & festif', occasion:'ON FAIT LA FÊTE !',
    noms:'Les 30 ans de Léa', date:'SAMEDI 24 JUILLET · 18 H 30', lieu:'La Guinguette du Parc · Lyon',
    intro:'30 ans, ça se fête — et surtout, ça se fête ensemble !',
    histoire:'Prépare ta bonne humeur, ton plus beau sourire et viens partager une soirée de musique, de gourmandises et de belles retrouvailles.',
    programme:[['18:30','Accueil & apéritif'],['20:00','Buffet festif'],['21:30','Musique & danse']],
    note:'Tenue décontractée, énergie festive recommandée !'
  }
}
const demo = computed(() => demos[route.params.style] || demos.floral)
</script>
<template>
<main class="demo-page" :class="'theme-'+demo.theme">
<div class="demo-ribbon"><span>APERÇU INTERACTIF · EXEMPLE FICTIF</span><NuxtLink to="/modeles-sites">← Retour aux modèles</NuxtLink></div>
<header class="demo-nav"><a href="#accueil" class="demo-brand">C<span>♡</span>C</a><nav><a href="#histoire">Notre histoire</a><a href="#programme">Le programme</a><a href="#infos">Infos pratiques</a></nav><a class="nav-cta" href="#rsvp">Répondre</a></header>
<section id="accueil" class="demo-hero"><div class="hero-content"><p class="eyebrow">{{demo.occasion}}</p><div class="flourish">✧</div><h1>{{demo.noms}}</h1><p class="hero-date">{{demo.date}}</p><p class="hero-intro">{{demo.intro}}</p><a href="#histoire" class="hero-button">Découvrir notre événement ↓</a></div><div class="hero-side" aria-hidden="true"><div class="decor-circle"></div><span class="side-caption">UN MOMENT À PARTAGER</span></div></section>
<section id="histoire" class="story section-block"><p class="eyebrow">QUELQUES MOTS</p><h2>Nous avons quelque chose<br/>à célébrer avec vous.</h2><p class="story-copy">{{demo.histoire}}</p><div class="small-ornament">— ✧ —</div><p class="story-note">{{demo.note}}</p></section>
<section id="programme" class="schedule section-block"><p class="eyebrow">À NOTER DANS VOTRE AGENDA</p><h2>Le programme</h2><div class="schedule-list"><div v-for="item in demo.programme" :key="item[0]" class="schedule-item"><span>{{item[0]}}</span><strong>{{item[1]}}</strong></div></div></section>
<section id="infos" class="location section-block"><p class="eyebrow">ON SE RETROUVE ICI</p><h2>Le lieu de la fête</h2><p class="location-name">{{demo.lieu}}</p><p>Les indications d’accès et les informations pratiques seront ajoutées ici pour vos invités.</p><a href="#rsvp" class="hero-button">Confirmer ma présence ↓</a></section>
<section id="rsvp" class="rsvp section-block"><p class="eyebrow">ET VOUS ?</p><h2>Vous serez des nôtres ?</h2><p>Dans un projet finalisé, cette partie peut accueillir un formulaire de réponse des invités, selon les fonctionnalités retenues.</p><NuxtLink :to="{path:'/contact',query:{prestation:'Site complet d’invitation',modele:demo.style,occasion:demo.occasion}}" class="rsvp-button">Personnaliser ce modèle ↗</NuxtLink></section>
<footer class="demo-footer">UNE CÉLÉBRATION À PARTAGER <span>✧</span></footer>
</main>
</template>
<style scoped>
.demo-page{--accent:#a36d78;--pale:#f5e8e8;--ink:#46363a;--paper:#fffaf8;min-height:100vh;background:var(--paper);color:var(--ink);font-family:Arial,sans-serif}.theme-epure{--accent:#8b795e;--pale:#efebe3;--ink:#292823;--paper:#fcfbf8}.theme-festif{--accent:#a65d43;--pale:#f4e2d2;--ink:#3c3930;--paper:#fffaf2}.demo-ribbon{display:flex;justify-content:space-between;gap:12px;padding:10px 5vw;background:#51463d;color:#fffaf3;font:9px Arial,sans-serif;letter-spacing:1px}.demo-ribbon a{color:inherit;text-decoration:none;letter-spacing:0}.demo-nav{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:20px 6vw;border-bottom:1px solid color-mix(in srgb,var(--accent) 25%,transparent)}.demo-brand{font:26px Georgia,serif;color:var(--ink);text-decoration:none}.demo-brand span{color:var(--accent);font-size:17px;margin:0 3px}.demo-nav nav{display:flex;gap:25px}.demo-nav nav a{color:var(--ink);font-size:11px;text-decoration:none}.nav-cta,.hero-button,.rsvp-button{display:inline-block;padding:12px 17px;border:1px solid var(--accent);color:var(--accent);font-size:10px;text-decoration:none}.demo-hero{display:grid;grid-template-columns:1.15fr .85fr;min-height:470px;background:var(--pale)}.hero-content{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:65px 8vw}.eyebrow{color:var(--accent);font:9px Arial,sans-serif;letter-spacing:2px}.flourish{margin-top:16px;color:var(--accent);font:34px Georgia,serif}.demo-hero h1{margin:10px 0;color:var(--ink);font:400 clamp(43px,6vw,76px)/1.02 Georgia,serif}.hero-date{color:var(--accent);font-size:10px;letter-spacing:1.6px}.hero-intro{max-width:410px;margin:12px 0 25px;font:15px/1.9 Georgia,serif}.hero-side{position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;background:linear-gradient(145deg,color-mix(in srgb,var(--accent) 18%,var(--pale)),var(--pale))}.decor-circle{width:min(28vw,300px);aspect-ratio:3/4;border:1px solid color-mix(in srgb,var(--accent) 55%,transparent);border-radius:48% 48% 3px 3px;position:relative}.decor-circle:before,.decor-circle:after{content:'✿';position:absolute;color:var(--accent);font:65px Georgia,serif}.decor-circle:before{top:20%;left:18%;transform:rotate(-20deg)}.decor-circle:after{right:13%;bottom:22%;font-size:42px}.side-caption{position:absolute;bottom:30px;color:var(--accent);font-size:8px;letter-spacing:2px}.section-block{padding:76px 22px;text-align:center}.section-block h2{margin:12px 0 22px;font:400 clamp(30px,4vw,46px)/1.15 Georgia,serif}.story{max-width:850px;margin:auto}.story-copy{max-width:620px;margin:0 auto;color:#77706a;font:15px/2 Georgia,serif}.small-ornament{margin:24px;color:var(--accent)}.story-note{color:var(--accent);font:italic 15px Georgia,serif}.schedule{background:var(--pale)}.schedule-list{max-width:520px;margin:30px auto 0}.schedule-item{display:grid;grid-template-columns:100px 1fr;gap:20px;padding:17px 8px;border-bottom:1px solid color-mix(in srgb,var(--accent) 30%,transparent);text-align:left}.schedule-item span{color:var(--accent);font-size:11px}.schedule-item strong{font:400 17px Georgia,serif}.location{max-width:760px;margin:auto}.location-name{color:var(--accent);font:20px Georgia,serif}.location>p:not(.eyebrow):not(.location-name){color:#77706a;font-size:13px;line-height:1.9}.location .hero-button{margin-top:15px}.rsvp{background:var(--pale)}.rsvp>p:not(.eyebrow){max-width:600px;margin:0 auto 25px;color:#77706a;font-size:13px;line-height:1.9}.rsvp-button{background:var(--accent);color:white}.demo-footer{padding:24px;text-align:center;color:var(--accent);font-size:9px;letter-spacing:2px;border-top:1px solid var(--pale)}.demo-footer span{margin-left:12px}@media(max-width:650px){.demo-ribbon{font-size:8px}.demo-nav{flex-wrap:wrap;padding:15px 20px}.demo-nav nav{order:3;width:100%;justify-content:center;gap:14px;flex-wrap:wrap}.demo-nav nav a{font-size:10px}.demo-hero{grid-template-columns:1fr}.hero-content{padding:48px 26px}.hero-side{min-height:220px}.decor-circle{width:130px;height:165px}.section-block{padding:54px 22px}.demo-hero h1{font-size:48px}.schedule-item{grid-template-columns:75px 1fr}.demo-ribbon{align-items:flex-start}.demo-ribbon span{max-width:55%}}
</style>