import { useState, useEffect, useRef, useCallback } from "react";

const SYMBOLS = ["^BVSP", "BTC", "ETH", "USDBRL", "PETR4", "VALE3"];
const DISPLAY_NAMES: Record<string, string> = {
  "^BVSP": "IBOVESPA",
  BTC: "Bitcoin",
  ETH: "Ethereum",
  USDBRL: "Dólar",
  PETR4: "PETR4",
  VALE3: "VALE3",
};

interface QuoteData {
  symbol: string;
  regularMarketPrice: number;
  regularMarketChangePercent: number;
  regularMarketDayHigh: number;
  regularMarketDayLow: number;
  currency?: string;
}

const formatPrice = (price: number, symbol: string) => {
  if (symbol === "BTC" || symbol === "ETH") {
    return price.toLocaleString("pt-BR", { style: "currency", currency: "USD" });
  }
  if (symbol === "USDBRL") {
    return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }
  if (symbol === "^BVSP") {
    return price.toLocaleString("pt-BR", { maximumFractionDigits: 0 });
  }
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};

const MarketTicker = () => {
  const [quotes, setQuotes] = useState<QuoteData[]>([]);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const prevQuotes = useRef<QuoteData[]>([]);

  const fetchQuotes = useCallback(async () => {
    try {
      const joined = SYMBOLS.join(",");
      const res = await fetch(`https://brapi.dev/api/quote/${joined}?token=demo`);
      if (!res.ok) throw new Error("fetch failed");
      const json = await res.json();
      const results: QuoteData[] = (json.results ?? []).map((r: any) => ({
        symbol: r.symbol,
        regularMarketPrice: r.regularMarketPrice,
        regularMarketChangePercent: r.regularMarketChangePercent,
        regularMarketDayHigh: r.regularMarketDayHigh,
        regularMarketDayLow: r.regularMarketDayLow,
        currency: r.currency,
      }));
      prevQuotes.current = results;
      setQuotes(results);
      setLastUpdate(new Date());
      setError(false);
    } catch {
      setError(true);
      if (prevQuotes.current.length > 0) {
        setQuotes(prevQuotes.current);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuotes();
    const interval = setInterval(fetchQuotes, 60_000);
    return () => clearInterval(interval);
  }, [fetchQuotes]);

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            <h2 className="font-display text-2xl text-foreground">Mercado ao vivo</h2>
          </div>
          {lastUpdate && (
            <span className="text-xs text-muted-foreground ml-auto">
              Atualizado às {lastUpdate.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
            </span>
          )}
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-card">
                <th className="text-left py-3 px-4 font-body font-medium text-muted-foreground">Ativo</th>
                <th className="text-right py-3 px-4 font-body font-medium text-muted-foreground">Preço</th>
                <th className="text-right py-3 px-4 font-body font-medium text-muted-foreground">Variação 24h</th>
                <th className="text-right py-3 px-4 font-body font-medium text-muted-foreground hidden sm:table-cell">Máxima</th>
                <th className="text-right py-3 px-4 font-body font-medium text-muted-foreground hidden sm:table-cell">Mínima</th>
              </tr>
            </thead>
            <tbody>
              {loading && quotes.length === 0 ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <tr key={i} className="border-b border-border last:border-0">
                    <td className="py-3 px-4"><div className="h-4 w-24 bg-muted rounded animate-pulse" /></td>
                    <td className="py-3 px-4"><div className="h-4 w-20 bg-muted rounded animate-pulse ml-auto" /></td>
                    <td className="py-3 px-4"><div className="h-4 w-16 bg-muted rounded animate-pulse ml-auto" /></td>
                    <td className="py-3 px-4 hidden sm:table-cell"><div className="h-4 w-20 bg-muted rounded animate-pulse ml-auto" /></td>
                    <td className="py-3 px-4 hidden sm:table-cell"><div className="h-4 w-20 bg-muted rounded animate-pulse ml-auto" /></td>
                  </tr>
                ))
              ) : (
                quotes.map((q) => {
                  const positive = q.regularMarketChangePercent >= 0;
                  return (
                    <tr key={q.symbol} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                      <td className="py-3 px-4 font-body font-medium text-foreground">
                        {DISPLAY_NAMES[q.symbol] ?? q.symbol}
                      </td>
                      <td className="py-3 px-4 text-right font-body text-foreground tabular-nums">
                        {formatPrice(q.regularMarketPrice, q.symbol)}
                      </td>
                      <td className={`py-3 px-4 text-right font-body font-medium tabular-nums ${positive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                        {positive ? "+" : ""}
                        {q.regularMarketChangePercent.toFixed(2)}%
                      </td>
                      <td className="py-3 px-4 text-right font-body text-muted-foreground tabular-nums hidden sm:table-cell">
                        {formatPrice(q.regularMarketDayHigh, q.symbol)}
                      </td>
                      <td className="py-3 px-4 text-right font-body text-muted-foreground tabular-nums hidden sm:table-cell">
                        {formatPrice(q.regularMarketDayLow, q.symbol)}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {error && quotes.length > 0 && (
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Não foi possível atualizar. Exibindo últimos dados disponíveis.
          </p>
        )}
      </div>
    </section>
  );
};

export default MarketTicker;
