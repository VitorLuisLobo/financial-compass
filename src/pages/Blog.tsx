import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const allArticles = [
  { title: "The Power of Compound Interest", excerpt: "How small, consistent investments can grow into substantial wealth over time.", category: "Investing Basics", readTime: "5 min", date: "Mar 8, 2026" },
  { title: "Building Your Emergency Fund", excerpt: "Why an emergency fund is the cornerstone of financial security and how to build one.", category: "Personal Finance", readTime: "4 min", date: "Mar 5, 2026" },
  { title: "Understanding Treasury Bonds", excerpt: "A comprehensive guide to government bonds and their role in your portfolio.", category: "Fixed Income", readTime: "6 min", date: "Mar 1, 2026" },
  { title: "Diversification: Beyond the Basics", excerpt: "Advanced strategies for building a truly diversified investment portfolio.", category: "Investing Basics", readTime: "7 min", date: "Feb 25, 2026" },
  { title: "Stock Market Cycles Explained", excerpt: "Understanding bull and bear markets and how to position your investments.", category: "Stock Market", readTime: "8 min", date: "Feb 20, 2026" },
  { title: "CDB vs LCI: Which is Better?", excerpt: "Comparing two popular fixed income instruments for Brazilian investors.", category: "Fixed Income", readTime: "5 min", date: "Feb 15, 2026" },
  { title: "Inflation and Your Purchasing Power", excerpt: "How inflation erodes wealth and strategies to protect yourself.", category: "Market Insights", readTime: "6 min", date: "Feb 10, 2026" },
  { title: "The Psychology of Investing", excerpt: "Common cognitive biases that hurt investors and how to overcome them.", category: "Investing Basics", readTime: "7 min", date: "Feb 5, 2026" },
  { title: "Creating a Budget That Works", excerpt: "Practical budgeting methods that fit real life, not just spreadsheets.", category: "Personal Finance", readTime: "4 min", date: "Jan 30, 2026" },
];

const categories = ["All", "Personal Finance", "Investing Basics", "Fixed Income", "Stock Market", "Market Insights"];

const Blog = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = allArticles.filter((a) => {
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) || a.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "All" || a.category === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <div className="container py-16">
      <div className="animate-fade-up">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Blog</p>
        <h1 className="mt-2 font-display text-4xl text-foreground md:text-5xl">Articles & Insights</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Practical perspectives on investing, personal finance, and building long-term wealth.
        </p>
      </div>

      {/* Search & Filters */}
      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative max-w-sm flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((article, i) => (
          <Link
            key={i}
            to="#"
            className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-md"
          >
            <span className="text-xs font-medium text-accent">{article.category}</span>
            <h3 className="mt-2 font-display text-lg text-foreground group-hover:text-accent transition-colors">
              {article.title}
            </h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{article.excerpt}</p>
            <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime} read</span>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-muted-foreground">No articles found. Try a different search or category.</p>
      )}
    </div>
  );
};

export default Blog;
