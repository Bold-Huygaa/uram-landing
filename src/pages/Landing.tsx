import { useLang } from "../i18n/i18n";
import { ui } from "../i18n/strings";

function AppleIcon() {
  return (
    <svg
      className="store-btn-icon"
      viewBox="0 0 384 512"
      width="24"
      height="24"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
      />
    </svg>
  );
}

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
              <a
                className="store-btn"
                href="https://testflight.apple.com/join/bz72gANk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AppleIcon />
                <span className="store-btn-text">
                  {t.hero.ctaApple}
                  <small>{t.hero.testflightNote}</small>
                </span>
              </a>
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

      <section className="container steps">
        <h2 className="steps-title">{t.features.title}</h2>
        <div className="steps-grid">
          {t.features.items.map((f, i) => (
            <div key={f.title} className="step-item">
              <div className="step-art">
                <img src={f.asset} alt={f.title} width={200} height={200} />
                <span className="step-num">{i + 1}</span>
              </div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
