import { Link } from "react-router-dom";
import { useLang } from "../i18n/i18n";
import { ui } from "../i18n/strings";
import type { LegalDoc } from "../content/legal";

export default function LegalPage({ doc }: { doc: Record<string, LegalDoc> }) {
  const { lang } = useLang();
  const t = ui[lang];
  const d = doc[lang];

  const formatted = new Date(d.updated).toLocaleDateString(
    lang === "mn" ? "mn-MN" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <article className="legal container">
      <Link to="/" className="back-link">
        {t.legal.backHome}
      </Link>
      <h1>{d.title}</h1>
      <p className="muted updated">
        {t.legal.lastUpdated}: {formatted}
      </p>
      <p className="legal-intro">{d.intro}</p>

      {d.sections.map((s) => (
        <section key={s.heading} className="legal-section">
          <h2>{s.heading}</h2>
          {s.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {s.list && (
            <ul>
              {s.list.map((li, i) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </article>
  );
}
