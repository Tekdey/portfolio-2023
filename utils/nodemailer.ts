const nodemailer = require("nodemailer");
// require("dotenv").config();
interface Body {
  firstname: string,
  lastname: string,
  email: string,
  subject: string,
  message: string
}

const root = {
  sendMail(user: Body) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.PASSWORD_SENDER,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_SENDER,
      to: process.env.EMAIL_RECEIVER,
      subject: `${user.subject}`,
      html: `
          <h2>Coordonnées :</h2>
          <ul>
            <li><b>prénom:</b> ${user.firstname}</li>
            <li><b>nom:</b> ${user.lastname}</li>
            <li><b>email:</b> ${user.email}</li>
          </ul>
          <h2>Message :</h2>
          <p>${user.message}</p>
          `,
    };

    transporter.sendMail(mailOptions, function (error: any, info: any) {
      if (error) {
        console.log(error);
        return false;
      }
    });
  },
} ;
export default  root;