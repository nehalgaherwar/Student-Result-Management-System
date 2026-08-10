// ============================================
// Multi-Language Translation Mapping System
// Supported Languages: English, Hindi, Tamil, Telugu, Bengali, Marathi
// ============================================

const translations = {
    en: {
        portal_title: "IIT Dholkpur",
        portal_subtitle: "Official Student Result Management Portal",
        label_student_name: "Student Name",
        placeholder_student_name: "Enter Student Name",
        label_roll_no: "Roll Number",
        placeholder_roll_no: "101 - 160",
        label_semester: "Semester",
        sem_1: "Semester 1",
        sem_2: "Semester 2",
        btn_check_result: "Check Result",
        fetching_result: "Fetching Student Result...",
        roll_no_prefix: "Roll Number",
        summary_total: "Total",
        summary_percentage: "Percentage",
        summary_cgpa: "CGPA",
        summary_grade: "Grade",
        th_subject: "Subject",
        th_marks: "Marks",
        th_grade: "Grade",
        status_pass: "PASS",
        status_fail: "FAIL",
        err_enter_name: "Please enter your name.",
        err_enter_roll: "Please enter your roll number.",
        err_invalid_roll: "Invalid Roll Number",
        err_valid_name: "Please enter a valid student name.",
        footer_cell: "IIT Dholkpur Examination Cell",
        footer_rights: "© 2026 Student Result Management System",
        login_title: "Student Result Management",
        placeholder_username: "Username",
        placeholder_password: "Password",
        btn_login: "Login",
        err_fill_all: "✖ Please fill in all fields.",
        success_login: "✔ Login Successful",
        login_footer_text: "Enter your username and password to continue.",
        select_lang: "Language"
    },
    hi: {
        portal_title: "आईआईटी ढोलकपुर",
        portal_subtitle: "आधिकारिक छात्र परिणाम प्रबंधन पोर्टल",
        label_student_name: "छात्र का नाम",
        placeholder_student_name: "छात्र का नाम दर्ज करें",
        label_roll_no: "अनुक्रमांक (रोल नंबर)",
        placeholder_roll_no: "101 - 160",
        label_semester: "सेमेस्टर",
        sem_1: "सेमेस्टर 1",
        sem_2: "सेमेस्टर 2",
        btn_check_result: "परिणाम देखें",
        fetching_result: "छात्र परिणाम प्राप्त किया जा रहा है...",
        roll_no_prefix: "अनुक्रमांक",
        summary_total: "कुल अंक",
        summary_percentage: "प्रतिशत",
        summary_cgpa: "सीजीपीए",
        summary_grade: "ग्रेड",
        th_subject: "विषय",
        th_marks: "अंक",
        th_grade: "ग्रेड",
        status_pass: "उत्तीर्ण (PASS)",
        status_fail: "अनुत्तीर्ण (FAIL)",
        err_enter_name: "कृपया अपना नाम दर्ज करें।",
        err_enter_roll: "कृपया अपना रोल नंबर दर्ज करें।",
        err_invalid_roll: "अमान्य रोल नंबर",
        err_valid_name: "कृपया एक मान्य छात्र का नाम दर्ज करें।",
        footer_cell: "आईआईटी ढोलकपुर परीक्षा कक्ष",
        footer_rights: "© 2026 छात्र परिणाम प्रबंधन प्रणाली",
        login_title: "छात्र परिणाम प्रबंधन",
        placeholder_username: "उपयोगकर्ता नाम",
        placeholder_password: "पासवर्ड",
        btn_login: "लॉगिन करें",
        err_fill_all: "✖ कृपया सभी फ़ील्ड भरें।",
        success_login: "✔ लॉगिन सफल रहा",
        login_footer_text: "आगे बढ़ने के लिए अपना उपयोगकर्ता नाम और पासवर्ड दर्ज करें।",
        select_lang: "भाषा"
    },
    ta: {
        portal_title: "ஐஐடி தோலக்பூர்",
        portal_subtitle: "அதிகாரப்பூர்வ மாணவர் தேர்வு முடிவு மேலாண்மை போர்டல்",
        label_student_name: "மாணவர் பெயர்",
        placeholder_student_name: "மாணவர் பெயரை உள்ளிடவும்",
        label_roll_no: "பதிவு எண் (ரோல் எண்)",
        placeholder_roll_no: "101 - 160",
        label_semester: "பருவம் (செமஸ்டர்)",
        sem_1: "செமஸ்டர் 1",
        sem_2: "செமஸ்டர் 2",
        btn_check_result: "முடிவைச் சரிபார்க்கவும்",
        fetching_result: "மாணவர் முடிவு பெறப்படுகிறது...",
        roll_no_prefix: "பதிவு எண்",
        summary_total: "மொத்தம்",
        summary_percentage: "சதவீதம்",
        summary_cgpa: "சிஜிபிஏ (CGPA)",
        summary_grade: "தரவரிசை",
        th_subject: "பாடம்",
        th_marks: "மதிப்பெண்கள்",
        th_grade: "கிரேடு",
        status_pass: "தேர்ச்சி (PASS)",
        status_fail: "தோல்வி (FAIL)",
        err_enter_name: "தயவுசெய்து உங்கள் பெயரை உள்ளிடவும்.",
        err_enter_roll: "தயவுசெய்து உங்கள் ரோல் எண்ணை உள்ளிடவும்.",
        err_invalid_roll: "தவறான ரோல் எண்",
        err_valid_name: "தயவுசெய்து சரியான மாணவர் பெயரை உள்ளிடவும்.",
        footer_cell: "ஐஐடி தோலக்பூர் தேர்வுக் பிரிவு",
        footer_rights: "© 2026 மாணவர் தேர்வு முடிவு மேலாண்மை அமைப்பு",
        login_title: "மாணவர் முடிவு மேலாண்மை",
        placeholder_username: "பயனர்பெயர்",
        placeholder_password: "கடவுச்சொல்",
        btn_login: "உள்நுழைக",
        err_fill_all: "✖ அனைத்து புலங்களையும் நிரப்பவும்.",
        success_login: "✔ உள்நுழைவு வெற்றி",
        login_footer_text: "தொடர உங்கள் பயனர்பெயர் மற்றும் கடவுச்சொல்லை உள்ளிடவும்.",
        select_lang: "மொழி"
    },
    te: {
        portal_title: "ఐఐటీ ధోలక్‌పూర్",
        portal_subtitle: "అధికారిక విద్యార్థి ఫలితాల మేనేజ్‌మెంట్ పోర్టల్",
        label_student_name: "విద్యార్థి పేరు",
        placeholder_student_name: "విద్యార్థి పేరును నమోదు చేయండి",
        label_roll_no: "రోల్ నంబర్",
        placeholder_roll_no: "101 - 160",
        label_semester: "సెమిస్టర్",
        sem_1: "సెమిస్టర్ 1",
        sem_2: "సెమిస్టర్ 2",
        btn_check_result: "ఫలితాన్ని చూడండి",
        fetching_result: "విద్యార్థి ఫలితాన్ని పొందుతోంది...",
        roll_no_prefix: "రోల్ నంబర్",
        summary_total: "మొత్తం మార్కులు",
        summary_percentage: "శాతం",
        summary_cgpa: "సీజీపీఏ (CGPA)",
        summary_grade: "గ్రేడ్",
        th_subject: "సబ్జెక్ట్",
        th_marks: "మార్కులు",
        th_grade: "గ్రేడ్",
        status_pass: "ఉత్తీర్ణత (PASS)",
        status_fail: "అనుత్తీర్ణత (FAIL)",
        err_enter_name: "దయచేసి మీ పేరును నమోదు చేయండి.",
        err_enter_roll: "దయచేసి మీ రోల్ నంబర్‌ను నమోదు చేయండి.",
        err_invalid_roll: "చెల్లని రోల్ నంబర్",
        err_valid_name: "దయచేసి సరైన విద్యార్థి పేరును నమోదు చేయండి.",
        footer_cell: "ఐఐటీ ధోలక్‌పూర్ పరీక్ష విభాగం",
        footer_rights: "© 2026 విద్యార్థి ఫలితాల నిర్వహణ వ్యవస్థ",
        login_title: "విద్యార్థి ఫలితాల నిర్వహణ",
        placeholder_username: "యూజర్‌నేమ్",
        placeholder_password: "పాస్‌వర్డ్",
        btn_login: "లాగిన్",
        err_fill_all: "✖ దయచేసి అన్ని ఫీల్డ్‌లను పూరించండి.",
        success_login: "✔ లాగిన్ విజయవంతమైంది",
        login_footer_text: "కొనసాగడానికి మీ యూజర్‌నేమ్ మరియు పాస్‌వర్డ్‌ను నమోదు చేయండి.",
        select_lang: "భాష"
    },
    bn: {
        portal_title: "আইআইটি ঢোলকপুর",
        portal_subtitle: "অফিসিয়াল ছাত্র ফলাফল ব্যবস্থাপনা পোর্টাল",
        label_student_name: "ছাত্রের নাম",
        placeholder_student_name: "ছাত্রের নাম লিখুন",
        label_roll_no: "রোল নম্বর",
        placeholder_roll_no: "101 - 160",
        label_semester: "সেমিস্টার",
        sem_1: "সেমিস্টার ১",
        sem_2: "সেমিস্টার ২",
        btn_check_result: "ফলাফল দেখুন",
        fetching_result: "ছাত্রের ফলাফল আনা হচ্ছে...",
        roll_no_prefix: "রোল নম্বর",
        summary_total: "মোট নম্বর",
        summary_percentage: "শতকরা হার",
        summary_cgpa: "সিজিপিএ (CGPA)",
        summary_grade: "গ্রেড",
        th_subject: "বিষয়",
        th_marks: "প্রাপ্ত নম্বর",
        th_grade: "গ্রেড",
        status_pass: "উত্তীর্ণ (PASS)",
        status_fail: "অনুত্তীর্ণ (FAIL)",
        err_enter_name: "অনুগ্রহ করে আপনার নাম লিখুন।",
        err_enter_roll: "অনুগ্রহ করে আপনার রোল নম্বর লিখুন।",
        err_invalid_roll: "অকার্যকর রোল নম্বর",
        err_valid_name: "অনুগ্রহ করে একটি সঠিক ছাত্রের নাম লিখুন।",
        footer_cell: "আইআইটি ঢোলকপুর পরীক্ষা সেল",
        footer_rights: "© 2026 ছাত্র ফলাফল ব্যবস্থাপনা সিস্টেম",
        login_title: "ছাত্র ফলাফল ব্যবস্থাপনা",
        placeholder_username: "ইউজারনেম",
        placeholder_password: "পাসওয়ার্ড",
        btn_login: "লগইন করুন",
        err_fill_all: "✖ অনুগ্রহ করে সমস্ত ঘর পূরণ করুন।",
        success_login: "✔ লগইন সফল হয়েছে",
        login_footer_text: "এগিয়ে যেতে আপনার ইউজারনেম এবং পাসওয়ার্ড লিখুন।",
        select_lang: "ভাষা"
    },
    mr: {
        portal_title: "आयआयटी ढोलकपूर",
        portal_subtitle: "अधिकृत विद्यार्थी निकाल व्यवस्थापन पोर्टल",
        label_student_name: "विद्यार्थ्याचे नाव",
        placeholder_student_name: "विद्यार्थ्याचे नाव प्रविष्ट करा",
        label_roll_no: "अनुक्रमांक (रोल नंबर)",
        placeholder_roll_no: "101 - 160",
        label_semester: "सेमेस्टर",
        sem_1: "सेमेस्टर १",
        sem_2: "सेमेस्टर २",
        btn_check_result: "निकाल तपासा",
        fetching_result: "विद्यार्थ्याचा निकाल आणला जात आहे...",
        roll_no_prefix: "रोल नंबर",
        summary_total: "एकूण गुण",
        summary_percentage: "टक्केवारी",
        summary_cgpa: "सीजीपीए (CGPA)",
        summary_grade: "ग्रेड",
        th_subject: "विषय",
        th_marks: "गुण",
        th_grade: "ग्रेड",
        status_pass: "उत्तीर्ण (PASS)",
        status_fail: "अनुत्तीर्ण (FAIL)",
        err_enter_name: "कृपया तुमचे नाव प्रविष्ट करा.",
        err_enter_roll: "कृपया तुमचा रोल नंबर प्रविष्ट करा.",
        err_invalid_roll: "अवैध रोल नंबर",
        err_valid_name: "कृपया वैध विद्यार्थ्याचे नाव प्रविष्ट करा.",
        footer_cell: "आयआयटी ढोलकपूर परीक्षा विभाग",
        footer_rights: "© 2026 विद्यार्थी निकाल व्यवस्थापन प्रणाली",
        login_title: "विद्यार्थी निकाल व्यवस्थापन",
        placeholder_username: "वापरकर्तानाव (युझरनेम)",
        placeholder_password: "पासवर्ड",
        btn_login: "लॉगिन करा",
        err_fill_all: "✖ कृपया सर्व फील्ड भरा.",
        success_login: "✔ लॉगिन यशस्वी झाले",
        login_footer_text: "पुढे जाण्यासाठी तुमचे वापरकर्तानाव आणि पासवर्ड प्रविष्ट करा.",
        select_lang: "भाषा"
    }
};

// Helper function to get current selected language code
function getLanguage() {
    return localStorage.getItem("app_lang") || "en";
}

// Translate key to string
function t(key) {
    const lang = getLanguage();
    if (translations[lang] && translations[lang][key]) {
        return translations[lang][key];
    }
    // Fallback to English
    if (translations.en[key]) {
        return translations.en[key];
    }
    return key;
}

// Update all static DOM elements with data-i18n or data-i18n-placeholder
function updatePageLanguage() {
    const lang = getLanguage();
    
    // Update elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        const translation = t(key);
        if (translation) {
            // Keep icons if element has child icons
            const icon = el.querySelector("i");
            if (icon) {
                el.childNodes.forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE) {
                        node.textContent = " " + translation;
                    }
                });
            } else {
                el.textContent = translation;
            }
        }
    });

    // Update input placeholders with data-i18n-placeholder attribute
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        const translation = t(key);
        if (translation) {
            el.placeholder = translation;
        }
    });

    // Update select elements' options if select dropdown exists
    const langSelect = document.getElementById("languageSelect");
    if (langSelect && langSelect.value !== lang) {
        langSelect.value = lang;
    }
}

// Change language globally
function setLanguage(lang) {
    if (translations[lang]) {
        localStorage.setItem("app_lang", lang);
        updatePageLanguage();
        // If a result is currently active on page, re-render it instantly in new language
        if (typeof window.refreshCurrentResult === "function") {
            window.refreshCurrentResult();
        }
    }
}

// Auto-run translation on DOM loaded
document.addEventListener("DOMContentLoaded", () => {
    updatePageLanguage();
});
