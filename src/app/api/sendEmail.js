// /api/sendEmail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    //transportador do Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: "henrsilvasantos@gmail.com",  // para onde você quer que o e-mail vá
      subject: `Mensagem de ${name} - Portfólio`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email enviado com sucesso!" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao enviar o email!" });
    }
  } else {
    res.status(405).json({ message: "Método não permitido!" });
  }
}
