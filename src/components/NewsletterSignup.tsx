import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight, Check } from "lucide-react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-accent/20 bg-accent/5 p-8 text-center backdrop-blur-sm">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/20">
          <Check className="h-7 w-7 text-accent" />
        </div>
        <h3 className="font-display text-xl text-foreground">You're subscribed!</h3>
        <p className="mt-2 text-sm text-muted-foreground">Thanks for joining. Check your inbox soon.</p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-card/80 backdrop-blur-sm p-8 md:p-10">
      {/* Subtle glow */}
      <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-secondary/5 blur-3xl" />

      <div className="relative">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 border border-accent/10">
          <Mail className="h-6 w-6 text-accent" />
        </div>
        <h3 className="mt-4 font-display text-xl text-foreground">Stay informed</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Weekly insights on investing and personal finance. No spam.
        </p>
        <form onSubmit={handleSubmit} className="mt-5 flex gap-2">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 rounded-xl border-border bg-background/50 text-foreground placeholder:text-muted-foreground/50 focus:border-accent"
          />
          <Button type="submit" variant="gradient" className="group">
            Subscribe
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;
