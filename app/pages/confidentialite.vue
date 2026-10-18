
<template>
  <main class="legal-page">
    <p class="eyebrow">INFORMATIONS ET TRANSPARENCE</p>
    <h1>Politique de <em>confidentialité</em></h1>

    <section>
      <h2>1. Responsable du traitement</h2>
      <p>À compléter : nom ou raison sociale, coordonnées et adresse de contact.</p>
    </section>

    <section>
      <h2>2. Données collectées</h2>
      <p>Préciser les données réellement recueillies : formulaire de contact, commandes, compte client ou données techniques.</p>
    </section>

    <section>
      <h2>3. Utilisation des données</h2>
      <p>Décrire les finalités réelles : répondre aux demandes, gérer les commandes et assurer le fonctionnement du service.</p>
    </section>

    <section>
      <h2>4. Conservation et destinataires</h2>
      <p>Indiquer les durées de conservation et les prestataires qui ont effectivement accès aux données.</p>
    </section>

    <section>
      <h2>5. Vos droits</h2>
      <p>Expliquer comment exercer les droits applicables sur les données personnelles et comment contacter le responsable du traitement.</p>
    </section>

    <p class="notice">
      À compléter selon le fonctionnement réel du site avant publication.
    </p>
  </main>
</template>

<style scoped>
.legal-page {
  max-width: 800px;
  margin: auto;
  padding: 72px 24px;
  color: #51463d;
}
.eyebrow {
  color: #a48761;
  font-size: 11px;
  letter-spacing: 2px;
}
h1 { font: 400 clamp(34px, 5vw, 52px)/1.2 Georgia, serif; }
h1 em { color: #a48761; }
section { margin: 32px 0; }
h2 { font: 400 23px Georgia, serif; }
section p { color: #74695f; line-height: 1.9; }
.notice { padding: 16px; background: #f5f0e8; font-size: 13px; }
@media (max-width: 600px) {
  .legal-page { padding: 48px 18px; }
}
</style>
