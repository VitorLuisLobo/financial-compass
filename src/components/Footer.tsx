import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/20">
    <div className="container py-16">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
            Gabriela Rodrigues
          </h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Sharing insights on finance, investing, and financial education.
          </p>
        </div>

        <div className="flex gap-16">
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">Navigate</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Blog", path: "/blog" },
                { label: "Library", path: "/library" },
                { label: "Learning Paths", path: "/learning-paths" },
                { label: "Projects", path: "/projects" },
              ].map((item) => (
                <Link key={item.path} to={item.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              {["About", "Contact"].map((label) => (
                <Link key={label} to={`/${label.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {label}
                </Link>
              ))}
              <a href="mailto:contact@financehub.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 pt-6 border-t border-border/20 text-xs text-muted-foreground/50">
        © {new Date().getFullYear()} Gabriela Rodrigues. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
