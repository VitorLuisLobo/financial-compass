import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { libraryData } from "@/data/content";

const libraryCategories = [
{ name: "Fundos de Investimento", slug: "investing-basics" },
{ name: "Produtos Financeiros", slug: "financial-products" },
{ name: "Organização Financeira", slug: "financial-organization" },
{ name: "Análise de Mercado", slug: "market-analysis" },
{ name: "Gestão de Risco", slug: "risk-management" },
{ name: "Impostos e Planejamento", slug: "tax-planning" }];


const LibrarySection = () =>
<section className="py-36">
    <div className="container">
      <ScrollReveal className="text-center mb-16">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">BASE DE CONHECIMENTO</p>
        <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
          BIBLIOTECA FINANCEIRA
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          Conteúdo organizado por tema. Explore qualquer categoria e construa uma base sólida de conhecimento.
        </p>
        <div className="mx-auto mt-8 h-px w-24 bg-border" />
      </ScrollReveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {libraryCategories.map((cat, i) =>
      <ScrollReveal key={cat.slug} delay={i * 60}>
            <Link
          to={`/library/${cat.slug}`}
          className="group flex items-center justify-between rounded-2xl border border-border/40 bg-card/30 p-7 transition-all duration-500 hover:bg-card/80 hover:border-border hover:shadow-lg">
          
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-accent/60" />
                <div>
                  <h3 className="text-base font-bold text-foreground group-hover:text-accent transition-colors duration-300" style={{ fontFamily: 'var(--font-display)' }}>
                    {cat.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {libraryData.find((c) => c.slug === cat.slug)?.topics.length || 0} tópicos
                  </p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-accent" />
            </Link>
          </ScrollReveal>
      )}
      </div>
    </div>
  </section>;


export default LibrarySection;