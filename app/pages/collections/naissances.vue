<script setup>
import CollectionDetail from '~/components/CollectionDetail.vue'
const styles = [
 {name:'Tout en douceur',kicker:'Une jolie nouvelle',ornament:'♡',sample:'Bienvenue parmi nous',date:'Prénom • Date',description:'Une palette crème et poudrée pour une annonce lumineuse et apaisante.'},
 {name:'Jardin poétique',kicker:'Un petit miracle',ornament:'❀',sample:'Notre famille s’agrandit',date:'Un doux souvenir',description:'De fines illustrations florales pour une touche tendre et naturelle.'},
 {name:'Simple & intemporel',kicker:'Un nouveau chapitre',ornament:'✦',sample:'Un prénom, mille émotions',date:'À partager avec amour',description:'Une composition épurée qui met le prénom et votre message au premier plan.'}
]
const details = ['Le prénom et la date, si vous souhaitez les partager','Une photo ou une illustration','Un mot tendre destiné à vos proches','Pour un baptême : date, lieu, horaires et informations utiles']
</script>
<template><CollectionDetail occasion="Naissance et baptême" eyebrow="LES PREMIERS INSTANTS" title="Une nouvelle histoire" highlight="commence tout en douceur." intro="Annoncer une naissance, inviter aux premiers moments de partage ou célébrer un baptême : des créations pleines de tendresse pour vos nouvelles histoires." image="/images/naissances-baptemes.jpg" image-alt="Inspiration de faire-part de naissance et de baptême aux tons doux" caption="Une jolie nouvelle mérite une annonce à sa mesure." story-title="De petits détails, de grands souvenirs." story="Un prénom, une date, une photo ou quelques mots tendres : choisissez les éléments qui comptent pour vous. L’invitation peut être douce, florale ou épurée, et s’adapter à votre façon de partager cette nouvelle." :styles="styles" :details="details" mockup-title="Une belle nouvelle" mockup-subtitle="Un tout petit être, un immense bonheur." /></template>
