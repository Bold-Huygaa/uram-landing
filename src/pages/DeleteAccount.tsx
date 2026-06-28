import { Link } from "react-router-dom";
import { useLang } from "../i18n/i18n";
import { ui } from "../i18n/strings";

const content = {
  en: {
    title: "Delete your account",
    intro:
      "You can delete your Uram account and all associated data at any time. There are two ways to do this:",
    inAppHeading: "Option 1 — In the app (recommended)",
    inAppSteps: [
      "Open the Uram app and sign in.",
      "Go to your Profile tab.",
      "Tap the settings (gear) icon.",
      "Tap “Бүртгэл устгах” (Delete account) and confirm.",
    ],
    emailHeading: "Option 2 — By email",
    emailBody:
      "If you can’t access the app, email us from the address linked to your account and we will delete it within 30 days.",
    deletedHeading: "What gets deleted",
    deletedItems: [
      "Your account and profile",
      "All videos you uploaded",
      "Your comments, likes and reports",
    ],
    retentionNote:
      "Some records may be retained where required by law. Deletion is permanent and cannot be undone.",
    contact: "Contact",
  },
  mn: {
    title: "Бүртгэлээ устгах",
    intro:
      "Та Uram бүртгэл болон холбогдох бүх өгөгдлөө хүссэн үедээ устгаж болно. 2 арга бий:",
    inAppHeading: "1-р арга — Аппликейшн дотроос (зөвлөмж)",
    inAppSteps: [
      "Uram аппыг нээж нэвтэрнэ.",
      "Профайл таб руу орно.",
      "Тохиргооны (араа) icon дээр дарна.",
      "“Бүртгэл устгах” дарж баталгаажуулна.",
    ],
    emailHeading: "2-р арга — И-мэйлээр",
    emailBody:
      "Хэрэв та аппд нэвтэрч чадахгүй бол бүртгэлтэй и-мэйл хаягаасаа бидэн рүү бичээрэй, бид 30 хоногийн дотор устгана.",
    deletedHeading: "Юу устах вэ",
    deletedItems: [
      "Таны бүртгэл, профайл",
      "Таны байршуулсан бүх видео",
      "Таны сэтгэгдэл, лайк, гомдол",
    ],
    retentionNote:
      "Зарим бичлэгийг хуулиар шаардсан тохиолдолд хадгалж болно. Устгалт бүрмөсөн бөгөөд буцаах боломжгүй.",
    contact: "Холбоо барих",
  },
};

export default function DeleteAccount() {
  const { lang } = useLang();
  const t = ui[lang];
  const c = content[lang];
  const email = t.footer.contactEmail;

  return (
    <article className="legal container">
      <Link to="/" className="back-link">
        {t.legal.backHome}
      </Link>
      <h1>{c.title}</h1>
      <p className="legal-intro">{c.intro}</p>

      <section className="legal-section">
        <h2>{c.inAppHeading}</h2>
        <ol>
          {c.inAppSteps.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
      </section>

      <section className="legal-section">
        <h2>{c.emailHeading}</h2>
        <p>{c.emailBody}</p>
        <p>
          {c.contact}: <a href={`mailto:${email}`}>{email}</a>
        </p>
      </section>

      <section className="legal-section">
        <h2>{c.deletedHeading}</h2>
        <ul>
          {c.deletedItems.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
        <p className="muted">{c.retentionNote}</p>
      </section>
    </article>
  );
}
