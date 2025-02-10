"use client";
import React, { FormEvent, useState } from "react";
import "./styles.css";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
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
        <h1>Contato</h1>
        <div className="contact-item">
          <a href="https://wa.me/5577998986939" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="contact-iconWhatsapp" />
            <span>+55 77 9 9898-6939</span>
          </a>
        </div>
        <div className="contact-item">
          <a href="mailto:henrsilvasantos@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="contact-icon" />
            <span>henrsilvasantos@gmail.com</span>
          </a>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/henrique-santos-4b7901287" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://github.com/Henrsilva12" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
        </div>
    </div>
</div>
  );
};
export default Form;