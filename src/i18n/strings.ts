import type { Lang } from "./i18n";

type UIStrings = {
  nav: { home: string; terms: string; privacy: string };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaApple: string;
    ctaGoogle: string;
    testflightNote: string;
  };
  features: {
    title: string;
    items: { asset: string; title: string; body: string }[];
  };
  iosGuide: {
    title: string;
    intro: string;
    steps: { title: string; body: string }[];
    note: string;
    cta: string;
  };
  safety: {
    title: string;
    body: string;
    items: string[];
  };
  footer: {
    rights: string;
    contact: string;
    contactEmail: string;
  };
  legal: {
    lastUpdated: string;
    backHome: string;
  };
};

export const ui: Record<Lang, UIStrings> = {
  en: {
    nav: { home: "Home", terms: "Terms", privacy: "Privacy" },
    hero: {
      badge: "Video community",
      title: "Uram",
      subtitle:
        "Send 3 short videos, share them on social, and get your event ticket as a QR code — right inside the app.",
      ctaApple: "Download for iOS",
      ctaGoogle: "Get it on Google Play",
      testflightNote: "TestFlight beta",
    },
    features: {
      title: "How it works",
      items: [
        {
          asset: "/onboarding/welcome.svg",
          title: "Welcome to Uram",
          body: "Send three short videos and get your event ticket.",
        },
        {
          asset: "/onboarding/record.svg",
          title: "Send a video",
          body: "Record up to 15 seconds on your phone and submit it — our team reviews and verifies each clip.",
        },
        {
          asset: "/onboarding/share.svg",
          title: "Share on social and add the link",
          body: "Once verified, share your video publicly on social media and paste the post link back into the app.",
        },
        {
          asset: "/onboarding/ticket.svg",
          title: "Get your ticket",
          body: "When your 3 videos are verified, your ticket appears as a QR code inside the Uram app.",
        },
      ],
    },
    iosGuide: {
      title: "How to install on iPhone (TestFlight)",
      intro:
        "Uram for iOS is currently distributed as a beta through Apple TestFlight. Installing takes about a minute:",
      steps: [
        {
          title: "Install TestFlight",
          body: "Download Apple's free TestFlight app from the App Store.",
        },
        {
          title: "Open the invite link",
          body: "Tap the “Download for iOS” button on this page — it opens the Uram invite in TestFlight.",
        },
        {
          title: "Accept & install",
          body: "In TestFlight tap Accept, then Install. Uram appears on your home screen like any other app.",
        },
      ],
      note: "Updates arrive automatically through TestFlight. When Uram launches on the App Store, you can switch to the store version.",
      cta: "Open TestFlight invite",
    },
    safety: {
      title: "Built for a safe community",
      body: "Uram has a zero-tolerance policy for objectionable content and abusive behavior. Every user agrees to our terms before posting, and our team responds to reports within 24 hours.",
      items: [
        "Report any video, comment or user",
        "Block users you don’t want to interact with",
        "Content filtering and human moderation",
        "Delete your account and data anytime",
      ],
    },
    footer: {
      rights: "All rights reserved.",
      contact: "Contact",
      contactEmail: "support@uram.life",
    },
    legal: {
      lastUpdated: "Last updated",
      backHome: "← Back to home",
    },
  },
  mn: {
    nav: { home: "Нүүр", terms: "Үйлчилгээний нөхцөл", privacy: "Нууцлал" },
    hero: {
      badge: "Урам өгцгөөе!",
      title: "Uram",
      subtitle:
        "Талархсан, сэтгэлийн үгээ хэлсэн, урам хайрласан үгээ илэрхийлсэн 3 богино видео илгээн, өөрийн сошиал сүлжээндээ public  тохиргоотой хуваалцааж, тоглолтын тасалбараа QR хэлбэрээр шууд апп дээрээ аваарай.",
      ctaApple: "iOS-д татах",
      ctaGoogle: "Google Play-ээс татах",
      testflightNote: "TestFlight beta",
    },
    features: {
      title: "Хэрхэн ажилладаг вэ",
      items: [
        {
          asset: "/onboarding/welcome.svg",
          title: "Урамд тавтай морил",
          body: "Гурван богино бичлэг илгээгээд тоглолтын тасалбараа аваарай.",
        },
        {
          asset: "/onboarding/record.svg",
          title: "Бичлэг илгээх",
          body: "Та утсаараа 15 сек хүртэлх бичлэгээ хийж илгээх бөгөөд бид таны бичлэгийг үзэж баталгаажуулна.",
        },
        {
          asset: "/onboarding/share.svg",
          title: "Сошиал дээр хуваалцаад линкээ оруулна",
          body: "Баталгаажсаны дараа бичлэгээ сошиал сүлжээнд нийтэд хуваалцаж, постынхоо линкийг апп дээр оруулна.",
        },
        {
          asset: "/onboarding/ticket.svg",
          title: "Тасалбараа авна",
          body: "Таны 3 ширхэг бичлэг баталгаажсанаар тасалбар QR хэлбэрээр УРАМ апп дээр орно.",
        },
      ],
    },
    iosGuide: {
      title: "iPhone дээр хэрхэн суулгах вэ (TestFlight)",
      intro:
        "Uram-ийн iOS хувилбар одоогоор Apple TestFlight-ээр beta байдлаар түгээгдэж байна.",
      steps: [
        {
          title: "TestFlight суулгах",
          body: "App Store-оос Apple-ийн үнэгүй TestFlight аппыг татаж суулгана.",
        },
        {
          title: "Урилгын линк нээх",
          body: "Энэ хуудасны «iOS-д татах» товчийг дарахад TestFlight дээр Uram-ийн урилга нээгдэнэ.",
        },
        {
          title: "Accept → Install",
          body: "TestFlight дотор Accept, дараа нь Install товчийг дарна. Uram таны нүүр дэлгэцэд бусад апп шиг суугдана.",
        },
      ],
      note: "Шинэчлэлт TestFlight-ээр автоматаар ирнэ. Uram App Store дээр албан ёсоор гарахад дэлгүүрийн хувилбар руу шилжинэ.",
      cta: "TestFlight урилга нээх",
    },
    safety: {
      title: "Аюулгүй нийгэмлэгт зориулсан",
      body: "Uram нь зохисгүй контент, доромжилсон үйлдэлд тэг хүлцэлтэй. Хэрэглэгч бүр контент нийтлэхээс өмнө нөхцөлийг зөвшөөрдөг бөгөөд манай баг гомдлыг 24 цагийн дотор шийдвэрлэдэг.",
      items: [
        "Дурын видео, сэтгэгдэл, хэрэглэгчийг мэдээлэх",
        "Харилцахыг хүсэхгүй байгаа хэрэглэгчээ блоклох",
        "Контент шүүлт ба хүний модерац",
        "Бүртгэл болон өгөгдлөө хүссэн үедээ устгах",
      ],
    },
    footer: {
      rights: "Бүх эрх хуулиар хамгаалагдсан.",
      contact: "Холбоо барих",
      contactEmail: "support@uram.life",
    },
    legal: {
      lastUpdated: "Сүүлд шинэчилсэн",
      backHome: "← Нүүр хуудас руу буцах",
    },
  },
};
