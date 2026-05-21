import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TG Recruiting" },
      { name: "description", content: "Reach the TG Recruiting team." },
      { property: "og:title", content: "Contact TG Recruiting" },
      { property: "og:description", content: "Get in touch with our team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 📩 EMAIL TO YOU
    emailjs.sendForm(
      "service_s33e7ei",
      "template_k9x2ab",
      e.currentTarget,
     "DFg02OYJ4qzNdcwSc"
    );

    // 🤖 AUTO REPLY TO DRIVER
    emailjs.sendForm(
      "service_s33e7ei",
      "template_auto_reply",
      e.currentTarget,
      "DFg02OYJ4qzNdcwSc"
    );

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <Layout>
      <section className="pt-40 pb-16 bg-hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 animate-fade-up">
          <h1 className="text-5xl font-bold">Let's talk</h1>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <form
            onSubmit={onSubmit}
            className="p-8 rounded-3xl bg-card border border-border shadow-card"
          >
            <h2 className="text-2xl font-bold">Send us a message</h2>

            <div className="mt-6 space-y-4">
              <Field label="Full Name" id="name" type="text" />
              <Field label="Email Address" id="email" type="email" />
              <Field label="Phone Number" id="phone" type="tel" />
              <Field label="Location" id="location" type="text" />

              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-black text-white"
              >
                <Send className="h-4 w-4" />
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label,
  id,
  type,
}: {
  label: string;
  id: string;
  type: string;
}) {
  return (
    <div>
      <label className="block text-sm mb-1">{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        required
        className="w-full px-4 py-3 rounded-xl border"
      />
    </div>
  );
}
