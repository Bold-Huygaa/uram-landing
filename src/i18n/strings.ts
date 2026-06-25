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
    items: { title: string; body: string }[];
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
      title: "What you can do",
      items: [
        {
          title: "Share your videos",
          body: "Upload short videos in seconds and reach a community that cares.",
        },
        {
          title: "Discover content",
          body: "A personalized feed surfaces the videos you’ll love.",
        },
        {
          title: "Connect with people",
          body: "Follow creators, comment, and build your own audience.",
        },
        {
          title: "Safe by design",
          body: "Reporting, blocking and active moderation keep the community healthy.",
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
      title: "Та юу хийх вэ",
      items: [
        {
          title: "Видеогоо хуваалц",
          body: "Хэдхэн секундэд богино видео байршуулж, нийгэмлэгтээ хүр.",
        },
        {
          title: "Контент нээ",
          body: "Хувийн тохиргоотой фийд таны дуртай видеог санал болгоно.",
        },
        {
          title: "Хүмүүстэй холбогд",
          body: "Бүтээгчдийг дагаж, сэтгэгдэл бичиж, өөрийн үзэгчдийг бий болго.",
        },
        {
          title: "Анхнаасаа аюулгүй",
          body: "Гомдол мэдээлэх, блоклох, идэвхтэй модерац нийгэмлэгийг эрүүл байлгана.",
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
