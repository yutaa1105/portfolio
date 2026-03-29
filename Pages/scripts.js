const STORAGE_KEYS = {
    language: 'portfolio-language',
    theme: 'portfolio-theme'
};

const commonContent = {
    fr: {
        nav: ['Accueil', 'Compétences', 'Cursus', 'Projets', "Centres d'intérêt", 'Télécharger mon CV'],
        footer: '&copy; 2026 Candice Carton. Tous droits réservés.',
        headerToolsAria: 'Préférences du site',
        languageSwitcherAria: 'Choisir la langue',
        themeToggleAria: 'Changer le thème',
        themeToggle: {
            light: 'Mode clair',
            dark: 'Mode sombre'
        },
        carouselDot: 'Aller à l\'image {index}',
        lightboxAlt: 'Agrandissement',
        lightboxCloseAria: 'Fermer la visionneuse',
        projectStatus: {
            completed: 'Fini',
            'in-progress': 'En cours'
        }
    },
    en: {
        nav: ['Home', 'Skills', 'Education', 'Projects', 'Interests', 'Download my resume'],
        footer: '&copy; 2026 Candice Carton. All rights reserved.',
        headerToolsAria: 'Site preferences',
        languageSwitcherAria: 'Choose a language',
        themeToggleAria: 'Toggle theme',
        themeToggle: {
            light: 'Light mode',
            dark: 'Dark mode'
        },
        carouselDot: 'Go to image {index}',
        lightboxAlt: 'Zoomed view',
        lightboxCloseAria: 'Close viewer',
        projectStatus: {
            completed: 'Completed',
            'in-progress': 'In progress'
        }
    }
};

const pageContent = {
    home: {
        fr: {
            title: 'Portfolio - Candice Carton',
            heading: 'Étudiante en BUT Informatique',
            intro: [
                "Je m'appelle Candice Carton et je suis étudiante en deuxième année de BUT Informatique à l'IUT de Clermont-Ferrand. Je développe des projets concrets en développement web, bases de données et conception d'expériences interactives, avec une approche structurée et orientée livrable. Ce portfolio présente mon parcours, mes réalisations et les compétences que je mobilise sur des projets académiques et personnels.",
                "Je recherche actuellement un stage et une alternance en informatique, avec une préférence pour le développement mobile et web. Je m'intéresse aussi fortement à la culture japonaise, aux animés et au game design. Ces centres d'intérêt nourrissent ma créativité et influencent plusieurs de mes projets."
            ],
            actions: ['Voir mon profil technique', 'Consulter mes projets', 'Me contacter'],
            carousel: [
                { alt: 'Portrait', label: 'Candice - Développement web et mobile' },
                { alt: 'IUT Clermont-Ferrand', label: 'BUT Informatique - IUT Clermont-Ferrand' },
                { alt: 'Projet cartographie', label: 'Projet cartographie forestière - Livradois-Forez' },
                { alt: 'One-pager de projet', label: 'Conception de jeu vidéo - one-pager' },
                { alt: 'Semestre au Canada', label: 'Semestre au Canada - UQAC' }
            ]
        },
        en: {
            title: 'Portfolio - Candice Carton',
            heading: 'Computer Science Student',
            intro: [
                "My name is Candice Carton, and I am currently in my second year of a Computer Science degree at the IUT of Clermont-Ferrand. I work on concrete projects in web development, databases, and interactive experience design, with a structured and delivery-focused approach. This portfolio presents my background, selected projects, and the skills I apply in both academic and personal work.",
                'I am currently looking for both an internship and a work-study position in computer science, with a strong interest in mobile and web development. I am also strongly interested in Japanese culture, anime, and game design. These interests fuel my creativity and influence several of my projects.'
            ],
            actions: ['View my technical profile', 'Browse my projects', 'Contact me'],
            carousel: [
                { alt: 'Portrait', label: 'Candice - Web and mobile development' },
                { alt: 'IUT Clermont-Ferrand', label: 'Computer Science degree - IUT Clermont-Ferrand' },
                { alt: 'Forest mapping project', label: 'Forest mapping project - Livradois-Forez' },
                { alt: 'Game one-pager', label: 'Video game design - one-pager' },
                { alt: 'Semester in Canada', label: 'Semester in Canada - UQAC' }
            ]
        }
    },
    skills: {
        fr: {
            title: 'Compétences - Candice Carton',
            heading: 'Mes compétences',
            overviewTitle: 'Carrousel de compétences',
            poleTitle: 'Pôle technique',
            wheelControls: {
                pause: 'Pause',
                auto: 'Auto',
                prevAria: 'Compétence précédente',
                nextAria: 'Compétence suivante'
            },
            wheelSkills: [
                { label: 'C', detail: 'Programmation procédurale et algorithmique sur des projets académiques.' },
                { label: 'C++', detail: 'Réalisation d\'un projet Orbitro en jeu web, développé en .NET MAUI.' },
                { label: 'C#', detail: 'Utilisé avec Unity 3D pour la logique gameplay et interactions.' },
                { label: 'Java', detail: 'Réalisation d\'une application de météo.' },
                { label: 'Kotlin', detail: 'Participation à une application mobile Android en équipe.' },
                { label: 'Python', detail: 'Scripts, automatisation de tâches et résolution de problèmes.' },
                { label: 'SQL', detail: 'Conception relationnelle et requêtes pour interroger les données.' }
            ],
            blocks: {
                gamesMobile: {
                    title: 'Jeux & Mobile',
                    items: ['Unity 3D (C#)', 'Android Studio']
                },
                webDotnet: {
                    title: 'Web & .NET',
                    items: ['HTML', 'CSS', 'JavaScript', 'PHP', 'ASP.NET', 'Blazor', '.NET MAUI', 'Entity Framework']
                },
                databases: {
                    title: 'Bases de données',
                    items: ['PostgreSQL', 'SQL Server']
                },
                uiux: {
                    title: 'UI / UX',
                    items: ['Conception d\'interfaces', 'Expérience utilisateur']
                },
                tools: {
                    title: 'Outils',
                    items: ['Git', 'GitHub']
                }
            }
        },
        en: {
            title: 'Skills - Candice Carton',
            heading: 'My skills',
            overviewTitle: 'Skills carousel',
            poleTitle: 'Technical area',
            wheelControls: {
                pause: 'Pause',
                auto: 'Auto',
                prevAria: 'Previous skill',
                nextAria: 'Next skill'
            },
            wheelSkills: [
                { label: 'C', detail: 'Procedural programming and algorithmic practice on academic projects.' },
                { label: 'C++', detail: 'Built an Orbitro web game project developed with .NET MAUI.' },
                { label: 'C#', detail: 'Used with Unity 3D for gameplay logic and interactions.' },
                { label: 'Java', detail: 'Built a weather application.' },
                { label: 'Kotlin', detail: 'Contribution to a team-based Android mobile application.' },
                { label: 'Python', detail: 'Scripting, task automation, and practical problem solving.' },
                { label: 'SQL', detail: 'Relational design and queries to retrieve and structure data.' }
            ],
            blocks: {
                gamesMobile: {
                    title: 'Games & Mobile',
                    items: ['Unity 3D (C#)', 'Android Studio']
                },
                webDotnet: {
                    title: 'Web & .NET',
                    items: ['HTML', 'CSS', 'JavaScript', 'PHP', 'ASP.NET', 'Blazor', '.NET MAUI', 'Entity Framework']
                },
                databases: {
                    title: 'Databases',
                    items: ['PostgreSQL', 'SQL Server']
                },
                uiux: {
                    title: 'UI / UX',
                    items: ['Interface design', 'User experience']
                },
                tools: {
                    title: 'Tools',
                    items: ['Git', 'GitHub']
                }
            }
        }
    },
    education: {
        fr: {
            title: 'Cursus scolaire',
            heading: 'Mon cursus scolaire',
            cards: [
                {
                    title: 'Semestre au Canada',
                    date: 'Période : janv. 2026 - avr. 2026',
                    paragraphs: ['Université du Québec à Chicoutimi (UQAC)', "Expérience internationale dans le cadre du BUT Informatique.", "Objectif : approfondir les compétences techniques et renforcer l'anglais dans un environnement académique différent."],
                    items: [
                        "Ouverture culturelle et adaptation à un nouveau cadre d'études.",
                        "Développement de l'autonomie et de la communication."
                    ]
                },
                {
                    title: 'BUT Informatique',
                    date: 'Période : sept. 2024 - juin 2026',
                    paragraphs: ['IUT de Clermont-Ferrand', '2e année de BUT Informatique.', 'Approfondissement des compétences en algorithmique, développement, bases de données, gestion de projet et travail en équipe.'],
                    items: [
                        'Projets de SAE plus complets, menés sur des volumes horaires plus importants.',
                        'Renforcement des bases en Python, C, SQL et développement web, avec une approche plus professionnalisante.'
                    ]
                },
                {
                    title: 'Lycée',
                    date: 'Période : sept. 2021 - juin 2024',
                    paragraphs: ["Lycée Jeanne d'Arc, Clermont-Ferrand", 'Obtention du bac avec <em>mention bien</em>.'],
                    sectionTitle: 'Expériences',
                    items: [
                        'Stage chez <a class="site" href="https://home.diakse.com/fr_fr/" target="_blank" rel="noopener noreferrer"><strong>Diakse</strong></a> : CV en HTML/CSS et création de page avec Elementor.',
                        'Stage chez <a class="site" href="https://www.eramet.com/fr/" target="_blank" rel="noopener noreferrer"><strong>Eramet</strong></a> : découverte du cloud et des structures réseaux.'
                    ],
                    imageAlt: "Lycée Jeanne d'Arc"
                },
                {
                    title: 'Collège',
                    date: 'Période : sept. 2018 - juin 2021',
                    paragraphs: ['Collège Jean Rostand, Les Martres-de-Veyre', 'Obtention du brevet avec <em>mention très bien</em>.'],
                    sectionTitle: 'Stage de troisième - Overscan',
                    items: ['Packaging numérique de boîtes de médicaments.', 'Utilisation de Photoshop et création de visuels publicitaires.'],
                    imageAlt: 'Collège Jean Rostand'
                }
            ]
        },
        en: {
            title: 'Education - Candice Carton',
            heading: 'My education',
            cards: [
                {
                    title: 'Semester in Canada',
                    date: 'Period: Jan 2026 - Apr 2026',
                    paragraphs: ['Universite du Quebec a Chicoutimi (UQAC)', 'International experience as part of my Computer Science degree.', 'Goal: strengthen my technical skills and improve my English in a different academic environment.'],
                    items: [
                        'Cultural openness and adaptation to a new study environment.',
                        'Greater independence and communication skills.'
                    ]
                },
                {
                    title: 'Computer Science degree',
                    date: 'Period: Sep 2024 - Jun 2026',
                    paragraphs: ['IUT of Clermont-Ferrand', '2nd year of the Computer Science degree.', 'Deepening my skills in algorithms, development, databases, project management, and teamwork.'],
                    items: [
                        'More ambitious coursework projects carried out over longer time spans.',
                        'Stronger foundations in Python, C, SQL, and web development with a more professional approach.'
                    ]
                },
                {
                    title: 'High school',
                    date: 'Period: Sep 2021 - Jun 2024',
                    paragraphs: ["Jeanne d'Arc high school, Clermont-Ferrand", 'Graduated with honors.'],
                    sectionTitle: 'Experience',
                    items: [
                        'Internship at <a class="site" href="https://home.diakse.com/fr_fr/" target="_blank" rel="noopener noreferrer"><strong>Diakse</strong></a>: HTML/CSS resume and page creation with Elementor.',
                        'Internship at <a class="site" href="https://www.eramet.com/fr/" target="_blank" rel="noopener noreferrer"><strong>Eramet</strong></a>: discovering cloud concepts and network structures.'
                    ],
                    imageAlt: "Jeanne d'Arc high school"
                },
                {
                    title: 'Middle school',
                    date: 'Period: Sep 2018 - Jun 2021',
                    paragraphs: ['Jean Rostand middle school, Les Martres-de-Veyre', 'Graduated with highest honors.'],
                    sectionTitle: 'Work experience in 9th grade - Overscan',
                    items: ['Digital packaging for medicine boxes.', 'Using Photoshop and creating advertising visuals.'],
                    imageAlt: 'Jean Rostand middle school'
                }
            ]
        }
    },
    interests: {
        fr: {
            title: "Centres d'intérêt - Candice Carton",
            heading: "Mes centres d'intérêt",
            sections: [
                {
                    title: 'Lecture',
                    paragraphs: ["J'adore lire, que ce soit des romans, des mangas ou des manhwas (version coréenne des mangas). La lecture me permet de m'évader, de découvrir de nouveaux univers et d'enrichir mon imagination."]
                },
                {
                    title: 'Jeux vidéo & esport',
                    paragraphs: ["Les jeux vidéo occupent une place importante dans ma vie. J'apprécie particulièrement les jeux solo en monde ouvert. L'esport m'intéresse aussi beaucoup pour l'esprit d'équipe, la stratégie et la passion qui animent les joueurs et les communautés."]
                },
                {
                    title: 'Animés & Films',
                    paragraphs: [
                        "Je suis passionnée par les animés, les films et séries. J'aime découvrir des œuvres japonaises, mais aussi des films du monde entier, pour leur créativité et les émotions qu'ils procurent. Le genre fantastique et la science-fiction sont mes préférés, mais j'apprécie aussi les drames et les comédies.",
                        "Certains animés m'ont marquée par leurs décors inspirés de lieux réels au Japon. J'adore retrouver ces endroits dans les œuvres et j'ai déjà pu en visiter certains, comme <strong>Your Name</strong> ou <strong>Suzume</strong> !"
                    ],
                    subheading: "Lieux cultes d'anime"
                },
                {
                    title: 'Culture japonaise',
                    paragraphs: [
                        "J'apprécie énormément la gastronomie japonaise : sushi, ramen, okonomiyaki, mochi... J'aime découvrir de nouvelles saveurs et essayer de cuisiner des plats traditionnels chez moi. La présentation des plats et les saveurs de ceux-ci sont des aspects que j'apprécie particulièrement.",
                        "Le Japon est aussi fascinant pour ses temples, ses jardins, ses festivals et ses coutumes. J'admire la beauté des sanctuaires shinto, la sérénité des jardins zen, et la richesse des fêtes traditionnelles comme le Hanami ou le Tanabata. J'ai eu la chance de voyager seule au Japon dans le cadre d'un séjour linguistique avec EF Education, ce qui m'a permis de découvrir ces aspects culturels de près et de renforcer mon intérêt pour ce pays."
                    ],
                    subheadings: ['La nourriture japonaise', 'La culture et les traditions']
                }
            ]
        },
        en: {
            title: 'Interests - Candice Carton',
            heading: 'My interests',
            sections: [
                {
                    title: 'Reading',
                    paragraphs: ['I love reading, whether it is novels, manga, or manhwa. Reading lets me escape, discover new worlds, and enrich my imagination.']
                },
                {
                    title: 'Video games & esports',
                    paragraphs: ['Video games play an important role in my life. I especially enjoy open-world solo games. I am also very interested in esports for its team spirit, strategy, and the passion shared by players and communities.']
                },
                {
                    title: 'Anime & Films',
                    paragraphs: [
                        'I am passionate about anime, films, and series. I enjoy discovering Japanese works as well as films from around the world for their creativity and the emotions they convey. Fantasy and science fiction are my favorite genres, but I also enjoy dramas and comedies.',
                        'Some anime left a mark on me because their settings were inspired by real places in Japan. I love recognizing these places in the stories, and I have already been able to visit some of them, such as <strong>Your Name</strong> and <strong>Suzume</strong>.'
                    ],
                    subheading: 'Iconic anime locations'
                },
                {
                    title: 'Japanese culture',
                    paragraphs: [
                        'I truly enjoy Japanese cuisine: sushi, ramen, okonomiyaki, mochi, and more. I like discovering new flavors and trying to cook traditional dishes at home. The presentation of the dishes and the balance of flavors are aspects I especially appreciate.',
                        'Japan is also fascinating for its temples, gardens, festivals, and customs. I admire the beauty of Shinto shrines, the serenity of zen gardens, and the richness of traditional celebrations such as Hanami and Tanabata. I had the chance to travel alone in Japan during a language stay with EF Education, which allowed me to discover these cultural aspects firsthand and deepen my interest in the country.'
                    ],
                    subheadings: ['Japanese food', 'Culture and traditions']
                }
            ]
        }
    },
    projects: {
        fr: {
            title: 'Réalisations - Candice Carton',
            heading: 'Mes réalisations',
            intro: 'Un aperçu de mes réalisations académiques et personnelles, avec des projets orientés base de données, game design et expériences immersives.',
            cards: [
                {
                    title: 'Cartographie forestière du Livradois-Forez',
                    paragraphs: [
                        "Ce projet vise à fournir une cartographie des arbres pour l'association du Livradois-Forez. L'application permet de consulter les informations liées aux essences et aux maladies, puis d'ajouter, modifier ou supprimer des entrées selon les besoins du suivi terrain.<br>Le travail d'équipe a abouti à plusieurs livrables complémentaires : une application mobile en Kotlin, une application web en PHP, une application d'administration en Blazor et une API pour relier l'ensemble.<br>J'ai principalement travaillé sur le système de connexion des comptes côté PHP ainsi que sur la gestion des données relatives aux arbres en EF. Ma contribution a été interrompue en cours de projet en raison de mon départ pour le semestre au Canada.",
                        'Technologies utilisées : Blazor, PHP, Entity Framework, ASP.NET, Kotlin.'
                    ],
                    captions: ["Aperçu de l'interface de cartographie"]
                },
                {
                    title: 'Projet VR',
                    paragraphs: [
                        "Projet réalisé en groupe de 5 sous Unity3D, autour d'une expérience immersive orientée ambiance et exploration.<br>À ce stade, les décors sont créés et la mise en place des éléments interactifs est en cours d'implémentation dans la scène.<br>Les mécaniques principales déjà définies sont la téléportation, les interactions avec des éléments du décor et des événements déclenchés à des moments clés du parcours joueur.",
                        'Technologies utilisées : Unity3D.'
                    ],
                    captions: ['Décor et ambiance', 'Téléportation et interactions', 'Événements scénarisés']
                },
                {
                    title: 'Station météo VR connectée à une API',
                    paragraphs: [
                        "Projet réalisé sous Unity avec une logique orientée prototype fonctionnel : l'objectif principal était de récupérer des données météo via une API puis de les afficher dans un environnement VR.<br>La partie visuelle était volontairement secondaire. L'information météo devait surtout être lisible et visible dans la scène, notamment sur une télévision placée dans un salon virtuel.<br>Le résultat final permet d'afficher dynamiquement les données météo dans l'univers 3D et de valider l'intégration bout en bout entre Unity et l'API.",
                        'Technologies utilisées : Unity3D, API météo (requêtes HTTP/JSON).'
                    ],
                    captions: ['Vue générale du salon VR', 'Affichage météo sur la télévision', 'Variation des informations météo', 'Prototype final intégré à la scène']
                },
                {
                    title: 'Projet de conception de jeu video',
                    paragraphs: [
                        "Projet solo de conception de jeu vidéo autour de <strong>Yume no Fukushuu</strong>, pensé comme une expérience d'action-aventure sur PC et consoles.<br>L'objectif était d'imaginer un concept complet et de le formaliser dans un one-pager clair. Le projet comprend également tout un lore original, plus détaillé que ce qui est présenté dans le document de synthèse.<br>Le concept intègre 5 boss principaux et met l'accent sur la cohérence entre narration, univers et intentions de gameplay.",
                        'Livrable réalisé : one-pager.'
                    ],
                    moreInfo: 'Plus d\'informations',
                    captions: ['One-pager du projet']
                }
            ]
        },
        en: {
            title: 'Projects - Candice Carton',
            heading: 'My projects',
            intro: 'A snapshot of my academic and personal work, with projects focused on databases, game design, and immersive experiences.',
            cards: [
                {
                    title: 'Livradois-Forez Forest Mapping',
                    paragraphs: [
                        "This project aims to provide a tree mapping platform for the Livradois-Forez association. The application makes it possible to consult data about tree species and diseases, and to add, edit, or remove entries for field monitoring needs.<br>The team delivered multiple connected outputs: a Kotlin mobile app, a PHP web app, a Blazor admin app, and an API linking all components.<br>I mainly worked on account authentication in PHP and on tree-related data management with EF. My contribution was interrupted mid-project because I left for my semester in Canada.",
                        'Technologies used: Blazor, PHP, Entity Framework, ASP.NET, Kotlin.'
                    ],
                    captions: ['Mapping interface preview']
                },
                {
                    title: 'VR project',
                    paragraphs: [
                        'This project is being developed by a team of five in Unity3D, as an immersive experience focused on atmosphere and exploration.<br>At this stage, the environments are built and the implementation of interactive scene elements is in progress.<br>The core mechanics already defined include teleportation, interactions with environment objects, and events triggered at key moments of the player journey.',
                        'Technologies used: Unity3D.'
                    ],
                    captions: ['Environment and mood preview', 'Teleportation and interactions preview', 'Scripted events preview']
                },
                {
                    title: 'VR weather station connected to an API',
                    paragraphs: [
                        'Built in Unity as a functional prototype, this project focused on consuming weather data from an API and displaying it inside a VR environment.<br>The visual form was not the priority. The key objective was readable weather information rendered in-scene, especially on a television in a virtual living room.<br>The final result validates an end-to-end integration between Unity and the API with dynamic weather updates in 3D.',
                        'Technologies used: Unity3D, weather API (HTTP/JSON requests).'
                    ],
                    captions: ['VR living room overview', 'Weather shown on the TV', 'Weather data variation', 'Final integrated prototype']
                },
                {
                    title: 'Video game design project',
                    paragraphs: [
                        'This is a solo video game design project built around <strong>Yume no Fukushuu</strong>, imagined as an action-adventure experience for PC and consoles.<br>The objective was to design a complete concept and formalize it in a clear one-pager. The project also includes an original lore that is more detailed than what appears in the summary document.<br>The concept features 5 main bosses and focuses on strong consistency between narrative, worldbuilding, and gameplay intentions.',
                        'Final deliverable: one-pager.'
                    ],
                    moreInfo: 'More information',
                    captions: ['Project one-pager']
                }
            ]
        }
    },
    onepagerLore: {
        fr: {
            title: 'Lore detaille - Yume no Fukushuu',
            heading: 'Lore detaille - Yume no Fukushuu',
            intro: 'Presentation complete du projet Yume no Fukushuu.',
            back: 'Retour aux projets',
            previous: 'Page precedente',
            next: 'Page suivante',
            openPdf: 'Ouvrir le PDF complet',
            hint: 'Astuce : touches fleche gauche/droite pour naviguer rapidement.',
            indicator: 'Page {current} / {total}'
        },
        en: {
            title: 'Detailed lore - Yume no Fukushuu',
            heading: 'Detailed lore - Yume no Fukushuu',
            intro: 'Complete presentation of the Yume no Fukushuu project.',
            back: 'Back to projects',
            previous: 'Previous page',
            next: 'Next page',
            openPdf: 'Open full PDF',
            hint: 'Tip: use left/right arrow keys to navigate quickly.',
            indicator: 'Page {current} / {total}'
        }
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const state = {
        language: getInitialLanguage(),
        theme: getInitialTheme()
    };
    const page = document.body.dataset.page || 'home';

    injectHeaderControls();
    applyTheme(state.theme);
    applyTranslations(page, state.language);
    updateLanguageButtons(state.language);
    updateThemeToggle(state.theme, state.language);
    updateProjectStatuses(state.language);

    initRevealSequence();

    bindPreferences(state, page);
    initLightbox();
    initProjectCarousels(state.language);
    initLoreImageCarousel(state.language);
    initCarousel(state);
});

function getInitialLanguage() {
    return localStorage.getItem(STORAGE_KEYS.language) || 'fr';
}

function getInitialTheme() {
    const storedTheme = localStorage.getItem(STORAGE_KEYS.theme);
    if (storedTheme) {
        return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function injectHeaderControls() {
    const header = document.querySelector('header');
    const nav = header ? header.querySelector('.menu') : null;
    if (!header || !nav || header.querySelector('.header-tools')) {
        return;
    }

    const controls = document.createElement('div');
    controls.className = 'header-tools';
    controls.innerHTML = [
        '<div class="language-switcher" role="group">',
        '    <button type="button" class="tool-btn lang-btn" data-lang="fr">FR</button>',
        '    <button type="button" class="tool-btn lang-btn" data-lang="en">EN</button>',
        '</div>',
        '<button type="button" class="tool-btn theme-toggle" data-theme-toggle>',
        '    <span class="theme-toggle-icon" aria-hidden="true"></span>',
        '    <span class="theme-toggle-label"></span>',
        '</button>'
    ].join('');

    nav.insertAdjacentElement('afterend', controls);
}

function bindPreferences(state, page) {
    document.querySelectorAll('.lang-btn').forEach((button) => {
        button.addEventListener('click', function() {
            const nextLanguage = button.dataset.lang;
            if (nextLanguage === state.language) {
                return;
            }

            state.language = nextLanguage;
            localStorage.setItem(STORAGE_KEYS.language, nextLanguage);
            applyTranslations(page, nextLanguage);
            updateLanguageButtons(nextLanguage);
            updateThemeToggle(state.theme, nextLanguage);
            updateProjectStatuses(nextLanguage);
            updateCarouselLanguage(nextLanguage);
        });
    });

    const themeToggle = document.querySelector('[data-theme-toggle]');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
            localStorage.setItem(STORAGE_KEYS.theme, state.theme);
            applyTheme(state.theme);
            updateThemeToggle(state.theme, state.language);
        });
    }
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}

function updateLanguageButtons(language) {
    document.querySelectorAll('.lang-btn').forEach((button) => {
        const isActive = button.dataset.lang === language;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });
}

function updateThemeToggle(theme, language) {
    const strings = commonContent[language];
    const themeToggle = document.querySelector('[data-theme-toggle]');
    if (!themeToggle) {
        return;
    }

    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    const icon = themeToggle.querySelector('.theme-toggle-icon');
    const label = themeToggle.querySelector('.theme-toggle-label');
    if (icon) {
        icon.textContent = nextTheme === 'dark' ? '🌙' : '☀';
    }
    if (label) {
        label.textContent = strings.themeToggle[nextTheme];
    }

    themeToggle.setAttribute('aria-label', strings.themeToggleAria);
    const controls = document.querySelector('.header-tools');
    const languageSwitcher = document.querySelector('.language-switcher');
    if (controls) {
        controls.setAttribute('aria-label', strings.headerToolsAria);
    }
    if (languageSwitcher) {
        languageSwitcher.setAttribute('aria-label', strings.languageSwitcherAria);
    }
}

function applyTranslations(page, language) {
    const strings = commonContent[language];
    document.documentElement.lang = language;

    document.querySelectorAll('.menu a').forEach((link, index) => {
        if (strings.nav[index]) {
            link.textContent = strings.nav[index];
        }
    });

    const footerText = document.querySelector('footer .footer-content p');
    if (footerText) {
        footerText.innerHTML = strings.footer;
    }

    const lightboxImage = document.getElementById('lightbox-img');
    if (lightboxImage) {
        lightboxImage.alt = strings.lightboxAlt;
    }

    const lightboxClose = document.getElementById('lightbox-close');
    if (lightboxClose) {
        lightboxClose.setAttribute('aria-label', strings.lightboxCloseAria);
        lightboxClose.setAttribute('title', strings.lightboxCloseAria);
    }

    const translator = pageTranslators[page];
    if (translator) {
        translator(language);
    }
}

const pageTranslators = {
    home(language) {
        const content = pageContent.home[language];
        document.title = content.title;
        setText('.titre', content.heading);
        document.querySelectorAll('.contenu-apropos .blocTexte').forEach((paragraph, index) => {
            paragraph.textContent = content.intro[index] || '';
        });
        document.querySelectorAll('.actions-accueil a').forEach((link, index) => {
            link.textContent = content.actions[index] || '';
        });
        document.querySelectorAll('.carrousel-img').forEach((image, index) => {
            const item = content.carousel[index];
            if (!item) {
                return;
            }
            image.alt = item.alt;
            image.dataset.label = item.label;
        });
        updateCarouselLanguage(language);
    },
    skills(language) {
        const content = pageContent.skills[language];
        document.title = content.title;
        setText('.titre', content.heading);
        setText('[data-carousel-title]', content.overviewTitle);
        setText('[data-pole-title]', content.poleTitle);

        const blockKeys = ['gamesMobile', 'webDotnet', 'databases', 'uiux', 'tools'];
        blockKeys.forEach((key) => {
            const block = content.blocks[key];
            if (!block) {
                return;
            }

            setText(`[data-block-title="${key}"]`, block.title);
            const container = document.querySelector(`[data-block-items="${key}"]`);
            if (!container) {
                return;
            }

            container.innerHTML = '';
            block.items.forEach((item) => {
                const pill = document.createElement('span');
                pill.textContent = item;
                container.appendChild(pill);
            });
        });

        initSkillsCarousel(language);
    },
    education(language) {
        const content = pageContent.education[language];
        document.title = content.title;
        setText('.titre', content.heading);

        document.querySelectorAll('.timeline .etape').forEach((step, index) => {
            const cardContent = content.cards[index];
            if (!cardContent) {
                return;
            }

            setTextWithin(step, '.carte-etape h2', cardContent.title);
            const dateElement = step.querySelector('.carte-etape .etape-date');
            if (dateElement && cardContent.date) {
                dateElement.textContent = cardContent.date;
            }

            const paragraphs = step.querySelectorAll('.carte-etape > p:not(.etape-date)');
            paragraphs.forEach((paragraph, paragraphIndex) => {
                paragraph.innerHTML = cardContent.paragraphs[paragraphIndex] || '';
            });

            const sectionTitle = step.querySelector('.carte-etape h3');
            if (sectionTitle && cardContent.sectionTitle) {
                sectionTitle.textContent = cardContent.sectionTitle;
            }

            const listItems = step.querySelectorAll('.carte-etape li');
            listItems.forEach((item, itemIndex) => {
                item.innerHTML = cardContent.items[itemIndex] || '';
            });

            const image = step.querySelector('.etape-image');
            if (image && cardContent.imageAlt) {
                image.alt = cardContent.imageAlt;
            }
        });
    },
    interests(language) {
        const content = pageContent.interests[language];
        document.title = content.title;
        setText('.titre', content.heading);

        document.querySelectorAll('main .a-propos').forEach((section, index) => {
            const sectionContent = content.sections[index];
            if (!sectionContent) {
                return;
            }

            setTextWithin(section, 'h2', sectionContent.title);

            const paragraphs = section.querySelectorAll('.interet-texte > p');
            paragraphs.forEach((paragraph, paragraphIndex) => {
                const value = sectionContent.paragraphs[paragraphIndex];
                if (value) {
                    paragraph.innerHTML = value;
                }
            });

            const subheadings = section.querySelectorAll('.interet-texte h3');
            if (sectionContent.subheading && subheadings[0]) {
                subheadings[0].textContent = sectionContent.subheading;
            }
            if (sectionContent.subheadings) {
                subheadings.forEach((subheading, subIndex) => {
                    if (sectionContent.subheadings[subIndex]) {
                        subheading.textContent = sectionContent.subheadings[subIndex];
                    }
                });
            }
        });
    },
    projects(language) {
        const content = pageContent.projects[language];
        document.title = content.title;
        setText('.titre', content.heading);
        setText('.projets-intro', content.intro);

        document.querySelectorAll('.projets-layout .projet').forEach((card, index) => {
            const cardContent = content.cards[index];
            if (!cardContent) {
                return;
            }

            setTextWithin(card, 'h3', cardContent.title);
            const paragraphs = card.querySelectorAll(':scope > p:not(.projet-more)');
            paragraphs.forEach((paragraph, paragraphIndex) => {
                const value = cardContent.paragraphs[paragraphIndex];
                if (!value) {
                    return;
                }
                if (paragraph.classList.contains('projet-note')) {
                    paragraph.textContent = value;
                } else {
                    paragraph.innerHTML = value;
                }
            });

            const subTitle = card.querySelector('h2');
            if (subTitle && cardContent.sectionTitle) {
                subTitle.textContent = cardContent.sectionTitle;
            }

            const note = card.querySelector('.projet-note');
            if (note && cardContent.note) {
                note.textContent = cardContent.note;
            }

            const captions = card.querySelectorAll('figcaption');
            captions.forEach((caption, captionIndex) => {
                caption.textContent = cardContent.captions[captionIndex] || '';
            });

            const moreInfoLink = card.querySelector('.project-more-link');
            if (moreInfoLink && cardContent.moreInfo) {
                moreInfoLink.textContent = cardContent.moreInfo;
            }
        });

        updateProjectCarouselLanguage(language);
    },
    onepagerLore(language) {
        const content = pageContent.onepagerLore[language];
        document.title = content.title;
        setText('.titre', content.heading);
        setText('.lore-intro', content.intro);
        setText('.lore-back-link', content.back);
        setText('.lore-open-pdf', content.openPdf);

        const prevBtn = document.getElementById('lore-prev');
        const nextBtn = document.getElementById('lore-next');
        if (prevBtn) {
            prevBtn.setAttribute('aria-label', content.previous);
            prevBtn.setAttribute('title', content.previous);
        }
        if (nextBtn) {
            nextBtn.setAttribute('aria-label', content.next);
            nextBtn.setAttribute('title', content.next);
        }

        updateLoreIndicatorLabel(language);
    }
};

function updateProjectStatuses(language) {
    const labels = commonContent[language].projectStatus;
    document.querySelectorAll('.project-status').forEach((badge) => {
        const status = badge.dataset.projectStatus;
        badge.textContent = labels[status] || status;
        badge.classList.toggle('is-completed', status === 'completed');
        badge.classList.toggle('is-in-progress', status === 'in-progress');
    });
}

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) {
        return;
    }

    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    let projectLightboxActive = false;

    document.addEventListener('click', function(event) {
        const clickedImage = event.target.closest('.photos img, #lore-carousel-image');
        if (!clickedImage) {
            return;
        }

        const imageLink = clickedImage.closest('a');
        if (imageLink) {
            event.preventDefault();
        }

        projectLightboxActive = Boolean(clickedImage.closest('.projets-page') || clickedImage.closest('.lore-page'));
        lightbox.classList.toggle('project-lightbox', projectLightboxActive);
        lightboxImg.src = clickedImage.src;
        lightboxImg.classList.remove('zoomed');
        lightbox.style.display = 'flex';
    });

    if (lightboxImg) {
        lightboxImg.addEventListener('click', function(event) {
            event.stopPropagation();
            if (projectLightboxActive) {
                lightboxImg.classList.toggle('zoomed');
            }
        });
    }

    if (lightboxClose) {
        lightboxClose.onclick = function() {
            closeLightbox(lightbox, lightboxImg);
            projectLightboxActive = false;
        };
    }

    lightbox.onclick = function(event) {
        if (event.target === lightbox) {
            closeLightbox(lightbox, lightboxImg);
            projectLightboxActive = false;
        }
    };
}

function closeLightbox(lightbox, lightboxImg) {
    lightbox.style.display = 'none';
    if (lightboxImg) {
        lightboxImg.classList.remove('zoomed');
    }
    lightbox.classList.remove('project-lightbox');
}

function initCarousel(state) {
    const images = document.querySelectorAll('.carrousel-img');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const caption = document.getElementById('carrousel-caption');
    const dotsContainer = document.getElementById('carrousel-dots');

    if (!images.length || !prevBtn || !nextBtn || !dotsContainer) {
        return;
    }

    let current = 0;
    let autoplay;

    dotsContainer.innerHTML = '';
    images.forEach(function(_, index) {
        const dot = document.createElement('button');
        dot.className = 'dot' + (index === 0 ? ' active' : '');
        dot.addEventListener('click', function() {
            current = index;
            showImage(current);
            startAutoplay();
        });
        dotsContainer.appendChild(dot);
    });

    function showImage(index) {
        images.forEach((image, imageIndex) => {
            image.classList.toggle('active', imageIndex === index);
        });

        dotsContainer.querySelectorAll('.dot').forEach((dot, dotIndex) => {
            dot.classList.toggle('active', dotIndex === index);
        });

        if (caption) {
            caption.textContent = images[index].dataset.label || images[index].alt;
        }
    }

    function nextImage() {
        current = (current + 1) % images.length;
        showImage(current);
    }

    function startAutoplay() {
        clearInterval(autoplay);
        autoplay = setInterval(nextImage, 4500);
    }

    prevBtn.addEventListener('click', function() {
        current = (current - 1 + images.length) % images.length;
        showImage(current);
        startAutoplay();
    });

    nextBtn.addEventListener('click', function() {
        nextImage();
        startAutoplay();
    });

    showImage(current);
    updateCarouselLanguage(state.language);
    startAutoplay();
}

function initSkillsCarousel(language) {
    const carousel = document.querySelector('[data-skills-carousel]');
    if (!carousel) {
        return;
    }

    const content = pageContent.skills[language];
    if (!content) {
        return;
    }

    const skills = content.wheelSkills || [];
    if (!skills.length) {
        return;
    }

    const card = document.querySelector('[data-carousel-card]');
    const indexElement = document.querySelector('[data-carousel-index]');
    const totalElement = document.querySelector('[data-carousel-total]');
    const labelElement = document.querySelector('[data-wheel-label]');
    const detailElement = document.querySelector('[data-wheel-detail]');
    const prevBtn = document.querySelector('[data-wheel-prev]');
    const nextBtn = document.querySelector('[data-wheel-next]');
    const toggleBtn = document.querySelector('[data-wheel-toggle]');

    if (!card || !labelElement || !detailElement || !prevBtn || !nextBtn || !toggleBtn || !indexElement || !totalElement) {
        return;
    }

    prevBtn.setAttribute('aria-label', content.wheelControls.prevAria);
    nextBtn.setAttribute('aria-label', content.wheelControls.nextAria);
    prevBtn.setAttribute('title', content.wheelControls.prevAria);
    nextBtn.setAttribute('title', content.wheelControls.nextAria);

    if (!carousel.dataset.currentIndex) {
        carousel.dataset.currentIndex = '0';
    }
    if (!carousel.dataset.mode) {
        carousel.dataset.mode = 'auto';
    }

    function getSafeIndex(index) {
        const total = skills.length;
        if (total <= 0) {
            return 0;
        }
        return ((index % total) + total) % total;
    }

    function render(index, direction = 'next', animate = true) {
        const safeIndex = getSafeIndex(index);
        carousel.dataset.currentIndex = String(safeIndex);

        const applyContent = () => {
            const currentSkill = skills[safeIndex];
            if (!currentSkill) {
                return;
            }
            if (typeof currentSkill === 'string') {
                labelElement.textContent = currentSkill;
                detailElement.textContent = '';
            } else {
                labelElement.textContent = currentSkill.label || '';
                detailElement.textContent = currentSkill.detail || '';
            }
            indexElement.textContent = String(safeIndex + 1);
            totalElement.textContent = String(skills.length);
        };

        if (!animate) {
            applyContent();
            return;
        }

        card.classList.remove('is-entering-next', 'is-entering-prev', 'is-leaving-next', 'is-leaving-prev');
        card.classList.add(direction === 'next' ? 'is-leaving-next' : 'is-leaving-prev');

        card.onanimationend = () => {
            card.classList.remove('is-leaving-next', 'is-leaving-prev');
            applyContent();
            card.classList.add(direction === 'next' ? 'is-entering-next' : 'is-entering-prev');

            card.onanimationend = () => {
                card.classList.remove('is-entering-next', 'is-entering-prev');
                card.onanimationend = null;
            };
        };
    }

    function updateToggleLabel() {
        const isAuto = carousel.dataset.mode === 'auto';
        toggleBtn.textContent = isAuto ? content.wheelControls.pause : content.wheelControls.auto;
    }

    if (carousel.dataset.initialized !== 'true') {
        let timerId;

        function stopAuto() {
            if (timerId) {
                clearInterval(timerId);
            }
            timerId = undefined;
        }

        function startAuto() {
            stopAuto();
            if (carousel.dataset.mode !== 'auto') {
                return;
            }

            timerId = setInterval(() => {
                const current = Number.parseInt(carousel.dataset.currentIndex || '0', 10);
                render(current + 1, 'next', true);
            }, 3200);
        }

        prevBtn.addEventListener('click', () => {
            const current = Number.parseInt(carousel.dataset.currentIndex || '0', 10);
            render(current - 1, 'prev', true);
            startAuto();
        });

        nextBtn.addEventListener('click', () => {
            const current = Number.parseInt(carousel.dataset.currentIndex || '0', 10);
            render(current + 1, 'next', true);
            startAuto();
        });

        toggleBtn.addEventListener('click', () => {
            carousel.dataset.mode = carousel.dataset.mode === 'auto' ? 'manual' : 'auto';
            updateToggleLabel();
            startAuto();
        });

        carousel.dataset.initialized = 'true';
        carousel.dataset.mode = 'auto';
        startAuto();
    }

    updateToggleLabel();
    render(Number.parseInt(carousel.dataset.currentIndex || '0', 10), 'next', false);
}

function updateCarouselLanguage(language) {
    const dots = document.querySelectorAll('.dot');
    const caption = document.getElementById('carrousel-caption');
    const activeImage = document.querySelector('.carrousel-img.active') || document.querySelector('.carrousel-img');
    const dotLabel = commonContent[language].carouselDot;

    dots.forEach((dot, index) => {
        dot.setAttribute('aria-label', dotLabel.replace('{index}', String(index + 1)));
    });

    if (caption && activeImage) {
        caption.textContent = activeImage.dataset.label || activeImage.alt;
    }
}

function setText(selector, value) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = value;
    }
}

function setTextWithin(root, selector, value) {
    const element = root.querySelector(selector);
    if (element) {
        element.textContent = value;
    }
}

function initProjectCarousels(language) {
    const carousels = document.querySelectorAll('.project-carousel');
    if (!carousels.length) {
        return;
    }

    const dotLabel = commonContent[language].carouselDot;

    carousels.forEach((carousel) => {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const prevBtn = carousel.querySelector('.project-carousel-btn.prev');
        const nextBtn = carousel.querySelector('.project-carousel-btn.next');
        const dotsContainer = carousel.parentElement.querySelector('.project-carousel-dots');

        if (!slides.length || !prevBtn || !nextBtn || !dotsContainer) {
            return;
        }

        let current = 0;
        dotsContainer.innerHTML = '';

        function showSlide(index) {
            slides.forEach((slide, slideIndex) => {
                const isActive = slideIndex === index;
                slide.classList.toggle('active', isActive);
                slide.setAttribute('aria-hidden', String(!isActive));
            });

            dotsContainer.querySelectorAll('.dot').forEach((dot, dotIndex) => {
                dot.classList.toggle('active', dotIndex === index);
            });
        }

        slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'dot' + (index === 0 ? ' active' : '');
            dot.setAttribute('aria-label', dotLabel.replace('{index}', String(index + 1)));
            dot.addEventListener('click', () => {
                current = index;
                showSlide(current);
            });
            dotsContainer.appendChild(dot);
        });

        prevBtn.addEventListener('click', () => {
            current = (current - 1 + slides.length) % slides.length;
            showSlide(current);
        });

        nextBtn.addEventListener('click', () => {
            current = (current + 1) % slides.length;
            showSlide(current);
        });

        showSlide(current);
    });
}

function updateProjectCarouselLanguage(language) {
    const dotLabel = commonContent[language].carouselDot;
    document.querySelectorAll('.project-carousel-dots .dot').forEach((dot, index) => {
        dot.setAttribute('aria-label', dotLabel.replace('{index}', String(index + 1)));
    });
}

function initLoreImageCarousel(language) {
    const wrapper = document.getElementById('lore-carousel-wrapper');
    const viewer = document.getElementById('lore-carousel-image');
    const dotsContainer = document.getElementById('lore-carousel-dots');
    const prevBtn = document.getElementById('lore-prev');
    const nextBtn = document.getElementById('lore-next');
    if (!wrapper || !viewer || !dotsContainer || !prevBtn || !nextBtn) {
        return;
    }

    const totalPages = Number.parseInt(wrapper.dataset.totalPages || '10', 10);
    let currentPage = 1;
    const dotLabel = commonContent[language].carouselDot;
    let touchStartX = 0;

    dotsContainer.innerHTML = '';
    for (let index = 1; index <= totalPages; index += 1) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'dot' + (index === 1 ? ' active' : '');
        dot.setAttribute('aria-label', dotLabel.replace('{index}', String(index)));
        dot.addEventListener('click', () => {
            currentPage = index;
            renderPage();
        });
        dotsContainer.appendChild(dot);
    }

    function renderPage() {
        viewer.src = `../photo/lore${currentPage}.png`;
        viewer.alt = `Page ${currentPage} du lore Yume no Fukushuu`;
        wrapper.dataset.currentPage = String(currentPage);
        dotsContainer.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index + 1 === currentPage);
        });
        updateLoreIndicatorLabel(language);
    }

    viewer.addEventListener('error', () => {
        const jpgFallback = `../photo/lore${currentPage}.jpg`;
        if (!viewer.src.endsWith(`lore${currentPage}.jpg`)) {
            viewer.src = jpgFallback;
        }
    });

    prevBtn.addEventListener('click', () => {
        currentPage = currentPage <= 1 ? totalPages : currentPage - 1;
        renderPage();
    });

    nextBtn.addEventListener('click', () => {
        currentPage = currentPage >= totalPages ? 1 : currentPage + 1;
        renderPage();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            prevBtn.click();
        }
        if (event.key === 'ArrowRight') {
            nextBtn.click();
        }
    });

    wrapper.addEventListener('touchstart', (event) => {
        touchStartX = event.changedTouches[0].clientX;
    }, { passive: true });

    wrapper.addEventListener('touchend', (event) => {
        const touchEndX = event.changedTouches[0].clientX;
        const delta = touchEndX - touchStartX;
        if (Math.abs(delta) < 45) {
            return;
        }
        if (delta < 0) {
            nextBtn.click();
        } else {
            prevBtn.click();
        }
    }, { passive: true });

    renderPage();
}

function updateLoreIndicatorLabel(language) {
    const wrapper = document.getElementById('lore-carousel-wrapper');
    const indicator = document.getElementById('lore-page-indicator');
    const content = pageContent.onepagerLore[language];
    if (!wrapper || !indicator || !content) {
        return;
    }

    const total = Number.parseInt(wrapper.dataset.totalPages || '10', 10);
    const current = Number.parseInt(wrapper.dataset.currentPage || '1', 10);
    indicator.textContent = content.indicator
        .replace('{current}', String(current))
        .replace('{total}', String(total));
}

function initCustomCursor() {
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!hasFinePointer || prefersReducedMotion) {
        return;
    }

    const root = document.documentElement;
    root.setAttribute('data-custom-cursor', 'on');

    const dot = document.createElement('div');
    dot.className = 'custom-cursor-dot';
    const ring = document.createElement('div');
    ring.className = 'custom-cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;
    let isHovering = false;
    let isPressed = false;
    let isVisible = false;

    const interactiveSelector = 'a, button, .tool-btn, .dot, .project-more-link, [role="button"], .project-carousel-btn, .lore-nav-btn';

    function showCursor() {
        isVisible = true;
        dot.style.opacity = '1';
        ring.style.opacity = '0.88';
    }

    function hideCursor() {
        isVisible = false;
        dot.style.opacity = '0';
        ring.style.opacity = '0';
    }

    document.addEventListener('mousemove', (event) => {
        targetX = event.clientX;
        targetY = event.clientY;
        dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
        showCursor();
    });

    document.addEventListener('mouseover', (event) => {
        isHovering = Boolean(event.target.closest(interactiveSelector));
    });

    document.addEventListener('mouseout', (event) => {
        if (event.target.closest(interactiveSelector)) {
            isHovering = false;
        }
    });

    document.addEventListener('mousedown', () => {
        isPressed = true;
    });

    document.addEventListener('mouseup', () => {
        isPressed = false;
    });

    window.addEventListener('blur', hideCursor);
    document.addEventListener('mouseleave', hideCursor);

    function animateCursor() {
        ringX += (targetX - ringX) * 0.16;
        ringY += (targetY - ringY) * 0.16;

        const scale = isPressed ? 0.92 : (isHovering ? 1.22 : 1);
        dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%) scale(${isPressed ? 0.85 : 1})`;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${scale})`;
        ring.style.opacity = isVisible ? (isHovering ? '1' : '0.88') : '0';
        requestAnimationFrame(animateCursor);
    }

    animateCursor();
}

function initRevealSequence() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        return;
    }

    const targets = document.querySelectorAll('.projet, .a-propos, .timeline .etape, .carte-complementaire, .lore-viewer-card, .blocTexte');
    if (!targets.length) {
        return;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('is-visible');
            currentObserver.unobserve(entry.target);
        });
    }, {
        threshold: 0.14
    });

    targets.forEach((target, index) => {
        target.classList.add('reveal-item');
        target.style.setProperty('--reveal-delay', `${Math.min(index * 45, 260)}ms`);
        observer.observe(target);
    });
}