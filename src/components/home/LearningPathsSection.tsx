import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const learningPaths = [
{
  title: "Trilha Iniciante",
  steps: ["Organização financeira", "Reserva de emergência", "Primeiros investimentos", "Diversificação de carteira"],
  link: "/learning-paths"
},
{
  title: "Trilha de Investimentos",
  steps: ["Entendendo o risco", "Alocação de ativos", "Investimentos de longo prazo", "Investimento Passivo"],
  link: "/learning-paths"
}];


const LearningPathsSection = () =>
<section className="py-36">
    <div className="container">
      <ScrollReveal>
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">Guided Learning</p>
        <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>TRILHAS DE APRENDIZADO

      </h2>
        <div className="mt-8 h-px w-full bg-border/60" />
      </ScrollReveal>

      <div className="mt-14 grid gap-12 md:grid-cols-2">
        {learningPaths.map((path, i) =>
      <ScrollReveal key={path.title} delay={i * 150}>
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                {path.title}
              </h3>

              <div className="mt-8 space-y-5 flex-1">
                {path.steps.map((step, j) =>
            <div key={j} className="flex items-center gap-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/60 text-sm font-semibold text-muted-foreground">
                      {j + 1}
                    </span>
                    <span className="text-base text-foreground/80">{step}</span>
                  </div>
            )}
              </div>

              <Link
            to={path.link}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all duration-300 hover:gap-3 group">
            
                Start this path <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
      )}
      </div>
    </div>
  </section>;


export default LearningPathsSection;