// export default function Contact() {
//   return (
//     <div>
//       <h2>Get in Touch</h2>
//       <p>Based in Chicago, IL</p>
//       <p>[Insert Phone Number]</p>
//     </div>
//   );
// }
"use client";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import "./contact.css";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
    console.log(process.env.NEXT_PUBLIC_TEMPLATE_ID);
    console.log(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: form.name,
          to_name: "Mr.RYB",
          from_email: form.email,
          to_email: "mensahfrank330@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );

      setLoading(false);
      setSuccessMessage(
        "Thank you! I will get back to you as soon as possible."
      );
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("Ahh, something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <div></div>
      <div className="contact-border">
        <h5 className="subheader">-Get in Touch-</h5>
        <h2 className="contact-title">Contact Us</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
