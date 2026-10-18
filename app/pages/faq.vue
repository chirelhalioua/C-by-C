<script setup>
import { ref } from 'vue'

const questionOuverte = ref(null)

const categories = [
  {
    titre: 'Commandes et créations',
    questions: [
      {
        question: 'Comment commander une invitation ?',
        reponse:
          'Parcourez nos collections, choisissez le modèle qui vous plaît, puis suivez les indications de la page correspondante pour préparer votre demande.'
      },
      {
        question: 'Puis-je personnaliser mon invitation ?',
        reponse:
          'Les possibilités de personnalisation dépendent du modèle choisi. Contactez-nous pour nous préciser vos envies et vérifier ce qui est possible.'
      },
      {
        question: 'Puis-je demander une création sur mesure ?',
        reponse:
          'Vous avez une idée particulière ? Décrivez-nous votre projet via la page Contact. Nous pourrons étudier votre demande et vous répondre.'
      }
    ]
  },
  {
    titre: 'Délais et réception',
    questions: [
      {
        question: 'Quels sont les délais de création ?',
        reponse:
          'Les délais peuvent varier selon le modèle et le niveau de personnalisation. Nous vous confirmerons le délai estimé avant de valider votre projet.'
      },
      {
        question: 'Comment vais-je recevoir ma création ?',
        reponse:
          'Le mode de réception dépend du produit choisi. Les modalités vous seront précisées au moment de votre commande.'
      }
    ]
  },
  {
    titre: 'Paiement et accompagnement',
    questions: [
      {
        question: 'Comment se déroule le paiement ?',
        reponse:
          'Les modalités de paiement sont précisées lors de la commande. Si vous avez une question avant de vous engager, contactez-nous.'
      },
      {
        question: 'Puis-je modifier ma demande après validation ?',
        reponse:
          'Contactez-nous dès que possible en indiquant votre numéro de commande ou les informations permettant de retrouver votre demande. Les modifications possibles dépendent de l’avancement de la création.'
      },
      {
        question: 'Je n’ai pas trouvé ma réponse. Que faire ?',
        reponse:
          'Nous sommes là pour vous aider. Rendez-vous sur la page Contact et expliquez-nous votre question ; nous vous répondrons dès que possible.'
      }
    ]
  }
]

function basculerQuestion(categorieIndex, questionIndex) {
  const identifiant = `${categorieIndex}-${questionIndex}`
  questionOuverte.value =
    questionOuverte.value === identifiant ? null : identifiant
}
</script>

<template>
  <main class="faq-page">
    <section class="faq-hero">
      <p class="faq-eyebrow">UNE QUESTION ?</p>
      <h1>Les réponses à <em>vos questions</em></h1>
      <p class="faq-intro">
        Retrouvez ici les informations essentielles pour préparer votre
        célébration en toute sérénité.
      </p>
      <a href="#faq-questions" class="faq-scroll">
        Explorer les questions <span aria-hidden="true">↓</span>
      </a>
    </section>

    <section id="faq-questions" class="faq-content">
      <div class="faq-heading">
        <span class="faq-small-label">BESOIN D’INFORMATIONS</span>
        <h2>Comment pouvons-nous vous aider ?</h2>
      </div>

      <div
        v-for="(categorie, categorieIndex) in categories"
        :key="categorie.titre"
        class="faq-category"
      >
        <h3>{{ categorie.titre }}</h3>

        <div class="faq-list">
          <article
            v-for="(item, questionIndex) in categorie.questions"
            :key="item.question"
            class="faq-item"
            :class="{
              'is-open':
                questionOuverte === `${categorieIndex}-${questionIndex}`
            }"
          >
            <button
              class="faq-question"
              type="button"
              :aria-expanded="
                questionOuverte === `${categorieIndex}-${questionIndex}`
              "
              @click="basculerQuestion(categorieIndex, questionIndex)"
            >
              <span>{{ item.question }}</span>
              <span class="faq-icon" aria-hidden="true">
                {{
                  questionOuverte === `${categorieIndex}-${questionIndex}`
                    ? '−'
                    : '+'
                }}
              </span>
            </button>

            <div
              v-if="
                questionOuverte === `${categorieIndex}-${questionIndex}`
              "
              class="faq-answer"
            >
              <p>{{ item.reponse }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="faq-contact">
      <span class="faq-contact-decoration" aria-hidden="true">✳</span>
      <p class="faq-eyebrow">NOUS SOMMES À VOTRE ÉCOUTE</p>
      <h2>Votre projet est unique.<br /><em>Vos questions aussi.</em></h2>
      <p>
        Vous souhaitez en savoir plus ou parler de votre projet ?
        Écrivez-nous, nous serons ravis de vous accompagner.
      </p>
      <NuxtLink to="/contact" class="faq-contact-button">
        Nous contacter <span aria-hidden="true">↗</span>
      </NuxtLink>
    </section>
  </main>
</template>

<style scoped>
.faq-page {
  background: #faf7f1;
  color: #39352e;
  padding-bottom: 70px;
}

.faq-hero {
  text-align: center;
  padding: 85px 24px 75px;
  background: #f1e9dc;
}

.faq-eyebrow,
.faq-small-label {
  font-size: 10px;
  letter-spacing: 3px;
  font-weight: 600;
  color: #9a8057;
}

.faq-hero h1 {
  margin: 22px auto 18px;
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 400;
  font-size: clamp(34px, 5vw, 56px);
  line-height: 1.2;
}

.faq-hero h1 em,
.faq-contact h2 em {
  color: #a68a5d;
  font-weight: 400;
}

.faq-intro {
  max-width: 510px;
  margin: 0 auto;
  color: #71695e;
  font-size: 15px;
  line-height: 1.9;
}

.faq-scroll {
  display: inline-block;
  margin-top: 28px;
  color: #66553c;
  font-size: 12px;
  text-decoration: none;
  border-bottom: 1px solid #c9b795;
  padding-bottom: 7px;
}

.faq-scroll span {
  margin-left: 8px;
}

.faq-content {
  width: min(760px, calc(100% - 40px));
  margin: 0 auto;
  padding: 75px 0 80px;
  scroll-margin-top: 30px;
}

.faq-heading {
  text-align: center;
  margin-bottom: 55px;
}

.faq-small-label {
  font-size: 9px;
}

.faq-heading h2 {
  margin: 15px 0 0;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(25px, 3.5vw, 34px);
  font-weight: 400;
  line-height: 1.35;
}

.faq-category {
  margin-top: 38px;
}

.faq-category h3 {
  margin: 0 0 14px;
  color: #94784e;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 20px;
  font-weight: 400;
}

.faq-list {
  border-top: 1px solid #e4dbcd;
}

.faq-item {
  border-bottom: 1px solid #e4dbcd;
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 21px 2px;
  border: 0;
  background: transparent;
  color: #39352e;
  text-align: left;
  font: inherit;
  font-size: 14px;
  line-height: 1.6;
  cursor: pointer;
}

.faq-question:hover {
  color: #96784b;
}

.faq-icon {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 27px;
  height: 27px;
  border: 1px solid #d8c8ad;
  border-radius: 50%;
  color: #96784b;
  font-size: 18px;
  transition: background 0.2s ease;
}

.faq-item.is-open .faq-icon {
  background: #eee3d1;
}

.faq-answer {
  padding: 0 38px 22px 2px;
}

.faq-answer p {
  margin: 0;
  color: #756d62;
  font-size: 13px;
  line-height: 1.9;
}

.faq-contact {
  position: relative;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 65px 24px;
  background: #eee4d5;
  text-align: center;
  border-radius: 0;
}

.faq-contact-decoration {
  display: block;
  margin-bottom: 16px;
  color: #b69b70;
  font-size: 27px;
}

.faq-contact h2 {
  margin: 18px 0;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(28px, 4vw, 40px);
  line-height: 1.35;
  font-weight: 400;
}

.faq-contact > p:not(.faq-eyebrow) {
  max-width: 470px;
  margin: 0 auto;
  color: #71695e;
  font-size: 13px;
  line-height: 1.9;
}

.faq-contact-button {
  display: inline-flex;
  align-items: center;
  gap: 24px;
  margin-top: 27px;
  padding: 15px 23px;
  background: #766044;
  color: #fffdf8;
  text-decoration: none;
  font-size: 12px;
  transition: background 0.2s ease;
}

.faq-contact-button:hover {
  background: #5d4934;
}

@media (max-width: 600px) {
  .faq-page {
    padding-bottom: 40px;
  }

  .faq-hero {
    padding: 60px 22px 52px;
  }

  .faq-intro {
    font-size: 14px;
  }

  .faq-content {
    width: calc(100% - 36px);
    padding: 55px 0;
  }

  .faq-heading {
    margin-bottom: 38px;
  }

  .faq-category {
    margin-top: 30px;
  }

  .faq-category h3 {
    font-size: 18px;
  }

  .faq-question {
    padding: 18px 0;
    font-size: 13px;
  }

  .faq-answer {
    padding-right: 10px;
  }

  .faq-contact {
    width: calc(100% - 36px);
    padding: 42px 22px;
  }
}
</style>
