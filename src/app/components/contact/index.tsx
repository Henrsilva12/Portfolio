"use client";
import React, { FormEvent, useState } from "react";
import "./styles.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("E-mail enviado com sucesso!");
        setFormData({ name: '', email: '', message: '' });  // Limpa o formulário após envio
      } else {
        alert(data.error || "Erro ao enviar e-mail.");
      }
    } catch (error) {
      alert("Erro de conexão. Tente novamente mais tarde.");
      console.error("Erro:", error);
    }
  };
  
  return (
    <div className="section_form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome<span>*</span></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail<span>*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            name="message"
            placeholder="Digite sua mensagem"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
      <button type="submit" className="button">Enviar</button>
      </form>
      <div className="section_formContact">
        <div className="social-icons"></div>
    </div>
</div>
  );
};
export default Form;