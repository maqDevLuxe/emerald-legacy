import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "../components/AnimatedSection";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Eye, Scale, TrendingUp, Calculator, ChevronRight, Star, ExternalLink, Lock, FileCheck, Users } from "lucide-react";

/* ───── 1. HERO SECTION ───── */
const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden flex items-center">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1585399000684-d2f72660f092?w=1920&q=80"
          alt="Modern Middle Eastern architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-pattern-islamic opacity-20" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 section-padding max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="label-gold mb-6"
        >
          Shariah-Compliant Investment Excellence
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="heading-display text-foreground mb-8"
        >
          Where Faith Meets
          <br />
          <span className="text-primary">Financial Wisdom</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12"
        >
          Baraka Capital delivers institutional-grade halal investments, guided by a world-class Shariah board and proven ethical screening.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            to="/portal"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-sans text-sm uppercase tracking-[0.2em] font-bold hover:shadow-[var(--shadow-gold-hover)] transition-all duration-500"
          >
            Begin Your Journey <ArrowRight size={16} />
          </Link>
          <Link
            to="/ethics"
            className="inline-flex items-center gap-3 px-8 py-4 border border-border/50 text-foreground font-sans text-sm uppercase tracking-[0.2em] hover:border-primary/50 hover:text-primary transition-all duration-500"
          >
            Our Ethics
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent"
        />
      </motion.div>
    </section>
  );
};

/* ───── 2. SHARIAH BOARD ───── */
const shariahBoard = [
  { name: "Dr. Ahmad Al-Rashid", role: "Chairman, Shariah Board", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", bio: "40+ years in Islamic jurisprudence. Former advisor to the Central Bank of Kuwait." },
  { name: "Sheikh Yusuf Al-Qaradawi", role: "Lead Shariah Scholar", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80", bio: "Author of 30+ books on Islamic finance. PhD from Al-Azhar University." },
  { name: "Dr. Fatima Al-Fihri", role: "ESG & Ethics Director", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80", bio: "Pioneer in ethical screening frameworks. Harvard & INSEAD educated." },
];

const ShariahBoardSection = () => (
  <section className="section-padding bg-pattern-islamic">
    <AnimatedSection className="text-center mb-20">
      <p className="label-gold mb-4">Scholarly Oversight</p>
      <h2 className="heading-section text-foreground">Our Shariah Board</h2>
    </AnimatedSection>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {shariahBoard.map((member, i) => (
        <AnimatedSection key={member.name} delay={i * 0.15}>
          <div className="group text-center">
            <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-2 border-border/30 group-hover:border-primary/50 transition-all duration-700 gold-glow">
              <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
            <h3 className="font-serif text-xl text-foreground mb-1">{member.name}</h3>
            <p className="text-primary text-sm font-sans mb-3">{member.role}</p>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{member.bio}</p>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

/* ───── 3. ETHICAL SCREENING ───── */
const screeningSteps = [
  { icon: Eye, title: "Industry Screening", desc: "Excludes alcohol, gambling, tobacco, weapons, and conventional finance." },
  { icon: Scale, title: "Financial Ratios", desc: "Debt-to-equity, interest income, and receivables scrutinized against AAOIFI standards." },
  { icon: Shield, title: "Purification", desc: "Any inadvertent non-compliant income is identified and directed to charitable causes." },
  { icon: FileCheck, title: "Continuous Audit", desc: "Quarterly re-evaluation of every holding by our independent Shariah board." },
];

const EthicalScreeningSection = () => (
  <section className="section-padding">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection className="text-center mb-20">
        <p className="label-gold mb-4">Rigorous Compliance</p>
        <h2 className="heading-section text-foreground">Ethical Screening Process</h2>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {screeningSteps.map((step, i) => (
          <AnimatedSection key={step.title} delay={i * 0.1}>
            <div className="p-8 rounded-lg border border-border/30 bg-card/50 hover:border-primary/30 hover:shadow-[var(--shadow-gold)] transition-all duration-500 h-full group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                <step.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

/* ───── 4. PROFIT SHARING ───── */
const ProfitSharingSection = () => (
  <section className="section-padding bg-card/30">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection className="text-center mb-20">
        <p className="label-gold mb-4">Islamic Finance Models</p>
        <h2 className="heading-section text-foreground">Profit Sharing Structures</h2>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Mudarabah", ratio: "70 / 30", desc: "We manage, you invest. Profits are shared based on a pre-agreed ratio. Losses borne only by the capital provider.", tag: "Trust-Based" },
          { title: "Musharakah", ratio: "50 / 50", desc: "Joint venture where both parties contribute capital and share profits and losses proportionally.", tag: "Partnership" },
          { title: "Wakalah", ratio: "Fixed Fee", desc: "We act as your agent with a fixed management fee. All investment returns belong to you.", tag: "Agency" },
        ].map((model, i) => (
          <AnimatedSection key={model.title} delay={i * 0.15}>
            <div className="relative p-10 rounded-lg border border-border/30 bg-card/50 hover:border-primary/30 transition-all duration-500 gold-glow group overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="text-xs font-sans uppercase tracking-wider px-3 py-1 bg-primary/10 text-primary rounded-full">{model.tag}</span>
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-2 mt-4">{model.title}</h3>
              <p className="text-primary text-3xl font-serif font-bold mb-4">{model.ratio}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{model.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

/* ───── 5. ASSET CLASS PERFORMANCE ───── */
const AssetPerformanceSection = () => (
  <section className="section-padding">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection className="text-center mb-20">
        <p className="label-gold mb-4">Proven Track Record</p>
        <h2 className="heading-section text-foreground">Asset Class Performance</h2>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { asset: "Global Halal Equities", ytd: "+18.4%", y3: "+52.1%", y5: "+94.7%", risk: "Medium" },
          { asset: "Sukuk Fixed Income", ytd: "+6.2%", y3: "+19.8%", y5: "+34.5%", risk: "Low" },
          { asset: "Halal Real Estate", ytd: "+12.1%", y3: "+38.6%", y5: "+71.2%", risk: "Medium-High" },
          { asset: "Islamic Private Equity", ytd: "+24.7%", y3: "+68.3%", y5: "+142.8%", risk: "High" },
        ].map((item, i) => (
          <AnimatedSection key={item.asset} delay={i * 0.1}>
            <div className="p-8 rounded-lg border border-border/30 bg-card/50 hover:border-primary/30 transition-all duration-500 group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-serif text-lg text-foreground">{item.asset}</h3>
                  <span className="text-xs text-muted-foreground">{item.risk} Risk</span>
                </div>
                <TrendingUp size={20} className="text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "YTD", value: item.ytd },
                  { label: "3 Year", value: item.y3 },
                  { label: "5 Year", value: item.y5 },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{stat.label}</p>
                    <p className="text-xl font-serif text-primary font-bold">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
      <AnimatedSection delay={0.4}>
        <p className="text-center text-xs text-muted-foreground mt-8">
          Past performance is not indicative of future results. All figures net of fees as of Q4 2025.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

/* ───── 6. HALAL PORTFOLIO BENTO GRID ───── */
const HalalPortfolioSection = () => (
  <section className="section-padding bg-card/30">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection className="text-center mb-20">
        <p className="label-gold mb-4">Current Holdings</p>
        <h2 className="heading-section text-foreground">Halal Portfolio</h2>
      </AnimatedSection>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
        {[
          { name: "Saudi Aramco", sector: "Energy", weight: "12%", className: "md:col-span-2 md:row-span-2" },
          { name: "QNB Group", sector: "Banking", weight: "8%", className: "" },
          { name: "DP World", sector: "Logistics", weight: "6%", className: "" },
          { name: "Emaar Properties", sector: "Real Estate", weight: "9%", className: "md:col-span-2" },
          { name: "Almarai", sector: "Consumer", weight: "5%", className: "" },
          { name: "STC", sector: "Telecom", weight: "7%", className: "" },
        ].map((holding, i) => (
          <AnimatedSection key={holding.name} delay={i * 0.08} className={`${holding.className}`}>
            <div className="h-full p-6 rounded-lg border border-border/30 bg-card/80 hover:border-primary/30 transition-all duration-500 flex flex-col justify-between gold-glow group">
              <div>
                <span className="text-xs text-primary uppercase tracking-wider">{holding.sector}</span>
                <h3 className="font-serif text-lg text-foreground mt-1">{holding.name}</h3>
              </div>
              <p className="text-2xl md:text-3xl font-serif text-primary font-bold">{holding.weight}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

/* ───── 7. ZAKAT CALCULATOR PREVIEW ───── */
const ZakatCalculatorSection = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <p className="label-gold mb-4">Financial Purification</p>
          <h2 className="heading-section text-foreground mb-6">Zakat Calculator</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Our integrated Zakat calculator helps you determine your annual obligation based on your portfolio value, ensuring complete compliance with Islamic giving requirements.
          </p>
          <div className="flex items-center gap-4">
            <Calculator size={24} className="text-primary" />
            <div>
              <p className="text-foreground font-serif text-lg">2.5% Nisab Rate</p>
              <p className="text-muted-foreground text-sm">Calculated on eligible wealth above the Nisab threshold</p>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="p-8 rounded-lg border border-border/30 bg-card/50">
            <div className="space-y-6">
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Portfolio Value</label>
                <div className="p-4 rounded bg-muted/30 border border-border/30 text-foreground font-serif text-2xl">$1,250,000</div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Zakat Due (2.5%)</label>
                <div className="p-4 rounded bg-primary/10 border border-primary/30 text-primary font-serif text-2xl font-bold">$31,250</div>
              </div>
              <Link to="/portal" className="inline-flex items-center gap-2 text-primary text-sm font-sans uppercase tracking-wider hover:gap-4 transition-all duration-300">
                Calculate Yours <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

/* ───── 8. FULL WIDTH IMAGE ───── */
const FullWidthImageSection = () => (
  <section className="relative h-[60vh] overflow-hidden">
    <motion.img
      initial={{ scale: 1.1 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=80"
      alt="Islamic geometric architecture"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-background/40" />
    <div className="absolute inset-0 flex items-center justify-center">
      <AnimatedSection className="text-center">
        <p className="label-gold mb-4">Established 2008</p>
        <h2 className="heading-display text-foreground">Investing With Purpose</h2>
      </AnimatedSection>
    </div>
  </section>
);

/* ───── 9. AUM COUNTERS ───── */
const CounterItem = ({ value, label, suffix = "", delay = 0 }: { value: string; label: string; suffix?: string; delay?: number }) => (
  <AnimatedSection delay={delay} className="text-center">
    <p className="text-5xl md:text-6xl lg:text-7xl font-serif text-primary font-bold mb-2">
      {value}<span className="text-3xl">{suffix}</span>
    </p>
    <p className="text-sm text-muted-foreground uppercase tracking-widest">{label}</p>
  </AnimatedSection>
);

const AUMCountersSection = () => (
  <section className="section-padding bg-card/30">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        <CounterItem value="$4.2" suffix="B" label="Assets Under Management" delay={0} />
        <CounterItem value="12,000" suffix="+" label="Investors Worldwide" delay={0.1} />
        <CounterItem value="17" suffix="" label="Years of Excellence" delay={0.2} />
        <CounterItem value="98.6" suffix="%" label="Shariah Compliance Rate" delay={0.3} />
      </div>
    </div>
  </section>
);

/* ───── 10. ISLAMIC FINANCE NEWS ───── */
const news = [
  { title: "Global Sukuk Issuance Hits Record $200B in 2025", date: "Feb 28, 2026", tag: "Market" },
  { title: "Baraka Capital Launches Southeast Asia Halal Tech Fund", date: "Feb 15, 2026", tag: "Fund News" },
  { title: "AAOIFI Updates Shariah Standards for Digital Assets", date: "Jan 30, 2026", tag: "Regulation" },
];

const NewsSection = () => (
  <section className="section-padding">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection className="flex justify-between items-end mb-16">
        <div>
          <p className="label-gold mb-4">Stay Informed</p>
          <h2 className="heading-section text-foreground">Islamic Finance News</h2>
        </div>
        <Link to="/" className="hidden md:inline-flex items-center gap-2 text-primary text-sm uppercase tracking-wider hover:gap-4 transition-all duration-300">
          All News <ArrowRight size={14} />
        </Link>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {news.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.1}>
            <div className="p-8 rounded-lg border border-border/30 bg-card/50 hover:border-primary/30 transition-all duration-500 group cursor-pointer gold-glow h-full flex flex-col justify-between">
              <div>
                <span className="text-xs text-primary uppercase tracking-wider">{item.tag}</span>
                <h3 className="font-serif text-lg text-foreground mt-3 mb-4 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xs text-muted-foreground">{item.date}</p>
                <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

/* ───── 11. TRANSPARENCY PROTOCOL ───── */
const TransparencySection = () => (
  <section className="section-padding bg-card/30">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection className="text-center mb-20">
        <p className="label-gold mb-4">Trust & Governance</p>
        <h2 className="heading-section text-foreground">Transparency Protocol</h2>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Lock, title: "Quarterly Shariah Audit", desc: "Independent review of all holdings, transactions, and income sources published publicly." },
          { icon: FileCheck, title: "Real-Time Reporting", desc: "24/7 access to your portfolio composition, performance metrics, and compliance status." },
          { icon: Users, title: "Investor Governance", desc: "Annual general meeting with direct access to the Shariah board and fund managers." },
        ].map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.15}>
            <div className="text-center p-10">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <item.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

/* ───── 12. TESTIMONIALS ───── */
const testimonials = [
  { quote: "Baraka Capital gave me peace of mind that my wealth grows in full alignment with my values. Their transparency is unmatched.", name: "Khalid Al-Mansour", title: "UHNW Investor, Dubai" },
  { quote: "The performance speaks for itself, but what truly sets them apart is the depth of their Shariah scholarship and ethical commitment.", name: "Dr. Amina Bashir", title: "Family Office Director, London" },
  { quote: "Finally, an investment firm where I don't have to compromise between returns and faith. Baraka has been transformative.", name: "Tariq Hashmi", title: "Entrepreneur, Singapore" },
];

const TestimonialsSection = () => (
  <section className="section-padding">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection className="text-center mb-20">
        <p className="label-gold mb-4">Investor Voices</p>
        <h2 className="heading-section text-foreground">Testimonials</h2>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.15}>
            <div className="p-8 rounded-lg border border-border/30 bg-card/50 h-full flex flex-col justify-between gold-glow">
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-serif text-foreground text-lg italic leading-relaxed mb-8">"{t.quote}"</p>
              </div>
              <div>
                <p className="text-foreground font-sans font-bold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.title}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

/* ───── 13. OPEN ACCOUNT CTA ───── */
const CTASection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-pattern-islamic opacity-10" />
    <AnimatedSection className="relative z-10 text-center max-w-3xl mx-auto">
      <p className="label-gold mb-4">Begin Today</p>
      <h2 className="heading-display text-foreground mb-8">
        Your Ethical Investment
        <br />
        <span className="text-primary">Journey Starts Here</span>
      </h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-12">
        Join 12,000+ investors who trust Baraka Capital to grow their wealth in full compliance with Shariah principles.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/portal"
          className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-sans text-sm uppercase tracking-[0.2em] font-bold hover:shadow-[var(--shadow-gold-hover)] transition-all duration-500"
        >
          Open an Account <ChevronRight size={16} />
        </Link>
        <Link
          to="/portfolio"
          className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-border/50 text-foreground font-sans text-sm uppercase tracking-[0.2em] hover:border-primary/50 hover:text-primary transition-all duration-500"
        >
          View Portfolio
        </Link>
      </div>
    </AnimatedSection>
  </section>
);

/* ───── HOMEPAGE ───── */
const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <ShariahBoardSection />
      <EthicalScreeningSection />
      <ProfitSharingSection />
      <AssetPerformanceSection />
      <HalalPortfolioSection />
      <ZakatCalculatorSection />
      <FullWidthImageSection />
      <AUMCountersSection />
      <NewsSection />
      <TransparencySection />
      <TestimonialsSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;
