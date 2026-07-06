import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiSend } from "react-icons/fi";
import { contact, SOCIAL } from "../constants/index";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const [status, setStatus] = useState(null);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data) {
    setStatus(null);
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are not configured.");
      }

      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: data.name,
            from_email: data.email,
            message: data.message,
          },
        }),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-shell pb-24">
      <div className="section-kicker">Contact</div>
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="section-heading">Let&apos;s work together</h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-[#8E9BAD]">
            I&apos;m open to internships, security analyst roles, and collaboration on SOC, incident response,
            and secure development projects. Tell me what you&apos;re working on.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="social-link" href={`https://github.com/${SOCIAL.github}`} target="_blank" rel="noopener noreferrer">
              <FiGithub /> GitHub
            </a>
            <a className="social-link" href={`https://www.linkedin.com/in/${SOCIAL.linkedin}/`} target="_blank" rel="noopener noreferrer">
              <FiLinkedin /> LinkedIn
            </a>
            <a className="social-link" href={`mailto:${SOCIAL.email}`}>
              <FiMail /> Email
            </a>
            <a className="social-link" href={`tel:${contact.phone.replace(/\s/g, "")}`}>
              <FiPhone /> {contact.phone}
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="glass-panel p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="field-label">
              <span>Name</span>
              <input placeholder="Your name" {...register("name")} />
              {errors.name && <small>{errors.name.message}</small>}
            </label>
            <label className="field-label">
              <span>Email</span>
              <input type="email" placeholder="you@example.com" {...register("email")} />
              {errors.email && <small>{errors.email.message}</small>}
            </label>
          </div>
          <label className="field-label mt-4">
            <span>Message</span>
            <textarea rows={5} placeholder="What are you working on?" {...register("message")} />
            {errors.message && <small>{errors.message.message}</small>}
          </label>
          <button type="submit" disabled={isSubmitting} className="neon-button mt-5 w-full justify-center">
            {isSubmitting ? "Sending..." : "Send message"}
            <FiSend />
          </button>
          {status === "success" && (
            <p className="mt-4 text-sm text-[#B9C8EF]">Message sent — I&apos;ll get back to you within a day.</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm text-[#E5A93D]">
              The form couldn&apos;t send right now — email me directly at {SOCIAL.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
