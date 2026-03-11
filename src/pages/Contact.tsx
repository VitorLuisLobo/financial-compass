import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container py-16">
      <div className="mx-auto max-w-2xl">
        <div className="animate-fade-up">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Get in Touch</p>
          <h1 className="mt-2 font-display text-4xl text-foreground md:text-5xl">Contact</h1>
          <p className="mt-3 text-muted-foreground">
            Have questions about investing or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { icon: Mail, label: "Email", value: "contact@financehub.com", href: "mailto:contact@financehub.com" },
            { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/financehub", href: "#" },
            { icon: MessageCircle, label: "WhatsApp", value: "Send a message", href: "#" },
          ].map(({ icon: Icon, label, value, href }, i) => (
            <a
              key={i}
              href={href}
              className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-all hover:border-accent/30 hover:shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="text-sm font-medium text-foreground">{value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-10 space-y-5 rounded-lg border border-border bg-card p-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Name</label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
            <Textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="How can I help?"
              rows={5}
              required
            />
          </div>
          <Button variant="accent" type="submit" className="gap-2">
            Send message <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
