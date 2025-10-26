import React, { useState } from "react";
import Button from "./Button";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return "Preencha todos os campos.";
    }
    if (!/^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(form.email))
      return "E-mail inválido.";
    return null;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus({ type: "error", message: err });
      return;
    }
    setLoading(true);
    setStatus({ type: "", message: "" });

    setTimeout(() => {
      setLoading(false);
      setStatus({
        type: "success",
        message: "Mensagem enviada com sucesso! 👍",
      });
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  }

  return (
    <section id="contact">
      <h2>FALE CONOSCO</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">
        </label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nome Completo"
        />

        <label htmlFor="email">
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Digite seu E-mail"
        />

        <label htmlFor="message">
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Digite sua mensagem..."
          rows={6}
        />

        <div className="form-actions">
          <Button type="submit" variant="primary">
            {loading ? "Enviando..." : "Enviar"}
          </Button>
        </div>

        {status.message && (
          <p
            className={`status ${
              status.type === "error" ? "error" : "success"
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
