/* =====================================================
   REACT NATIVE ACADEMY
   3 LANGUAGE SYSTEM
   EN / FR / AR
===================================================== */


/* =====================================================
   TRANSLATIONS
===================================================== */

const translations = {

  en: {

    progress: "Progress",

    searchLessons: "Search lessons...",

    interactiveLearning: "Interactive Learning",

    masterReactNative: "Master React Native",

    heroDescription:
      "Learn React Native from the basics to professional app development.",

    startLearning: "Start Learning",

    lessons: "Lessons",

    questions: "Questions",

    projects: "Projects",

    whatYouWillLearn: "What you will learn",

    explanation: "Explanation",

    whenToUse: "When to use",

    realWorld: "Real world",

    commonMistakes: "Common mistakes",

    practice: "Practice",

    copyCode: "Copy Code",

    checkAnswer: "Check Answer",

    quickQuestion: "Quick Question",

    question: "Question",

    practicalChallenge: "Practical Challenge",

    openEditor: "Open Editor",

    previous: "← Previous",

    next: "Next →",

    markComplete: "✓ Mark as Complete",

    completed: "Completed",

    lesson: "Lesson",

    correct: "Correct! 🎉",

    wrong: "Not quite. Try again.",

    codeSuccess: "Excellent! Your code contains the required concepts. 🎉",

    codeError:
      "Your code is not complete yet. Check the required concept and try again.",

    copied: "Code copied!",

    alreadyCompleted: "This lesson is already completed.",

    noLessons: "No lessons found."

  },


  fr: {

    progress: "Progression",

    searchLessons: "Rechercher une leçon...",

    interactiveLearning: "Apprentissage interactif",

    masterReactNative: "Maîtrisez React Native",

    heroDescription:
      "Apprenez React Native des bases jusqu'au développement professionnel d'applications.",

    startLearning: "Commencer",

    lessons: "Leçons",

    questions: "Questions",

    projects: "Projets",

    whatYouWillLearn: "Ce que vous allez apprendre",

    explanation: "Explication",

    whenToUse: "Quand l'utiliser",

    realWorld: "Dans le monde réel",

    commonMistakes: "Erreurs fréquentes",

    practice: "Pratique",

    copyCode: "Copier le code",

    checkAnswer: "Vérifier",

    quickQuestion: "Question rapide",

    question: "Question",

    practicalChallenge: "Défi pratique",

    openEditor: "Ouvrir l'éditeur",

    previous: "← Précédent",

    next: "Suivant →",

    markComplete: "✓ Marquer comme terminé",

    completed: "Terminé",

    lesson: "Leçon",

    correct: "Correct ! 🎉",

    wrong: "Pas tout à fait. Réessaie.",

    codeSuccess:
      "Excellent ! Ton code contient les concepts nécessaires. 🎉",

    codeError:
      "Ton code n'est pas encore complet. Vérifie le concept demandé et réessaie.",

    copied: "Code copié !",

    alreadyCompleted: "Cette leçon est déjà terminée.",

    noLessons: "Aucune leçon trouvée."

  },


  ar: {

    progress: "التقدم",

    searchLessons: "ابحث عن درس...",

    interactiveLearning: "تعلم تفاعلي",

    masterReactNative: "أتقن React Native",

    heroDescription:
      "تعلم React Native من الأساسيات حتى تطوير التطبيقات بشكل احترافي.",

    startLearning: "ابدأ التعلم",

    lessons: "دروس",

    questions: "أسئلة",

    projects: "مشاريع",

    whatYouWillLearn: "ماذا ستتعلم",

    explanation: "الشرح",

    whenToUse: "متى تستخدمه",

    realWorld: "مثال من الواقع",

    commonMistakes: "الأخطاء الشائعة",

    practice: "التطبيق",

    copyCode: "نسخ الكود",

    checkAnswer: "تحقق من الإجابة",

    quickQuestion: "سؤال سريع",

    question: "السؤال",

    practicalChallenge: "تحدي عملي",

    openEditor: "فتح المحرر",

    previous: "السابق ←",

    next: "التالي →",

    markComplete: "✓ تحديد كمكتمل",

    completed: "مكتمل",

    lesson: "الدرس",

    correct: "صحيح! 🎉",

    wrong: "ليس تماماً. حاول مرة أخرى.",

    codeSuccess:
      "ممتاز! الكود الخاص بك يحتوي على المفاهيم المطلوبة. 🎉",

    codeError:
      "الكود غير مكتمل بعد. راجع المفهوم المطلوب وحاول مرة أخرى.",

    copied: "تم نسخ الكود!",

    alreadyCompleted: "هذا الدرس مكتمل بالفعل.",

    noLessons: "لم يتم العثور على دروس."

  }

};


/* =====================================================
   LESSONS
===================================================== */

const lessons = [

  {
    id: 1,

    title: {
      en: "Expo Router & Navigation",
      fr: "Expo Router et navigation",
      ar: "Expo Router والتنقل"
    },

    subtitle: {
      en: "Move between screens",
      fr: "Naviguer entre les écrans",
      ar: "التنقل بين الشاشات"
    },

    description: {
      en: "Learn how to move between screens using Expo Router.",
      fr: "Apprenez à naviguer entre les écrans avec Expo Router.",
      ar: "تعلم كيف تنتقل بين الشاشات باستعمال Expo Router."
    },

    learning: {
      en: "router.push(), router.back() and Link.",
      fr: "router.push(), router.back() et Link.",
      ar: "تعلم router.push() و router.back() و Link."
    },

    explanation: {
      en: "Expo Router uses files as routes. Each screen can have its own file and you can navigate between them.",
      fr: "Expo Router utilise les fichiers comme routes. Chaque écran peut avoir son propre fichier.",
      ar: "Expo Router يستعمل الملفات كمسارات. كل شاشة يمكن أن يكون لها ملف خاص بها."
    },

    when: {
      en: "Use navigation whenever your application has multiple screens.",
      fr: "Utilisez la navigation lorsque votre application possède plusieurs écrans.",
      ar: "تستعمل التنقل عندما يكون تطبيقك فيه عدة شاشات."
    },

    realWorld: {
      en: "For example: Home → Profile → Settings.",
      fr: "Exemple : Accueil → Profil → Paramètres.",
      ar: "مثال: الرئيسية ← الملف الشخصي ← الإعدادات."
    },

    mistakes: {
      en: "Using the wrong route path or forgetting to create the screen file.",
      fr: "Utiliser un mauvais chemin ou oublier de créer le fichier de l'écran.",
      ar: "استعمال مسار خاطئ أو نسيان إنشاء ملف الشاشة."
    },

    challenge: {
      en: "Create a button that navigates from Home to Profile.",
      fr: "Créez un bouton qui navigue de Home vers Profile.",
      ar: "أنشئ زرًا ينتقل من Home إلى Profile."
    },

    starterCode:
`import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <View>
      <Text>Home</Text>

      {/* Create a button here */}
    </View>
  );
}`,

    keywords: [
      "router.push",
      "profile"
    ],

    question: {
      text: {
        en: "Which function moves the user to another route?",
        fr: "Quelle fonction permet de naviguer vers une autre route ?",
        ar: "ما هي الدالة التي تنقل المستخدم إلى Route أخرى؟"
      },

      answers: {
        en: [
          "router.push()",
          "router.back()",
          "console.log()",
          "useState()"
        ],

        fr: [
          "router.push()",
          "router.back()",
          "console.log()",
          "useState()"
        ],

        ar: [
          "router.push()",
          "router.back()",
          "console.log()",
          "useState()"
        ]
      },

      correct: 0
    }
  },


  {
    id: 2,

    title: {
      en: "Stack Navigation",
      fr: "Navigation Stack",
      ar: "التنقل Stack"
    },

    subtitle: {
      en: "Build screen stacks",
      fr: "Créer des piles d'écrans",
      ar: "إنشاء مجموعة شاشات"
    },

    description: {
      en: "Understand stack navigation and how screens are placed on top of each other.",
      fr: "Comprenez la navigation Stack et l'empilement des écrans.",
      ar: "افهم كيف تعمل Stack Navigation وكيف يتم ترتيب الشاشات."
    },

    learning: {
      en: "Stacks, navigation history and back navigation.",
      fr: "Stacks, historique et retour.",
      ar: "Stacks وسجل التنقل والعودة."
    },

    explanation: {
      en: "A stack works like a stack of cards. A new screen is placed on top.",
      fr: "Une Stack fonctionne comme une pile de cartes. Un nouvel écran est placé au-dessus.",
      ar: "الـ Stack تشبه مجموعة بطاقات، كل شاشة جديدة توضع فوق السابقة."
    },

    when: {
      en: "Use it when your application has a natural screen history.",
      fr: "Utilisez-la lorsque votre application possède un historique naturel.",
      ar: "استعملها عندما يكون عند التطبيق تسلسل طبيعي للشاشات."
    },

    realWorld: {
      en: "Home → Product → Product Details → Checkout.",
      fr: "Accueil → Produit → Détails → Paiement.",
      ar: "الرئيسية → المنتج → التفاصيل → الدفع."
    },

    mistakes: {
      en: "Creating confusing navigation paths.",
      fr: "Créer des chemins de navigation confus.",
      ar: "إنشاء مسارات تنقل غير منظمة."
    },

    challenge: {
      en: "Create a stack containing Home and Profile screens.",
      fr: "Créez une Stack contenant Home et Profile.",
      ar: "أنشئ Stack تحتوي على Home و Profile."
    },

    starterCode:
`import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      {/* Add your screens */}
    </Stack>
  );
}`,

    keywords: [
      "Stack"
    ],

    question: {
      text: {
        en: "What does a Stack mainly manage?",
        fr: "Que gère principalement une Stack ?",
        ar: "ماذا تدير Stack بشكل أساسي؟"
      },

      answers: {
        en: [
          "Screen navigation history",
          "Images",
          "Database tables",
          "CSS files"
        ],

        fr: [
          "L'historique de navigation",
          "Les images",
          "Les tables de base de données",
          "Les fichiers CSS"
        ],

        ar: [
          "سجل التنقل بين الشاشات",
          "الصور",
          "جداول قاعدة البيانات",
          "ملفات CSS"
        ]
      },

      correct: 0
    }
  },


  {
    id: 3,

    title: {
      en: "Tabs Navigation",
      fr: "Navigation par onglets",
      ar: "التنقل بواسطة Tabs"
    },

    subtitle: {
      en: "Build bottom tabs",
      fr: "Créer des onglets",
      ar: "إنشاء Tabs"
    },

    description: {
      en: "Learn how to create tab-based navigation.",
      fr: "Apprenez à créer une navigation par onglets.",
      ar: "تعلم كيف تنشئ نظام تنقل باستعمال Tabs."
    },

    learning: {
      en: "Tabs, routes and navigation structure.",
      fr: "Onglets, routes et structure de navigation.",
      ar: "Tabs والمسارات وهيكلة التنقل."
    },

    explanation: {
      en: "Tabs allow users to switch quickly between main sections of an application.",
      fr: "Les onglets permettent de changer rapidement entre les sections principales.",
      ar: "الـ Tabs تسمح للمستخدم بالتنقل بسرعة بين الأقسام الرئيسية."
    },

    when: {
      en: "Use tabs for the main areas of an app.",
      fr: "Utilisez les onglets pour les sections principales.",
      ar: "استعمل Tabs للأقسام الرئيسية للتطبيق."
    },

    realWorld: {
      en: "Home, Search, Notifications and Profile.",
      fr: "Accueil, Recherche, Notifications et Profil.",
      ar: "الرئيسية، البحث، الإشعارات والملف الشخصي."
    },

    mistakes: {
      en: "Adding too many tabs and confusing the user.",
      fr: "Ajouter trop d'onglets et perdre l'utilisateur.",
      ar: "إضافة عدد كبير من Tabs وإرباك المستخدم."
    },

    challenge: {
      en: "Create three main tabs for an application.",
      fr: "Créez trois onglets principaux.",
      ar: "أنشئ ثلاثة Tabs رئيسية لتطبيق."
    },

    starterCode:
`import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      {/* Add tabs */}
    </Tabs>
  );
}`,

    keywords: [
      "Tabs"
    ],

    question: {
      text: {
        en: "When are tabs useful?",
        fr: "Quand les onglets sont-ils utiles ?",
        ar: "متى تكون Tabs مفيدة؟"
      },

      answers: {
        en: [
          "For main sections",
          "For passwords",
          "For API requests",
          "For database storage"
        ],

        fr: [
          "Pour les sections principales",
          "Pour les mots de passe",
          "Pour les requêtes API",
          "Pour le stockage"
        ],

        ar: [
          "للأقسام الرئيسية",
          "لكلمات المرور",
          "لطلبات API",
          "لتخزين قاعدة البيانات"
        ]
      },

      correct: 0
    }
  }

];


/* =====================================================
   GENERATE REMAINING LESSONS
===================================================== */

const extraLessons = [

  ["Dynamic Routes + Parameters", "Routes dynamiques et paramètres", "Dynamic Routes والمعاملات"],
  ["Professional State", "Gestion professionnelle de l'état", "إدارة State باحتراف"],
  ["Context API", "Context API", "Context API"],
  ["Zustand", "Zustand", "Zustand"],
  ["Fetch + HTTP", "Fetch et HTTP", "Fetch و HTTP"],
  ["GET / POST / PUT / DELETE", "GET / POST / PUT / DELETE", "GET / POST / PUT / DELETE"],
  ["Loading + Error Handling", "Chargement et gestion des erreurs", "Loading ومعالجة الأخطاء"],
  ["API Architecture", "Architecture API", "هندسة API"],
  ["Login & Register", "Connexion et inscription", "تسجيل الدخول وإنشاء الحساب"],
  ["Tokens + Sessions", "Tokens et sessions", "Tokens و Sessions"],
  ["Protected Routes", "Routes protégées", "المسارات المحمية"],
  ["Forms", "Formulaires", "Forms"],
  ["Validation with Zod", "Validation avec Zod", "التحقق باستعمال Zod"],
  ["React Hook Form", "React Hook Form", "React Hook Form"],
  ["AsyncStorage", "AsyncStorage", "AsyncStorage"],
  ["Secure Storage", "Stockage sécurisé", "التخزين الآمن"],
  ["Saving Settings + User Data", "Sauvegarde des paramètres", "حفظ الإعدادات وبيانات المستخدم"],
  ["Camera + Image Picker", "Caméra et Image Picker", "الكاميرا و Image Picker"],
  ["Files + Upload", "Fichiers et Upload", "الملفات والرفع"],
  ["Permissions", "Permissions", "الصلاحيات"],
  ["Location", "Géolocalisation", "الموقع الجغرافي"],
  ["Push Notifications", "Notifications Push", "الإشعارات"],
  ["Reanimated", "Reanimated", "Reanimated"],
  ["Gestures + Interactive Animations", "Gestes et animations interactives", "الإيماءات والأنيميشن التفاعلي"],
  ["React Native + Backend API", "React Native et Backend API", "React Native و Backend API"],
  ["CRUD + MySQL", "CRUD et MySQL", "CRUD و MySQL"],
  ["Build + APK/AAB + Production", "Build, APK/AAB et Production", "Build و APK/AAB والإنتاج"]

];


extraLessons.forEach((item, index) => {

  const id = index + 4;

  lessons.push({

    id,

    title: {

      en: item[0],

      fr: item[1],

      ar: item[2]
    },

    subtitle: {

      en: "Professional React Native skill",

      fr: "Compétence React Native professionnelle",

      ar: "مهارة React Native احترافية"
    },

    description: {

      en: `Learn ${item[0]} in a practical React Native workflow.`,

      fr: `Apprenez ${item[1]} dans un workflow React Native pratique.`,

      ar: `تعلم ${item[2]} بطريقة عملية داخل React Native.`
    },

    learning: {

      en: `Understand the important concepts of ${item[0]}.`,

      fr: `Comprenez les concepts importants de ${item[1]}.`,

      ar: `افهم أهم مفاهيم ${item[2]}.`
    },

    explanation: {

      en: `${item[0]} is an important skill when building real applications.`,

      fr: `${item[1]} est une compétence importante pour créer de vraies applications.`,

      ar: `${item[2]} تعتبر مهارة مهمة عند بناء تطبيقات حقيقية.`
    },

    when: {

      en: "Use this concept when your application requires it.",

      fr: "Utilisez ce concept lorsque votre application en a besoin.",

      ar: "استعمل هذا المفهوم عندما يحتاجه تطبيقك."
    },

    realWorld: {

      en: "This concept is commonly used in production applications.",

      fr: "Ce concept est couramment utilisé dans les applications professionnelles.",

      ar: "هذا المفهوم يستعمل كثيراً في التطبيقات الحقيقية."
    },

    mistakes: {

      en: "Ignoring architecture, error handling or security can create problems later.",

      fr: "Ignorer l'architecture, les erreurs ou la sécurité peut créer des problèmes.",

      ar: "إهمال الهندسة أو معالجة الأخطاء أو الأمان يمكن أن يسبب مشاكل لاحقاً."
    },

    challenge: {

      en: `Build a small practical example using ${item[0]}.`,

      fr: `Créez un petit exemple pratique avec ${item[1]}.`,

      ar: `أنشئ مثالاً عملياً صغيراً باستعمال ${item[2]}.`
    },

    starterCode:
`// React Native practice

// Topic:
${item[0]}

// Write your solution here
`,

    keywords: [

      item[0].split(" ")[0]

    ],

    question: {

      text: {

        en: `Why is "${item[0]}" useful in React Native?`,

        fr: `Pourquoi "${item[1]}" est-il utile dans React Native ?`,

        ar: `لماذا يعتبر "${item[2]}" مفيداً في React Native؟`
      },

      answers: {

        en: [
          "It solves a real application problem",
          "It replaces JavaScript completely",
          "It is only for styling",
          "It is not useful"
        ],

        fr: [
          "Il résout un vrai problème d'application",
          "Il remplace complètement JavaScript",
          "Il sert uniquement au style",
          "Il n'est pas utile"
        ],

        ar: [
          "يحل مشكلة حقيقية في التطبيق",
          "يعوض JavaScript بالكامل",
          "يستعمل فقط للتصميم",
          "ليس مفيداً"
        ]
      },

      correct: 0
    }

  });

});


/* =====================================================
   STATE
===================================================== */

let currentLesson = 1;

let completedLessons =
  JSON.parse(
    localStorage.getItem("rn_completed_lessons") || "[]"
  );

let currentQuestionAnswered = false;

let currentLanguage =
  localStorage.getItem("rn_language") || "en";

let darkMode =
  localStorage.getItem("rn_theme") !== "light";


/* =====================================================
   DOM
===================================================== */

const lessonList =
  document.getElementById("lessonList");

const lessonNumber =
  document.getElementById("lessonNumber");

const lessonTitle =
  document.getElementById("lessonTitle");

const lessonDescription =
  document.getElementById("lessonDescription");

const lessonLearning =
  document.getElementById("lessonLearning");

const lessonExplanation =
  document.getElementById("lessonExplanation");

const lessonWhen =
  document.getElementById("lessonWhen");

const lessonRealWorld =
  document.getElementById("lessonRealWorld");

const lessonMistakes =
  document.getElementById("lessonMistakes");

const challengeTitle =
  document.getElementById("challengeTitle");

const challengeDescription =
  document.getElementById("challengeDescription");

const questionText =
  document.getElementById("questionText");

const answers =
  document.getElementById("answers");

const questionFeedback =
  document.getElementById("questionFeedback");

const codeEditor =
  document.getElementById("codeEditor");

const lineNumbers =
  document.getElementById("lineNumbers");

const codeResult =
  document.getElementById("codeResult");

const progressPercent =
  document.getElementById("progressPercent");

const progressFill =
  document.getElementById("progressFill");

const progressText =
  document.getElementById("progressText");

const breadcrumbLesson =
  document.getElementById("breadcrumbLesson");

const languageSelect =
  document.getElementById("languageSelect");

const lessonSearch =
  document.getElementById("lessonSearch");

const sidebar =
  document.getElementById("sidebar");

const sidebarOverlay =
  document.getElementById("sidebarOverlay");


/* =====================================================
   TRANSLATION FUNCTION
===================================================== */

function t(key) {

  return translations[currentLanguage][key]
    || translations.en[key]
    || key;
}


/* =====================================================
   APPLY LANGUAGE
===================================================== */

function applyLanguage() {

  const isArabic =
    currentLanguage === "ar";

  document.documentElement.lang =
    currentLanguage;

  document.documentElement.dir =
    isArabic ? "rtl" : "ltr";

  languageSelect.value =
    currentLanguage;


  /* Normal text */

  document
    .querySelectorAll("[data-i18n]")
    .forEach(element => {

      const key =
        element.dataset.i18n;

      element.textContent =
        t(key);

    });


  /* Placeholders */

  document
    .querySelectorAll("[data-i18n-placeholder]")
    .forEach(element => {

      const key =
        element.dataset.i18nPlaceholder;

      element.placeholder =
        t(key);

    });


  updateProgress();

  renderLessons(lessonSearch.value);

  loadLesson(currentLesson);

}


/* =====================================================
   LANGUAGE SELECTOR
===================================================== */

languageSelect.addEventListener(
  "change",
  () => {

    currentLanguage =
      languageSelect.value;

    localStorage.setItem(
      "rn_language",
      currentLanguage
    );

    applyLanguage();

  }
);


/* =====================================================
   THEME
===================================================== */

function applyTheme() {

  document.body.classList.toggle(
    "light-theme",
    !darkMode
  );

  document.getElementById(
    "themeButton"
  ).textContent =
    darkMode ? "☀️" : "🌙";
}


document
  .getElementById("themeButton")
  .addEventListener(
    "click",
    () => {

      darkMode = !darkMode;

      localStorage.setItem(
        "rn_theme",
        darkMode ? "dark" : "light"
      );

      applyTheme();

    }
  );


/* =====================================================
   RENDER LESSONS
===================================================== */

function renderLessons(filter = "") {

  lessonList.innerHTML = "";

  const search =
    filter.trim().toLowerCase();

  const filtered =
    lessons.filter(lesson => {

      const title =
        lesson.title[currentLanguage]
        .toLowerCase();

      const englishTitle =
        lesson.title.en.toLowerCase();

      return (
        title.includes(search)
        ||
        englishTitle.includes(search)
      );

    });


  if (!filtered.length) {

    lessonList.innerHTML = `
      <div style="
        padding:20px;
        color:var(--text-muted);
        font-size:12px;
        text-align:center;
      ">
        ${t("noLessons")}
      </div>
    `;

    return;
  }


  filtered.forEach(lesson => {

    const button =
      document.createElement("button");

    button.className =
      "lesson-item";

    if (lesson.id === currentLesson) {

      button.classList.add("active");

    }


    const completed =
      completedLessons.includes(lesson.id);


    button.innerHTML = `

      <span class="lesson-number-small">
        ${String(lesson.id).padStart(2, "0")}
      </span>

      <span class="lesson-item-title">
        ${lesson.title[currentLanguage]}
      </span>

      ${
        completed
          ? `<span class="lesson-check">✓</span>`
          : ""
      }

    `;


    button.addEventListener(
      "click",
      () => {

        loadLesson(lesson.id);

        closeSidebar();

      }
    );


    lessonList.appendChild(button);

  });

}


/* =====================================================
   LOAD LESSON
===================================================== */

function loadLesson(id) {

  const lesson =
    lessons.find(
      item => item.id === id
    );

  if (!lesson) return;

  currentLesson = id;

  currentQuestionAnswered = false;


  /* Header */

  lessonNumber.textContent =
    `${t("lesson")} ${String(id).padStart(2, "0")}`;

  lessonTitle.textContent =
    lesson.title[currentLanguage];

  lessonDescription.textContent =
    lesson.description[currentLanguage];

  breadcrumbLesson.textContent =
    `${t("lesson")} ${id}`;


  /* Content */

  lessonLearning.textContent =
    lesson.learning[currentLanguage];

  lessonExplanation.textContent =
    lesson.explanation[currentLanguage];

  lessonWhen.textContent =
    lesson.when[currentLanguage];

  lessonRealWorld.textContent =
    lesson.realWorld[currentLanguage];

  lessonMistakes.textContent =
    lesson.mistakes[currentLanguage];


  /* Challenge */

  challengeTitle.textContent =
    lesson.title[currentLanguage];

  challengeDescription.textContent =
    lesson.challenge[currentLanguage];


  /* Code */

  codeEditor.value =
    lesson.starterCode;

  updateLineNumbers();

  codeResult.className =
    "code-result";

  codeResult.textContent =
    "";


  /* Quiz */

  questionText.textContent =
    lesson.question.text[currentLanguage];

  answers.innerHTML = "";

  questionFeedback.textContent =
    "";

  lesson.question.answers[currentLanguage]
    .forEach(
      (answer, index) => {

        const button =
          document.createElement("button");

        button.className =
          "answer-button";

        button.textContent =
          answer;

        button.addEventListener(
          "click",
          () =>
            answerQuestion(
              button,
              index,
              lesson.question.correct
            )
        );

        answers.appendChild(button);

      }
    );


  /* Status */

  const status =
    document.getElementById(
      "lessonStatus"
    );

  if (
    completedLessons.includes(id)
  ) {

    status.textContent = "✅";

  } else {

    status.textContent = "🔒";

  }


  /* Navigation */

  document
    .getElementById("previousButton")
    .disabled = id === 1;

  document
    .getElementById("nextButton")
    .disabled =
      id === lessons.length;


  renderLessons(
    lessonSearch.value
  );

  updateProgress();


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =====================================================
   QUESTION
===================================================== */

function answerQuestion(
  button,
  selected,
  correct
) {

  if (currentQuestionAnswered) {
    return;
  }

  currentQuestionAnswered = true;


  const allButtons =
    answers.querySelectorAll(
      ".answer-button"
    );


  allButtons.forEach(
    (btn, index) => {

      btn.disabled = true;

      if (index === correct) {

        btn.classList.add(
          "correct"
        );

      }

    }
  );


  if (selected === correct) {

    button.classList.add(
      "correct"
    );

    questionFeedback.textContent =
      t("correct");

    questionFeedback.style.color =
      "var(--success)";

    completeCurrentLesson();

  } else {

    button.classList.add(
      "wrong"
    );

    questionFeedback.textContent =
      t("wrong");

    questionFeedback.style.color =
      "var(--danger)";

  }

}


/* =====================================================
   CODE CHECK
===================================================== */

document
  .getElementById("checkCodeButton")
  .addEventListener(
    "click",
    checkCode
  );


function checkCode() {

  const lesson =
    lessons.find(
      item => item.id === currentLesson
    );

  const code =
    codeEditor.value.toLowerCase();


  const passed =
    lesson.keywords.every(
      keyword =>
        code.includes(
          keyword.toLowerCase()
        )
    );


  codeResult.className =
    "code-result";


  if (passed) {

    codeResult.classList.add(
      "success"
    );

    codeResult.textContent =
      t("codeSuccess");

    completeCurrentLesson();

  } else {

    codeResult.classList.add(
      "error"
    );

    codeResult.textContent =
      t("codeError");

  }

}


/* =====================================================
   COMPLETE
===================================================== */

function completeCurrentLesson() {

  if (
    !completedLessons.includes(
      currentLesson
    )
  ) {

    completedLessons.push(
      currentLesson
    );

    localStorage.setItem(
      "rn_completed_lessons",
      JSON.stringify(
        completedLessons
      )
    );

  }


  document
    .getElementById(
      "lessonStatus"
    )
    .textContent = "✅";


  renderLessons(
    lessonSearch.value
  );

  updateProgress();

}


/* =====================================================
   PROGRESS
===================================================== */

function updateProgress() {

  const total =
    lessons.length;

  const completed =
    completedLessons.length;

  const percent =
    Math.round(
      (completed / total) * 100
    );


  progressPercent.textContent =
    `${percent}%`;

  progressFill.style.width =
    `${percent}%`;

  progressText.textContent =
    `${completed} / ${total} ${t("lessons")}`;

}


/* =====================================================
   COPY
===================================================== */

document
  .getElementById("copyCodeButton")
  .addEventListener(
    "click",
    async () => {

      try {

        await navigator.clipboard.writeText(
          codeEditor.value
        );

        codeResult.className =
          "code-result success";

        codeResult.textContent =
          t("copied");

      } catch {

        codeResult.className =
          "code-result error";

        codeResult.textContent =
          "Clipboard error";

      }

    }
  );


/* =====================================================
   LINE NUMBERS
===================================================== */

function updateLineNumbers() {

  const lines =
    codeEditor.value.split("\n").length;

  lineNumbers.textContent =
    Array
      .from(
        { length: lines },
        (_, index) => index + 1
      )
      .join("\n");

}


codeEditor.addEventListener(
  "input",
  updateLineNumbers
);


/* =====================================================
   TAB SUPPORT
===================================================== */

codeEditor.addEventListener(
  "keydown",
  event => {

    if (event.key === "Tab") {

      event.preventDefault();

      const start =
        codeEditor.selectionStart;

      const end =
        codeEditor.selectionEnd;

      codeEditor.value =
        codeEditor.value.substring(
          0,
          start
        )
        +
        "  "
        +
        codeEditor.value.substring(
          end
        );

      codeEditor.selectionStart =
        codeEditor.selectionEnd =
          start + 2;

      updateLineNumbers();

    }


    if (
      event.ctrlKey &&
      event.key === "Enter"
    ) {

      checkCode();

    }

  }
);


/* =====================================================
   NAVIGATION
===================================================== */

document
  .getElementById("previousButton")
  .addEventListener(
    "click",
    () => {

      if (currentLesson > 1) {

        loadLesson(
          currentLesson - 1
        );

      }

    }
  );


document
  .getElementById("nextButton")
  .addEventListener(
    "click",
    () => {

      if (
        currentLesson <
        lessons.length
      ) {

        loadLesson(
          currentLesson + 1
        );

      }

    }
  );


document
  .getElementById("completeButton")
  .addEventListener(
    "click",
    () => {

      completeCurrentLesson();

    }
  );


/* =====================================================
   SEARCH
===================================================== */

lessonSearch.addEventListener(
  "input",
  () => {

    renderLessons(
      lessonSearch.value
    );

  }
);


/* =====================================================
   START LEARNING
===================================================== */

document
  .getElementById("startButton")
  .addEventListener(
    "click",
    () => {

      document
        .getElementById("lessonViewer")
        .scrollIntoView({
          behavior: "smooth"
        });

      loadLesson(1);

    }
  );


/* =====================================================
   CHALLENGE
===================================================== */

document
  .getElementById("challengeButton")
  .addEventListener(
    "click",
    () => {

      document
        .getElementById("editorSection")
        .scrollIntoView({
          behavior: "smooth"
        });

      codeEditor.focus();

    }
  );


/* =====================================================
   SIDEBAR
===================================================== */

function openSidebar() {

  sidebar.classList.add("open");

  sidebarOverlay.classList.add(
    "active"
  );

}


function closeSidebar() {

  sidebar.classList.remove("open");

  sidebarOverlay.classList.remove(
    "active"
  );

}


document
  .getElementById("menuButton")
  .addEventListener(
    "click",
    openSidebar
  );


document
  .getElementById("sidebarClose")
  .addEventListener(
    "click",
    closeSidebar
  );


sidebarOverlay.addEventListener(
  "click",
  closeSidebar
);


/* =====================================================
   FULLSCREEN
===================================================== */

document
  .getElementById("fullscreenButton")
  .addEventListener(
    "click",
    async () => {

      try {

        if (!document.fullscreenElement) {

          await document.documentElement
            .requestFullscreen();

        } else {

          await document.exitFullscreen();

        }

      } catch {

        console.log(
          "Fullscreen unavailable"
        );

      }

    }
  );


/* =====================================================
   INITIALIZE
===================================================== */

applyTheme();

applyLanguage();

console.log(
  "⚛ RN Academy loaded successfully!"
);