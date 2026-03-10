import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import { User, Mail, Lock, ArrowRight, Phone } from "lucide-react";
import { useState } from "react";

const Portal = () => {
  const [tab, setTab] = useState<"login" | "register">("register");

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="section-padding min-h-[calc(100vh-5rem)] flex items-center">
          <div className="max-w-5xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <p className="label-gold mb-6">Investor Portal</p>
                <h1 className="heading-display text-foreground mb-8">
                  Access Your
                  <br />
                  <span className="text-primary">Halal Wealth</span>
                </h1>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Manage your Shariah-compliant portfolio, track performance, calculate Zakat obligations, and access exclusive research — all in one secure platform.
                </p>
                <div className="space-y-4">
                  {[
                    "Real-time portfolio tracking",
                    "Integrated Zakat calculator",
                    "Shariah compliance certificates",
                    "Direct communication with fund managers",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="p-8 md:p-10 rounded-lg border border-border/30 bg-card/50">
                  {/* Tabs */}
                  <div className="flex mb-8 border-b border-border/30">
                    {(["register", "login"] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setTab(t)}
                        className={`flex-1 pb-4 text-sm uppercase tracking-widest font-sans transition-all duration-300 ${
                          tab === t
                            ? "text-primary border-b-2 border-primary"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {t === "register" ? "Open Account" : "Sign In"}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-5">
                    {tab === "register" && (
                      <div className="relative">
                        <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="w-full pl-12 pr-4 py-4 bg-muted/20 border border-border/30 rounded text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                        />
                      </div>
                    )}
                    <div className="relative">
                      <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full pl-12 pr-4 py-4 bg-muted/20 border border-border/30 rounded text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                    {tab === "register" && (
                      <div className="relative">
                        <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          className="w-full pl-12 pr-4 py-4 bg-muted/20 border border-border/30 rounded text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                        />
                      </div>
                    )}
                    <div className="relative">
                      <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full pl-12 pr-4 py-4 bg-muted/20 border border-border/30 rounded text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <button className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-sans text-sm uppercase tracking-[0.2em] font-bold hover:shadow-[var(--shadow-gold-hover)] transition-all duration-500">
                      {tab === "register" ? "Create Account" : "Sign In"} <ArrowRight size={16} />
                    </button>
                  </div>

                  <p className="text-xs text-muted-foreground text-center mt-6">
                    By proceeding, you agree to our terms and Shariah governance framework.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Portal;
