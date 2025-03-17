// src/app/api/send-email/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Todos os campos são obrigatórios!" }, { status: 400 });
  }
/*
  // Configuração do Mailtrap
  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io", // Servidor SMTP do Mailtrap
    port: 2525, // Porta do Mailtrap
    auth: {
      user: "e036a0c5b0fd4b", // Seu usuário do Mailtrap
      pass: "29e21d8c123f1e", // Sua senha do Mailtrap
    },
  });
*/
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Acessando o e-mail do .env
        pass: process.env.EMAIL_PASSWORD, // Acessando a senha do .env
      },
      tls: {
        rejectUnauthorized: false, // Ignora a verificação do certificado
      },
    });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // Remetente
      to: "henrsilvasantos@gmail.com", // Destinatário
      subject: `Nova mensagem de ${name}`, // Assunto
      text: message, // Corpo do e-mail em texto simples
      replyTo: email, // Endereço de resposta
    });

    return NextResponse.json({ message: "Email enviado com sucesso!" }, { status: 200 });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json({ error: "Erro ao enviar o email." }, { status: 500 });
  }
}