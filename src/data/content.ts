// Shared data used across Blog, Library, and Index for cross-linking

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  relatedLibraryTopics: string[]; // slugified topic titles
  instagramUrl?: string;
}

export interface LibraryTopic {
  slug: string;
  title: string;
  content: string;
  relatedArticles: string[]; // article slugs
}

export interface LibraryCategory {
  slug: string;
  name: string;
  icon: string; // icon name for lookup
  description: string;
  topics: LibraryTopic[];
}

export interface BlogCategory {
  name: string;
  slug: string;
  description: string;
  count: number;
}

export const slugify = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const blogCategories: BlogCategory[] = [
  { name: "Personal Finance", slug: "personal-finance", description: "Budgeting, saving, and managing your money day to day.", count: 2 },
  { name: "Investing Basics", slug: "investing-basics", description: "Core concepts and fundamentals for new investors.", count: 3 },
  { name: "Fixed Income", slug: "fixed-income", description: "Bonds, CDBs, LCIs, and other fixed income instruments.", count: 2 },
  { name: "Stock Market", slug: "stock-market", description: "Equities, market cycles, and stock analysis.", count: 1 },
  { name: "Market Insights", slug: "market-insights", description: "Commentary and analysis on current market conditions.", count: 1 },
];

export const allArticles: Article[] = [
  { slug: "power-of-compound-interest", title: "The Power of Compound Interest", excerpt: "How small, consistent investments can grow into substantial wealth over time.", category: "Investing Basics", readTime: "5 min", date: "Mar 8, 2026", relatedLibraryTopics: ["risk-vs-return"] },
  { slug: "building-your-emergency-fund", title: "Building Your Emergency Fund", excerpt: "Why an emergency fund is the cornerstone of financial security and how to build one.", category: "Personal Finance", readTime: "4 min", date: "Mar 5, 2026", relatedLibraryTopics: ["emergency-fund", "saving-strategies"] },
  { slug: "understanding-treasury-bonds", title: "Understanding Treasury Bonds", excerpt: "A comprehensive guide to government bonds and their role in your portfolio.", category: "Fixed Income", readTime: "6 min", date: "Mar 1, 2026", relatedLibraryTopics: ["treasury-bonds", "what-is-selic"] },
  { slug: "diversification-beyond-the-basics", title: "Diversification: Beyond the Basics", excerpt: "Advanced strategies for building a truly diversified investment portfolio.", category: "Investing Basics", readTime: "7 min", date: "Feb 25, 2026", relatedLibraryTopics: ["portfolio-diversification", "risk-vs-return", "etfs-exchange-traded-funds"] },
  { slug: "stock-market-cycles-explained", title: "Stock Market Cycles Explained", excerpt: "Understanding bull and bear markets and how to position your investments.", category: "Stock Market", readTime: "8 min", date: "Feb 20, 2026", relatedLibraryTopics: ["understanding-volatility", "technical-vs-fundamental-analysis"] },
  { slug: "cdb-vs-lci-which-is-better", title: "CDB vs LCI: Which is Better?", excerpt: "Comparing two popular fixed income instruments for Brazilian investors.", category: "Fixed Income", readTime: "5 min", date: "Feb 15, 2026", relatedLibraryTopics: ["cdb-bank-deposit-certificate", "lci-real-estate-credit-letter", "investment-taxation"] },
  { slug: "inflation-and-your-purchasing-power", title: "Inflation and Your Purchasing Power", excerpt: "How inflation erodes wealth and strategies to protect yourself.", category: "Market Insights", readTime: "6 min", date: "Feb 10, 2026", relatedLibraryTopics: ["inflation-explained", "what-is-selic"] },
  { slug: "psychology-of-investing", title: "The Psychology of Investing", excerpt: "Common cognitive biases that hurt investors and how to overcome them.", category: "Investing Basics", readTime: "7 min", date: "Feb 5, 2026", relatedLibraryTopics: ["risk-vs-return", "understanding-volatility"] },
  { slug: "creating-a-budget-that-works", title: "Creating a Budget That Works", excerpt: "Practical budgeting methods that fit real life, not just spreadsheets.", category: "Personal Finance", readTime: "4 min", date: "Jan 30, 2026", relatedLibraryTopics: ["budget-planning", "saving-strategies"] },
];

export const libraryData: LibraryCategory[] = [
  {
    slug: "investing-basics",
    name: "Investing Basics",
    icon: "TrendingUp",
    description: "Core concepts every investor needs to understand.",
    topics: [
      { slug: "what-is-cdi", title: "What is CDI?", content: "CDI (Certificado de Depósito Interbancário) is the benchmark interest rate for interbank lending in Brazil. It closely follows the Selic rate and is the most common reference for fixed income investments. When an investment yields '100% of CDI,' it means the return matches the interbank rate. Understanding CDI is essential for evaluating any fixed income product in the Brazilian market.", relatedArticles: [] },
      { slug: "what-is-selic", title: "What is Selic?", content: "The Selic rate is Brazil's base interest rate, set by the Central Bank's monetary policy committee (COPOM). It influences all other interest rates in the economy, from savings accounts to business loans. When the Selic rises, fixed income becomes more attractive; when it falls, investors often look toward equities for better returns.", relatedArticles: ["understanding-treasury-bonds", "inflation-and-your-purchasing-power"] },
      { slug: "inflation-explained", title: "Inflation Explained", content: "Inflation is the rate at which the general price level of goods and services rises over time. It erodes purchasing power, meaning your money buys less over time. In Brazil, inflation is primarily measured by the IPCA index. Investments should ideally outpace inflation to generate real returns and preserve wealth.", relatedArticles: ["inflation-and-your-purchasing-power"] },
      { slug: "risk-vs-return", title: "Risk vs Return", content: "The relationship between risk and return is fundamental to investing. Higher potential returns generally come with higher risk. Understanding your risk tolerance and investment horizon helps you choose the right mix of assets. Diversification across asset classes helps manage risk without sacrificing too much potential return.", relatedArticles: ["power-of-compound-interest", "diversification-beyond-the-basics", "psychology-of-investing"] },
    ],
  },
  {
    slug: "financial-products",
    name: "Financial Products",
    icon: "Landmark",
    description: "Understanding different investment instruments.",
    topics: [
      { slug: "cdb-bank-deposit-certificate", title: "CDB (Bank Deposit Certificate)", content: "CDB is a fixed income security issued by banks. When you buy a CDB, you're essentially lending money to the bank in exchange for interest. CDBs can be prefixed (fixed rate), post-fixed (linked to CDI), or inflation-linked. They are covered by the FGC (credit guarantee fund) up to R$250,000 per institution.", relatedArticles: ["cdb-vs-lci-which-is-better"] },
      { slug: "lci-real-estate-credit-letter", title: "LCI (Real Estate Credit Letter)", content: "LCI is a fixed income security backed by real estate loans. Its main advantage is tax exemption for individual investors — you don't pay income tax on the returns. This makes LCI particularly attractive when comparing net returns with taxable alternatives like CDBs.", relatedArticles: ["cdb-vs-lci-which-is-better"] },
      { slug: "treasury-bonds", title: "Treasury Bonds", content: "Treasury bonds (Tesouro Direto) are government securities, considered the safest investments in Brazil. Options include Tesouro Selic (post-fixed), Tesouro Prefixado (fixed rate), and Tesouro IPCA+ (inflation-linked). They're ideal for building an emergency fund or long-term wealth with minimal risk.", relatedArticles: ["understanding-treasury-bonds"] },
      { slug: "etfs-exchange-traded-funds", title: "ETFs (Exchange-Traded Funds)", content: "ETFs are funds that track an index and trade on the stock exchange like regular stocks. They offer instant diversification at low cost. Popular examples include BOVA11 (tracks Ibovespa) and IVVB11 (tracks S&P 500). ETFs are excellent for passive investors seeking broad market exposure.", relatedArticles: ["diversification-beyond-the-basics"] },
    ],
  },
  {
    slug: "financial-organization",
    name: "Financial Organization",
    icon: "PiggyBank",
    description: "Building the foundation for financial success.",
    topics: [
      { slug: "emergency-fund", title: "Emergency Fund", content: "An emergency fund is money set aside for unexpected expenses like medical bills, car repairs, or job loss. Financial experts recommend saving 3-6 months of essential expenses. Keep this fund in highly liquid, low-risk investments like Tesouro Selic or a high-yield savings account. Building an emergency fund should be your first financial priority.", relatedArticles: ["building-your-emergency-fund"] },
      { slug: "budget-planning", title: "Budget Planning", content: "A budget is your plan for how to allocate income across expenses, savings, and investments. The 50-30-20 rule is a popular starting point: 50% for needs, 30% for wants, and 20% for savings and investments. Track your spending for a month to understand where your money goes, then create a budget that aligns with your financial goals.", relatedArticles: ["creating-a-budget-that-works"] },
      { slug: "saving-strategies", title: "Saving Strategies", content: "Effective saving starts with paying yourself first — automate transfers to savings and investment accounts right after receiving your income. Use specific savings goals (emergency fund, vacation, down payment) to stay motivated. Consider using separate accounts for different goals and take advantage of automatic investment platforms.", relatedArticles: ["building-your-emergency-fund", "creating-a-budget-that-works"] },
    ],
  },
  {
    slug: "market-analysis",
    name: "Market Analysis",
    icon: "BarChart3",
    description: "Understanding market dynamics and indicators.",
    topics: [
      { slug: "reading-financial-statements", title: "Reading Financial Statements", content: "Financial statements are the backbone of fundamental analysis. The three key statements are the income statement (profitability), balance sheet (financial position), and cash flow statement (money movement). Key metrics include P/E ratio, debt-to-equity ratio, and return on equity. Learning to read these documents helps you make informed investment decisions.", relatedArticles: [] },
      { slug: "technical-vs-fundamental-analysis", title: "Technical vs Fundamental Analysis", content: "Fundamental analysis evaluates a company's intrinsic value through financial statements, industry position, and economic factors. Technical analysis studies price patterns and trading volume to predict future movements. Most successful investors use a combination of both approaches, with fundamentals for stock selection and technicals for timing.", relatedArticles: ["stock-market-cycles-explained"] },
    ],
  },
  {
    slug: "risk-management",
    name: "Risk Management",
    icon: "Shield",
    description: "Protecting your portfolio and managing downside.",
    topics: [
      { slug: "portfolio-diversification", title: "Portfolio Diversification", content: "Diversification spreads risk across different asset classes, sectors, and geographies. A well-diversified portfolio might include stocks, bonds, real estate, and international exposure. The goal isn't to eliminate risk entirely but to reduce the impact of any single investment's poor performance on your overall portfolio.", relatedArticles: ["diversification-beyond-the-basics"] },
      { slug: "understanding-volatility", title: "Understanding Volatility", content: "Volatility measures how much an investment's price fluctuates over time. Higher volatility means larger price swings, both up and down. While volatility is often associated with risk, it also creates opportunities. Long-term investors should expect and accept short-term volatility as the cost of potentially higher returns.", relatedArticles: ["stock-market-cycles-explained", "psychology-of-investing"] },
    ],
  },
  {
    slug: "tax-planning",
    name: "Tax & Planning",
    icon: "DollarSign",
    description: "Optimizing your finances through tax efficiency.",
    topics: [
      { slug: "investment-taxation", title: "Investment Taxation", content: "Understanding how investments are taxed is crucial for maximizing after-tax returns. In Brazil, fixed income follows a regressive tax table (from 22.5% to 15% based on holding period). Stock market gains up to R$20,000/month are tax-exempt for individuals. Some products like LCI, LCA, and CRI are tax-free. Always compare investments on an after-tax basis.", relatedArticles: ["cdb-vs-lci-which-is-better"] },
      { slug: "retirement-planning", title: "Retirement Planning", content: "Planning for retirement requires estimating future expenses, understanding how much to save, and choosing the right investment vehicles. Private pension plans (PGBL and VGBL) offer tax advantages in Brazil. Start early to benefit from compound interest — even small monthly contributions can grow significantly over decades.", relatedArticles: [] },
    ],
  },
];

// Helper to find a topic across all categories
export const findLibraryTopic = (topicSlug: string) => {
  for (const cat of libraryData) {
    const topic = cat.topics.find((t) => t.slug === topicSlug);
    if (topic) return { category: cat, topic };
  }
  return null;
};

export const findArticle = (articleSlug: string) =>
  allArticles.find((a) => a.slug === articleSlug);
