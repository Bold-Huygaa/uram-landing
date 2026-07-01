import type { Lang } from "./i18n";

type UIStrings = {
  nav: { home: string; terms: string; privacy: string };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaApple: string;
    ctaGoogle: string;
    comingSoon: string;
  };
  features: {
    title: string;
    items: { asset: string; title: string; body: string }[];
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
        "Create, share and discover short videos. Express yourself, find your people, and watch what inspires you.",
      ctaApple: "Download on the App Store",
      ctaGoogle: "Get it on Google Play",
      comingSoon: "Coming soon",
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
      badge: "Видео нийгэмлэг",
      title: "Uram",
      subtitle:
        "Богино видео хийж, хуваалцаж, нээ. Өөрийгөө илэрхийл, дуртай хүмүүсээ ол, урам зориг өгөх контентыг үз.",
      ctaApple: "App Store-оос татах",
      ctaGoogle: "Google Play-ээс татах",
      comingSoon: "Удахгүй",
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
