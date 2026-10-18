<script setup>
import CollectionDetail from '~/components/CollectionDetail.vue'
const styles = [
 {name:'Traditionnel',kicker:'Un moment précieux',ornament:'✧',sample:'Dans le respect de nos traditions',date:'Une date à partager',description:'Des détails qui font écho à vos habitudes familiales et au sens de l’événement.'},
 {name:'Raffiné & festif',kicker:'Réunis pour célébrer',ornament:'✦',sample:'Un jour qui nous rassemble',date:'Date • Lieu • Cérémonie',description:'Une palette élégante et quelques accents dorés pour une célébration soignée.'},
 {name:'Contemporain',kicker:'Une histoire commune',ornament:'❋',sample:'Un instant qui compte',date:'Avec joie et gratitude',description:'Une composition actuelle et épurée qui laisse la place à votre histoire.'}
]
const details = ['Le nom ou la nature de la cérémonie','La date, les horaires et le lieu','Une formule ou un texte qui vous tient à cœur','Les informations pratiques utiles aux invités']
</script>
<template><CollectionDetail occasion="Cérémonies et traditions" eyebrow="DES MOMENTS QUI NOUS UNISSENT" title="Honorer vos traditions," highlight="célébrer vos liens." intro="Une cérémonie familiale, une fête traditionnelle ou un moment symbolique : des invitations imaginées avec délicatesse, dans le respect de votre histoire et de vos souhaits." image="/images/ceremonies-traditions.jpg" image-alt="Inspiration d’invitation élégante pour une cérémonie familiale" caption="Une invitation pensée avec soin pour votre occasion." story-title="Une place pour chaque histoire." story="Chaque famille et chaque tradition a ses propres repères. L’invitation se construit autour de votre occasion, de vos mots et de l’atmosphère que vous souhaitez partager, sans imposer un style unique." :styles="styles" :details="details" mockup-title="Un moment précieux" mockup-subtitle="Une célébration qui nous rassemble." /></template>
