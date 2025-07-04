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
            linkHref: 'https://drive.google.com/drive/folders/1xHQJCmPSKud2ggK0q_rV0bAtNgVS76wh?usp=drive_linkhttps://drive.google.com/drive/folders/1-pPB6cuzluKWiB-95PsB0aOyIOf71JDf?usp=drive_link'

    },
    en: {
      title: 'English',
      description: 'Learn the most important concepts of the English language.Includes the most famous words and rules of the English language',
      linkText: 'Download Summary',
      linkHref: 'https://drive.google.com/drive/folders/1xHQJCmPSKud2ggK0q_rV0bAtNgVS76wh?usp=drive_linkhttps://drive.google.com/drive/folders/1-pPB6cuzluKWiB-95PsB0aOyIOf71JDf?usp=drive_link'
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
      linkText: 'قريباَ',
      linkHref:'https://drive.google.com/drive/folders/1YtRyhIoM28pEqT1ZWtOWtYCLT7D0nSES?usp=drive_link'

    },
    en: {
      title: 'Computer Hypertext Markup Language (HTML)',
      description: 'A very simple language used to describe what its pages contain, a simple summary of this language ',
      linkText: 'Soon',
      linkHref:'https://drive.google.com/drive/folders/1YtRyhIoM28pEqT1ZWtOWtYCLT7D0nSES?usp=drive_link'
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
