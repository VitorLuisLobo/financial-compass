import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Mail, MessageCircle, Send, ArrowRight } from "lucide-react";
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
    <div className="container py-16 md:py-20">
      <div className="mx-auto max-w-2xl">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">Get in Touch</span>
          <h1 className="mt-4 font-display text-4xl text-foreground md:text-5xl">Contact</h1>
          <p className="mt-3 text-muted-foreground">
            Have questions about investing or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            { icon: Mail, label: "Email", value: "contact@financehub.com", href: "mailto:contact@financehub.com" },
            { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/financehub", href: "#" },
            { icon: MessageCircle, label: "WhatsApp", value: "Send a message", href: "#" },
          ].map(({ icon: Icon, label, value, href }, i) => (
            <a
              key={i}
              href={href}
              className={`card-hover group flex items-center gap-3 p-5 opacity-0 animate-fade-up animation-delay-${(i + 1) * 100}`}
              style={{ animationFillMode: 'forwards' }}
            >
              <div className="icon-container shrink-0">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-300">{value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-12 card-hover space-y-6 p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">Name</label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                required
                className="rounded-xl"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">Email</label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                required
                className="rounded-xl"
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">Message</label>
            <Textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="How can I help?"
              rows={5}
              required
              className="rounded-xl"
            />
          </div>
          <Button variant="gradient" type="submit" className="group">
            Send message
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
