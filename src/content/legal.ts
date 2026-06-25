import type { Lang } from "../i18n/i18n";

export type LegalSection = {
  heading: string;
  body: string[];
  list?: string[];
};

export type LegalDoc = {
  title: string;
  updated: string; // ISO date
  intro: string;
  sections: LegalSection[];
};

const UPDATED = "2026-06-26";
const COMPANY = "Uram";
const APP = "Uram";
const CONTACT = "support@uram.life";

export const terms: Record<Lang, LegalDoc> = {
  en: {
    title: "Terms of Service",
    updated: UPDATED,
    intro: `These Terms of Service ("Terms") govern your use of the ${APP} mobile application and related services (the "Service") operated by ${COMPANY}. By creating an account or using the Service, you agree to these Terms. If you do not agree, do not use the Service.`,
    sections: [
      {
        heading: "1. Eligibility",
        body: [
          "You must be at least 13 years old to use the Service. If you are under the age of majority in your country, you may only use the Service with the consent of a parent or legal guardian.",
        ],
      },
      {
        heading: "2. Your account",
        body: [
          "You are responsible for keeping your login credentials secure and for all activity that happens under your account. Notify us immediately of any unauthorized use.",
        ],
      },
      {
        heading: "3. User content",
        body: [
          "You retain ownership of the videos, comments and other content you post (\"User Content\"). By posting, you grant us a worldwide, non-exclusive, royalty-free license to host, store, reproduce, adapt and display your User Content for the purpose of operating and promoting the Service.",
          "You are solely responsible for your User Content and confirm that you have all rights necessary to post it.",
        ],
      },
      {
        heading: "4. Prohibited conduct and zero-tolerance policy",
        body: [
          "We have zero tolerance for objectionable content and abusive behavior. You agree not to post or do any of the following:",
        ],
        list: [
          "Sexually explicit, pornographic or child-endangering content",
          "Violence, threats, harassment, bullying or hate speech",
          "Content that infringes copyright, trademark or other rights",
          "Illegal activity, spam, scams or malware",
          "Impersonation or misleading identity",
        ],
      },
      {
        heading: "5. Moderation and enforcement",
        body: [
          "Users can report content and block other users from within the app. We review reports and remove violating content, and may suspend or terminate offending accounts, typically within 24 hours. We may remove any content or account at our discretion to keep the community safe.",
        ],
      },
      {
        heading: "6. Account deletion",
        body: [
          "You may delete your account at any time from within the app settings. On deletion, your personal data and User Content are removed in accordance with our Privacy Policy.",
        ],
      },
      {
        heading: "7. Intellectual property",
        body: [
          `The Service, including its software, design and trademarks, is owned by ${COMPANY} and protected by law. You may not copy, modify or reverse engineer any part of the Service.`,
        ],
      },
      {
        heading: "8. Disclaimers and limitation of liability",
        body: [
          'The Service is provided "as is" without warranties of any kind. To the maximum extent permitted by law, we are not liable for any indirect, incidental or consequential damages arising from your use of the Service.',
        ],
      },
      {
        heading: "9. Changes to these Terms",
        body: [
          "We may update these Terms from time to time. We will notify you of material changes. Continued use of the Service after changes take effect constitutes acceptance.",
        ],
      },
      {
        heading: "10. Governing law",
        body: [
          "These Terms are governed by the laws of Mongolia, without regard to conflict of law principles.",
        ],
      },
      {
        heading: "11. Contact",
        body: [`Questions about these Terms? Contact us at ${CONTACT}.`],
      },
    ],
  },
  mn: {
    title: "Үйлчилгээний нөхцөл",
    updated: UPDATED,
    intro: `Энэхүү Үйлчилгээний нөхцөл ("Нөхцөл") нь ${COMPANY}-н эзэмшдэг ${APP} гар утасны аппликейшн болон холбогдох үйлчилгээ ("Үйлчилгээ")-г ашиглахад үйлчилнэ. Бүртгэл үүсгэх буюу Үйлчилгээг ашигласнаар та энэхүү Нөхцөлийг хүлээн зөвшөөрнө. Зөвшөөрөхгүй бол Үйлчилгээг бүү ашигла.`,
    sections: [
      {
        heading: "1. Эрх олгох нөхцөл",
        body: [
          "Та Үйлчилгээг ашиглахын тулд дор хаяж 13 настай байх ёстой. Хэрэв та өөрийн улсын насанд хүрэх насанд хүрээгүй бол эцэг эх, асран хамгаалагчийн зөвшөөрөлтэйгээр л ашиглана.",
        ],
      },
      {
        heading: "2. Таны бүртгэл",
        body: [
          "Нэвтрэх мэдээллээ найдвартай хадгалах, бүртгэлээр хийгдсэн бүх үйлдлийн төлөө та хариуцлага хүлээнэ. Зөвшөөрөлгүй ашиглалт илэрвэл нэн даруй бидэнд мэдэгдэнэ үү.",
        ],
      },
      {
        heading: "3. Хэрэглэгчийн контент",
        body: [
          'Таны нийтэлсэн видео, сэтгэгдэл болон бусад контентын ("Хэрэглэгчийн контент") өмчлөх эрх танд хадгалагдана. Нийтэлснээр та бидэнд Үйлчилгээг ажиллуулах, сурталчлах зорилгоор уг контентыг хадгалах, хуулбарлах, тохируулах, харуулах дэлхий нийтийн, онцгой бус, төлбөргүй лиценз олгож байгаа болно.',
          "Та өөрийн Хэрэглэгчийн контентыг бүрэн хариуцах бөгөөд түүнийг нийтлэх бүх эрхтэй гэдгээ баталгаажуулна.",
        ],
      },
      {
        heading: "4. Хориглох үйлдэл ба тэг хүлцлийн бодлого",
        body: [
          "Бид зохисгүй контент, доромжилсон үйлдэлд тэг хүлцэлтэй. Та дараах зүйлийг нийтлэхгүй, хийхгүй байхыг зөвшөөрнө:",
        ],
        list: [
          "Бэлгийн илэрхий, садар самуун, хүүхдэд аюултай контент",
          "Хүчирхийлэл, заналхийлэл, дээрэлхэлт, үзэн ядалт",
          "Зохиогчийн эрх, барааны тэмдэг болон бусад эрх зөрчсөн контент",
          "Хууль бус үйлдэл, спам, луйвар, хортой программ",
          "Бусдын дүр эсгэх, төөрөгдүүлсэн мэдээлэл",
        ],
      },
      {
        heading: "5. Модерац ба хэрэгжүүлэлт",
        body: [
          "Хэрэглэгч апп дотроос контент мэдээлэх болон бусад хэрэглэгчийг блоклох боломжтой. Бид гомдлыг хянаж, зөрчилтэй контентыг устгах, зөрчигч бүртгэлийг түдгэлзүүлэх буюу хаах ба ихэвчлэн 24 цагийн дотор шийдвэрлэнэ. Нийгэмлэгийг аюулгүй байлгах үүднээс бид дурын контент, бүртгэлийг өөрийн үзэмжээр устгаж болно.",
        ],
      },
      {
        heading: "6. Бүртгэл устгах",
        body: [
          "Та аппын тохиргооноос бүртгэлээ хүссэн үедээ устгаж болно. Устгасны дараа таны хувийн мэдээлэл болон Хэрэглэгчийн контентыг манай Нууцлалын бодлогын дагуу устгана.",
        ],
      },
      {
        heading: "7. Оюуны өмч",
        body: [
          `Үйлчилгээ, түүний программ хангамж, дизайн, барааны тэмдэг нь ${COMPANY}-н өмч бөгөөд хуулиар хамгаалагдсан. Та Үйлчилгээний аль ч хэсгийг хуулбарлах, өөрчлөх, эх кодыг задлахыг хориглоно.`,
        ],
      },
      {
        heading: "8. Баталгаа ба хариуцлагын хязгаарлалт",
        body: [
          'Үйлчилгээг "байгаа байдлаар нь" ямар нэг баталгаагүйгээр үзүүлнэ. Хуулиар зөвшөөрөгдсөн дээд хэмжээгээр бид таны Үйлчилгээг ашигласнаас үүдэх шууд бус, санамсаргүй буюу дам хохирлыг хариуцахгүй.',
        ],
      },
      {
        heading: "9. Нөхцөлийн өөрчлөлт",
        body: [
          "Бид энэхүү Нөхцөлийг үе үе шинэчилж болно. Чухал өөрчлөлтийн талаар бид танд мэдэгдэнэ. Өөрчлөлт хүчин төгөлдөр болсны дараа Үйлчилгээг үргэлжлүүлэн ашиглавал хүлээн зөвшөөрсөнд тооцно.",
        ],
      },
      {
        heading: "10. Хууль зүйн харьяалал",
        body: [
          "Энэхүү Нөхцөл нь Монгол Улсын хууль тогтоомжид захирагдана.",
        ],
      },
      {
        heading: "11. Холбоо барих",
        body: [`Нөхцөлийн талаар асуух зүйл байвал ${CONTACT} хаягаар холбогдоно уу.`],
      },
    ],
  },
};

export const privacy: Record<Lang, LegalDoc> = {
  en: {
    title: "Privacy Policy",
    updated: UPDATED,
    intro: `This Privacy Policy explains how ${COMPANY} ("we", "us") collects, uses and protects your information when you use the ${APP} app (the "Service").`,
    sections: [
      {
        heading: "1. Information we collect",
        body: ["We collect the following categories of information:"],
        list: [
          "Account data: email, username, profile photo",
          "Content you create: videos, captions, comments, likes",
          "Device and usage data: device identifiers, IP address, app interactions, crash logs",
          "Optional: camera and microphone access to record videos (only when you grant permission)",
        ],
      },
      {
        heading: "2. How we use your information",
        body: ["We use your information to:"],
        list: [
          "Provide and operate the Service",
          "Personalize your feed and recommendations",
          "Moderate content and enforce our Terms",
          "Send service-related and, with consent, promotional notifications",
          "Improve performance and prevent abuse",
        ],
      },
      {
        heading: "3. Service providers",
        body: [
          "We share data with trusted third parties that help us run the Service, including cloud hosting and object storage (DigitalOcean), backend and database (Supabase), and analytics and push notification providers. These providers process data only on our behalf.",
        ],
      },
      {
        heading: "4. Video processing",
        body: [
          "Uploaded videos are stored on object storage and may be processed (for example, watermarking and transcoding) to deliver them within the Service.",
        ],
      },
      {
        heading: "5. Data retention",
        body: [
          "We keep your data for as long as your account is active. When you delete your account, we delete or anonymize your personal data and User Content within a reasonable period, except where retention is required by law.",
        ],
      },
      {
        heading: "6. Your rights",
        body: [
          "You can access, update or delete your information from within the app. You may delete your account at any time in settings. Depending on your location, you may have additional rights under the GDPR or CCPA, including the right to request a copy of your data.",
        ],
      },
      {
        heading: "7. Children’s privacy",
        body: [
          "The Service is not directed to children under 13, and we do not knowingly collect data from them. If we learn that we have, we will delete it.",
        ],
      },
      {
        heading: "8. Security",
        body: [
          "We use reasonable technical and organizational measures to protect your data. No method of transmission or storage is completely secure, however.",
        ],
      },
      {
        heading: "9. Changes to this policy",
        body: [
          "We may update this Privacy Policy. We will notify you of material changes and update the date above.",
        ],
      },
      {
        heading: "10. Contact",
        body: [`For privacy questions, contact us at ${CONTACT}.`],
      },
    ],
  },
  mn: {
    title: "Нууцлалын бодлого",
    updated: UPDATED,
    intro: `Энэхүү Нууцлалын бодлого нь та ${APP} аппыг ("Үйлчилгээ") ашиглах үед ${COMPANY} ("бид") таны мэдээллийг хэрхэн цуглуулж, ашиглаж, хамгаалдаг талаар тайлбарлана.`,
    sections: [
      {
        heading: "1. Бидний цуглуулдаг мэдээлэл",
        body: ["Бид дараах ангиллын мэдээллийг цуглуулна:"],
        list: [
          "Бүртгэлийн мэдээлэл: и-мэйл, хэрэглэгчийн нэр, профайл зураг",
          "Таны үүсгэсэн контент: видео, тайлбар, сэтгэгдэл, лайк",
          "Төхөөрөмж ба ашиглалтын мэдээлэл: төхөөрөмжийн ID, IP хаяг, аппын үйлдэл, crash лог",
          "Сонголтоор: видео бичих камер, микрофоны хандалт (зөвхөн таны зөвшөөрснөөр)",
        ],
      },
      {
        heading: "2. Мэдээллийг хэрхэн ашигладаг",
        body: ["Бид таны мэдээллийг дараах зорилгоор ашиглана:"],
        list: [
          "Үйлчилгээг үзүүлэх, ажиллуулах",
          "Таны фийд болон санал болголтыг хувийн болгох",
          "Контентыг модерацлах, Нөхцөлийг хэрэгжүүлэх",
          "Үйлчилгээтэй холбоотой болон зөвшөөрөлтэйгээр сурталчилгааны мэдэгдэл илгээх",
          "Гүйцэтгэлийг сайжруулах, хүчирхийллээс сэргийлэх",
        ],
      },
      {
        heading: "3. Үйлчилгээ үзүүлэгч талууд",
        body: [
          "Бид Үйлчилгээг ажиллуулахад туслах итгэмжлэгдсэн гуравдагч талуудтай мэдээлэл хуваалцана. Үүнд cloud hosting болон object storage (DigitalOcean), backend ба өгөгдлийн сан (Supabase), аналитик ба push мэдэгдлийн үйлчилгээ багтана. Эдгээр тал зөвхөн бидний нэрийн өмнөөс мэдээллийг боловсруулна.",
        ],
      },
      {
        heading: "4. Видео боловсруулалт",
        body: [
          "Байршуулсан видеог object storage-д хадгалах ба Үйлчилгээнд хүргэхийн тулд боловсруулж болно (жишээ нь усан тэмдэг тавих, формат хөрвүүлэх).",
        ],
      },
      {
        heading: "5. Мэдээлэл хадгалах хугацаа",
        body: [
          "Таны бүртгэл идэвхтэй байх хугацаанд бид таны мэдээллийг хадгална. Та бүртгэлээ устгахад бид таны хувийн мэдээлэл, Хэрэглэгчийн контентыг боломжийн хугацаанд устгах буюу нэргүйжүүлнэ. Хуулиар хадгалах шаардлагатай тохиолдол үүнээс хамаарахгүй.",
        ],
      },
      {
        heading: "6. Таны эрх",
        body: [
          "Та апп дотроос мэдээллээ үзэх, шинэчлэх, устгах боломжтой. Тохиргооноос бүртгэлээ хүссэн үедээ устгаж болно. Байршлаас хамаараад GDPR эсвэл CCPA-н дагуу нэмэлт эрх, тухайлбал мэдээллийнхээ хуулбарыг авах эрхтэй байж болно.",
        ],
      },
      {
        heading: "7. Хүүхдийн нууцлал",
        body: [
          "Үйлчилгээ нь 13-аас доош насны хүүхдэд зориулагдаагүй бөгөөд бид тэднээс мэдээлэл цуглуулдаггүй. Хэрэв ийм мэдээлэл цуглуулсныг мэдвэл устгана.",
        ],
      },
      {
        heading: "8. Аюулгүй байдал",
        body: [
          "Бид таны мэдээллийг хамгаалахын тулд боломжийн техникийн болон зохион байгуулалтын арга хэмжээ авдаг. Гэхдээ дамжуулах, хадгалах ямар ч арга бүрэн аюулгүй биш юм.",
        ],
      },
      {
        heading: "9. Бодлогын өөрчлөлт",
        body: [
          "Бид энэхүү Нууцлалын бодлогыг шинэчилж болно. Чухал өөрчлөлтийг танд мэдэгдэж, дээрх огноог шинэчилнэ.",
        ],
      },
      {
        heading: "10. Холбоо барих",
        body: [`Нууцлалын талаар асуух зүйл байвал ${CONTACT} хаягаар холбогдоно уу.`],
      },
    ],
  },
};
