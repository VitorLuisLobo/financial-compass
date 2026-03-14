import { Link } from "react-router-dom";
import { Linkedin, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => (
  <footer className="relative overflow-hidden border-t border-border/30">
    {/* Subtle top glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    
    <div className="bg-surface-subtle">
      <div className="container relative py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="font-display text-xl text-foreground">Gabriela Rodrigues</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Sharing insights on finance, investing, and financial education.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground/80 uppercase tracking-wider">Navigation</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "Blog", path: "/blog" },
                { label: "Financial Library", path: "/library" },
                { label: "Learning Paths", path: "/learning-paths" },
                { label: "Projects", path: "/projects" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm text-muted-foreground transition-colors duration-300 hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground/80 uppercase tracking-wider">Categories</h4>
            <div className="flex flex-col gap-2.5">
              {["Personal Finance", "Investing Basics", "Fixed Income", "Stock Market"].map((cat) => (
                <Link
                  key={cat}
                  to="/blog"
                  className="text-sm text-muted-foreground transition-colors duration-300 hover:text-accent"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground/80 uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Mail, href: "mailto:contact@financehub.com" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-card/50 text-muted-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:border-accent hover:scale-110 hover:shadow-lg hover:shadow-accent/20"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border/30 pt-6 text-center text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} FinanceHub. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
