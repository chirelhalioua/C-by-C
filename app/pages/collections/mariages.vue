<script setup>
import CollectionDetail from '~/components/CollectionDetail.vue'
const styles = [
 {name:'Élégance intemporelle',kicker:'Le grand jour',ornament:'✳',sample:'Une promesse, une histoire',date:'Notre date • Notre lieu',description:'Une composition épurée, des détails champagne et une typographie classique.'},
 {name:'Romantique & floral',kicker:'Avec amour',ornament:'❀',sample:'Le bonheur se partage',date:'Une journée à célébrer',description:'Des teintes poudrées et des motifs floraux pour une ambiance délicate.'},
 {name:'Moderne & minimaliste',kicker:'Nous nous marions',ornament:'✦',sample:'Et si on écrivait la suite ?',date:'Date • Lieu • Réception',description:'Des lignes contemporaines et une mise en page qui laisse respirer l’essentiel.'}
]
const details = ['Les prénoms des mariés et la date','Les lieux et horaires de la cérémonie et de la réception','Le programme de la journée et les informations pratiques','Un message personnel, une demande de réponse ou une indication de tenue']
</script>
<template><CollectionDetail occasion="Mariage" eyebrow="POUR LE GRAND OUI" title="Le début d’une belle histoire" highlight="à célébrer ensemble." intro="Une invitation délicate pour raconter votre histoire, réunir vos proches et annoncer le plus beau chapitre de votre vie." image="/images/mariages.jpg" image-alt="Inspiration d’invitation de mariage aux tons ivoire et champagne" caption="Une première attention, avant le grand jour." story-title="Votre histoire mérite une invitation qui vous ressemble." story="Du premier regard aux détails du jour J, votre invitation donne le ton de la célébration. Nous imaginons une direction visuelle cohérente avec votre ambiance, vos mots et les informations que vous souhaitez partager." :styles="styles" :details="details" mockup-title="Le grand jour" mockup-subtitle="Deux histoires, un même chemin." /></template>
