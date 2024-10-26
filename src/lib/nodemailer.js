import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import path from 'path';

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS,  // Your Gmail password (or app password)
  },
});

// Configure Handlebars options
const handlebarOptions = {
  viewEngine: {
    extName: '.handlebars',
    partialsDir: path.resolve('./views/'), // Adjust the path as necessary
    defaultLayout: false,
  },
  viewPath: path.resolve('./views/'), // Adjust the path as necessary
  extName: '.handlebars',
};

// Use Handlebars for email templating
transporter.use('compile', hbs(handlebarOptions));

// Function to send email using Handlebars template
export async function sendEmail(context) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVE, // The recipient's email address
    subject: `NEW SUBMISSION FROM MACS WEBSITE: ${context.firstname} ${context.lastname}`,
    template: 'contact', // Name of the Handlebars template file (without .handlebars)
    context: context, // Data to be passed to the template
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Nodemailer sendMail error:', error);
    throw error; // Rethrow to catch it in the route handler
  }
}





// const nodemailer = require('nodemailer');
// const hbs = require('nodemailer-express-handlebars');
// const path = require('path');
// require('dotenv').config();

// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: process.env.EMAIL_USER, 
//     pass: process.env.EMAIL_PASS, 
//   },
// });


// const handlebarOptions = {
//   viewEngine: {
//     partialsDir: path.resolve('./views/'), 
//     defaultLayout: false, 
//   },
//   viewPath: path.resolve('./views/'), 
//   extName: '.handlebars', 
// };

// transporter.use('compile', hbs(handlebarOptions));

// async function sendEmail(context) {
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: process.env.EMAIL_RECEIVE,
//     subject: 'New update from Tyc website',
//     template: 'contact', 
//     context: context,
//   };

//   return transporter.sendMail(mailOptions);
// }
// module.exports = { sendEmail };
