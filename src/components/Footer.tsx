import { Link } from "react-router-dom";
import { Linkedin, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => (
  <footer className="relative overflow-hidden bg-primary text-primary-foreground">
    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/20" />

    <div className="container relative py-14">
      <div className="grid gap-10 md:grid-cols-4">
        <div>
          <h3 className="font-display text-xl">FinanceHub</h3>
          <p className="mt-3 text-sm text-primary-foreground/70">
            Sharing insights on finance, investing, and financial education.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold text-primary-foreground/90">Navigation</h4>
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
                className="text-sm text-primary-foreground/60 transition-colors duration-300 hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold text-primary-foreground/90">Categories</h4>
          <div className="flex flex-col gap-2.5">
            {["Personal Finance", "Investing Basics", "Fixed Income", "Stock Market"].map((cat) => (
              <Link key={cat} to="/blog" className="text-sm text-primary-foreground/60 transition-colors duration-300 hover:text-accent">
                {cat}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold text-primary-foreground/90">Connect</h4>
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
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/10 text-primary-foreground/70 transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:scale-110 hover:shadow-lg hover:shadow-accent/30"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} FinanceHub. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
