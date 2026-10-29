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

  if (!prenom || !nom || !occasion || !date || !message || !consentement) {
    throw createError({ statusCode: 400, message: 'Merci de remplir les champs obligatoires.' })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({ statusCode: 400, message: 'Veuillez saisir une adresse e-mail valide.' })
  }

  const apiKey = process.env.BREVO_API_KEY
  const senderEmail = process.env.BREVO_SENDER_EMAIL
  const recipientEmail = process.env.CONTACT_EMAIL

  if (!apiKey || !senderEmail || !recipientEmail) {
    console.error('Contact form configuration missing: BREVO_API_KEY, BREVO_SENDER_EMAIL or CONTACT_EMAIL.')
    throw createError({ statusCode: 503, message: 'Le formulaire est momentanément indisponible. Vous pouvez réessayer plus tard.' })
  }

  const escapeHtml = (value: string) => value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

  const safe = {
    prenom: escapeHtml(prenom),
    nom: escapeHtml(nom),
    email: escapeHtml(email),
    telephone: escapeHtml(telephone || 'Non renseigné'),
    occasion: escapeHtml(occasion),
    date: escapeHtml(date || 'À définir'),
    formule: escapeHtml(formule || 'À définir'),
    options: options.length ? options.map(escapeHtml).join(' · ') : 'Aucune précision',
    budget: escapeHtml(budget || 'À discuter'),
    message: escapeHtml(message).replace(/\n/g, '<br>')
  }

  const details = [
    ['Prénom', prenom],
    ['Nom', nom],
    ['E-mail', email],
    ['Téléphone', telephone || 'Non renseigné'],
    ['Célébration', occasion],
    ['Date de l’événement', date || 'À définir'],
    ['Formule souhaitée', formule || 'À définir'],
    ['Options souhaitées', options.join(', ') || 'Aucune précision'],
    ['Budget envisagé', budget || 'À discuter']
  ]

  const textContent = [
    'C BY C — NOUVELLE DEMANDE',
    'Une nouvelle demande a été envoyée depuis le formulaire du site.',
    '',
    ...details.map(([label, value]) => `${label} : ${value}`),
    '',
    'MESSAGE',
    message,
    '',
    'Consentement aux données personnelles : oui'
  ].join('\\n')

  const htmlContent = `
    <div style="margin:0;padding:32px 12px;background:#f7f3ed;font-family:Arial,Helvetica,sans-serif;color:#40362f;">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e9dfd1;">
        <div style="padding:30px 24px;text-align:center;background:#40362f;">
          <p style="margin:0 0 8px;color:#d8bd8a;font-size:11px;letter-spacing:3px;text-transform:uppercase;">C by C</p>
          <h1 style="margin:0;color:#fffaf1;font-family:Georgia,'Times New Roman',serif;font-size:27px;font-weight:normal;">Nouvelle demande</h1>
          <p style="margin:10px 0 0;color:#e8dfd2;font-size:13px;">Une nouvelle célébration se prépare ✨</p>
        </div>
        <div style="padding:28px 24px;">
          <p style="margin:0 0 22px;font-size:15px;line-height:1.7;">Bonjour Chirel,<br>Tu as reçu une nouvelle demande via le site <strong>C by C</strong>.</p>
          <div style="margin:0 0 22px;padding:16px 18px;background:#f7f3ed;border-left:3px solid #b89a62;">
            <p style="margin:0 0 5px;color:#8a7044;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;">Type de célébration</p>
            <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:22px;">${safe.occasion}</p>
          </div>
          <h2 style="margin:0 0 12px;font-family:Georgia,'Times New Roman',serif;font-size:19px;font-weight:normal;">Les informations du projet</h2>
          <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.6;">
            <tr><td style="width:38%;padding:10px 8px;border-bottom:1px solid #eee6dc;color:#807469;">Prénom</td><td style="padding:10px 8px;border-bottom:1px solid #eee6dc;">${safe.prenom}</td></tr>
            <tr><td style="padding:10px 8px;border-bottom:1px solid #eee6dc;color:#807469;">Nom</td><td style="padding:10px 8px;border-bottom:1px solid #eee6dc;">${safe.nom}</td></tr>
            <tr><td style="padding:10px 8px;border-bottom:1px solid #eee6dc;color:#807469;">E-mail</td><td style="padding:10px 8px;border-bottom:1px solid #eee6dc;"><a href="mailto:${safe.email}" style="color:#8a7044;text-decoration:underline;">${safe.email}</a></td></tr>
            <tr><td style="padding:10px 8px;border-bottom:1px solid #eee6dc;color:#807469;">Téléphone</td><td style="padding:10px 8px;border-bottom:1px solid #eee6dc;">${safe.telephone}</td></tr>
            <tr><td style="padding:10px 8px;border-bottom:1px solid #eee6dc;color:#807469;">Date prévue</td><td style="padding:10px 8px;border-bottom:1px solid #eee6dc;">${safe.date}</td></tr>
            <tr><td style="padding:10px 8px;border-bottom:1px solid #eee6dc;color:#807469;">Formule</td><td style="padding:10px 8px;border-bottom:1px solid #eee6dc;">${safe.formule}</td></tr>
            <tr><td style="padding:10px 8px;border-bottom:1px solid #eee6dc;color:#807469;">Budget</td><td style="padding:10px 8px;border-bottom:1px solid #eee6dc;">${safe.budget}</td></tr>
          </table>
          <h2 style="margin:26px 0 10px;font-family:Georgia,'Times New Roman',serif;font-size:19px;font-weight:normal;">Options souhaitées</h2>
          <div style="padding:14px 16px;background:#fbf9f5;border:1px solid #eee6dc;font-size:14px;line-height:1.8;">${safe.options}</div>
          <h2 style="margin:26px 0 10px;font-family:Georgia,'Times New Roman',serif;font-size:19px;font-weight:normal;">Son message</h2>
          <div style="padding:16px;background:#fbf9f5;border:1px solid #eee6dc;font-size:14px;line-height:1.8;">${safe.message}</div>
          <p style="margin:22px 0 0;color:#807469;font-size:12px;">Consentement aux données personnelles : oui</p>
          <div style="margin-top:28px;text-align:center;">
            <a href="mailto:${safe.email}" style="display:inline-block;padding:13px 22px;background:#40362f;color:#fffaf1;text-decoration:none;font-size:13px;letter-spacing:.3px;">Répondre à cette demande</a>
          </div>
        </div>
        <div style="padding:18px 24px;text-align:center;background:#f7f3ed;border-top:1px solid #e9dfd1;">
          <p style="margin:0;color:#8a7e70;font-family:Georgia,'Times New Roman',serif;font-size:14px;">C by C — Célébrations by Chirel</p>
          <p style="margin:7px 0 0;color:#9c9185;font-size:11px;">Les moments qui nous unissent</p>
        </div>
      </div>
    </div>
  `


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
        textContent,
        htmlContent
      }
    })
  } catch (error: any) {
    // Log Brevo's response details for diagnosis, but never log API keys or submitted message content.
    console.error('Brevo contact email sending failed.', {
      statusCode: error?.statusCode,
      response: error?.data
    })
    throw createError({ statusCode: 502, message: 'L’envoi du message a échoué. Réessayez dans quelques instants.' })
  }


  // Send a separate acknowledgement to the person who submitted the form.
  // A failure here should not make the already-sent business notification fail.
  const confirmationText = [
    `Bonjour ${prenom},`,
    '',
    'Merci d’avoir contacté C by C — Célébrations by Chirel.',
    'Nous avons bien reçu votre demande et reviendrons vers vous dès que possible.',
    '',
    `Votre projet : ${occasion}`,
    `Date de l’événement : ${date || 'À définir'}`,
    `Formule souhaitée : ${formule || 'À définir'}`,
    '',
    'Votre message :',
    message,
    '',
    'Cet e-mail confirme uniquement la réception de votre demande ; il ne constitue pas une réservation ou une confirmation de commande.',
    '',
    'À bientôt,',
    'Chirel — C by C',
    'Les moments qui nous unissent'
  ].join('\\n')

  const confirmationHtml = `
    <div style="margin:0;padding:32px 12px;background:#f7f3ed;font-family:Arial,Helvetica,sans-serif;color:#40362f;">
      <div style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e9dfd1;">
        <div style="padding:32px 24px;text-align:center;background:#40362f;">
          <p style="margin:0 0 8px;color:#d8bd8a;font-size:11px;letter-spacing:3px;text-transform:uppercase;">C by C</p>
          <h1 style="margin:0;color:#fffaf1;font-family:Georgia,'Times New Roman',serif;font-size:27px;font-weight:normal;">Merci pour votre confiance</h1>
          <p style="margin:10px 0 0;color:#e8dfd2;font-size:13px;">Les moments qui nous unissent</p>
        </div>
        <div style="padding:30px 24px;">
          <p style="margin:0 0 16px;font-size:16px;line-height:1.8;">Bonjour ${safe.prenom},</p>
          <p style="margin:0 0 16px;font-size:15px;line-height:1.8;">Merci d’avoir contacté <strong>C by C — Célébrations by Chirel</strong>.</p>
          <p style="margin:0 0 24px;font-size:15px;line-height:1.8;">Votre demande a bien été reçue. Je prendrai le temps d’étudier votre projet et reviendrai vers vous dès que possible.</p>
          <div style="padding:18px;background:#f7f3ed;border-left:3px solid #b89a62;">
            <p style="margin:0 0 12px;color:#8a7044;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;">Récapitulatif de votre demande</p>
            <p style="margin:0 0 8px;font-size:14px;line-height:1.7;"><strong>Célébration :</strong> ${safe.occasion}</p>
            <p style="margin:0 0 8px;font-size:14px;line-height:1.7;"><strong>Date :</strong> ${safe.date}</p>
            <p style="margin:0;font-size:14px;line-height:1.7;"><strong>Formule :</strong> ${safe.formule}</p>
          </div>
          <p style="margin:24px 0 0;font-size:14px;line-height:1.8;">Cet e-mail confirme la bonne réception de votre demande ; il ne constitue pas une réservation ni une confirmation de commande.</p>
          <p style="margin:24px 0 0;font-size:15px;line-height:1.8;">À bientôt,<br><strong>Chirel</strong><br><span style="color:#8a7044;">C by C — Célébrations by Chirel</span></p>
        </div>
        <div style="padding:18px 24px;text-align:center;background:#f7f3ed;border-top:1px solid #e9dfd1;">
          <p style="margin:0;color:#8a7e70;font-family:Georgia,'Times New Roman',serif;font-size:14px;">C by C — Célébrations by Chirel</p>
          <p style="margin:7px 0 0;color:#9c9185;font-size:11px;">Les moments qui nous unissent</p>
        </div>
      </div>
    </div>
  `

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
        to: [{ email, name: `${prenom} ${nom}` }],
        replyTo: { email: recipientEmail, name: 'C by C — Célébrations by Chirel' },
        subject: 'Nous avons bien reçu votre demande — C by C',
        textContent: confirmationText,
        htmlContent: confirmationHtml
      }
    })
  } catch (error: any) {
    console.error('Brevo customer confirmation email failed.', {
      statusCode: error?.statusCode,
      response: error?.data
    })
  }

  return { ok: true }
})
