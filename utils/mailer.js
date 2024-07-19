import { SENDGRID_API_KEY , SENDGRID_SENDER_EMAIL} from '@env';

const sendConfirmationCode = async (to) => {
  const confirmationCode = Math.floor(100000 + Math.random() * 900000);
  const msg = {
    personalizations: [
      {
        to: [{ email: to , name: 'Casa De Papel'}],
        subject: 'Code de Confirmation',
      },
    ],
    from: { email: SENDGRID_SENDER_EMAIL },
    content: [
    
      {
        type: 'text/html',
        value: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #ff0000;">Bienvenue dans la Famille Casa De Papel !</h2>
          <p>Bonjour,</p>
          <p>Merci de vous être inscrit sur notre plateforme. Pour finaliser votre inscription, veuillez utiliser le code de confirmation ci-dessous :</p>
          <div style="text-align: center; margin: 20px 0;">
            <span style="font-size: 24px; font-weight: bold; color: #ff0000;">${confirmationCode}</span>
          </div>
          <p>Si vous n'avez pas demandé ce code, vous pouvez ignorer cet email en toute sécurité.</p>
          <p>Merci et à bientôt !</p>
          <p>Equipe Casa De Papel</p>
          <div style="margin-top: 20px; font-size: 12px; color: #666;">
            <p>Si vous avez des questions, n'hésitez pas à nous contacter à <a href="mailto:support@casadepapel.com">support@casadepapel.com</a>.</p>
            <p>© 2024 Casa De Papel. Tous droits réservés.</p>
          </div>
        </div>
      `,
      },
    ],
  };

  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
    },
    body: JSON.stringify(msg),
  });

  if (!response.ok) {
    const error = await response.json();
    // throw new Error(`Error sending email: ${error.message}`);
    console.log(error);
  }
  if(response.ok){console.log("Email sent successfully"),console.log(SENDGRID_SENDER_EMAIL),console.log(SENDGRID_API_KEY)}

  return confirmationCode;
};

export { sendConfirmationCode };
