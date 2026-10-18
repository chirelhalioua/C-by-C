<template>
  <main class="detail-page wedding-page">
    <section class="hero">
      <NuxtLink to="/collections" class="back">← Toutes les collections</NuxtLink>
      <p class="eyebrow">CÉLÉBRER VOTRE HISTOIRE</p>
      <h1>Le début d'une belle histoire <em>à célébrer ensemble.</em></h1>
      <p class="intro">Une invitation délicate pour raconter votre histoire, réunir vos proches et annoncer le plus beau chapitre de votre vie.</p>
      <img src="/images/mariages.jpg" alt="Inspiration d’invitation de mariage élégante aux tons ivoire et champagne" />
      <p class="image-caption">Une première attention, avant le grand jour.</p>
    </section>
    <section class="intro-block">
      <p class="eyebrow">VOTRE HISTOIRE, VOTRE INVITATION</p>
      <h2>Chaque détail raconte quelque chose de vous.</h2>
      <p>La date, le lieu, quelques mots choisis… Votre invitation donne le ton de votre célébration. Nous imaginons une création digitale harmonieuse, pensée selon votre ambiance et les informations que vous souhaitez partager.</p>
    </section>
    <section class="styles">
      <p class="eyebrow">TROUVEZ VOTRE UNIVERS</p><h2>Trois inspirations pour commencer</h2>
      <div class="cards">
        <article><span>01</span><h3>Élégance intemporelle</h3><p>Typographie raffinée, mise en page épurée et détails champagne pour une atmosphère classique.</p></article>
        <article><span>02</span><h3>Romantique & floral</h3><p>Des tons poudrés et des motifs délicats pour une invitation douce et poétique.</p></article>
        <article><span>03</span><h3>Moderne & minimaliste</h3><p>Des lignes simples, de l’espace et une composition contemporaine qui laisse parler l’essentiel.</p></article>
      </div>
    </section>
    <section class="details">
      <div><p class="eyebrow">CE QUE L’ON PEUT PRÉVOIR</p><h2>Les informations qui comptent</h2></div>
      <ul><li>Les prénoms des mariés et la date</li><li>Le lieu et les horaires de la célébration</li><li>Un programme ou quelques précisions pratiques</li><li>Un message personnel adressé à vos invités</li></ul>
    </section>
    <section class="contact">
      <p class="eyebrow">LE PREMIER DÉTAIL DE VOTRE GRAND JOUR</p><h2>Parlons de votre projet.</h2>
      <p>Partagez votre date, votre ambiance et vos envies : nous pourrons étudier ensemble une invitation qui vous ressemble.</p>
      <NuxtLink to="/contact" class="button">Imaginer mon invitation ↗</NuxtLink>
      <p class="note">Les exemples présentés sont des inspirations. Les modèles et modalités de commande seront précisés au lancement.</p>
    </section>
  </main>
</template>
<style scoped>
.detail-page{color:#51463d;background:#faf7f1}.hero{padding:38px 24px 52px;background:linear-gradient(135deg,#f5eee3,#eee1ce);text-align:center}.back{display:block;width:fit-content;margin:0 auto 38px;color:#77634e;font:12px Arial,sans-serif}.eyebrow{margin:0 0 14px;color:#a48761;font:10px/1.8 Arial,sans-serif;letter-spacing:2.7px}.hero h1,.intro-block h2,.styles h2,.details h2,.contact h2{max-width:800px;margin:0 auto;font:400 clamp(31px,4.5vw,48px)/1.25 Georgia,serif}.hero h1 em{display:block;color:#a48761;font-weight:400}.intro{max-width:570px;margin:18px auto 28px;color:#81766c;font-size:15px;line-height:1.9}.hero img{width:min(100%,760px);max-height:440px;margin:auto;object-fit:cover}.image-caption,.note{color:#81766c;font-size:11px;line-height:1.8}.image-caption{margin:15px 0 0}.intro-block,.styles,.details{max-width:1050px;margin:auto;padding:68px 24px;text-align:center}.intro-block>p:last-child{max-width:700px;margin:20px auto 0;color:#81766c;font-size:14px;line-height:2}.styles{padding-top:12px}.styles h2,.details h2,.contact h2{font-size:clamp(28px,3.5vw,38px)}.cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin-top:30px;text-align:left}.cards article{padding:26px 23px;border:1px solid #e9e0d5;background:#fffdf9}.cards span{color:#a48761;font:11px Arial,sans-serif;letter-spacing:2px}.cards h3{margin:18px 0 9px;font:400 23px Georgia,serif}.cards p,.details li,.contact>p:not(.eyebrow){color:#81766c;font-size:13px;line-height:1.9}.details{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:30px;text-align:left;background:#f7f1e8;max-width:none;padding-left:max(24px,calc((100% - 1000px)/2));padding-right:max(24px,calc((100% - 1000px)/2))}.details ul{margin:0;padding-left:20px}.details li{padding:7px 0}.contact{padding:55px 24px;background:#eee4d5;text-align:center}.contact h2{margin:8px auto 14px}.contact>p:not(.eyebrow){max-width:530px;margin:0 auto}.button{display:inline-block;margin-top:22px;padding:15px 23px;background:#77634e;color:#fffdf9;font:12px Arial,sans-serif}.note{max-width:650px;margin:24px auto 0}@media(max-width:650px){.hero{padding:28px 17px 38px}.back{margin-bottom:30px}.intro-block,.styles,.details{padding:46px 18px}.cards{grid-template-columns:1fr;gap:12px}.cards article{padding:22px}.details{grid-template-columns:1fr;gap:14px}.contact{padding:42px 18px}}
</style>