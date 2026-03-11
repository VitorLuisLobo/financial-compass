import { useState } from "react";
import { Search, BookOpen, ChevronRight, TrendingUp, Landmark, PiggyBank, BarChart3, Shield, DollarSign } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Topic {
  title: string;
  content: string;
}

interface Category {
  name: string;
  icon: React.ElementType;
  description: string;
  topics: Topic[];
}

const libraryData: Category[] = [
  {
    name: "Investing Basics",
    icon: TrendingUp,
    description: "Core concepts every investor needs to understand.",
    topics: [
      { title: "What is CDI?", content: "CDI (Certificado de Depósito Interbancário) is the benchmark interest rate for interbank lending in Brazil. It closely follows the Selic rate and is the most common reference for fixed income investments. When an investment yields '100% of CDI,' it means the return matches the interbank rate. Understanding CDI is essential for evaluating any fixed income product in the Brazilian market." },
      { title: "What is Selic?", content: "The Selic rate is Brazil's base interest rate, set by the Central Bank's monetary policy committee (COPOM). It influences all other interest rates in the economy, from savings accounts to business loans. When the Selic rises, fixed income becomes more attractive; when it falls, investors often look toward equities for better returns." },
      { title: "Inflation Explained", content: "Inflation is the rate at which the general price level of goods and services rises over time. It erodes purchasing power, meaning your money buys less over time. In Brazil, inflation is primarily measured by the IPCA index. Investments should ideally outpace inflation to generate real returns and preserve wealth." },
      { title: "Risk vs Return", content: "The relationship between risk and return is fundamental to investing. Higher potential returns generally come with higher risk. Understanding your risk tolerance and investment horizon helps you choose the right mix of assets. Diversification across asset classes helps manage risk without sacrificing too much potential return." },
    ],
  },
  {
    name: "Financial Products",
    icon: Landmark,
    description: "Understanding different investment instruments.",
    topics: [
      { title: "CDB (Bank Deposit Certificate)", content: "CDB is a fixed income security issued by banks. When you buy a CDB, you're essentially lending money to the bank in exchange for interest. CDBs can be prefixed (fixed rate), post-fixed (linked to CDI), or inflation-linked. They are covered by the FGC (credit guarantee fund) up to R$250,000 per institution." },
      { title: "LCI (Real Estate Credit Letter)", content: "LCI is a fixed income security backed by real estate loans. Its main advantage is tax exemption for individual investors — you don't pay income tax on the returns. This makes LCI particularly attractive when comparing net returns with taxable alternatives like CDBs." },
      { title: "Treasury Bonds", content: "Treasury bonds (Tesouro Direto) are government securities, considered the safest investments in Brazil. Options include Tesouro Selic (post-fixed), Tesouro Prefixado (fixed rate), and Tesouro IPCA+ (inflation-linked). They're ideal for building an emergency fund or long-term wealth with minimal risk." },
      { title: "ETFs (Exchange-Traded Funds)", content: "ETFs are funds that track an index and trade on the stock exchange like regular stocks. They offer instant diversification at low cost. Popular examples include BOVA11 (tracks Ibovespa) and IVVB11 (tracks S&P 500). ETFs are excellent for passive investors seeking broad market exposure." },
    ],
  },
  {
    name: "Financial Organization",
    icon: PiggyBank,
    description: "Building the foundation for financial success.",
    topics: [
      { title: "Emergency Fund", content: "An emergency fund is money set aside for unexpected expenses like medical bills, car repairs, or job loss. Financial experts recommend saving 3-6 months of essential expenses. Keep this fund in highly liquid, low-risk investments like Tesouro Selic or a high-yield savings account. Building an emergency fund should be your first financial priority." },
      { title: "Budget Planning", content: "A budget is your plan for how to allocate income across expenses, savings, and investments. The 50-30-20 rule is a popular starting point: 50% for needs, 30% for wants, and 20% for savings and investments. Track your spending for a month to understand where your money goes, then create a budget that aligns with your financial goals." },
      { title: "Saving Strategies", content: "Effective saving starts with paying yourself first — automate transfers to savings and investment accounts right after receiving your income. Use specific savings goals (emergency fund, vacation, down payment) to stay motivated. Consider using separate accounts for different goals and take advantage of automatic investment platforms." },
    ],
  },
  {
    name: "Market Analysis",
    icon: BarChart3,
    description: "Understanding market dynamics and indicators.",
    topics: [
      { title: "Reading Financial Statements", content: "Financial statements are the backbone of fundamental analysis. The three key statements are the income statement (profitability), balance sheet (financial position), and cash flow statement (money movement). Key metrics include P/E ratio, debt-to-equity ratio, and return on equity. Learning to read these documents helps you make informed investment decisions." },
      { title: "Technical vs Fundamental Analysis", content: "Fundamental analysis evaluates a company's intrinsic value through financial statements, industry position, and economic factors. Technical analysis studies price patterns and trading volume to predict future movements. Most successful investors use a combination of both approaches, with fundamentals for stock selection and technicals for timing." },
    ],
  },
  {
    name: "Risk Management",
    icon: Shield,
    description: "Protecting your portfolio and managing downside.",
    topics: [
      { title: "Portfolio Diversification", content: "Diversification spreads risk across different asset classes, sectors, and geographies. A well-diversified portfolio might include stocks, bonds, real estate, and international exposure. The goal isn't to eliminate risk entirely but to reduce the impact of any single investment's poor performance on your overall portfolio." },
      { title: "Understanding Volatility", content: "Volatility measures how much an investment's price fluctuates over time. Higher volatility means larger price swings, both up and down. While volatility is often associated with risk, it also creates opportunities. Long-term investors should expect and accept short-term volatility as the cost of potentially higher returns." },
    ],
  },
  {
    name: "Tax & Planning",
    icon: DollarSign,
    description: "Optimizing your finances through tax efficiency.",
    topics: [
      { title: "Investment Taxation", content: "Understanding how investments are taxed is crucial for maximizing after-tax returns. In Brazil, fixed income follows a regressive tax table (from 22.5% to 15% based on holding period). Stock market gains up to R$20,000/month are tax-exempt for individuals. Some products like LCI, LCA, and CRI are tax-free. Always compare investments on an after-tax basis." },
      { title: "Retirement Planning", content: "Planning for retirement requires estimating future expenses, understanding how much to save, and choosing the right investment vehicles. Private pension plans (PGBL and VGBL) offer tax advantages in Brazil. Start early to benefit from compound interest — even small monthly contributions can grow significantly over decades." },
    ],
  },
];

const Library = () => {
  const [search, setSearch] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<{ category: string; topic: Topic } | null>(null);

  const filteredCategories = libraryData
    .map((cat) => ({
      ...cat,
      topics: cat.topics.filter(
        (t) =>
          t.title.toLowerCase().includes(search.toLowerCase()) ||
          t.content.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((cat) => cat.topics.length > 0);

  return (
    <div className="container py-16">
      <div className="animate-fade-up">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Knowledge Base</p>
        <h1 className="mt-2 font-display text-4xl text-foreground md:text-5xl">Financial Library</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          A structured repository of financial knowledge organized by topics, not dates.
        </p>
      </div>

      {/* Search */}
      <div className="relative mt-8 max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search the library..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
      </div>

      {/* Selected Topic View */}
      {selectedTopic && (
        <div className="mt-8 animate-fade-in rounded-lg border border-accent/20 bg-card p-8">
          <button
            onClick={() => setSelectedTopic(null)}
            className="mb-4 text-sm font-medium text-accent hover:underline"
          >
            ← Back to library
          </button>
          <span className="text-xs font-medium text-accent">{selectedTopic.category}</span>
          <h2 className="mt-1 font-display text-2xl text-foreground">{selectedTopic.topic.title}</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{selectedTopic.topic.content}</p>
        </div>
      )}

      {/* Categories Grid */}
      {!selectedTopic && (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((cat, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <cat.icon className="h-6 w-6 text-accent" />
                <h3 className="font-display text-lg text-foreground">{cat.name}</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{cat.description}</p>
              <div className="mt-4 space-y-1">
                {cat.topics.map((topic, j) => (
                  <button
                    key={j}
                    onClick={() => setSelectedTopic({ category: cat.name, topic })}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm text-foreground transition-colors hover:bg-secondary"
                  >
                    <span className="flex items-center gap-2">
                      <BookOpen className="h-3.5 w-3.5 text-muted-foreground" />
                      {topic.title}
                    </span>
                    <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {!selectedTopic && filteredCategories.length === 0 && (
        <p className="mt-12 text-center text-muted-foreground">No topics found. Try a different search term.</p>
      )}
    </div>
  );
};

export default Library;
