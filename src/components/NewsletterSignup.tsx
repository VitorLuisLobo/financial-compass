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
      <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/20">
          <Check className="h-7 w-7 text-accent" />
        </div>
        <h3 className="font-display text-xl text-foreground">You're subscribed!</h3>
        <p className="mt-2 text-sm text-muted-foreground">Thanks for joining. Check your inbox soon.</p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-primary p-8 text-primary-foreground md:p-10">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/30" />
      <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/10">
          <Mail className="h-6 w-6 text-primary-foreground/80" />
        </div>
        <h3 className="mt-4 font-display text-xl text-primary-foreground">Stay informed</h3>
        <p className="mt-2 text-sm text-primary-foreground/70">
          Weekly insights on investing and personal finance. No spam.
        </p>
        <form onSubmit={handleSubmit} className="mt-5 flex gap-2">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 rounded-xl border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent"
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
