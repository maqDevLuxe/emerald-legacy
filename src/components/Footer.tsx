import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-emerald-deep border-t border-border/30">
    <div className="section-padding pb-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <Link to="/" className="font-serif text-2xl text-foreground">
            Baraka<span className="text-primary">Capital</span>
          </Link>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Shariah-compliant wealth management guided by ethical principles and scholarly oversight.
          </p>
        </div>
        {[
          {
            title: "Company",
            links: [
              { label: "About Us", to: "/ethics" },
              { label: "Shariah Board", to: "/ethics" },
              { label: "Careers", to: "/" },
            ],
          },
          {
            title: "Invest",
            links: [
              { label: "Portfolio", to: "/portfolio" },
              { label: "Performance", to: "/portfolio" },
              { label: "Open Account", to: "/portal" },
            ],
          },
          {
            title: "Legal",
            links: [
              { label: "Privacy Policy", to: "/" },
              { label: "Terms of Service", to: "/" },
              { label: "Regulatory Info", to: "/" },
            ],
          },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="label-gold mb-6">{col.title}</h4>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          © 2026 Baraka Capital. All rights reserved. Licensed by DFSA.
        </p>
        <p className="text-xs text-muted-foreground">
          Guided by Shariah · Built on Trust · Delivering Returns
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
