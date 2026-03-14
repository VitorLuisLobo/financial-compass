import { Award, BookOpen, Briefcase, Target } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const milestones = [
  {
    year: "2012",
    title: "Started in Financial Markets",
    description: "Began career as a junior analyst at a major investment firm.",
  },
  { year: "2015", title: "CFA Certification", description: "Obtained the Chartered Financial Analyst designation." },
  { year: "2018", title: "Portfolio Management", description: "Led portfolio management for high-net-worth clients." },
  {
    year: "2021",
    title: "Financial Education",
    description: "Launched content creation to democratize financial knowledge.",
  },
  {
    year: "2024",
    title: "Gabriela Rodrigues",
    description: "Created this platform as a comprehensive financial education resource.",
  },
];

const values = [
  {
    icon: Target,
    title: "Long-term Thinking",
    description: "Investing is a marathon. I focus on strategies that compound over decades.",
  },
  {
    icon: BookOpen,
    title: "Education First",
    description: "Financial literacy is the foundation of every good investment decision.",
  },
  {
    icon: Award,
    title: "Evidence-based",
    description: "Opinions backed by data, research, and proven financial principles.",
  },
  {
    icon: Briefcase,
    title: "Practical Approach",
    description: "Actionable advice you can implement today, not abstract theories.",
  },
];

const About = () => (
  <div>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="container relative py-16 md:py-24">
        <div className="flex flex-col items-start gap-10 md:flex-row md:gap-16">
          <div className="relative animate-fade-up">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-primary/20 via-accent/20 to-primary/20 blur-sm" />
            <img
              src={profilePhoto}
              alt="Financial advisor"
              className="relative h-56 w-56 rounded-2xl object-cover border-4 border-background shadow-2xl"
            />
          </div>
          <div className="flex-1 animate-fade-up animation-delay-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
              About
            </span>
            <h1 className="mt-4 font-display text-4xl text-foreground md:text-5xl">
              The story behind <span className="gradient-text">FinanceHub</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              With over a decade of experience in financial markets, I created FinanceHub to bridge the gap between
              complex financial concepts and everyday investors. My mission is to make quality financial education
              accessible to everyone.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-gradient-accent py-20">
      <div className="container">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Core Values</p>
        <h2 className="mt-1 font-display text-3xl text-foreground md:text-4xl">Philosophy & Values</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div
              key={i}
              className={`card-hover p-6 opacity-0 animate-fade-up animation-delay-${(i + 1) * 100}`}
              style={{ animationFillMode: "forwards" }}
            >
              <div className="icon-container">
                <v.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 font-display text-lg text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="container py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">Career</p>
      <h2 className="mt-1 font-display text-3xl text-foreground md:text-4xl">Journey</h2>
      <div className="relative mt-10 ml-4 border-l-2 border-accent/20 pl-8">
        {milestones.map((m, i) => (
          <div
            key={i}
            className={`relative mb-10 last:mb-0 opacity-0 animate-fade-up animation-delay-${(i + 1) * 100}`}
            style={{ animationFillMode: "forwards" }}
          >
            <div className="absolute -left-[2.6rem] top-1 h-4 w-4 rounded-full border-2 border-accent bg-background shadow-md shadow-accent/20" />
            <span className="inline-flex rounded-full bg-accent/10 px-3 py-0.5 text-xs font-semibold text-accent">
              {m.year}
            </span>
            <h3 className="mt-2 font-display text-lg text-foreground">{m.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{m.description}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Certifications */}
    <section className="section-gradient-accent py-20">
      <div className="container">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Credentials</p>
        <h2 className="mt-1 font-display text-3xl text-foreground md:text-4xl">Education & Certifications</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: "CFA Charterholder", org: "CFA Institute" },
            { title: "MBA in Finance", org: "Top Business School" },
            { title: "CFP Certification", org: "Financial Planning Board" },
          ].map((cert, i) => (
            <div
              key={i}
              className={`card-hover p-6 opacity-0 animate-fade-up animation-delay-${(i + 1) * 100}`}
              style={{ animationFillMode: "forwards" }}
            >
              <div className="icon-container">
                <Award className="h-5 w-5 text-accent" />
              </div>
              <h4 className="mt-4 font-semibold text-foreground">{cert.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{cert.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
