import ScrollReveal from "@/components/ScrollReveal";
import NewsletterSignup from "@/components/NewsletterSignup";

const NewsletterSection = () => (
  <section className="py-28 relative">
    {/* Section divider */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    {/* Subtle background glow */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-[300px] w-[500px] rounded-full bg-accent/[0.03] blur-[100px]" />
    </div>

    <div className="container relative">
      <ScrollReveal className="mx-auto max-w-lg">
        <NewsletterSignup />
      </ScrollReveal>
    </div>
  </section>
);

export default NewsletterSection;
