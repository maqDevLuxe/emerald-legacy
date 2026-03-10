import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import { Shield, BookOpen, Scale, Heart, Eye, FileCheck } from "lucide-react";

const principles = [
  { icon: Shield, title: "Prohibition of Riba", desc: "All forms of interest-based transactions are strictly excluded. Our returns come from real economic activity and profit-sharing." },
  { icon: Eye, title: "Full Transparency", desc: "Every investment decision, fee structure, and compliance report is available to our investors in real-time." },
  { icon: Scale, title: "Justice & Fairness", desc: "Risk and reward are shared equitably. No party bears disproportionate burden in any transaction." },
  { icon: Heart, title: "Social Responsibility", desc: "A portion of all fund proceeds supports education, healthcare, and humanitarian causes across the Muslim world." },
  { icon: BookOpen, title: "Scholarly Governance", desc: "Our Shariah board of internationally recognized scholars reviews and approves every investment before execution." },
  { icon: FileCheck, title: "AAOIFI Compliance", desc: "Full adherence to the Accounting and Auditing Organization for Islamic Financial Institutions standards." },
];

const Ethics = () => (
  <>
    <Header />
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-islamic opacity-10" />
        <div className="relative z-10 max-w-4xl">
          <AnimatedSection>
            <p className="label-gold mb-6">Our Foundation</p>
            <h1 className="heading-display text-foreground mb-8">
              Ethics Are Not a Feature.
              <br />
              <span className="text-primary">They Are the Foundation.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              At Baraka Capital, Shariah compliance is not an overlay — it is the architecture upon which every decision, every investment, and every relationship is built.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding bg-card/30">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <p className="label-gold mb-4">Core Tenets</p>
            <h2 className="heading-section text-foreground">Guiding Principles</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <div className="p-8 rounded-lg border border-border/30 bg-card/50 hover:border-primary/30 transition-all duration-500 gold-glow h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <p.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Screening detail */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="label-gold mb-4">Our Process</p>
            <h2 className="heading-section text-foreground">How We Screen</h2>
          </AnimatedSection>
          <div className="space-y-8">
            {[
              { step: "01", title: "Universe Identification", desc: "We begin with a global universe of 40,000+ securities across all major exchanges." },
              { step: "02", title: "Sector Exclusion", desc: "Companies involved in haram industries are immediately removed: alcohol, gambling, conventional banking, weapons, tobacco, and adult entertainment." },
              { step: "03", title: "Financial Ratio Analysis", desc: "Remaining companies are tested against AAOIFI financial ratios: debt-to-market-cap < 30%, interest income < 5%, illiquid assets > 25%." },
              { step: "04", title: "Shariah Board Review", desc: "Our board of scholars conducts a qualitative review of business practices, governance, and social impact." },
              { step: "05", title: "Continuous Monitoring", desc: "Approved holdings are monitored quarterly. Any breach triggers immediate review and potential divestment." },
            ].map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.08}>
                <div className="flex gap-8 items-start p-6 rounded-lg hover:bg-card/30 transition-colors duration-300">
                  <span className="text-4xl font-serif text-primary/30 font-bold shrink-0">{step.step}</span>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Ethics;
