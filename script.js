document.addEventListener("DOMContentLoaded", function() {
    const langPL = document.getElementById("flag-pl");
    const langEN = document.getElementById("flag-en");

    const translations = {
        "en": {
            "hero": "Hello, I'm Patryk Kulpok",
            "heroDesc": "My passion for programming began long before my professional journey started. However, it was nearly two years of working as a Backend Developer that allowed me to fully spread my wings in the world of technology. I specialized in PowerBuilder and SQL Anywhere, designing and implementing robust backend architectures, optimizing SQL queries, and ensuring the performance and stability of database systems.",
            "about": "About Me",
            "aboutDesc1": "Currently, I am deeply engaged in the Python and Django ecosystem, continuously expanding my backend development expertise. My ambition is to master Artificial Intelligence and Machine Learning, exploring advanced technologies such as NumPy, Pandas, and Matplotlib to create innovative, data-driven solutions.",
            "aboutDesc2": "As a Computer Science graduate (B.Eng.), I am constantly refining my understanding of algorithms, system architecture, and data structures. My ultimate goal is to develop intelligent, high-performance systems that drive innovation and push the boundaries of modern technology.",
            "projects": "Projects",
            "taskManager": "Task Manager",
            "taskManagerDesc": "Task Manager is a modern web application built with Django (backend) and pure JavaScript and CSS (frontend). It helps users manage projects and tasks efficiently by providing role-based access control, task tracking, and progress monitoring.",
            "taskManagerFeatures": "Key Features:",
            "taskManagerFeature1": "Task Management: Create, edit, and delete tasks with status tracking.",
            "taskManagerFeature2": "Roles and Permissions: Role-based access to control project functionalities.",
            "taskManagerFeature3": "Task Comments: Users can add comments for improved collaboration.",
            "taskManagerFeature4": "Project Organization: Group tasks within larger projects.",
            "taskManagerFeature5": "Task Assignment: Assign tasks to specific users.",
            "taskManagerFeature6": "User-Friendly Interface: Dark mode UI with smooth animations.",
            "technologies": "Technologies:",
            "taskManagerTech": "Django, PostgreSQL, JavaScript, CSS.",
            "status": "Status:",
            "taskManagerStatus": "🚀 In development – upcoming features include notifications, API integrations, and UX/UI improvements.",
            "watchTutorial": "Watch the tutorial:",
            "skills": "Skills",
            "contact": "Contact",
            "email": "Email: patryk.kulpok@vp.pl"
        },
        "pl": {
            "hero": "Cześć, jestem Patryk Kulpok",
            "heroDesc": "Moja pasja do programowania rozpoczęła się na długo przed moją profesjonalną ścieżką kariery. Jednak to niemal dwuletnia praca jako Backend Developer pozwoliła mi w pełni rozwinąć skrzydła w świecie technologii. Specjalizowałem się w PowerBuilderze i SQL Anywhere, projektując i wdrażając solidne architektury backendowe, optymalizując zapytania SQL oraz dbając o wydajność i stabilność systemów bazodanowych.",
            "about": "O mnie",
            "aboutDesc1": "Obecnie intensywnie rozwijam się w ekosystemie Pythona i Django, stale poszerzając swoją wiedzę w obszarze backendu. Moim celem jest opanowanie sztucznej inteligencji i uczenia maszynowego, eksplorując zaawansowane technologie, takie jak NumPy, Pandas i Matplotlib, aby tworzyć innowacyjne rozwiązania oparte na danych.",
            "aboutDesc2": "Jako absolwent informatyki (tytuł inżyniera) stale doskonalę swoją wiedzę w zakresie algorytmów, architektury systemów i struktur danych. Moim dążeniem jest budowanie inteligentnych, wysoko wydajnych systemów, które nie tylko napędzają innowacje, ale także przesuwają granice współczesnej technologii.",
            "projects": "Projekty",
            "taskManager": "Task Manager",
            "taskManagerDesc": "Task Manager to nowoczesna aplikacja webowa zbudowana w Django (backend) oraz czystym JavaScript i CSS (frontend). Umożliwia efektywne zarządzanie projektami i zadaniami dzięki systemowi ról, monitorowaniu postępów i kontroli dostępu.",
            "taskManagerFeatures": "Kluczowe funkcje:",
            "taskManagerFeature1": "Zarządzanie zadaniami: Tworzenie, edytowanie i usuwanie zadań ze śledzeniem statusu.",
            "taskManagerFeature2": "Role i uprawnienia: Dostęp do funkcji kontrolowany przez role.",
            "taskManagerFeature3": "Komentarze do zadań: Użytkownicy mogą dodawać komentarze dla lepszej współpracy.",
            "taskManagerFeature4": "Organizacja projektów: Grupowanie zadań w ramach większych projektów.",
            "taskManagerFeature5": "Przypisywanie zadań: Możliwość delegowania pracy konkretnym użytkownikom.",
            "taskManagerFeature6": "Intuicyjny interfejs: Tryb dark mode z płynnymi animacjami.",
            "technologies": "Technologie:",
            "taskManagerTech": "Django, PostgreSQL, JavaScript, CSS.",
            "status": "Status:",
            "taskManagerStatus": "🚀 W trakcie rozwoju – planowane funkcje to powiadomienia, integracje API i ulepszenia UX/UI.",
            "watchTutorial": "Obejrzyj tutorial:",
            "skills": "Umiejętności",
            "contact": "Kontakt",
            "email": "Email: patryk.kulpok@vp.pl"
        }
    };

    function switchLanguage(lang) {
        document.getElementById("hero-text").querySelector("h2").innerText = translations[lang].hero;
        document.getElementById("hero-text").querySelector("p").innerText = translations[lang].heroDesc;
        document.getElementById("about").querySelector("h2").innerText = translations[lang].about;
        document.getElementById("about").querySelectorAll("p")[0].innerText = translations[lang].aboutDesc1;
        document.getElementById("about").querySelectorAll("p")[1].innerText = translations[lang].aboutDesc2;
        document.getElementById("projects").querySelector("h2").innerText = translations[lang].projects;
    
        const project = document.getElementById("task-manager");
        project.querySelector("h3").innerText = translations[lang].taskManager;
        project.querySelector(".description").innerText = translations[lang].taskManagerDesc;
        project.querySelector(".features-title").innerText = translations[lang].taskManagerFeatures;
    
        const features = project.querySelectorAll(".feature-item");
        features[0].innerText = translations[lang].taskManagerFeature1;
        features[1].innerText = translations[lang].taskManagerFeature2;
        features[2].innerText = translations[lang].taskManagerFeature3;
        features[3].innerText = translations[lang].taskManagerFeature4;
        features[4].innerText = translations[lang].taskManagerFeature5;
        features[5].innerText = translations[lang].taskManagerFeature6;
    
        project.querySelector(".technologies-title").innerText = translations[lang].technologies;
        project.querySelector(".technologies").innerText = translations[lang].taskManagerTech;
        project.querySelector(".status-title").innerText = translations[lang].status;
        project.querySelector(".status").innerText = translations[lang].taskManagerStatus;
        project.querySelector(".watch-tutorial-title").innerText = translations[lang].watchTutorial;
    
        document.getElementById("skills").querySelector("h2").innerText = translations[lang].skills;
        document.getElementById("contact").querySelector("h2").innerText = translations[lang].contact;
        document.getElementById("contact").querySelector("p").innerText = translations[lang].email;
    }
    

    langPL.addEventListener("click", () => switchLanguage("pl"));
    langEN.addEventListener("click", () => switchLanguage("en"));
});
