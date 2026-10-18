
<template>
  <main class="legal-page">
    <p class="eyebrow">INFORMATIONS CONTRACTUELLES</p>
    <h1>Conditions <em>générales</em></h1>

    <section>
      <h2>1. Identification du vendeur</h2>
      <p>À compléter avec l'identité juridique, l'adresse et les coordonnées professionnelles.</p>
    </section>

    <section>
      <h2>2. Services proposés</h2>
      <p>Décrire les invitations proposées, les options de personnalisation et les éventuelles prestations sur mesure.</p>
    </section>

    <section>
      <h2>3. Prix et paiement</h2>
      <p>Préciser les tarifs, les éventuels frais, les moyens de paiement et le moment où le paiement est exigé.</p>
    </section>

    <section>
      <h2>4. Livraison et délais</h2>
      <p>Indiquer le mode de livraison, les délais prévus et les modalités de validation de la création.</p>
    </section>

    <section>
      <h2>5. Annulation et rétractation</h2>
      <p>Préciser les règles applicables à ton activité, notamment pour les contenus numériques ou créations personnalisées, sans présumer d'une exclusion automatique du droit de rétractation.</p>
    </section>

    <section>
      <h2>6. Réclamations et litiges</h2>
      <p>Indiquer les modalités de contact, les règles applicables et les informations requises pour les consommateurs.</p>
    </section>

    <p class="notice">
      Ce modèle est à compléter et à faire vérifier selon ton activité et les règles applicables.
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
