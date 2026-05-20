import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — TG Recruiting" },
      { name: "description", content: "Terms & Conditions for TG Recruiting, including SMS communication terms and user responsibilities." },
      { property: "og:title", content: "Terms & Conditions — TG Recruiting" },
      { property: "og:description", content: "Terms governing use of our services and SMS communications." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <Layout>
      <section className="pt-40 pb-16 bg-hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold">Terms & Conditions</h1>
          <p className="mt-4 text-white/75">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <article className="max-w-4xl mx-auto px-6 lg:px-8 space-y-10">
          <Block title="SMS Communication Terms">
            <p>By providing your mobile number and opting in to SMS communications from TG Recruiting, you consent to receive text messages related to service updates, account notifications, and communication support.</p>
          </Block>

          <Block title="Message Frequency Disclosure">
            <p>Message frequency may vary based on your interaction with our services and the type of notifications you have opted into. Message and data rates may apply per your mobile carrier's plan.</p>
          </Block>

          <Block title="STOP and HELP Instructions">
            <ul className="list-disc pl-6 space-y-1">
              <li>Reply <strong>STOP</strong> to opt out of SMS communications at any time.</li>
              <li>Reply <strong>HELP</strong> for assistance regarding our SMS program.</li>
              <li>You may also contact us directly using the contact details provided below.</li>
            </ul>
          </Block>

          <Block title="User Responsibilities">
            <p>You agree to provide accurate contact information and to use our services in compliance with applicable laws and regulations. You are responsible for maintaining the confidentiality of any credentials associated with your interaction with our platform.</p>
          </Block>

          <Block title="Limitation of Liability">
            <p>TG Recruiting is not liable for any indirect, incidental, or consequential damages arising from the use of our services, including but not limited to delays in message delivery caused by mobile carriers or third-party providers.</p>
          </Block>

          <Block title="Contact Details">
            <p>For questions regarding these Terms & Conditions, contact us at:</p>
            <p className="mt-2">
              Email: contact@tgdrivernetwork.com<br />
              Phone: +1 (555) 010-2024<br />
              Address: 1234 Logistics Way, Dallas, TX 75201
            </p>
          </Block>
        </article>
      </section>
    </Layout>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      <div className="mt-3 text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}