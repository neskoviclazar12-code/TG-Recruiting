import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import aboutTruck from "@/assets/about-truck.jpg";
import fleet from "@/assets/fleet.jpg";
import { Target, Heart, Shield, Award, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — TG Recruiting" },
      { name: "description", content: "Learn about TG Recruiting: a transportation-focused communication and coordination platform supporting drivers across the United States." },
      { property: "og:title", content: "About TG Recruiting" },
      { property: "og:description", content: "A trusted driver support platform built for the American trucking industry." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-hero-gradient text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 animate-fade-up">
          <span className="text-sm font-semibold uppercase tracking-wider text-white/70">About Us</span>
          <h1 className="mt-3 text-5xl md:text-6xl font-bold max-w-3xl leading-tight">
            Connecting America's drivers, one route at a time.
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl leading-relaxed">
            TG Recruiting is a transportation-focused company supporting communication and coordination within the American trucking industry — a trusted driver support platform connecting partners nationwide.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <img src={aboutTruck} alt="Blue American semi truck on US highway" width={1280} height={832} loading="lazy" className="rounded-3xl shadow-elegant" />
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Mission</span>
            <h2 className="mt-3 text-4xl font-bold text-foreground">A network built for the long haul</h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Our mission is to provide a dependable communication backbone for the transportation industry — empowering drivers, dispatchers, and logistics partners with tools that simplify coordination and keep operations running smoothly across every mile of US highway.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Values</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground">What drives us forward</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-8 rounded-2xl bg-card border border-border shadow-card">
                <div className="h-12 w-12 rounded-xl bg-primary-gradient flex items-center justify-center">
                  <v.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Team</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground">Professionals behind the network</h2>
            <p className="mt-4 text-muted-foreground">A multidisciplinary team with deep experience in transportation, communications, and technology operations.</p>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {team.map((m) => (
              <div key={m.name} className="text-center p-8 rounded-2xl bg-card border border-border shadow-card">
                <div className="h-20 w-20 mx-auto rounded-full bg-primary-gradient flex items-center justify-center text-white text-2xl font-bold">
                  {m.initials}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{m.name}</h3>
                <p className="text-sm text-primary">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 bg-hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-white/70">Industry Experience</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">Decades of road-tested expertise</h2>
            <p className="mt-5 text-white/80 text-lg leading-relaxed">
              From regional carriers to nationwide logistics partners, our team has supported the operations behind millions of miles of safe, efficient transportation across the United States.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <Stat value="10+" label="Years in transportation" />
              <Stat value="48" label="States supported" />
              <Stat value="500+" label="Partner organizations" />
              <Stat value="24/7" label="Communication coverage" />
            </div>
          </div>
          <img src={fleet} alt="Fleet of American trucks" width={1280} height={832} loading="lazy" className="rounded-3xl shadow-elegant" />
        </div>
      </section>
    </Layout>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-sm text-white/70 mt-1">{label}</p>
    </div>
  );
}

const values = [
  { icon: Shield, title: "Integrity", desc: "We operate with transparency and full respect for compliance and consent in every interaction." },
  { icon: Heart, title: "Driver First", desc: "Drivers are the heart of our network — every decision starts with their experience on the road." },
  { icon: Target, title: "Reliability", desc: "Our infrastructure is built to be there when it matters, supporting consistent communication." },
];

const team = [
  { name: "Operations Leadership", role: "Network Operations", initials: "OL" },
  { name: "Driver Support Team", role: "Communication Support", initials: "DS" },
  { name: "Technology Group", role: "Platform Engineering", initials: "TG" },
];