const modal = document.getElementById("demoModal");
const modalPanel = document.getElementById("demoModalPanel");
const modalVideo = document.getElementById("demoModalVideo");
const modalTitle = document.getElementById("demoModalTitle");
const modalLink = document.getElementById("demoModalLink");
const openButtons = document.querySelectorAll("[data-demo-src]");
const closeButtons = document.querySelectorAll("[data-modal-close]");
const langToggle = document.getElementById("langToggle");
const contactForm = document.getElementById("contactForm");
const contactName = document.getElementById("contactName");
const contactEmail = document.getElementById("contactEmail");
const contactMessage = document.getElementById("contactMessage");
const modalIframe = document.getElementById("demoModalIframe");

const translations = {
  en: {
    texts: {
      brandTag: "Nazir Hub",
      brandTitle: "Software Distribution",
      navDesktop: "Desktop Apps",
      navMobile: "Mobile Apps",
      navWeb: "Websites",
      navContact: "Contact",
      heroTagline: "Modern Soft Glassmorphism",
      heroTitle: "Empowering My Community Through Digital Solutions",
      heroDescription:
        "I am a Developer crafting reliable desktop and mobile tools that make learning, administration, and community service simpler and more accessible.",
      heroPrimaryButton: "View Projects",
      heroSecondaryButton: "Contact Me",
      liveDemo: "Live Demo",
      updatedLabel: "Updated 2026",
      featureTitle: "Daily Remembrance App",
      featureDescription:
        "A spiritual companion app with authentic daily supplications and Quranic reminders. Lightweight, offline-friendly, and built for Android users.",
      tagAndroid: "Android",
      tagOffline: "Offline",
      tagCommunity: "Community",
      appsTitle: "App Section",
      appsDescription: "This section currently features our only app: Daily Remembrance App.",
      webTitle: "Web Section",
      webDescription: "Explore the live websites for all available projects.",
      chipDesktop: "Desktop",
      chipMobile: "Mobile",
      chipWeb: "Web",
      projectAthkarTitle: "Daily Remembrance App",
      projectAthkarDescription:
        "A spiritual companion app with authentic daily supplications and Quranic reminders. Lightweight, offline-friendly, and built for Android.",
      projectSalliTitle: "Salli Sorro",
      projectSalliDescription:
        "Experience the offline App with Salli Sorro. Featuring high-quality audio recitations, word-by-word playback, and a seamless bilingual interface, this app is your trustworthy helper for prayer and memorization.",
      projectCertifyTitle: "Certificate Generator",
      projectCertifyDescription:
        "A high-performance, offline tool for generating bulk certificates with precision layouts and multilingual data support.",
      projectDataEntryTitle: "Data Entry Utility",
      projectDataEntryDescription:
        "A robust data management tool for schools and local businesses, turning manual record-keeping into fast, validated digital workflows.",
      projectRankerTitle: "Gradebook & Ranker",
      projectRankerDescription:
        "A professional administrative tool designed to digitize and automate student performance tracking for educational institutions.",
      downloadButton: "Download",
      websiteButton: "Website Link",
      watchButton: "Watch Full Video",
      softwareBadge: "Software Section",
      softwareToolsTitle: "Software Tools",
      softwareToolsDescription:
        "Desktop and utility software packages available for download and live demo preview.",
      softwareTitle: "Software Delivery Focus",
      softwareDescription:
        "Each release ships with optimized installers, release notes, and guided onboarding so teams can deploy tools quickly and confidently.",
      softwarePoint1: "Secure downloads with integrity checks and clear versioning.",
      softwarePoint2: "Performance tuning for low-bandwidth environments.",
      softwarePoint3: "Community-centered support and guided onboarding.",
      releaseTitle: "Release Snapshot",
      statApps: "Apps Online",
      statInstallers: "Active Installers",
      statSupport: "Support Windows/Mobile",
      statSupportValue: "Yes",
      statBeta: "Community Beta",
      statBetaValue: "Open",
      requestAccess: "Request Early Access",
      contactTitle: "Contact",
      contactDescription:
        "Ready to collaborate? Reach out for custom deployments, training, or community initiatives.",
      emailLabel: "Email",
      whatsappLabel: "WhatsApp",
      formTitle: "Send a Message",
      sendButton: "Send Request",
      footerCopyright: "© 2026 Nazir Software Hub. All rights reserved.",
      portfolioLabel: "Portfolio",
      modalTitleDefault: "Full Demo",
      closeButton: "Close",
      openProjectButton: "Open Project Website",
    },
    placeholders: {
      namePlaceholder: "Your name",
      emailPlaceholder: "Email address",
      messagePlaceholder: "Tell me about your project",
    },
    demoTitles: {
      athkar: "Daily Remembrance App Demo",
      certify: "Certificate Generator Demo",
      dataEntry: "Data Entry Utility Demo",
      ranker: "Gradebook & Ranker Demo",
    },
  },
  ar: {
    texts: {
      brandTag: "مركز نذير",
      brandTitle: "توزيع البرمجيات",
      navDesktop: "تطبيقات سطح المكتب",
      navMobile: "تطبيقات الهاتف",
      navWeb: "المواقع الإلكترونية",
      navContact: "تواصل",
      heroTagline: "تصميم زجاجي عصري",
      heroTitle: "تمكين مجتمعي من خلال حلول رقمية",
      heroDescription:
        "أنا مطوّر أبني أدوات موثوقة لسطح المكتب والهاتف لتسهيل التعلّم والإدارة وخدمة المجتمع.",
      heroPrimaryButton: "عرض المشاريع",
      heroSecondaryButton: "تواصل معي",
      liveDemo: "عرض مباشر",
      updatedLabel: "آخر تحديث 2026",
      featureTitle: "تطبيق الأذكار اليومية",
      featureDescription:
        "تطبيق روحاني يوفّر الأذكار اليومية الموثوقة وتذكيرات قرآنية، خفيف ويدعم العمل دون اتصال لمستخدمي أندرويد.",
      tagAndroid: "أندرويد",
      tagOffline: "دون اتصال",
      tagCommunity: "المجتمع",
      appsTitle: "قسم التطبيقات",
      appsDescription: "هذا القسم يحتوي حاليا على تطبيقنا الوحيد: تطبيق الأذكار اليومية.",
      webTitle: "قسم الويب",
      webDescription: "استكشف المواقع المباشرة لجميع المشاريع المتاحة.",
      chipDesktop: "سطح المكتب",
      chipMobile: "الهاتف",
      chipWeb: "الويب",
      projectAthkarTitle: "تطبيق الأذكار اليومية",
      projectAthkarDescription:
        "تطبيق روحاني للأذكار اليومية والتذكيرات القرآنية، خفيف وعملي ويعمل دون اتصال على أندرويد.",
      projectSalliTitle: "سالي سور",
      projectSalliDescription:
        "اختبر تطبيق Salli Sorro دون اتصال. يتميز بتلاوات صوتية عالية الجودة وتشغيل كلمة بكلمة وواجهة ثنائية اللغة سلسة، وهذا التطبيق هو مساعدك الموثوق في الصلاة والحفظ.",
      projectCertifyTitle: "برنامج استخراج الشهادات",
      projectCertifyDescription:
        "أداة عالية الأداء لاستخراج الشهادات بالجملة دون اتصال مع تنسيقات دقيقة ودعم متعدد اللغات.",
      projectDataEntryTitle: "مركز إدخال البيانات",
      projectDataEntryDescription:
        "أداة قوية لإدارة البيانات للمدارس والمؤسسات المحلية، لتحويل السجلات اليدوية إلى سير عمل رقمي سريع ودقيق.",
      projectRankerTitle: "نظام إدارة و ترتيب الدرجات",
      projectRankerDescription:
        "أداة إدارية احترافية لرقمنة وأتمتة تتبع أداء الطلاب في المؤسسات التعليمية.",
      downloadButton: "تنزيل",
      websiteButton: "رابط الموقع",
      watchButton: "مشاهدة الفيديو الكامل",
      softwareBadge: "قسم البرامج",
      softwareToolsTitle: "أدوات البرامج",
      softwareToolsDescription: "حزم برامج سطح المكتب والأدوات متاحة للتنزيل مع معاينة العرض الكامل.",
      softwareTitle: "تركيز تسليم البرمجيات",
      softwareDescription:
        "كل إصدار يأتي مع ملفات تثبيت محسّنة وملاحظات إصدار وإرشادات بدء الاستخدام لتسريع النشر بثقة.",
      softwarePoint1: "تنزيلات آمنة مع تحقق من السلامة وإصدار واضح.",
      softwarePoint2: "تحسين الأداء لبيئات الإنترنت الضعيف.",
      softwarePoint3: "دعم موجه للمجتمع وإرشاد عملي.",
      releaseTitle: "ملخص الإصدارات",
      statApps: "التطبيقات المتاحة",
      statInstallers: "ملفات التثبيت النشطة",
      statSupport: "دعم ويندوز/هاتف",
      statSupportValue: "نعم",
      statBeta: "النسخة التجريبية",
      statBetaValue: "مفتوحة",
      requestAccess: "طلب وصول مبكر",
      contactTitle: "تواصل",
      contactDescription: "جاهز للتعاون؟ تواصل معي للتنفيذات المخصصة أو التدريب أو مبادرات المجتمع.",
      emailLabel: "البريد الإلكتروني",
      whatsappLabel: "واتساب",
      formTitle: "أرسل رسالة",
      sendButton: "إرسال الطلب",
      footerCopyright: "© 2026 مركز نذير للبرمجيات. جميع الحقوق محفوظة.",
      portfolioLabel: "الأعمال",
      modalTitleDefault: "عرض كامل",
      closeButton: "إغلاق",
      openProjectButton: "فتح موقع المشروع",
    },
    placeholders: {
      namePlaceholder: "اسمك",
      emailPlaceholder: "عنوان البريد الإلكتروني",
      messagePlaceholder: "أخبرني عن مشروعك",
    },
    demoTitles: {
      athkar: "عرض تطبيق الأذكار اليومية",
      certify: "عرض برنامج استخراج الشهادات",
      dataEntry: "عرض مركز إدخال البيانات",
      ranker: "عرض نظام إدارة و ترتيب الدرجات",
    },
  },
};

let activeLanguage = "en";
let activeDemoButton = null;

const getDemoTitle = (button, lang) => {
  const demoKey = button?.dataset.demoKey;
  return (
    translations[lang]?.demoTitles?.[demoKey] ||
    button?.dataset.demoTitle ||
    translations[lang].texts.modalTitleDefault
  );
};

const switchLanguage = (lang) => {
  if (!translations[lang]) {
    return;
  }

  activeLanguage = lang;
  const dictionary = translations[lang];

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("is-arabic", lang === "ar");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary.texts[key]) {
      element.textContent = dictionary.texts[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (dictionary.placeholders[key]) {
      element.setAttribute("placeholder", dictionary.placeholders[key]);
    }
  });

  openButtons.forEach((button) => {
    const demoKey = button.dataset.demoKey;
    if (demoKey && dictionary.demoTitles[demoKey]) {
      button.dataset.demoTitle = dictionary.demoTitles[demoKey];
    }
  });

  if (modal.classList.contains("modal-visible")) {
    modalTitle.textContent = getDemoTitle(activeDemoButton, lang);
  }

  localStorage.setItem("siteLanguage", lang);
};

const openModal = (button) => {
  const videoSrc = button.dataset.demoSrc;
  const title = getDemoTitle(button, activeLanguage);
  const link = button.dataset.demoLink;
  const isMobileDemo = button.dataset.demoMobile === "true";
  activeDemoButton = button;

  modalTitle.textContent = title;
  const isEmbed = videoSrc.includes("drive.google.com");
  if (isEmbed) {
    modalIframe.src = videoSrc;
    modalIframe.classList.remove("hidden");
    modalVideo.classList.add("hidden");
  } else {
    modalVideo.src = videoSrc;
    modalVideo.load();
    modalVideo.play().catch(() => null);
    modalVideo.classList.remove("hidden");
    modalIframe.classList.add("hidden");
  }
  modalPanel.classList.toggle("demo-modal-mobile", isMobileDemo);
  modalVideo.classList.toggle("demo-video-mobile", isMobileDemo);

  if (link) {
    modalLink.href = link;
    modalLink.classList.remove("hidden");
  } else {
    modalLink.href = "#";
    modalLink.classList.add("hidden");
  }

  modal.classList.remove("modal-hidden");
  modal.classList.add("modal-visible");
  document.body.classList.add("overflow-hidden");
};

const closeModal = () => {
  modal.classList.remove("modal-visible");
  modal.classList.add("modal-hidden");
  modalVideo.pause();
  modalVideo.removeAttribute("src");
  modalVideo.load();
  modalVideo.classList.remove("hidden");
  modalIframe.src = "";
  modalIframe.classList.add("hidden");
  modalPanel.classList.remove("demo-modal-mobile");
  modalVideo.classList.remove("demo-video-mobile");
  activeDemoButton = null;
  document.body.classList.remove("overflow-hidden");
  modalLink.classList.add("hidden");
};

openButtons.forEach((button) => {
  button.addEventListener("click", () => openModal(button));
});

closeButtons.forEach((button) => {
  button.addEventListener("click", closeModal);
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

langToggle?.addEventListener("click", () => {
  switchLanguage(activeLanguage === "en" ? "ar" : "en");
});

switchLanguage(localStorage.getItem("siteLanguage") || "en");

