<script setup>
import CollectionDetail from '~/components/CollectionDetail.vue'
const styles = [
 {name:'Chic & élégant',kicker:'À votre honneur',ornament:'✦',sample:'Une soirée à célébrer',date:'Date • Heure • Lieu',description:'Des détails dorés et une mise en page raffinée pour une grande occasion.'},
 {name:'Festif & pétillant',kicker:'On fait la fête',ornament:'✳',sample:'Une bougie de plus !',date:'Prêts à nous retrouver ?',description:'Une invitation joyeuse qui annonce une fête conviviale et pleine d’énergie.'},
 {name:'Familial & chaleureux',kicker:'Tous réunis',ornament:'♡',sample:'Le bonheur d’être ensemble',date:'Un moment à partager',description:'Des tons doux et un esprit accueillant pour réunir ceux qui comptent.'}
]
const details = ['Le prénom ou l’occasion célébrée','La date, l’heure et l’adresse','Le thème, le dress code ou les consignes utiles, si besoin','Un message personnel et une demande de réponse']
</script>
<template><CollectionDetail occasion="Anniversaire" eyebrow="LES JOLIS RENDEZ-VOUS" title="Chaque année mérite" highlight="son moment à part." intro="Un anniversaire important, une fête surprise ou simplement l’envie de réunir vos proches : annoncez la couleur avec une invitation qui donne envie de se retrouver." image="/images/anniversaires.jpg" image-alt="Inspiration d’invitation raffinée pour une fête d’anniversaire" caption="Le plaisir de se retrouver commence par l’invitation." story-title="Votre fête a son propre caractère." story="Une soirée élégante, un anniversaire en famille ou une fête pleine de couleurs : l’invitation peut donner le ton dès le premier regard. Nous vous aidons à réunir les informations essentielles dans une composition à votre image." :styles="styles" :details="details" mockup-title="À votre santé !" mockup-subtitle="Une belle occasion de se retrouver." /></template>
