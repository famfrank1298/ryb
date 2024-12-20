"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import "./contact.css";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import ScrollAnimation from "@/components/ScrollAnimation/scrollAnimation";

const ContactForm = () => {
  const { toast } = useToast();
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

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: form.name,
          to_name: "Mr.RYB",
          from_email: form.email,
          to_email: process.env.NEXT_PUBLIC_EMAIL_RECEIVER,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );

      toast({
        title: "Email Sent!",
        description: "Thank you, we will get back to you shortly",
        className: "success-toast",
      });

      setLoading(false);
      setSuccessMessage("Thank you, we will get back to you shortly");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("Ahh, something went wrong. Please try again.");

      toast({
        title: "Email Sent!",
        description: "Thank you, we will get back to you shortly",
        className: "success-toast",
      });
    }
  };

  return (
    <div className="contact-container animate" id="contact">
      <ScrollAnimation />
      <div></div>
      <div className="contact-border">
        <h5 className="subheader">- Get in Touch -</h5>
        <h2 className="contact-title">Contact Us</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />

          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Type your message here"
          />

          <Button type="submit" disabled={loading} className="contact-button">
            {loading ? "Sending..." : "Send"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
