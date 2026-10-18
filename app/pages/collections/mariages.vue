<template>
  <main class="detail-page">
    <section class="hero">
      <a href="/collections" class="back">← Toutes les collections</a>
      <p class="eyebrow">POUR LES GRANDS OUI</p>
      <h1>Le début d'une belle histoire <em>à célébrer ensemble.</em></h1>
      <p class="intro">Une invitation délicate pour célébrer votre histoire et partager la magie de votre grand jour.</p>
      <img src="/images/mariages.jpg" alt="Invitation de mariage élégante aux tons ivoire et champagne" />
    </section>
    <section class="styles">
      <p class="eyebrow">IMAGINONS VOTRE INVITATION</p>
      <h2>Une création à votre image</h2>
      <div class="cards">
        <article><span>✳</span><h3>Élégance intemporelle</h3><p>Des lignes raffinées et des détails délicats pour une célébration chic.</p></article>
        <article><span>✳</span><h3>Romantique</h3><p>Des tons doux et des motifs délicats pour raconter votre histoire.</p></article>
        <article><span>✳</span><h3>Moderne & épuré</h3><p>Une invitation sobre et lumineuse, pensée jusque dans les détails.</p></article>
      </div>
      <p class="note">Ces inspirations ne représentent pas encore un catalogue de modèles disponibles à la commande.</p>
    </section>
    <section class="contact">
      <p class="eyebrow">IMAGINONS ENSEMBLE</p><h2>Le premier détail de votre grand jour.</h2>
      <p>Parlons de vos envies et créons une invitation qui vous ressemble.</p>
      <a href="/contact" class="button">Parler de mon projet ↗</a>
    </section>
  </main>
</template>
<style scoped>
.detail-page{color:#51463d;background:#faf7f1}.hero{padding:45px 24px 65px;background:#f1e9dc;text-align:center}.back{display:block;width:fit-content;margin:0 auto 42px;color:#77634e;font-size:12px;text-decoration:none}.eyebrow{color:#a48761;font-size:10px;letter-spacing:2.7px;line-height:1.8}.hero h1,.styles h2,.contact h2{font-family:Georgia,'Times New Roman',serif;font-size:clamp(30px,4.5vw,46px);font-weight:400;line-height:1.3}.hero h1 em{display:block;color:#a48761;font-weight:400}.intro{max-width:510px;margin:18px auto 30px;color:#81766c;font-size:14px;line-height:1.9}.hero img{display:block;width:min(100%,650px);max-height:420px;margin:0 auto;object-fit:cover}.styles{max-width:1050px;margin:0 auto;padding:70px 24px 80px;text-align:center}.styles h2{margin:12px 0 35px;font-size:clamp(27px,3.5vw,36px)}.cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px;text-align:left}.cards article{padding:27px 23px;border:1px solid #e9e0d5;background:#fcfaf6}.cards span{color:#a48761;font-size:22px}.cards h3{margin:18px 0 10px;font-family:Georgia,'Times New Roman',serif;font-size:22px;font-weight:400}.cards p,.note,.contact>p:not(.eyebrow){color:#81766c;font-size:13px;line-height:1.9}.note{margin-top:25px;font-size:11px}.contact{padding:55px 24px;background:#eee4d5;text-align:center}.contact h2{margin:14px 0;font-size:clamp(27px,3.5vw,36px)}.button{display:inline-block;margin-top:22px;padding:15px 22px;background:#77634e;color:#fffdf9;font-size:12px;text-decoration:none}@media(max-width:600px){.hero{padding:32px 18px 42px}.styles{padding:48px 18px}.cards{grid-template-columns:1fr;gap:14px}.cards article{padding:22px}.contact{padding:42px 18px}}
</style>
