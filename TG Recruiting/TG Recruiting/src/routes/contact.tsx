import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TG Recruiting" },
      { name: "description", content: "Reach the TG Recruiting team. Send a message, request information, and connect with our communication support team." },
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
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    setError(null);
    try {
      await emailjs.sendForm(
        "service_s33e7ei",
        "template_owner",
        formRef.current,
        { publicKey: "DFg02OYJ4qzNdcwSc" }
      );
      await emailjs.sendForm(
        "service_s33e7ei",
        "template_xybpwgv",
        formRef.current,
        { publicKey: "DFg02OYJ4qzNdcwSc" }
      );
      setSubmitted(true);
      formRef.current.reset();
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Layout>
      <section className="pt-40 pb-16 bg-hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 animate-fade-up">
          <span className="text-sm font-semibold uppercase tracking-wider text-white/70">Contact Us</span>
          <h1 className="mt-3 text-5xl md:text-6xl font-bold max-w-3xl leading-tight">Let's talk about your network needs</h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            Reach out and our team will get back to you. We're here to help with communication support and coordination questions.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Phone, title: "Phone", value: "(307) 357-3262" },
            { icon: Mail, title: "Email", value: "office@tgrecruiting.com" },
            { icon: MapPin, title: "Office", value: "30 N Gould St Ste R, Sheridan, Wyoming 82801" },
          ].map((c) => (
            <div key={c.title} className="p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant transition">
              <div className="h-12 w-12 rounded-xl bg-primary-gradient flex items-center justify-center">
                <c.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{c.title}</h3>
              <p className="mt-1 text-muted-foreground">{c.value}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <form ref={formRef} onSubmit={onSubmit} className="p-8 md:p-10 rounded-3xl bg-card border border-border shadow-card">
            <h2 className="text-2xl font-bold text-foreground">Send us a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">Fill out the form and we'll respond shortly.</p>

            <div className="mt-6 space-y-4">
              <Field label="Full Name" id="name" name="name" type="text" required />
              <Field label="Email Address" id="email" name="email" type="email" required />
              <Field label="Phone Number" id="phone" name="phone" type="tel" required />
              <Field label="Location" id="location" name="location" type="text" />
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea id="message" name="message" required rows={5} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition" />
              </div>

              <label className="flex items-start gap-3 p-4 rounded-xl bg-secondary/60 border border-border cursor-pointer">
                <input type="checkbox" name="sms_consent" className="mt-1 h-4 w-4 rounded border-input accent-primary" />
                <span className="text-xs text-muted-foreground leading-relaxed">
                  By checking this box, you agree to receive SMS messages from TG Recruiting related to service updates, account notifications, and communication support. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out or HELP for assistance.
                </span>
              </label>
              <p className="text-xs text-muted-foreground">Consent is not a condition of purchase.</p>

              {error && <p className="text-sm text-destructive">{error}</p>}
              {submitted && <p className="text-sm text-green-600">Thanks! Your message has been sent. Check your inbox for a confirmation.</p>}

              <button type="submit" disabled={sending} className="mt-2 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary-gradient text-primary-foreground font-semibold shadow-elegant hover:scale-[1.01] transition disabled:opacity-60 disabled:cursor-not-allowed">
                <Send className="h-4 w-4" /> {sending ? "Sending..." : submitted ? "Message Sent!" : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, id, name, type, required }: { label: string; id: string; name?: string; type: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
      <input id={id} name={name ?? id} type={type} required={required} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition" />
    </div>
  );
}