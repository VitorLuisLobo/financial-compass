import { Link } from "react-router-dom";
import { Linkedin, Mail, Youtube, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-secondary/50">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="font-display text-lg text-primary">FinanceHub</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Sharing insights on finance, investing, and financial education.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Navigation</h4>
          <div className="flex flex-col gap-2">
            {["About", "Blog", "Financial Library", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(" ", "-").replace("financial-", "")}`}
                className="text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Categories</h4>
          <div className="flex flex-col gap-2">
            {["Personal Finance", "Investing Basics", "Fixed Income", "Stock Market"].map((cat) => (
              <Link key={cat} to="/blog" className="text-sm text-muted-foreground transition-colors hover:text-accent">
                {cat}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Connect</h4>
          <div className="flex gap-3">
            {[
              { icon: Linkedin, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Youtube, href: "#" },
              { icon: Mail, href: "mailto:contact@financehub.com" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} FinanceHub. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
