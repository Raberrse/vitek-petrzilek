export const sendEmail = (formState) => {
    const name = formState.name.value
    const email = formState.email.value
    const phoneNumber = formState["phone-number"].value
    const company = formState.company.value
    const message  = formState.message.value

    // Adjust these values according to your needs

    // Construct the email body
    const emailBody = `
      <br/> Jméno: ${name}
      <br/> E-mail: ${email}
      <br/> Telefon: ${phoneNumber}
      <br/> Společnost: ${company !== '' ? company : '[Prázdné]'}
      <br/> Zpráva: ${message !== '' ? message : '[Prázdné]'}
    `;

    // Send the email
    if (window.Email) {
      window.Email.send({
        SecureToken : "1474d22b-e0b1-43cf-95ec-49f3bac4cf8a",
        To : 'info.vitekpetrziltek@gmail.com',
        From : "info.vitekpetrziltek@gmail.com",
        Subject : "Nový klient 🤑💸💸",
        Body : emailBody
      })
        .then(() => {
          console.log('Email successfully sent');
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    };
    }