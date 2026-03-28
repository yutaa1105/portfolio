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
            title: 'Site Web Vitrine',
            heading: 'À propos de moi',
            intro: [
                "Bonjour, je m'appelle Candice Carton, j'ai 19 ans et je suis actuellement étudiante en deuxième année de BUT Informatique à l'IUT de Clermont-Ferrand. Passionnée par les technologies depuis mon enfance, mes études me permettent de satisfaire ma curiosité et d'évoluer sur des projets concrets menés dans le cadre de mes SAE et de mes travaux personnels. J'aime particulièrement le développement web, la programmation et l'exploration de nouveaux outils numériques.",
                "En dehors de l'informatique, je suis très attirée par la culture japonaise, les mangas, les animés et les jeux vidéo. Cette diversité d'intérêts nourrit ma créativité et mon envie d'apprendre."
            ],
            actions: ['Découvrir mes compétences', 'Voir mes projets'],
            carousel: [
                { alt: 'Portrait', label: 'Candice - Étudiante en BUT Info' },
                { alt: 'Lecture', label: 'Lecture manga et manhwa' },
                { alt: 'Anime', label: 'Animés et cinéma' },
                { alt: 'Jeux vidéo', label: 'Jeux vidéo et stratégie' },
                { alt: 'Cuisine japonaise', label: 'Culture et cuisine japonaise' }
            ]
        },
        en: {
            title: 'Portfolio - Candice Carton',
            heading: 'About me',
            intro: [
                "Hello, my name is Candice Carton. I am 19 years old and currently in my second year of a Bachelor's degree in Computer Science at the IUT of Clermont-Ferrand. Passionate about technology since childhood, my studies let me satisfy my curiosity and grow through concrete projects carried out as part of my coursework and personal work. I especially enjoy web development, programming, and exploring new digital tools.",
                'Outside computer science, I am very interested in Japanese culture, manga, anime, and video games. This mix of interests fuels both my creativity and my desire to keep learning.'
            ],
            actions: ['Discover my skills', 'See my projects'],
            carousel: [
                { alt: 'Portrait', label: 'Candice - Computer Science student' },
                { alt: 'Reading', label: 'Manga and manhwa reading' },
                { alt: 'Anime', label: 'Anime and cinema' },
                { alt: 'Video games', label: 'Video games and strategy' },
                { alt: 'Japanese food', label: 'Japanese culture and cuisine' }
            ]
        }
    },
    skills: {
        fr: {
            title: 'Compétences - Candice Carton',
            heading: 'Mes compétences',
            overviewTitle: "Vue d'ensemble",
            overviewText: 'Cette page reprend la synthèse de mon CV avec un niveau de détail plus pratique pour la lecture web. Le CV reste le document officiel, et cette version permet de visualiser rapidement mes points forts.',
            pills: ['Python', 'C', 'HTML/CSS', 'SQL', 'Anglais', 'Travail en équipe', 'Communication', 'Autonomie'],
            technicalTitle: 'Compétences techniques',
            technicalDescriptions: [
                'Scripts, automatisation, manipulation de fichiers et résolution de problèmes.',
                'Programmation procédurale, structures de contrôle, fonctions et logique algorithmique.',
                'Création de pages statiques, mise en page responsive et utilisation de Flexbox.',
                'Modélisation de base de données, création de tables, requêtes SELECT et INSERT.'
            ],
            secondaryCards: {
                languageTitle: 'Langue',
                languageLevel: 'Anglais - 80%',
                languageText: "Bonne compréhension écrite et orale, aisance à l'écrit, vocabulaire technique informatique.",
                softSkillsTitle: 'Compétences transversales',
                softSkills: [
                    'Travail en équipe sur des SAE en groupe',
                    'Communication écrite et restitution orale',
                    'Autonomie et adaptation rapide',
                    'Curiosité technique et progression continue'
                ],
                toolsTitle: 'Outils déjà utilisés',
                toolsText: 'Photoshop, Elementor, environnements de développement pour Python/C/SQL, outils bureautiques collaboratifs.'
            }
        },
        en: {
            title: 'Skills - Candice Carton',
            heading: 'My skills',
            overviewTitle: 'Overview',
            overviewText: 'This page expands on the summary from my resume with a more practical level of detail for the web. The resume remains the official document, while this version highlights my strengths more quickly.',
            pills: ['Python', 'C', 'HTML/CSS', 'SQL', 'English', 'Teamwork', 'Communication', 'Independence'],
            technicalTitle: 'Technical skills',
            technicalDescriptions: [
                'Scripting, automation, file handling, and problem solving.',
                'Procedural programming, control structures, functions, and algorithmic thinking.',
                'Building static pages, responsive layouts, and using Flexbox.',
                'Database modeling, table creation, and SELECT / INSERT queries.'
            ],
            secondaryCards: {
                languageTitle: 'Language',
                languageLevel: 'English - 80%',
                languageText: 'Strong written and spoken comprehension, ease in writing, and technical vocabulary in computing.',
                softSkillsTitle: 'Soft skills',
                softSkills: [
                    'Teamwork on multi-person coursework projects',
                    'Written communication and oral presentations',
                    'Independence and quick adaptation',
                    'Technical curiosity and continuous progress'
                ],
                toolsTitle: 'Tools already used',
                toolsText: 'Photoshop, Elementor, development environments for Python/C/SQL, and collaborative office tools.'
            }
        }
    },
    education: {
        fr: {
            title: 'Cursus scolaire',
            heading: 'Mon cursus scolaire',
            cards: [
                {
                    title: 'Collège',
                    paragraphs: ['Collège Jean Rostand, Les Martres-de-Veyre.', 'Obtention du brevet avec <em>mention très bien</em>.'],
                    sectionTitle: 'Stage de troisième - Overscan',
                    items: ['Packaging numérique de boîtes de médicaments.', 'Utilisation de Photoshop et création de visuels publicitaires.'],
                    imageAlt: 'Collège Jean Rostand'
                },
                {
                    title: 'Lycée',
                    paragraphs: ["Lycée Jeanne d'Arc, Clermont-Ferrand.", 'Obtention du bac avec <em>mention bien</em>.'],
                    sectionTitle: 'Expériences',
                    items: [
                        'Stage chez <a class="site" href="https://home.diakse.com/fr_fr/" target="_blank" rel="noopener noreferrer"><strong>Diakse</strong></a> : CV en HTML/CSS et création de page avec Elementor.',
                        'Stage chez <a class="site" href="https://www.eramet.com/fr/" target="_blank" rel="noopener noreferrer"><strong>Eramet</strong></a> : découverte du cloud et des structures réseaux.'
                    ],
                    imageAlt: "Lycée Jeanne d'Arc"
                },
                {
                    title: 'BUT Informatique',
                    paragraphs: ['IUT de Clermont-Ferrand - 2e année.', 'Approfondissement des compétences en algorithmique, développement, bases de données, gestion de projet et travail en équipe.'],
                    items: [
                        'Projets de SAE plus complets, menés sur des volumes horaires plus importants.',
                        'Renforcement des bases en Python, C, SQL et développement web, avec une approche plus professionnalisante.'
                    ]
                },
                {
                    title: 'Semestre au Canada',
                    paragraphs: ["Expérience internationale dans le cadre du BUT Informatique.", "Objectif : approfondir les compétences techniques et renforcer l'anglais dans un environnement académique différent."],
                    items: [
                        "Ouverture culturelle et adaptation à un nouveau cadre d'études.",
                        "Développement de l'autonomie et de la communication."
                    ]
                }
            ]
        },
        en: {
            title: 'Education - Candice Carton',
            heading: 'My education',
            cards: [
                {
                    title: 'Middle school',
                    paragraphs: ['Jean Rostand middle school, Les Martres-de-Veyre.', 'Graduated with highest honors.'],
                    sectionTitle: 'Work experience in 9th grade - Overscan',
                    items: ['Digital packaging for medicine boxes.', 'Using Photoshop and creating advertising visuals.'],
                    imageAlt: 'Jean Rostand middle school'
                },
                {
                    title: 'High school',
                    paragraphs: ["Jeanne d'Arc high school, Clermont-Ferrand.", 'Graduated with honors.'],
                    sectionTitle: 'Experience',
                    items: [
                        'Internship at <a class="site" href="https://home.diakse.com/fr_fr/" target="_blank" rel="noopener noreferrer"><strong>Diakse</strong></a>: HTML/CSS resume and page creation with Elementor.',
                        'Internship at <a class="site" href="https://www.eramet.com/fr/" target="_blank" rel="noopener noreferrer"><strong>Eramet</strong></a>: discovering cloud concepts and network structures.'
                    ],
                    imageAlt: "Jeanne d'Arc high school"
                },
                {
                    title: 'Computer Science degree',
                    paragraphs: ['IUT of Clermont-Ferrand - 2nd year.', 'Deepening my skills in algorithms, development, databases, project management, and teamwork.'],
                    items: [
                        'More ambitious coursework projects carried out over longer time spans.',
                        'Stronger foundations in Python, C, SQL, and web development with a more professional approach.'
                    ]
                },
                {
                    title: 'Semester in Canada',
                    paragraphs: ['International experience as part of my Computer Science degree.', 'Goal: strengthen my technical skills and improve my English in a different academic environment.'],
                    items: [
                        'Cultural openness and adaptation to a new study environment.',
                        'Greater independence and communication skills.'
                    ]
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
                    title: 'SAE 1.04 - Base de données pour une entreprise fictive',
                    paragraphs: [
                        "J'ai eu l'occasion de participer à la réalisation de la SAE 1.04 en groupe de 4, qui consistait à implémenter une base de données pour une entreprise fictive de location de jeux gonflables.<br>J'ai pu apporter mes compétences en SQL en travaillant à l'élaboration du MCD ainsi qu'à la programmation de la base de données, en créant les différentes tables en SQL tout en veillant à leur bon fonctionnement.<br>Mais j'ai aussi mis à l'œuvre mes compétences en rédaction en réalisant une partie du rapport économique ainsi que le texte narratif de la vidéo de présentation du projet.<br>Enfin, la communication a joué un rôle majeur dans le bon déroulement de cette SAE ainsi que dans la qualité de mon travail."
                    ],
                    sectionTitle: 'Illustrations du projet',
                    note: 'Cliquez sur les images pour les agrandir',
                    captions: ['Schéma MCD du projet', 'Schéma MLD du projet', "Fiche signalétique de l'entreprise"]
                },
                {
                    title: 'SAE de 2e année',
                    paragraphs: [
                        "Zone reservee pour presenter une SAE de 2e annee. Tu pourras y ajouter un resume court du projet, ton role dans l'equipe, les outils utilises, les livrables produits et quelques illustrations.",
                        'A completer avec le titre exact de la SAE, le contexte, les objectifs et 2 a 3 visuels.'
                    ],
                    captions: ['Visuel 1 a venir', 'Visuel 2 a venir', 'Visuel 3 a venir']
                },
                {
                    title: 'Projet VR',
                    paragraphs: [
                        "Ce projet de realite virtuelle prend la forme d'un jeu d'ambiance inspire de la nyctophobie, c'est-a-dire la peur du noir. Le joueur incarne une personne qui rentre chez elle apres une longue journee de travail et souhaite simplement s'installer pour regarder un film. Pourtant, quelques secondes apres avoir allume la lumiere, le courant se coupe brutalement et la maison bascule dans l'obscurite.<br>Le but est alors d'explorer la maison muni d'une lampe torche pour retrouver la cle qui permet d'ouvrir la porte de la cave, puis d'acceder au panneau electrique afin de retablir le courant. Le projet repose donc sur une progression simple, mais efficace, qui joue sur la tension, l'exploration et l'immersion propres a la VR.<br>Cette idee me permet de travailler a la fois la mise en scene, le rythme du parcours joueur et la creation d'une atmosphere immersive autour d'un objectif clair.",
                        "Tu pourras ensuite ajouter ici les outils utilises, quelques captures d'ecran et un bilan sur les choix de gameplay ou d'ambiance."
                    ],
                    captions: ['Ambiance / decor', 'Mecanique lampe torche', 'UI ou prototype']
                },
                {
                    title: 'Projet de conception de jeu video',
                    paragraphs: [
                        "Ce projet de conception de jeu video s'appuie sur un one-pager autour de <strong>Yume no Fukushuu</strong>, un jeu d'action-aventure imagine pour PC et consoles, jouable en solo ou en cooperation a deux joueurs. Le concept suit Kenji Mori, un developpeur junior epuise qui s'effondre apres un nomikai force. Dans son reve, des divinites japonaises offensees le designent comme instrument de vengeance contre les superieurs qui ont trahi leur pacte sacre.<br>Le jeu melange exploration, revelation et affrontements dans des royaumes oniriques inspires des obsessions de chaque antagoniste. L'univers met en avant une ambiance fortement marquee par la culture japonaise, avec une dimension fantastique, des transformations divines et une mise en scene volontairement theatrale. L'idee centrale repose sur une vengeance symbolique et sociale, plus que sur un schema heroique classique.<br>Ce travail me permet de developper la construction d'un univers, la definition d'une boucle de gameplay et la capacite a formaliser clairement un concept de jeu a travers un document de presentation synthetique.",
                        'Base actuelle : one-pager du projet. Tu pourras ensuite ajouter ici les mecaniques principales, les inspirations, des visuels et les choix de game design les plus importants.'
                    ],
                    captions: ['One-pager / pitch', 'Direction artistique', 'Gameplay loop']
                }
            ]
        },
        en: {
            title: 'Projects - Candice Carton',
            heading: 'My projects',
            intro: 'A snapshot of my academic and personal work, with projects focused on databases, game design, and immersive experiences.',
            cards: [
                {
                    title: 'SAE 1.04 - Database for a fictional company',
                    paragraphs: [
                        'I had the opportunity to contribute to SAE 1.04 in a team of four. The goal was to implement a database for a fictional inflatable game rental company.<br>I contributed my SQL skills by helping design the conceptual data model and by building the database itself, creating the SQL tables while making sure everything worked correctly.<br>I also used my writing skills by working on part of the business report and on the narrative script for the project presentation video.<br>Communication also played a major role in the success of this SAE and in the quality of my work.'
                    ],
                    sectionTitle: 'Project visuals',
                    note: 'Click the images to enlarge them',
                    captions: ['Project ER diagram', 'Project logical model', 'Company overview sheet']
                },
                {
                    title: 'Second-year SAE',
                    paragraphs: [
                        'Reserved space for presenting a second-year SAE. You can add a short summary of the project, your role in the team, the tools used, the deliverables produced, and a few visuals.',
                        'To complete: the exact SAE title, context, objectives, and 2 to 3 visuals.'
                    ],
                    captions: ['Visual 1 coming soon', 'Visual 2 coming soon', 'Visual 3 coming soon']
                },
                {
                    title: 'VR project',
                    paragraphs: [
                        'This virtual reality project takes the form of an atmospheric game inspired by nyctophobia, or fear of the dark. The player takes on the role of someone returning home after a long day at work, hoping to sit down and watch a movie. A few seconds after turning on the light, however, the power suddenly goes out and the house falls into darkness.<br>The goal is to explore the house with a flashlight, find the key that opens the cellar door, and then reach the electrical panel to restore the power. The project relies on a simple but effective progression built around tension, exploration, and the sense of immersion that VR makes possible.<br>This idea lets me work on staging, player pacing, and the creation of an immersive atmosphere built around a clear objective.',
                        'Later on, I can add the tools used, a few screenshots, and a review of the gameplay and atmosphere choices.'
                    ],
                    captions: ['Mood and environment', 'Flashlight mechanic', 'UI or prototype']
                },
                {
                    title: 'Video game design project',
                    paragraphs: [
                        'This game design project is based on a one-pager built around <strong>Yume no Fukushuu</strong>, an action-adventure game imagined for PC and consoles, playable solo or in two-player co-op. The concept follows Kenji Mori, an exhausted junior developer who collapses after a forced nomikai. In his dream, offended Japanese deities appoint him as the instrument of revenge against the superiors who broke their sacred pact.<br>The game blends exploration, revelations, and fights in dreamlike realms inspired by each antagonist\'s obsessions. The world highlights a strong Japanese cultural atmosphere, a fantasy dimension, divine transformations, and a deliberately theatrical staging. The central idea is symbolic and social revenge rather than a classic heroic arc.<br>This work helps me develop worldbuilding, define a gameplay loop, and clearly formalize a game concept through a concise presentation document.',
                        'Current base: the project one-pager. I can later add the main mechanics, inspirations, visuals, and the most important game design choices.'
                    ],
                    captions: ['One-pager and pitch', 'Art direction', 'Gameplay loop']
                }
            ]
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

    bindPreferences(state, page);
    initLightbox();
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
        setText('.intro-competences h2', content.overviewTitle);
        setText('.intro-competences p', content.overviewText);
        document.querySelectorAll('.pills-cv span').forEach((pill, index) => {
            pill.textContent = content.pills[index] || '';
        });
        setText('.bloc-tech > h2', content.technicalTitle);
        document.querySelectorAll('.bloc-tech .skill-row p').forEach((paragraph, index) => {
            paragraph.textContent = content.technicalDescriptions[index] || '';
        });
        setText('.bloc-complementaire .carte-complementaire:nth-of-type(1) h2', content.secondaryCards.languageTitle);
        setText('.bloc-complementaire .carte-complementaire:nth-of-type(1) h3', content.secondaryCards.languageLevel);
        setText('.bloc-complementaire .carte-complementaire:nth-of-type(1) p', content.secondaryCards.languageText);
        setText('.bloc-complementaire .carte-complementaire:nth-of-type(2) h2', content.secondaryCards.softSkillsTitle);
        document.querySelectorAll('.bloc-complementaire .carte-complementaire:nth-of-type(2) li').forEach((item, index) => {
            item.textContent = content.secondaryCards.softSkills[index] || '';
        });
        setText('.bloc-complementaire .carte-complementaire:nth-of-type(3) h2', content.secondaryCards.toolsTitle);
        setText('.bloc-complementaire .carte-complementaire:nth-of-type(3) p', content.secondaryCards.toolsText);
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
            const paragraphs = step.querySelectorAll('.carte-etape > p');
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
            const paragraphs = card.querySelectorAll(':scope > p');
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
        });
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
        const clickedImage = event.target.closest('.photos img');
        if (!clickedImage || clickedImage.classList.contains('img-placeholder')) {
            return;
        }

        projectLightboxActive = Boolean(clickedImage.closest('.projets-page'));
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