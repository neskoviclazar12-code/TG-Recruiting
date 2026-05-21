import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import heroTruck from "@/assets/hero-truck.jpg";
import { ArrowRight, Headphones, Network, Truck, Radio, Info, Route as RouteIcon, ShieldCheck, Clock, MapPin, Users } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TG Recruiting — Reliable Driver Network Solutions Across the United States" },
      { name: "description", content: "TG Recruiting connects drivers, transportation partners, and logistics communication services through a reliable nationwide platform." },
      { property: "og:title", content: "TG Recruiting" },
      { property: "og:description", content: "Reliable driver network solutions across the United States." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <img
          src={heroTruck}
          alt="CDL truck driver on US highway"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.12_0.04_250)]/95 via-[oklch(0.12_0.04_250)]/70 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 text-white w-full">
          <div className="max-w-2xl animate-fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight uppercase">
              CDL Drivers.<br />
              Matched <span className="text-primary">Fast.</span><br />
              Placed <span className="text-primary">Nationwide.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 max-w-xl leading-relaxed">
              Connecting qualified CDL drivers with trusted carriers nationwide. Fast, reliable driver placement.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-3 px-7 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold shadow-elegant hover:opacity-90 transition uppercase text-sm tracking-wide">
                Apply as Driver <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-3 px-7 py-3.5 rounded-md border border-white/70 text-white font-semibold hover:bg-white/10 transition uppercase text-sm tracking-wide">
                For Carriers <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">ABOUT</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground leading-tight">
              A trusted partner for drivers and carriers nationwide
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We connect qualified CDL drivers with reputable carriers across the United States.
              Our driver support and communication network keeps drivers supported and fleets moving.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Users, label: "Drivers Placed", value: "500+" },
              { icon: Truck, label: "Carrier Partners", value: "50+" },
              { icon: MapPin, label: "States Covered", value: "48" },
              { icon: Clock, label: "Avg. Placement", value: "< 7 days" },
            ].map((s) => (
              <div key={s.label} className="p-6 rounded-2xl bg-card border border-border shadow-card">
                <s.icon className="h-7 w-7 text-primary" />
                <div className="mt-4 text-3xl font-bold text-foreground">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">What We Offer</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Services built for the trucking industry
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Headphones, title: "Driver Communication Support", desc: "Dedicated channels that keep drivers informed and supported on every shift." },
              { icon: Network, title: "Transportation Coordination", desc: "Streamlined coordination between carriers, partners, and drivers." },
              { icon: Truck, title: "Logistics Support Services", desc: "Operational support that helps logistics teams move freight reliably." },
              { icon: Radio, title: "Fleet Communication Assistance", desc: "Tools and processes to keep fleet communication clear and consistent." },
              { icon: Info, title: "Driver Information Services", desc: "Timely information so drivers always have what they need." },
              { icon: RouteIcon, title: "Route & Dispatch Communication", desc: "Real-time updates that support smooth on-road decisions." },
            ].map((s) => (
              <div key={s.title} className="group p-8 rounded-2xl bg-card border border-border shadow-card hover:-translate-y-1 hover:shadow-elegant transition-all duration-300">
                <div className="h-14 w-14 rounded-2xl bg-primary-gradient flex items-center justify-center group-hover:scale-110 transition-transform">
                  <s.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary-gradient text-primary-foreground font-semibold shadow-elegant hover:scale-[1.02] transition">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Why Choose Us</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground leading-tight">
              The network drivers and carriers trust
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: "Vetted & Verified", desc: "Every driver and carrier in our network is screened and verified." },
              { icon: Clock, title: "Fast Placement", desc: "Most drivers are matched and placed in under a week." },
              { icon: Users, title: "Dedicated Support", desc: "Real people available to help drivers and partners every step of the way." },
            ].map((w) => (
              <div key={w.title} className="p-8 rounded-2xl border border-border bg-card shadow-card">
                <w.icon className="h-10 w-10 text-primary" />
                <h3 className="mt-5 text-xl font-semibold text-foreground">{w.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">Ready to hit the road with us?</h2>
          <p className="mt-4 text-lg text-white/80">Whether you're a driver looking for your next opportunity or a carrier seeking qualified talent — we're here to help.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-foreground font-semibold hover:opacity-90 transition">
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/70 text-white font-semibold hover:bg-white/10 transition">
              Explore services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
