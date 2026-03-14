import ScrollReveal from "@/components/ScrollReveal";
import { Award, Users, BookOpen } from "lucide-react";

const stats = [
  { value: "10+", label: "Years Experience", icon: Award },
  { value: "500+", label: "Investors Educated", icon: Users },
  { value: "50+", label: "Articles Published", icon: BookOpen },
];

const StatsStrip = () => (
  <ScrollReveal className="relative z-10 -mt-20">
    <div className="container">
      <div className="glass rounded-3xl border border-border/40 px-8 py-8 md:py-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-0">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center justify-center gap-5 md:gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 border border-accent/10">
                <stat.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-3xl font-extrabold tracking-tight text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent" style={{ position: 'relative' }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </ScrollReveal>
);

export default StatsStrip;
