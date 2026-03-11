import { Award, BookOpen, Briefcase, Target } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const milestones = [
  { year: "2012", title: "Started in Financial Markets", description: "Began career as a junior analyst at a major investment firm." },
  { year: "2015", title: "CFA Certification", description: "Obtained the Chartered Financial Analyst designation." },
  { year: "2018", title: "Portfolio Management", description: "Led portfolio management for high-net-worth clients." },
  { year: "2021", title: "Financial Education", description: "Launched content creation to democratize financial knowledge." },
  { year: "2024", title: "FinanceHub", description: "Created this platform as a comprehensive financial education resource." },
];

const values = [
  { icon: Target, title: "Long-term Thinking", description: "Investing is a marathon. I focus on strategies that compound over decades." },
  { icon: BookOpen, title: "Education First", description: "Financial literacy is the foundation of every good investment decision." },
  { icon: Award, title: "Evidence-based", description: "Opinions backed by data, research, and proven financial principles." },
  { icon: Briefcase, title: "Practical Approach", description: "Actionable advice you can implement today, not abstract theories." },
];

const About = () => (
  <div>
    {/* Hero */}
    <section className="container py-16 md:py-24">
      <div className="flex flex-col items-start gap-10 md:flex-row md:gap-16">
        <img
          src={profilePhoto}
          alt="Financial advisor"
          className="h-56 w-56 rounded-2xl object-cover shadow-lg animate-fade-up"
        />
        <div className="flex-1 animate-fade-up animation-delay-100">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">About</p>
          <h1 className="mt-2 font-display text-4xl text-foreground md:text-5xl">The story behind FinanceHub</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            With over a decade of experience in financial markets, I created FinanceHub to bridge the gap between complex financial concepts and everyday investors. My mission is to make quality financial education accessible to everyone.
          </p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="bg-secondary/40 py-16">
      <div className="container">
        <h2 className="font-display text-3xl text-foreground">Philosophy & Values</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-6">
              <v.icon className="h-7 w-7 text-accent" />
              <h3 className="mt-3 font-display text-lg text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="container py-16">
      <h2 className="font-display text-3xl text-foreground">Journey</h2>
      <div className="relative mt-8 ml-4 border-l-2 border-border pl-8">
        {milestones.map((m, i) => (
          <div key={i} className="relative mb-10 last:mb-0">
            <div className="absolute -left-[2.6rem] top-1 h-4 w-4 rounded-full border-2 border-accent bg-background" />
            <span className="text-xs font-semibold text-accent">{m.year}</span>
            <h3 className="mt-1 font-display text-lg text-foreground">{m.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{m.description}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Certifications */}
    <section className="bg-secondary/40 py-16">
      <div className="container">
        <h2 className="font-display text-3xl text-foreground">Education & Certifications</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { title: "CFA Charterholder", org: "CFA Institute" },
            { title: "MBA in Finance", org: "Top Business School" },
            { title: "CFP Certification", org: "Financial Planning Board" },
          ].map((cert, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-5">
              <Award className="h-5 w-5 text-accent" />
              <h4 className="mt-2 font-semibold text-foreground">{cert.title}</h4>
              <p className="text-sm text-muted-foreground">{cert.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
