import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, BookOpen } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const trustItems = [
  { label: "10+ Years Experience", icon: Award },
  { label: "500+ Investors Educated", icon: Users },
  { label: "50+ Articles", icon: BookOpen },
];

const HeroSection = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${window.scrollY * 0.12}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[100vh] flex items-center">
      {/* Background layers */}
      <div className="absolute inset-0 hero-mesh" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Orbs */}
      <div className="absolute top-[10%] right-[5%] h-[500px] w-[500px] hero-orb bg-accent/[0.06]" />
      <div className="absolute bottom-[5%] left-[10%] h-[400px] w-[400px] hero-orb hero-orb-2 bg-secondary/[0.05]" />
      <div className="absolute top-[50%] left-[50%] h-[300px] w-[300px] hero-orb bg-primary/[0.04]" style={{ animationDelay: '-3s', animationDuration: '14s' }} />

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="container relative py-16 md:py-0">
        <div className="grid min-h-[85vh] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">

          {/* Left content — 7 cols */}
          <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
            {/* Badge */}
            <div className="opacity-0 animate-fade-up">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent/[0.06] px-5 py-2.5 text-sm font-medium text-accent backdrop-blur-xl">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Financial Advisor & Educator
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-10 leading-[1.02] tracking-tight opacity-0 animate-fade-up animation-delay-200">
              <span className="block text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[5rem] font-extrabold text-foreground hero-title-glow">
                Invest with
              </span>
              <span className="block text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[5rem] font-extrabold text-foreground mt-1">
                clarity, grow
              </span>
              <span className="block text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[5rem] font-extrabold mt-1">
                <span className="text-foreground">with </span>
                <span className="relative inline-block">
                  <span className="hero-gradient-text">confidence.</span>
                  <span className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-accent via-secondary/60 to-transparent animate-hero-underline" />
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-8 max-w-lg text-lg md:text-xl text-muted-foreground leading-relaxed font-light opacity-0 animate-fade-up animation-delay-300">
              Sharing insights on finance, investing and financial education.
              <span className="text-foreground/80 font-normal"> Building knowledge that lasts.</span>
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start opacity-0 animate-fade-up animation-delay-400">
              <Button variant="gradient" size="lg" asChild className="btn-shimmer group text-base px-10 py-7 shadow-lg shadow-accent/20 hover:shadow-2xl hover:shadow-accent/30 transition-all duration-500 rounded-2xl">
                <Link to="/blog">
                  Read Articles
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild className="group text-base px-10 py-7 rounded-2xl backdrop-blur-sm transition-all duration-500">
                <Link to="/library">
                  Explore Library
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                </Link>
              </Button>
            </div>

            {/* Trust row */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 opacity-0 animate-fade-up animation-delay-600">
              {trustItems.map((item, i) => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 border border-accent/10">
                    <item.icon className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                  {i < trustItems.length - 1 && (
                    <div className="hidden sm:block ml-3 h-4 w-px bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Profile image — 5 cols */}
          <div className="relative flex items-center justify-center lg:col-span-5 opacity-0 animate-fade-up animation-delay-300">
            {/* Glowing backdrop */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[80%] w-[80%] rounded-full bg-gradient-to-br from-accent/12 via-secondary/8 to-accent/5 blur-[80px]" />
            </div>
            {/* Accent ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[340px] w-[340px] md:h-[420px] md:w-[420px] lg:h-[480px] lg:w-[480px] rounded-full border border-accent/10" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[380px] w-[380px] md:h-[460px] md:w-[460px] lg:h-[520px] lg:w-[520px] rounded-full border border-border/30" />
            </div>

            <img
              ref={imageRef}
              src={profilePhoto}
              alt="Financial advisor profile"
              className="relative w-full max-w-[320px] md:max-w-[400px] lg:max-w-[460px] h-auto object-contain will-change-transform"
              style={{
                filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.5))',
                maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
              }}
              loading="eager"
            />

            {/* Floating stat cards */}
            <div className="absolute top-[15%] right-0 lg:-right-4 glass rounded-2xl px-4 py-3 opacity-0 animate-fade-up animation-delay-700">
              <p className="text-xs text-muted-foreground">Experience</p>
              <p className="text-lg font-bold text-foreground">10+ Years</p>
            </div>
            <div className="absolute bottom-[20%] left-0 lg:-left-4 glass rounded-2xl px-4 py-3 opacity-0 animate-fade-up animation-delay-800">
              <p className="text-xs text-muted-foreground">Investors Educated</p>
              <p className="text-lg font-bold text-accent">500+</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
};

export default HeroSection;
