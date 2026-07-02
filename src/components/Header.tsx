import { Link, NavLink, useLocation } from "react-router-dom";
import { useLang } from "../i18n/i18n";
import { ui } from "../i18n/strings";

export default function Header() {
  const { lang, setLang } = useLang();
  const t = ui[lang];
  const isHome = useLocation().pathname === "/";

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <img className="brand-mark" src="/logo.svg" alt="" aria-hidden width={28} height={28} />
          Uram
        </Link>

        <nav className="nav">
          <NavLink to="/" end className="nav-link">
            {t.nav.home}
          </NavLink>
          <NavLink to="/terms" className="nav-link">
            {t.nav.terms}
          </NavLink>
          <NavLink to="/privacy" className="nav-link">
            {t.nav.privacy}
          </NavLink>
        </nav>

        {!isHome && (
          <div className="lang-switch" role="group" aria-label="Language">
            <button
              className={lang === "en" ? "active" : ""}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <button
              className={lang === "mn" ? "active" : ""}
              onClick={() => setLang("mn")}
            >
              MN
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
