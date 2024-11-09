const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail(context) {
  const templateSource = fs.readFileSync(path.resolve('./src/views/contact.handlebars'), 'utf-8');
  const compiledTemplate = handlebars.compile(templateSource);
  const htmlToSend = compiledTemplate(context);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVE,
    subject: `NEW SUBMISSION FROM MACS WEBSITE: ${context.firstname} ${context.lastname}`,
    html: htmlToSend, // Directly use the compiled HTML
  };

  return transporter.sendMail(mailOptions);
}

module.exports = { sendEmail };
