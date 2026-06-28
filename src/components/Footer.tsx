import { Link } from "react-router-dom";
import { useLang } from "../i18n/i18n";
import { ui } from "../i18n/strings";

export default function Footer() {
  const { lang } = useLang();
  const t = ui[lang];
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <strong>Uram</strong> · uram.life
          <div className="muted">
            © {year} Uram. {t.footer.rights}
          </div>
        </div>
        <div className="footer-links">
          <Link to="/terms">{t.nav.terms}</Link>
          <Link to="/privacy">{t.nav.privacy}</Link>
          <Link to="/delete-account">
            {lang === "mn" ? "Бүртгэл устгах" : "Delete account"}
          </Link>
          <a href={`mailto:${t.footer.contactEmail}`}>
            {t.footer.contact}: {t.footer.contactEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}
