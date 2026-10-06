const langToggle = document.getElementById('langToggle');

const materialsData = [
  {
    ar: {
      title: 'سي بلس بلس',
      description: 'احترف لغة سي بلس بلس من الصفر\nيتضمن : ريكرجن , بوينتر , oop',
      linkText: 'تحميل التلخيص',
      linkHref: 'https://drive.google.com/drive/folders/1-KI4eZMWeO1DeeLSo-XyWHMF3mWDAFRQ?usp=drive_link'
    },
    en: {
      title: '++C',
      description: 'Master c++ from scratch\nIncludes: Recursion, Pointers, OOP',
      linkText: 'Download Summary',
      linkHref: 'https://drive.google.com/drive/folders/1-KI4eZMWeO1DeeLSo-XyWHMF3mWDAFRQ?usp=drive_link'
    }
  },
  {
    ar: {
      title: 'داتا ستركشر',
      description: 'يشرح أساسيات هياكل البيانات بلغة C++ مثل المصفوفات، القوائم المرتبطة، الأكوام، والطوابير ',
      linkText: 'تحميل التلخيص',
      linkHref: 'https://drive.google.com/drive/folders/1-pPB6cuzluKWiB-95PsB0aOyIOf71JDf?usp=drive_link'
    },
    en: {
      title: 'Data Structure',
      description: 'Explains the basics of C++ data structures such as arrays, linked lists, stacks, and queues',
      linkText: 'Download Summary',
          linkHref: 'https://drive.google.com/drive/folders/1-pPB6cuzluKWiB-95PsB0aOyIOf71JDf?usp=drive_link'
    }
  },
  {
    ar: {
      title: 'اللغة الانجليزية',
      description: 'تعلم اهم مفاهيم اللغة الانجليزية يتضمن اشهر كلمات وفواعد اللغة الانجليزية',
      linkText: 'تحميل التلخيص',
            linkHref: 'https://drive.google.com/drive/folders/1xHQJCmPSKud2ggK0q_rV0bAtNgVS76wh?usp=drive_link'

    },
    en: {
      title: 'English',
      description: 'Learn the most important concepts of the English language.Includes the most famous words and rules of the English language',
      linkText: 'Download Summary',
      linkHref: 'https://drive.google.com/drive/folders/1xHQJCmPSKud2ggK0q_rV0bAtNgVS76wh?usp=drive_link'
    }
  },
   {
    ar: {
      title: 'دوائر كهربائية',
      description: 'يشمل أساسيات التيار والجهد والمقاومة، وتحليل الدوائر باستخدام قوانين أوم وكيرشوف',
      linkText: 'تحميل التلخيص',
      linkHref: 'https://drive.google.com/drive/folders/1-3XbxddxBoOzzsWXNpUTbisgZ_OJz66K?usp=drive_link'

    },
    en: {
      title: 'Electrical circuits',
      description: 'Covers the basics of current, voltage, and resistance, and circuit analysis using Ohms and Kirchhoffs laws',
      linkText: 'Download Summary',
      linkHref: 'https://drive.google.com/drive/folders/1-3XbxddxBoOzzsWXNpUTbisgZ_OJz66K?usp=drive_link'
    }
  },
  {
    ar: {
      title: 'مختبر دوائر كهربائية',
      description: 'يشمل جميع التجارب العملية مع تلخيص للمادة النظرية',
      linkText: 'تحميل التلخيص',
      linkHref:'https://drive.google.com/drive/folders/1-1mjFo_aoR5HMSjTkjII_g82N_PJW3Vt?usp=drive_link'

    },
    en: {
      title: 'Electrical circuits',
      description: 'Includes all practical experiments with a summary of the theoretical material',
      linkText: 'Download Summary',
     linkHref:'https://drive.google.com/drive/folders/1-1mjFo_aoR5HMSjTkjII_g82N_PJW3Vt?usp=drive_link'
    }
  },
  {
    ar: {
      title: 'لينير 1',
      description: 'يتناول المساق مفاهيم الجبر الخطي الأساسية مثل المتجهات، المصفوفات، أنظمة المعادلات، والتحويلات الخطية',
      linkText: 'تحميل التلخيص',
      linkHref:'https://drive.google.com/drive/folders/10mgv2un-u93cU_p2Gl2LTc3XfczB-WGP?usp=drive_link'

    },
    en: {
      title: 'Linear 1',
      description: 'The course covers basic linear algebra concepts such as vectors, matrices, systems of equations, and linear transformations',
      linkText: 'Download Summary',
      linkHref:'https://drive.google.com/drive/folders/10mgv2un-u93cU_p2Gl2LTc3XfczB-WGP?usp=drive_link'
    }
  },
   {
    ar: {
      title: 'انظمة التشغيل',
      description: 'يشمل أساسيات أنظمة التشغيل، دورها في إدارة موارد الحاسوب، وأنواعها المختلفة بطريقة سهلة ومبسطة',
      linkText: 'تحميل التلخيص',
      linkHref:'https://drive.google.com/drive/folders/1-9yqH76VlvDA-gZuq3waMOgTo7EqqnK8?usp=drive_link'

    },
    en: {
      title: 'Operating Systems',
      description: 'It covers the basics of operating systems, their role in managing computer resources, and their different types in an easy and simplified manner',
      linkText: 'Download Summary',
      linkHref:'https://drive.google.com/drive/folders/1-9yqH76VlvDA-gZuq3waMOgTo7EqqnK8?usp=drive_link'
    }
  },
    {
    ar: {
      title: 'الاحتمالات والمتغيرات العشوائية',
      description: 'يشمل أساسيات الاحتمالات والمتغيرات العشوائية، مع توضيح المفاهيم والنظريات الأساسية بشكل مبسط وواضح',
      linkText: 'تحميل التلخيص',
      linkHref:'https://drive.google.com/drive/folders/1Glk6L7D1xHvG19x2va3wrm5dcsevGDQv?usp=drive_link'

    },
    en: {
      title: 'Probability and Random variables',
      description: 'Covers the basics of probability and random variables, explaining the basic concepts and theories in a simple and clear manner',
      linkText: 'Download Summary',
      linkHref:'https://drive.google.com/drive/folders/1Glk6L7D1xHvG19x2va3wrm5dcsevGDQv?usp=drive_link'
    }
  },
     {
    ar: {
      title: 'داتا بيس',
      description: 'يشمل يقدم شرحًا مبسطًا وشاملًا لمفاهيم قواعد البيانات، إدارة البيانات، وأنواع نظم إدارة قواعد البيانات المختلف',
      linkText: 'تحميل التلخيص',
      linkHref:'https://drive.google.com/drive/folders/1-76-w5f0fz1J9_l9xVwvhedmduy3Zpym?usp=drive_link'

    },
    en: {
      title: 'Data Base',
      description: 'Includes a simplified and comprehensive explanation of database concepts, data management, and different types of database management systems',
      linkText: 'Download Summary',
      linkHref:'https://drive.google.com/drive/folders/1-76-w5f0fz1J9_l9xVwvhedmduy3Zpym?usp=drive_link'
    }
  },
     {
    ar: {
      title: 'الكترونيات رقمية',
      description: 'يشمل أساسيات الإلكترونيات الرقمية، مكونات الدوائر الرقمية، وأنظمة التمثيل الثنائية بطريقة مبسطة وسهلة الفهم',
      linkText: 'تحميل التلخيص',
      linkHref:'https://drive.google.com/drive/folders/1skoWN08H4oB1Z0CtPWDMKwlEF6n26hM6?usp=drive_link'

    },
    en: {
      title: 'Digital Electronics',
      description: 'Covers the basics of digital electronics, digital circuit components, and binary representation systems in a simplified and easy-to-understand manner',
      linkText: 'Download Summary',
      linkHref:'https://drive.google.com/drive/folders/1skoWN08H4oB1Z0CtPWDMKwlEF6n26hM6?usp=drive_link'
    }
  },
    {
    ar: {
      title: 'مختبر الكترونيات',
      description: 'يتناول التجارب العملية في مختبر الإلكترونيات، مع شرح خطوات العمل والنتائج لتحسين الفهم التطبيقي للمفاهيم النظرية',
      linkText: 'تحميل التلخيص',
      linkHref:'https://drive.google.com/drive/folders/10tThIm9TB0bsi0u0lYR_wR9RqsQkSuP4?usp=drive_link'

    },
    en: {
      title: 'Digital Electronics',
      description: 'It covers practical experiments in the electronics laboratory, with an explanation of the work steps and results to improve the practical understanding of theoretical concepts',
      linkText: 'Download Summary',
      linkHref:'https://drive.google.com/drive/folders/10tThIm9TB0bsi0u0lYR_wR9RqsQkSuP4?usp=drive_link'
    }
  },
     {
    ar: {
      title: 'لغة ترميز النص التشعبي (HTML)',
      description: 'لغة بسيطة جدًا تستخدم لوصف ما صفحاته، تلخيص بسيط لهذه اللغة ',
      linkText: 'تحميل التلخيص',
      linkHref:'https://drive.google.com/drive/folders/1YtRyhIoM28pEqT1ZWtOWtYCLT7D0nSES?usp=drive_link'

    },
    en: {
      title: 'Computer Hypertext Markup Language (HTML)',
      description: 'A very simple language used to describe what its pages contain, a simple summary of this language ',
      linkText: 'Download Summary',
      linkHref:'https://drive.google.com/drive/folders/1YtRyhIoM28pEqT1ZWtOWtYCLT7D0nSES?usp=drive_link'
    }
  },
       {
    ar: {
      title: 'ورقة الانماط المتتالية(CSS)',
      description: 'لغة تستخدم في تصميم صفحات الويب فمن خلالها يمكنك تغيير ألوان العناصر، تحديد مواقعها و أحجامها، إضافة مؤثرات لها، جعل صفحات الويب متجاوبة مع مختلف أحجام الشاشات لكي تظهر بشكل ملائم للمستخدم سواء كان يفتح الصفحة بواسطة هاتف، تابلت أو حاسوب ',
      linkText: 'تحميل التلخيص',
      linkHref:'https://drive.google.com/drive/folders/1lLO9IcRBJHhr789PW3xjA8BUgLTzLuVL?usp=drive_link'

    },
    en: {
      title: 'Cascading Style Sheet (css)',
      description: 'A language used in web design, it is clear that you can change the colors of elements, determine their positions and sizes, add operators to them, and make web pages consistent with different screen sizes to partially crop for the user whether they are closing the page via a phone, tablet, or computer.',
      linkText: 'Download Summary',
      linkHref:'https://drive.google.com/drive/folders/1lLO9IcRBJHhr789PW3xjA8BUgLTzLuVL?usp=drive_link'
    }
  },
       {
    ar: {
      title: 'أنظمة الالياف الضوئية',
      description: 'تلخيص مادة الألياف الضوئية (Fiber Optics) ويشمل: أنواع الألياف، خصائصها، نماذج الانتشار، الفقد والتشتيت، والتطبيقات العملية – مرتب بشكل مبسط وسريع للمراجع',
      linkText: 'تحميل التلخيص',
      linkHref:'https://drive.google.com/drive/folders/1juRAiUiUkBWA5vnRIBbi0aCx5dTLvLmt?usp=drive_link'

    },
    en: {
      title: 'Fiber Optics ',
      description: 'Fiber Optics Summary: Fiber types, properties, propagation models, loss and dispersion, and practical applications - organized in a simple and quick review format',
      linkText: 'Download Summary',
      linkHref:'https://drive.google.com/drive/folders/1juRAiUiUkBWA5vnRIBbi0aCx5dTLvLmt?usp=drive_link'
    }
  },
      {
    ar: {
      title: 'أنظمة التحكم',
      description: 'تلخيص مادة أنظمة التحكم (Control Systems) ويشمل: أنواع الأنظمة، خصائص الاستجابة، التمثيل بالمخططات، تحويل لابلاس، الاستقرارية، تحليل التردد، وتصميم أنظمة التحكم – مرتب ومبسط للمراجعة السريعة والفهم العميق',
      linkText: 'تحميل التلخيص',
      linkHref:'https://drive.google.com/drive/folders/1gcmEY6GfVLSlTli_r6a5xFx2zWZQMQnw?usp=drive_link'

    },
    en: {
      title: 'Control System ',
      description: 'Control Systems Summary: Types of systems, response characteristics, graphical representation, Laplace transform, stability, frequency analysis, and control systems design - organized and simplified for quick review and deep understanding',
      linkText: 'Download Summary',
      linkHref:'https://drive.google.com/drive/folders/1gcmEY6GfVLSlTli_r6a5xFx2zWZQMQnw?usp=drive_link'
    }
  },
      {
    ar: {
      title: 'التشفير وامن الشبكات',
      description: 'تلخيص مادة التشفير وأمن الشبكات ويشمل: أنواع التشفير، خوارزميات التشفير المتماثل وغير المتماثل، التواقيع الرقمية، إدارة المفاتيح، بروتوكولات الأمان، أنواع الهجمات، وآليات الحماية – مرتب بطريقة مبسطة وشاملة للمراجعة السريعة والفهم الواضح',
      linkText: 'تحميل التلخيص',
      linkHref:'https://drive.google.com/drive/folders/1sRrYxzqd9xyxW7Ia5tirrEN_FgsqwGja?usp=drive_link'

    },
    en: {
      title: 'Cryptography and network security ',
      description: 'Summary of the material on cryptography and network security, including: types of encryption, symmetric and asymmetric encryption algorithms, digital signatures, key management, security protocols, types of attacks, and protection mechanisms - arranged in a simplified and comprehensive manner for quick review and clear understanding',
      linkText: 'Download Summary',
      linkHref:'https://drive.google.com/drive/folders/1sRrYxzqd9xyxW7Ia5tirrEN_FgsqwGja?usp=drive_link'
    }
  },
   {
    ar: {
      title: 'لغة البرمجة Python',
      description:'كتاب Python ويشمل: مفاهيم البرمجة، بنية اللغة، المكتبات الأساسية، تطبيقات عملية – مرتب بطريقة مبسطة وشاملة للمراجعة السريعة والفهم الواضح',
      linkText: 'تحميل الكتاب',
      linkHref:'https://drive.google.com/file/d/1HDQVInBD-viD-CRudhoQYnMF52xHgvW-/view?usp=drive_link'

    },
    en: {
      title: 'Python Programming ',
      description: 'Python Programming Book: Concepts of programming, language structure, core libraries, and practical applications – organized in a simplified and comprehensive manner for quick review and clear understanding',
      linkText: 'Download book',
      linkHref:'https://drive.google.com/file/d/1HDQVInBD-viD-CRudhoQYnMF52xHgvW-/view?usp=drive_link'
    }
  },
{
    "ar": {
      "title": "VHDL",
      "description": "تلاخيص مادة VHDL مرتبة في مجلد واحد لسهولة الوصول والمراجعة.",
      "linkText": "فتح التلاخيص",
      "linkHref": "https://drive.google.com/drive/folders/1i3Ki2e2kAc3JI8bZ_8P5mVbWhQNsyiU-?usp=drive_link"
    },
    "en": {
      "title": "VHDL",
      "description": "VHDL course summaries collected in one folder for easy access and review.",
      "linkText": "Open Summaries",
      "linkHref": "https://drive.google.com/drive/folders/1i3Ki2e2kAc3JI8bZ_8P5mVbWhQNsyiU-?usp=drive_link"
    }
  },
  {
    "ar": {
      "title": "اسمبلي",
      "description": "تلاخيص مادة الاسمبلي في مكان واحد، جاهزة للقراءة والمراجعة.",
      "linkText": "فتح التلاخيص",
      "linkHref": "https://drive.google.com/drive/folders/1yugRL-_hLfAlddalEgB_P-2-ijoW1mP1?usp=drive_link"
    },
    "en": {
      "title": "Assembly",
      "description": "Assembly course summaries in one place, ready to read and review.",
      "linkText": "Open Summaries",
      "linkHref": "https://drive.google.com/drive/folders/1yugRL-_hLfAlddalEgB_P-2-ijoW1mP1?usp=drive_link"
    }
  },
  {
    "ar": {
      "title": "معمارية الحاسوب",
      "description": "تلاخيص مادة معمارية الحاسوب منظمة في مجلد واحد للمراجعة والدراسة.",
      "linkText": "فتح التلاخيص",
      "linkHref": "https://drive.google.com/drive/folders/1Zsi6diY8mbrtRfryGDCKQ5Gaw0egp8Hd?usp=drive_link"
    },
    "en": {
      "title": "Computer Architecture",
      "description": "Computer Architecture course summaries organized in one folder for study and review.",
      "linkText": "Open Summaries",
      "linkHref": "https://drive.google.com/drive/folders/1Zsi6diY8mbrtRfryGDCKQ5Gaw0egp8Hd?usp=drive_link"
    }
  },
  {
    "ar": {
      "title": "مواضيع متقدمة في قواعد البيانات",
      "description": "تلاخيص مادة مواضيع متقدمة في قواعد البيانات، مجمعة لسهولة الوصول إليها.",
      "linkText": "فتح التلاخيص",
      "linkHref": "https://drive.google.com/drive/folders/1xKmBmt-pT0bfSHXvv4gzEsHY4VN7frTc?usp=drive_link"
    },
    "en": {
      "title": "Advanced Topics in Databases",
      "description": "Advanced Topics in Databases course summaries collected for easy access.",
      "linkText": "Open Summaries",
      "linkHref": "https://drive.google.com/drive/folders/1xKmBmt-pT0bfSHXvv4gzEsHY4VN7frTc?usp=drive_link"
    }
  },
];

langToggle.addEventListener('click', () => {
  const html = document.documentElement;
  const isArabic = html.lang === 'ar';

  html.lang = isArabic ? 'en' : 'ar';
  html.dir = isArabic ? 'ltr' : 'rtl';
  langToggle.textContent = isArabic ? 'AR' : 'EN';

  document.querySelector('h1').textContent = 'Summa';
  document.querySelector('.tagline').textContent = isArabic
    ? ':) Your Engineering Summaries in One Place '
    : 'تَلاخيصك الهَندسية في مكانٍ واحد :) ';
const backBtnAr = document.querySelector('.back-button.ar');
const backBtnEn = document.querySelector('.back-button.en');

if (isArabic) {
  backBtnAr.style.display = 'none';
  backBtnEn.style.display = 'inline-block';
} else {
  backBtnAr.style.display = 'inline-block';
  backBtnEn.style.display = 'none';
}
  document.querySelector('footer p').textContent = isArabic
    ? '© 2025 Summa. All rights reserved.'
    : '© 2025 Summa. جميع الحقوق محفوظة.';
   
  const materialDivs = document.querySelectorAll('.material');

  materialDivs.forEach((div, index) => {
    const data = materialsData[index];
    if (!data) return; 

    const titleEl = div.querySelector('h2');
    const descEl = div.querySelector('p');
    const linkEl = div.querySelector('a');

    if (isArabic) {
      titleEl.textContent = data.en.title; 
      descEl.textContent = data.en.description;
      linkEl.textContent = data.en.linkText;
      linkEl.href = data.en.linkHref;
    } else {
      titleEl.textContent = data.ar.title;
      descEl.textContent = data.ar.description;
      linkEl.textContent = data.ar.linkText;
      linkEl.href = data.ar.linkHref;
    }
  });
});


// Bilingual course aliases and topic keywords.
const materialKeywords = [
  {
    "ar": [
      "برمجة",
      "مؤشرات",
      "كائنية",
      "استدعاء ذاتي"
    ],
    "en": [
      "C++",
      "cpp",
      "OOP",
      "pointers",
      "recursion"
    ]
  },
  {
    "ar": [
      "هياكل البيانات",
      "داتا ستراكشر",
      "مصفوفات",
      "قوائم مرتبطة",
      "أكوام",
    ],
    "en": [
      "data structures",
      "DS",
      "arrays",
      "linked lists",
      "stacks",
      "queues"
    ]
  },
  {
    "ar": [
      "إنجليزي",
      "قواعد",
      "مفردات"
    ],
    "en": [
      "English",
      "grammar",
      "vocabulary",
      "language"
    ]
  },
  {
    "ar": [
      "دوائر",
      "كهرباء",
      "قانون أوم",
      "كيرشوف",
      "تيار",
      "جهد",
      "مقاومة",
      "سيركت"

    ],
    "en": [
      "circuits",
      "Ohm",
      "Kirchhoff",
      "current",
      "voltage",
      "resistance",
      "electrical"
    ]
  },
  {
    "ar": [
      "لاب دوائر",
      "مختبر كهرباء",
      "تجارب دوائر",
      "عملي",
      "مختبر",
      "سيركت"
    ],
    "en": [
      "circuit lab",
      "electrical lab",
      "experiments",
      "practical",
      "circuit"
    ]
  },
  {
    "ar": [
      "جبر خطي",
      "لينير",
      "مصفوفات",
      "متجهات",
      "معادلات خطية"
    ],
    "en": [
      "linear algebra",
      "matrices",
      "vectors",
      "linear equations"
    ]
  },
  {
    "ar": [
      "نظم التشغيل",
    ],
    "en": [
      "OS",
      "operating system",
      "processes",
      "scheduling",
      "memory"
    ]
  },
  {
    "ar": [
      "احتمالات",
      "إحصاء",
      "احصاء",
      "متغيرات عشوائية",
      "توزيعات"
    ],
    "en": [
      "probability",
      "statistics",
      "random variables",
      "distributions"
    ]
  },
  {
    "ar": [
      "قواعد البيانات",
      "داتابيس",
      "قاعدة بيانات",
      "جداول",
      "استعلامات",
      "علاقات"
    ],
    "en": [
      "database",
      "DB",
      "SQL",
      "tables",
      "queries",
      "ERD"
    ]
  },
  {
    "ar": [
      "ديجيتال",
      "منطق رقمي",
      "بوابات منطقية",
      "ثنائي",
      "دوائر رقمية"
    ],
    "en": [
      "digital logic",
      "logic gates",
      "binary",
      "digital circuits"
    ]
  },
  {
    "ar": [
      "لاب إلكترونيات",
      "مختبر الكترونيات",
      "تجارب إلكترونيات",
      "عملي"
    ],
    "en": [
      "electronics lab",
      "experiments",
      "practical electronics"
    ]
  },
  {
    "ar": [
      "تصميم ويب",
      "صفحات ويب",
    ],
    "en": [
      "HTML",
      "web",
      "markup",
      "tags",
      "frontend"
    ]
  },
  {
    "ar": [
      "تنسيق",
      "تصميم ويب",
      "أنماط",
      "ستايل"
    ],
    "en": [
      "CSS",
      "styles",
      "stylesheet",
      "web design",
      "responsive"
    ]
  },
  {
    "ar": [
      "فايبر",
      "ألياف ضوئية",
      "الياف",
      "اتصالات ضوئية",
    ],
    "en": [
      "fiber",
      "fibre",
      "optical",
      "optics",
      "dispersion"
    ]
  },
  {
    "ar": [
      "كنترول",
      "تحكم",
      "لابلاس",
      "استقرارية",
      "تغذية راجعة"
    ],
    "en": [
      "control",
      "Laplace",
      "stability",
      "feedback",
      "transfer function"
    ]
  },
  {
    "ar": [
      "تشفير",
      "أمن الشبكات",
      "امن",
      "حماية",
    ],
    "en": [
      "cryptography",
      "encryption",
      "network security",
      "RSA",
      "AES",
      "digital signatures"
    ]
  },
  {
    "ar": [
      "بايثون",
      "بايتون",
      "برمجة",
      "مكتبات"
    ],
    "en": [
      "Python",
      "py",
      "programming",
      "libraries"
    ]
  },
  {
    "ar": [
      "وصف العتاد",
      "وصف الدوائر",
      "تصميم رقمي",
      "محاكاة"
    ],
    "en": [
      "VHDL",
      "HDL",
      "FPGA",
      "hardware description",
      "entity",
      "architecture",
      "simulation"
    ]
  },
  {
    "ar": [
      "أسمبلي",
      "لغة التجميع",
      "تجميع",
      "سجلات",
      "معالج"
    ],
    "en": [
      "assembly",
      "asm",
      "assembler",
      "x86",
      "8086",
      "registers",
      "MOV",
      "instructions"
    ]
  },
  {
    "ar": [
      "معمارية الكمبيوتر",
      "تنظيم الحاسوب",
      "بنية الحاسوب",
      "معالج",
    ],
    "en": [
      "computer architecture",
      "computer organization",
      "CPU",
      "ALU",
      "cache",
      "pipeline",
      "RISC",
      "CISC"
    ]
  },
  {
    "ar": [
      "قواعد بيانات متقدمة",
      "داتابيس متقدم",
      "مواضيع متقدمة",
      "معاملات",
      "فهرسة",
      "قواعد بيانات موزعة"
    ],
    "en": [
      "advanced database",
      "advanced DB",
      "SQL",
      "NoSQL",
      "transactions",
      "indexing",
      "distributed databases"
    ]
  }
];
materialsData.forEach((material, index) => { material.keywords = materialKeywords[index]; });

const materialSearch = document.getElementById('materialSearch');
const emptyState = document.getElementById('emptyState');
function normalizeSearch(text) {
  return text.toLowerCase().normalize('NFKD').replace(/[\u064B-\u065F\u0670\u0640]/g, '').replace(/[أإآ]/g, 'ا').trim();
}
function filterMaterials() {
  const query = normalizeSearch(materialSearch.value);
  let visible = 0;
  document.querySelectorAll('.material').forEach((card, index) => {
    const data = materialsData[index];
    const text = [data.ar.title, data.en.title, data.ar.description, data.en.description, ...data.keywords.ar, ...data.keywords.en].join(' ');
    const searchable = normalizeSearch(text);
    card.hidden = !query.split(/\s+/).every(term => searchable.includes(term));
    if (!card.hidden) visible++;
  });
  emptyState.hidden = visible > 0;
}
function updateLibraryLanguage() {
  const ar = document.documentElement.lang === 'ar';
  document.getElementById('libraryEyebrow').textContent = ar ? 'مكتبتك الهندسية' : 'Your engineering library';
  document.getElementById('libraryTitle').textContent = ar ? 'مادتك، بخطوة واحدة.' : 'Your course. One step away.';
  document.getElementById('libraryDescription').textContent = ar ? 'تصفح 21 مادة، واختر التلخيص الذي تحتاجه.' : 'Explore 21 courses and find the summary you need.';
  document.getElementById('searchLabel').textContent = ar ? 'ابحث عن مادة' : 'Find a course';
  materialSearch.placeholder = ar ? 'اسم المادة أو موضوعها...' : 'Course name or topic...';
  emptyState.textContent = ar ? 'لا توجد مواد مطابقة. جرّب كلمة أخرى.' : 'No matching courses. Try another keyword.';
  document.querySelector('.materials').setAttribute('aria-label', ar ? 'تلاخيص المواد' : 'Course summaries');
  renderKeywordTags();
  filterMaterials();
}
materialSearch.addEventListener('input', filterMaterials);
langToggle.addEventListener('click', updateLibraryLanguage);
function renderKeywordTags() {
  const lang = document.documentElement.lang;
  document.querySelectorAll(".material").forEach((card, index) => {
    let tags = card.querySelector(".keyword-tags");
    if (!tags) {
      tags = document.createElement("div");
      tags.className = "keyword-tags";
      card.querySelector("a").before(tags);
    }
    tags.replaceChildren(...materialsData[index].keywords[lang].slice(0, 3).map(keyword => {
      const tag = document.createElement("span");
      tag.textContent = keyword;
      return tag;
    }));
  });
}
renderKeywordTags();
