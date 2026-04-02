import { useState, useEffect, useRef, useCallback } from "react";

interface StockData {
  stock: string;
  name: string;
  close: number;
  change: number;
  volume: number;
  category?: string;
  currency?: "BRL" | "USD";
}

const GLOBAL_SYMBOLS = "BTC,ETH,USDBRL,GC=F,CL=F";

const GLOBAL_META: Record<string, { name: string; category: string; currency: "BRL" | "USD" }> = {
  BTC: { name: "Bitcoin", category: "CRIPTO", currency: "USD" },
  ETH: { name: "Ethereum", category: "CRIPTO", currency: "USD" },
  USDBRL: { name: "Dólar Americano", category: "MOEDA", currency: "BRL" },
  "GC=F": { name: "Ouro", category: "COMMODITY", currency: "USD" },
  "CL=F": { name: "Petróleo WTI", category: "COMMODITY", currency: "USD" },
};

const formatBRL = (value: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);

const formatUSD = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);

const formatVolume = (value: number) => {
  if (!value) return "—";
  if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(1)}B`;
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(0)}K`;
  return value.toLocaleString("pt-BR");
};

const MarketTicker = () => {
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const prevStocks = useRef<StockData[]>([]);

  const fetchStocks = useCallback(async () => {
    try {
      const [b3Res, globalRes] = await Promise.all([
        fetch("https://brapi.dev/api/quote/list?limit=7&sortBy=volume&sortOrder=desc&token=demo"),
        fetch(`https://brapi.dev/api/quote/${GLOBAL_SYMBOLS}?token=demo`),
      ]);

      if (!b3Res.ok || !globalRes.ok) throw new Error("fetch failed");

      const [b3Json, globalJson] = await Promise.all([b3Res.json(), globalRes.json()]);

      const globalStocks: StockData[] = (globalJson.results ?? []).map((r: any) => {
        const meta = GLOBAL_META[r.symbol] ?? { name: r.shortName ?? r.symbol, category: "GLOBAL", currency: "USD" };
        return {
          stock: r.symbol,
          name: meta.name,
          close: r.regularMarketPrice,
          change: r.regularMarketChangePercent,
          volume: r.regularMarketVolume ?? 0,
          category: meta.category,
          currency: meta.currency,
        };
      });

      const b3Stocks: StockData[] = (b3Json.stocks ?? []).map((s: any) => ({
        stock: s.stock,
        name: s.name,
        close: s.close,
        change: s.change,
        volume: s.volume,
        category: undefined,
        currency: "BRL" as const,
      }));

      const combined = [...globalStocks, ...b3Stocks];
      prevStocks.current = combined;
      setStocks(combined);
      setLastUpdate(new Date());
      setError(false);
    } catch {
      setError(true);
      if (prevStocks.current.length > 0) {
        setStocks(prevStocks.current);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStocks();
    const interval = setInterval(fetchStocks, 60_000);
    return () => clearInterval(interval);
  }, [fetchStocks]);

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
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

        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-card">
                <th className="text-left py-3 px-4 font-body font-medium text-muted-foreground w-12">#</th>
                <th className="text-left py-3 px-4 font-body font-medium text-muted-foreground">Ativo</th>
                <th className="text-left py-3 px-4 font-body font-medium text-muted-foreground hidden sm:table-cell">Empresa</th>
                <th className="text-right py-3 px-4 font-body font-medium text-muted-foreground">Preço</th>
                <th className="text-right py-3 px-4 font-body font-medium text-muted-foreground">Variação 24h</th>
                <th className="text-right py-3 px-4 font-body font-medium text-muted-foreground hidden sm:table-cell">Volume</th>
              </tr>
            </thead>
            <tbody>
              {loading && stocks.length === 0 ? (
                Array.from({ length: 12 }).map((_, i) => (
                  <tr key={i} className="border-b border-border last:border-0">
                    <td className="py-3 px-4"><div className="h-4 w-6 bg-muted rounded animate-pulse" /></td>
                    <td className="py-3 px-4"><div className="h-4 w-16 bg-muted rounded animate-pulse" /></td>
                    <td className="py-3 px-4 hidden sm:table-cell"><div className="h-4 w-32 bg-muted rounded animate-pulse" /></td>
                    <td className="py-3 px-4"><div className="h-4 w-20 bg-muted rounded animate-pulse ml-auto" /></td>
                    <td className="py-3 px-4"><div className="h-4 w-16 bg-muted rounded animate-pulse ml-auto" /></td>
                    <td className="py-3 px-4 hidden sm:table-cell"><div className="h-4 w-20 bg-muted rounded animate-pulse ml-auto" /></td>
                  </tr>
                ))
              ) : (
                stocks.map((s, i) => {
                  const positive = s.change >= 0;
                  const price = s.currency === "USD" ? formatUSD(s.close) : formatBRL(s.close);
                  return (
                    <tr key={s.stock} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                      <td className="py-3 px-4 font-body text-muted-foreground tabular-nums">
                        {i + 1}
                      </td>
                      <td className="py-3 px-4 font-body font-medium text-foreground">
                        <span className="flex items-center gap-2">
                          {s.stock}
                          {s.category && (
                            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                              {s.category}
                            </span>
                          )}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-body text-muted-foreground text-sm hidden sm:table-cell truncate max-w-[200px]">
                        {s.name}
                      </td>
                      <td className="py-3 px-4 text-right font-body text-foreground tabular-nums">
                        {price}
                      </td>
                      <td className={`py-3 px-4 text-right font-body font-medium tabular-nums ${positive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                        {positive ? "+" : ""}
                        {s.change.toFixed(2)}%
                      </td>
                      <td className="py-3 px-4 text-right font-body text-muted-foreground tabular-nums hidden sm:table-cell">
                        {formatVolume(s.volume)}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {error && stocks.length > 0 && (
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Não foi possível atualizar. Exibindo últimos dados disponíveis.
          </p>
        )}
      </div>
    </section>
  );
};

export default MarketTicker;
