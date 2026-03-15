import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check } from "lucide-react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/20 bg-accent/10">
          <Check className="h-5 w-5 text-accent" />
        </div>
        <p className="text-base font-semibold text-foreground">You're subscribed!</p>
        <p className="text-sm text-muted-foreground">Check your inbox soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <Input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 rounded-full border-border/60 bg-background/50 px-5 text-foreground placeholder:text-muted-foreground/50 focus:border-accent"
      />
      <Button type="submit" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-6 group">
        Subscribe
        <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Button>
    </form>
  );
};

export default NewsletterSignup;
