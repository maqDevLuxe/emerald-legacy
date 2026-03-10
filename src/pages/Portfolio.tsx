import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import { TrendingUp, PieChart, BarChart3, Globe } from "lucide-react";

const funds = [
  { name: "Baraka Global Halal Equity Fund", type: "Equity", aum: "$1.8B", ytd: "+18.4%", inception: "2008", risk: "Medium", desc: "Diversified global equity fund investing in Shariah-compliant large and mid-cap companies." },
  { name: "Baraka Sukuk Income Fund", type: "Fixed Income", aum: "$920M", ytd: "+6.2%", inception: "2012", risk: "Low", desc: "Investment-grade sukuk portfolio delivering stable income with capital preservation." },
  { name: "Baraka GCC Real Estate Fund", type: "Real Estate", aum: "$650M", ytd: "+12.1%", inception: "2015", risk: "Medium-High", desc: "Direct and indirect halal real estate investments across the Gulf Cooperation Council." },
  { name: "Baraka Halal Tech Ventures", type: "Private Equity", aum: "$340M", ytd: "+24.7%", inception: "2020", risk: "High", desc: "Early to growth-stage investments in Shariah-compliant technology companies." },
];

const allocations = [
  { region: "GCC & MENA", pct: 35, color: "bg-primary" },
  { region: "Southeast Asia", pct: 25, color: "bg-emerald-light" },
  { region: "North America", pct: 20, color: "bg-gold-dark" },
  { region: "Europe", pct: 12, color: "bg-accent" },
  { region: "Other", pct: 8, color: "bg-muted" },
];

const Portfolio = () => (
  <>
    <Header />
    <main className="pt-20">
      <section className="section-padding">
        <div className="max-w-4xl">
          <AnimatedSection>
            <p className="label-gold mb-6">Investment Strategies</p>
            <h1 className="heading-display text-foreground mb-8">
              Our <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Four distinct Shariah-compliant funds designed to meet different risk appetites and return objectives.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Funds */}
      <section className="section-padding pt-0">
        <div className="max-w-6xl mx-auto space-y-6">
          {funds.map((fund, i) => (
            <AnimatedSection key={fund.name} delay={i * 0.1}>
              <div className="p-8 md:p-10 rounded-lg border border-border/30 bg-card/50 hover:border-primary/30 transition-all duration-500 gold-glow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <span className="text-xs text-primary uppercase tracking-wider">{fund.type}</span>
                    <h3 className="font-serif text-xl md:text-2xl text-foreground mt-1 mb-2">{fund.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{fund.desc}</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 shrink-0">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">AUM</p>
                      <p className="text-lg font-serif text-foreground">{fund.aum}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">YTD</p>
                      <p className="text-lg font-serif text-primary font-bold">{fund.ytd}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Since</p>
                      <p className="text-lg font-serif text-foreground">{fund.inception}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Risk</p>
                      <p className="text-lg font-serif text-foreground">{fund.risk}</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Geographic Allocation */}
      <section className="section-padding bg-card/30">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="label-gold mb-4">Global Reach</p>
            <h2 className="heading-section text-foreground">Geographic Allocation</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {allocations.map((a, i) => (
              <AnimatedSection key={a.region} delay={i * 0.08}>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground w-36 shrink-0">{a.region}</span>
                  <div className="flex-1 h-8 bg-muted/20 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${a.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${a.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                  <span className="text-sm text-primary font-bold w-12 text-right">{a.pct}%</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Key metrics */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, value: "14.8%", label: "Avg Annual Return" },
              { icon: PieChart, value: "100%", label: "Shariah Compliant" },
              { icon: BarChart3, value: "0.85", label: "Sharpe Ratio" },
              { icon: Globe, value: "32", label: "Countries Invested" },
            ].map((m, i) => (
              <AnimatedSection key={m.label} delay={i * 0.1} className="text-center">
                <m.icon size={28} className="text-primary mx-auto mb-4" />
                <p className="text-3xl font-serif text-foreground font-bold mb-1">{m.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{m.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Portfolio;
