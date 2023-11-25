const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'habibasaadaoui01@gmail.com',
    pass: '$x@V]I_z(^GW',
  },
});


const mailOptions = {
  from: 'habibasaadaoui01@gmail.com',
  to: 'said.kamel@esprit.tn',
  subject: 'test',
  text: 'hello said This is a test email sent from Node.js',
};


transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
