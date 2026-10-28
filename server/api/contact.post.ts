export default defineEventHandler(async (event) => {
  const body = await readBody<Record<string, unknown>>(event)

  const text = (value: unknown, max = 2000) =>
    typeof value === 'string' ? value.trim().slice(0, max) : ''

  const prenom = text(body?.prenom, 100)
  const nom = text(body?.nom, 100)
  const email = text(body?.email, 254)
  const telephone = text(body?.telephone, 50)
  const occasion = text(body?.occasion, 150)
  const date = text(body?.date, 30)
  const formule = text(body?.formule, 150)
  const budget = text(body?.budget, 100)
  const message = text(body?.message, 5000)
  const consentement = body?.consentement === true
  const options = Array.isArray(body?.options)
    ? body.options.filter((item): item is string => typeof item === 'string').map(item => item.slice(0, 150)).slice(0, 20)
    : []

  if (!prenom || !nom || !occasion || !message || !consentement) {
    throw createError({ statusCode: 400, statusMessage: 'Merci de remplir les champs obligatoires.' })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Veuillez saisir une adresse e-mail valide.' })
  }

  const apiKey = process.env.BREVO_API_KEY
  const senderEmail = process.env.BREVO_SENDER_EMAIL
  const recipientEmail = process.env.CONTACT_EMAIL

  if (!apiKey || !senderEmail || !recipientEmail) {
    console.error('Contact form configuration missing: BREVO_API_KEY, BREVO_SENDER_EMAIL or CONTACT_EMAIL.')
    throw createError({ statusCode: 503, statusMessage: 'Le formulaire est momentanément indisponible. Vous pouvez réessayer plus tard.' })
  }

  const lines = [
    'Nouvelle demande depuis le formulaire C by C',
    '',
    `Prénom : ${prenom}`,
    `Nom : ${nom}`,
    `E-mail : ${email}`,
    `Téléphone : ${telephone || 'Non renseigné'}`,
    `Type de célébration : ${occasion}`,
    `Date de l’événement : ${date || 'À définir'}`,
    `Formule souhaitée : ${formule || 'À définir'}`,
    `Options souhaitées : ${options.join(', ') || 'Aucune précision'}`,
    `Budget envisagé : ${budget || 'À discuter'}`,
    '',
    'Message :',
    message,
    '',
    'Consentement aux données personnelles : oui'
  ]

  try {
    await $fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'content-type': 'application/json',
        accept: 'application/json'
      },
      body: {
        sender: { name: 'C by C — Célébrations by Chirel', email: senderEmail },
        to: [{ email: recipientEmail }],
        replyTo: { email, name: `${prenom} ${nom}` },
        subject: `Demande C by C — ${occasion}`,
        textContent: lines.join('\n')
      }
    })
  } catch (error) {
    console.error('Brevo contact email sending failed.')
    throw createError({ statusCode: 502, statusMessage: 'L’envoi du message a échoué. Réessayez dans quelques instants.' })
  }

  return { ok: true }
})
