import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — TG Recruiting" },
      { name: "description", content: "Privacy Policy for TG Recruiting, including SMS consent and data protection practices." },
      { property: "og:title", content: "Privacy Policy — TG Recruiting" },
      { property: "og:description", content: "How we collect, use, and protect your information." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Layout>
      <section className="pt-40 pb-16 bg-hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold">Privacy Policy</h1>
          <p className="mt-4 text-white/75">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <article className="max-w-4xl mx-auto px-6 lg:px-8 prose prose-slate space-y-10">
          <Block title="Information Collection">
            <p>We collect information you provide directly to us, including your name, email address, phone number, and any details shared through our contact form. We may also collect technical information automatically when you visit our website, such as device type, browser, and usage data.</p>
          </Block>

          <Block title="SMS Consent Policy">
            <p>By opting in to SMS communications, you agree to receive text messages from TG Recruiting related to service updates, account notifications, and communication support.</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Message frequency may vary.</li>
              <li>Message and data rates may apply.</li>
              <li>Reply STOP to opt out at any time.</li>
              <li>Reply HELP for assistance.</li>
            </ul>
            <p className="mt-3 font-medium text-foreground">SMS consent is not shared with third parties or affiliates for marketing purposes.</p>
          </Block>

          <Block title="Data Protection">
            <p>We implement appropriate technical and organizational safeguards to protect your information against unauthorized access, alteration, disclosure, or destruction. Access to personal information is limited to authorized personnel only.</p>
          </Block>

          <Block title="Communication Policy">
            <p>We use the information you provide to respond to inquiries, deliver service updates, and provide communication support related to our network. We do not use your contact information for unrelated marketing without your express consent.</p>
          </Block>

          <Block title="Opt-Out Instructions">
            <p>You may opt out of SMS communications at any time by replying <strong>STOP</strong> to any message. For assistance, reply <strong>HELP</strong> or contact us using the information below. To opt out of email communications, follow the unsubscribe link included in our emails.</p>
          </Block>

          <Block title="Contact Information">
            <p>For privacy questions or to exercise your rights, contact us at:</p>
            <p className="mt-2">
              Email: office@tgrecruiting.com<br />
              Phone: +1 (307) 357-3262<br />
              Address: 30 N Gould St Ste R, Sheridan, WY 82801
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