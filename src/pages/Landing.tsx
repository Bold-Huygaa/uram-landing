import { useLang } from "../i18n/i18n";
import { ui } from "../i18n/strings";

function GooglePlayIcon() {
  return (
    <svg
      className="store-btn-icon"
      viewBox="0 0 512 512"
      width="26"
      height="26"
      aria-hidden
    >
      <path fill="#00d0ff" d="M47 20 285 258 47 496c-9-5-15-15-15-27V47c0-12 6-22 15-27z" />
      <path fill="#00f076" d="M47 20c5-3 11-4 18-1l286 165-67 74z" />
      <path fill="#ff3a44" d="M351 184 418 223c22 13 22 53 0 66l-67 39-67-74z" />
      <path fill="#ffc900" d="M65 495c-7 3-13 2-18-1l238-236 67 74z" />
    </svg>
  );
}

export default function Landing() {
  const { lang } = useLang();
  const t = ui[lang];

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="badge">{t.hero.badge}</span>
            <h1 className="hero-title">{t.hero.title}</h1>
            <p className="hero-sub">{t.hero.subtitle}</p>
            <div className="store-buttons">
              <span className="store-btn disabled">
                <span className="store-btn-text">
                  {t.hero.ctaApple}
                  <small>{t.hero.comingSoon}</small>
                </span>
              </span>
              <a
                className="store-btn"
                href="https://play.google.com/store/apps/details?id=orange.tech.bold.thanks"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GooglePlayIcon />
                <span className="store-btn-text">{t.hero.ctaGoogle}</span>
              </a>
            </div>
          </div>

          <div className="hero-shot">
            <div className="phone">
              <span className="phone-notch" aria-hidden />
              <img
                src="/app-screen.png"
                alt="Uram app feed"
                width={300}
                height={650}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container feature-strip">
        {t.features.items.map((f) => (
          <div key={f.title} className="feature-item">
            <h3>{f.title}</h3>
            <p>{f.body}</p>
          </div>
        ))}
      </section>
    </>
  );
}
