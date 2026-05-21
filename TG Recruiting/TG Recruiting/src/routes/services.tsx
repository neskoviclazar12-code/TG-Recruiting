import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Headphones, Network, Truck, Radio, Info, Route as RouteIcon, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — TG Recruiting" },
      { name: "description", content: "Explore TG Recruiting services: driver communication support, transportation coordination, logistics support, fleet communication, and more." },
      { property: "og:title", content: "Services — TG Recruiting" },
      { property: "og:description", content: "Communication and coordination services for the American trucking industry." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Headphones, title: "Driver Communication Support", desc: "Dedicated communication channels that keep drivers informed and supported across every shift." },
  { icon: Network, title: "Transportation Coordination", desc: "Connecting carriers, partners, and drivers through a streamlined coordination workflow." },
  { icon: Truck, title: "Logistics Support Services", desc: "Operational support that helps logistics teams move freight efficiently and reliably." },
  { icon: Radio, title: "Fleet Communication Assistance", desc: "Tools and processes to help fleets maintain clear and consistent communication." },
  { icon: Info, title: "Driver Information Services", desc: "Timely information delivery so drivers always have what they need before the next mile." },
  { icon: RouteIcon, title: "Route & Dispatch Communication", desc: "Real-time route and dispatch updates to support smooth on-road decision making." },
];

function ServicesPage() {
  return (
    <Layout>
      <section className="pt-40 pb-20 bg-hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 animate-fade-up">
          <span className="text-sm font-semibold uppercase tracking-wider text-white/70">Our Services</span>
          <h1 className="mt-3 text-5xl md:text-6xl font-bold max-w-3xl leading-tight">
            Communication services built for the trucking industry
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            A complete suite of services to support drivers, fleets, and logistics partners across the United States.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group p-8 rounded-2xl bg-card border border-border shadow-card hover:-translate-y-1 hover:shadow-elegant transition-all duration-300">
              <div className="h-14 w-14 rounded-2xl bg-primary-gradient flex items-center justify-center group-hover:scale-110 transition-transform">
                <s.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ready to learn more?</h2>
          <p className="mt-3 text-muted-foreground text-lg">Get in touch to see how TG Recruiting supports your operation.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary-gradient text-primary-foreground font-semibold shadow-elegant hover:scale-[1.02] transition">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}