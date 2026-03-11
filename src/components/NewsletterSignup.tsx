import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-accent/20 bg-accent/5 p-8 text-center">
        <Mail className="mx-auto mb-3 h-8 w-8 text-accent" />
        <h3 className="font-display text-xl text-foreground">You're subscribed!</h3>
        <p className="mt-1 text-sm text-muted-foreground">Thanks for joining. Check your inbox soon.</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-border bg-card p-8">
      <h3 className="font-display text-xl text-foreground">Stay informed</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Weekly insights on investing and personal finance. No spam.
      </p>
      <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button variant="accent" type="submit">Subscribe</Button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
