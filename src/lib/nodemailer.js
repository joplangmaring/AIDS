import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import path from 'path';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS,  // Your Gmail password (or app password)
  },
});

async function sendEmail(context) {
  const templateSource = fs.readFileSync(path.resolve('./src/views/contact.handlebars'), 'utf-8');
  const compiledTemplate = handlebars.compile(templateSource);
  const htmlToSend = compiledTemplate(context);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVE, // The recipient's email address
    subject: `NEW SUBMISSION FROM MACS WEBSITE: ${context.firstname} ${context.lastname}`,
    html: htmlToSend, // Directly use the compiled HTML
  };

  return transporter.sendMail(mailOptions);
}

module.exports = { sendEmail };
