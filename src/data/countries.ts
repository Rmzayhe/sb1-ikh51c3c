// Country data with immigration programs

export interface Country {
  id: string;
  name: string;
  nameAr: string;
  flagUrl: string;
  imageUrl: string;
  description: string;
  descriptionAr: string;
  programs: Program[];
}

export interface Program {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  requirements: string[];
  requirementsAr: string[];
  benefits: string[];
  benefitsAr: string[];
  timeline: string;
  timelineAr: string;
}

export const countries: Country[] = [
  {
    id: 'canada',
    name: 'Canada',
    nameAr: 'كندا',
    flagUrl: 'https://cdn.countryflags.com/thumbs/canada/flag-400.png',
    imageUrl: 'https://images.pexels.com/photos/2773578/pexels-photo-2773578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Discover opportunities in Canada with Express Entry, Provincial Nominee Programs, and more.',
    descriptionAr: 'اكتشف فرص الهجرة إلى كندا من خلال برنامج الدخول السريع وبرامج ترشيح المقاطعات والمزيد.',
    programs: [
      {
        id: 'express-entry',
        title: 'Express Entry',
        titleAr: 'الدخول السريع',
        description: 'The Express Entry system manages applications for permanent residence under these federal economic immigration programs: the Federal Skilled Worker Program, the Federal Skilled Trades Program, and the Canadian Experience Class.',
        descriptionAr: 'يدير نظام الدخول السريع طلبات الإقامة الدائمة بموجب برامج الهجرة الاقتصادية الفيدرالية: برنامج العمال المهرة الفيدرالي، وبرنامج المهن الماهرة الفيدرالي، وفئة الخبرة الكندية.',
        requirements: [
          'Minimum language proficiency (CLB 7 for FSWP/CEC, CLB 5 for FSTP)',
          'Education credential assessment',
          'Proof of funds (unless you are already working in Canada)',
          'At least 1 year of skilled work experience in NOC 0, A, or B'
        ],
        requirementsAr: [
          'الحد الأدنى من الكفاءة اللغوية (CLB 7 لبرنامج العمال المهرة الفيدرالي/فئة الخبرة الكندية، CLB 5 لبرنامج المهن الماهرة الفيدرالي)',
          'تقييم المؤهل التعليمي',
          'إثبات الأموال (ما لم تكن تعمل بالفعل في كندا)',
          'خبرة عمل ماهرة لا تقل عن سنة واحدة في فئات NOC 0 أو A أو B'
        ],
        benefits: [
          'Fast processing times (usually 6 months or less)',
          'Pathway to permanent residence',
          'Access to healthcare and social benefits',
          'Work and study opportunities for family members'
        ],
        benefitsAr: [
          'أوقات معالجة سريعة (عادة 6 أشهر أو أقل)',
          'مسار للإقامة الدائمة',
          'الوصول إلى الرعاية الصحية والمزايا الاجتماعية',
          'فرص العمل والدراسة لأفراد الأسرة'
        ],
        timeline: 'Average processing time: 6 months from submission of complete application',
        timelineAr: 'متوسط وقت المعالجة: 6 أشهر من تقديم الطلب الكامل'
      },
      {
        id: 'pnp',
        title: 'Provincial Nominee Program (PNP)',
        titleAr: 'برنامج ترشيح المقاطعات',
        description: 'Provincial Nominee Programs allow Canadian provinces and territories to nominate individuals who wish to immigrate to Canada and who are interested in settling in a particular province.',
        descriptionAr: 'تسمح برامج ترشيح المقاطعات للمقاطعات والأقاليم الكندية بترشيح الأفراد الذين يرغبون في الهجرة إلى كندا والمهتمين بالاستقرار في مقاطعة معينة.',
        requirements: [
          'Skills, education and work experience to contribute to the economy of a specific province',
          'Genuine intention to live in the nominating province',
          'Meet specific requirements of the nominating province',
          'Language proficiency requirements (vary by province)'
        ],
        requirementsAr: [
          'المهارات والتعليم وخبرة العمل للمساهمة في اقتصاد مقاطعة معينة',
          'نية حقيقية للعيش في المقاطعة المرشحة',
          'تلبية المتطلبات المحددة للمقاطعة المرشحة',
          'متطلبات الكفاءة اللغوية (تختلف حسب المقاطعة)'
        ],
        benefits: [
          'Targeted immigration pathways based on provincial needs',
          'May have lower requirements than federal programs',
          'Additional points in Express Entry if obtained through an Express Entry stream',
          'Support for integration into the provincial community'
        ],
        benefitsAr: [
          'مسارات هجرة مستهدفة بناءً على احتياجات المقاطعة',
          'قد تكون المتطلبات أقل من البرامج الفيدرالية',
          'نقاط إضافية في الدخول السريع إذا تم الحصول عليها من خلال مسار الدخول السريع',
          'دعم الاندماج في مجتمع المقاطعة'
        ],
        timeline: 'Processing times vary by province, typically 15-19 months for paper-based applications',
        timelineAr: 'تختلف أوقات المعالجة حسب المقاطعة، عادة 15-19 شهرًا للطلبات الورقية'
      }
    ]
  },
  {
    id: 'australia',
    name: 'Australia',
    nameAr: 'أستراليا',
    flagUrl: 'https://cdn.countryflags.com/thumbs/australia/flag-400.png',
    imageUrl: 'https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Explore Australia\'s skilled migration pathways and visa options for a new life down under.',
    descriptionAr: 'استكشف مسارات الهجرة المهارية وخيارات التأشيرة في أستراليا لحياة جديدة.',
    programs: [
      {
        id: 'skilled-independent',
        title: 'Skilled Independent Visa (Subclass 189)',
        titleAr: 'تأشيرة المهارات المستقلة (الفئة الفرعية 189)',
        description: 'The Skilled Independent visa is a permanent residence visa for points-tested skilled workers who are not sponsored by an employer, state or territory, or family member.',
        descriptionAr: 'تأشيرة المهارات المستقلة هي تأشيرة إقامة دائمة للعمال المهرة الذين يخضعون لاختبار النقاط والذين لا يتم رعايتهم من قبل صاحب عمل أو ولاية أو إقليم أو أحد أفراد الأسرة.',
        requirements: [
          'Invitation to apply after submitting an Expression of Interest',
          'Be under 45 years of age',
          'Score at least 65 points on the points test',
          'Have an occupation on the relevant skilled occupation list',
          'Positive skills assessment for your nominated occupation',
          'Meet English language requirements'
        ],
        requirementsAr: [
          'دعوة للتقديم بعد تقديم تعبير عن الاهتمام',
          'أن يكون عمرك أقل من 45 عامًا',
          'الحصول على 65 نقطة على الأقل في اختبار النقاط',
          'أن يكون لديك مهنة في قائمة المهن الماهرة ذات الصلة',
          'تقييم إيجابي للمهارات للمهنة المرشحة',
          'تلبية متطلبات اللغة الإنجليزية'
        ],
        benefits: [
          'Permanent residence from day one',
          'Work and study anywhere in Australia',
          'Access to healthcare through Medicare',
          'Sponsor eligible relatives for permanent residence',
          'Pathway to Australian citizenship'
        ],
        benefitsAr: [
          'الإقامة الدائمة من اليوم الأول',
          'العمل والدراسة في أي مكان في أستراليا',
          'الوصول إلى الرعاية الصحية من خلال Medicare',
          'رعاية الأقارب المؤهلين للإقامة الدائمة',
          'مسار للحصول على الجنسية الأسترالية'
        ],
        timeline: 'Processing time: 8-14 months from invitation to decision',
        timelineAr: 'وقت المعالجة: 8-14 شهرًا من الدعوة إلى القرار'
      }
    ]
  },
  {
    id: 'eastern-europe',
    name: 'Eastern Europe',
    nameAr: 'أوروبا الشرقية',
    flagUrl: 'https://images.pexels.com/photos/1174136/pexels-photo-1174136.jpeg',
    imageUrl: 'https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg',
    description: 'Work opportunities in Eastern European countries including Poland, Czech Republic, Slovakia, Hungary, Romania, and Bulgaria.',
    descriptionAr: 'فرص عمل في دول أوروبا الشرقية بما في ذلك بولندا وجمهورية التشيك وسلوفاكيا والمجر ورومانيا وبلغاريا.',
    programs: [
      {
        id: 'general-work',
        title: 'Eastern Europe Work Program',
        titleAr: 'برنامج العمل في أوروبا الشرقية',
        description: 'Available positions in manufacturing, construction, hospitality, and services sectors across Eastern European countries.',
        descriptionAr: 'وظائف متاحة في قطاعات التصنيع والبناء والضيافة والخدمات في دول أوروبا الشرقية.',
        requirements: [
          'Valid passport',
          'Clean criminal record',
          'Basic English or willingness to learn',
          'Good health condition',
          'Age between 18-45 years'
        ],
        requirementsAr: [
          'جواز سفر ساري المفعول',
          'سجل جنائي نظيف',
          'إنجليزية أساسية أو الرغبة في التعلم',
          'حالة صحية جيدة',
          'العمر بين 18-45 سنة'
        ],
        benefits: [
          'Official work contract provided by our agency',
          'Guaranteed accommodation arranged by us',
          'Transportation to workplace provided',
          'Health insurance coverage',
          'Assistance with work permit and visa process',
          'Local support and orientation',
          'Language course options available',
          'Regular salary payments in Euros'
        ],
        benefitsAr: [
          'عقد عمل رسمي مقدم من وكالتنا',
          'سكن مضمون مرتب من قبلنا',
          'مواصلات إلى مكان العمل',
          'تغطية التأمين الصحي',
          'المساعدة في عملية تصريح العمل والتأشيرة',
          'دعم محلي وتوجيه',
          'خيارات دورات لغة متاحة',
          'دفعات راتب منتظمة باليورو'
        ],
        timeline: 'Processing time: 2-3 months from application to arrival',
        timelineAr: 'وقت المعالجة: 2-3 أشهر من التقديم إلى الوصول'
      }
    ]
  },
  {
    id: 'western-europe',
    name: 'Western Europe',
    nameAr: 'أوروبا الغربية',
    flagUrl: 'https://images.pexels.com/photos/1174136/pexels-photo-1174136.jpeg',
    imageUrl: 'https://images.pexels.com/photos/1796730/pexels-photo-1796730.jpeg',
    description: 'Job seeker visa opportunities in Germany, Netherlands, and other Western European countries.',
    descriptionAr: 'فرص تأشيرة الباحث عن عمل في ألمانيا وهولندا ودول أوروبا الغربية الأخرى.',
    programs: [
      {
        id: 'job-seeker',
        title: 'Job Seeker Visa Program',
        titleAr: 'برنامج تأشيرة الباحث عن عمل',
        description: 'Opportunity to search for employment in Western European countries with our support and guidance.',
        descriptionAr: 'فرصة للبحث عن عمل في دول أوروبا الغربية مع دعمنا وتوجيهنا.',
        requirements: [
          'University degree or professional qualification',
          'Basic language proficiency (A2-B1)',
          'Valid passport',
          'Clean criminal record'
        ],
        requirementsAr: [
          'شهادة جامعية أو مؤهل مهني',
          'إتقان أساسي للغة (A2-B1)',
          'جواز سفر ساري المفعول',
          'سجل جنائي نظيف'
        ],
        benefits: [
          'Complete visa application assistance',
          'CV preparation and optimization',
          'Job search strategy planning',
          'Interview preparation support',
          'Translation services for documents',
          'Local orientation upon arrival',
          'Temporary accommodation assistance',
          'Network of potential employers'
        ],
        benefitsAr: [
          'مساعدة كاملة في طلب التأشيرة',
          'إعداد وتحسين السيرة الذاتية',
          'تخطيط استراتيجية البحث عن عمل',
          'دعم التحضير للمقابلات',
          'خدمات ترجمة المستندات',
          'توجيه محلي عند الوصول',
          'مساعدة في السكن المؤقت',
          'شبكة من أصحاب العمل المحتملين'
        ],
        timeline: 'Processing time: 3-4 months for visa approval',
        timelineAr: 'وقت المعالجة: 3-4 أشهر للموافقة على التأشيرة'
      }
    ]
  }
];

export const getCountryById = (id: string): Country | undefined => {
  return countries.find(country => country.id === id);
};