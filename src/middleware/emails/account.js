const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'boydj4@text-manager.io',
    subject: 'Welcome to my app',
    text: `Hope you enjoy ${name}!`
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'boydj4@text-manager.io',
    subject: 'Leaving so soon?',
    text: `Thanks for trying the app ${name}!`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
};
