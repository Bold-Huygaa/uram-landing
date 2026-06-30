import { useLang } from "../i18n/i18n";
import { ui } from "../i18n/strings";

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
                {t.hero.ctaApple}
                <small>{t.hero.comingSoon}</small>
              </span>
              <span className="store-btn disabled">
                {t.hero.ctaGoogle}
                <small>{t.hero.comingSoon}</small>
              </span>
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
