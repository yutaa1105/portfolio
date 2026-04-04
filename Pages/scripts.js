const STORAGE_KEYS = {
    language: 'portfolio-language',
    theme: 'portfolio-theme'
};

const PROJECT_FILTER_STATE = {
    status: 'all',
    skills: []
};
function getLocalePath() {
    const page = document.body ? (document.body.dataset.page || 'home') : 'home';
    return page === 'home'
        ? 'locales/{{lng}}/translation.json?v=20260403'
        : '../locales/{{lng}}/translation.json?v=20260403';
}

function getCommonContent(language) {
    if (!window.i18next) {
        return {
            nav: ['Accueil', 'Compétences', 'Cursus', 'Projets', "Centres d'intérêt", 'Télécharger mon CV'],
            footer: '&copy; 2026 Candice Carton. Tous droits réservés.',
            headerToolsAria: 'Préférences du site',
            languageSwitcherAria: 'Choisir la langue',
            themeToggleAria: 'Changer le thème',
            themeToggle: {
                light: 'Mode clair',
                dark: 'Mode sombre'
            },
            carouselDot: 'Aller à l\'image {{index}}',
            lightboxAlt: 'Agrandissement',
            lightboxCloseAria: 'Fermer la visionneuse',
            projectStatus: {
                completed: 'Fini',
                'in-progress': 'En cours'
            }
        };
    }

    return i18next.getFixedT(language)('common', { returnObjects: true });
}

function getPageContent(page, language) {
    if (!window.i18next) {
        return {};
    }

    return i18next.getFixedT(language)(`pages.${page}`, { returnObjects: true });
}

async function initI18next(language) {
    if (!window.i18next || !window.i18nextHttpBackend) {
        return language;
    }

    if (!i18next.isInitialized) {
        i18next.use(i18nextHttpBackend);
        await i18next.init({
            lng: language,
            fallbackLng: 'fr',
            interpolation: {
                escapeValue: false
            },
            backend: {
                loadPath: getLocalePath()
            }
        });
    } else {
        await i18next.changeLanguage(language);
    }

    return i18next.resolvedLanguage || language;
}

document.addEventListener('DOMContentLoaded', async function() {
    const state = {
        language: getInitialLanguage(),
        theme: getInitialTheme()
    };
    const page = document.body.dataset.page || 'home';

    state.language = await initI18next(state.language);

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
    initProjectFilters(state.language);
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
        button.addEventListener('click', async function() {
            const nextLanguage = button.dataset.lang;
            if (nextLanguage === state.language) {
                return;
            }

            state.language = await initI18next(nextLanguage);
            localStorage.setItem(STORAGE_KEYS.language, state.language);
            applyTranslations(page, state.language);
            updateLanguageButtons(state.language);
            updateThemeToggle(state.theme, state.language);
            updateProjectStatuses(state.language);
            updateCarouselLanguage(state.language);
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
    const strings = getCommonContent(language);
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
    const strings = getCommonContent(language);
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
        const content = getPageContent('home', language);
        document.title = content.title;
        setText('.titre', content.heading);
        setText('.sous-titre', content.subtitle || '');
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
        const content = getPageContent('skills', language);
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
        const content = getPageContent('education', language);
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
        const content = getPageContent('interests', language);
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
        const content = getPageContent('projects', language);
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
        updateProjectFiltersLanguage(language);
    },
    lore(language) {
        const content = getPageContent('lore', language);
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
    const labels = getCommonContent(language).projectStatus || {};
    document.querySelectorAll('.project-status').forEach((badge) => {
        const status = badge.dataset.projectStatus;
        badge.textContent = labels[status] || status;
        badge.classList.toggle('is-completed', status === 'completed');
        badge.classList.toggle('is-in-progress', status === 'in-progress');
    });
}

function initProjectFilters(language) {
    const filters = document.querySelector('.projects-filters');
    if (!filters) {
        return;
    }

    if (filters.dataset.initialized !== 'true') {
        filters.dataset.initialized = 'true';

        filters.querySelectorAll('.filter-chip').forEach((button) => {
            button.addEventListener('click', function() {
                const group = button.dataset.filterGroup;
                const value = button.dataset.filterValue;
                if (!group || !value) {
                    return;
                }

                if (group === 'status') {
                    PROJECT_FILTER_STATE.status = value;
                }

                if (group === 'skill') {
                    if (value === 'all') {
                        PROJECT_FILTER_STATE.skills = [];
                    } else {
                        const nextSkills = new Set(PROJECT_FILTER_STATE.skills);
                        if (nextSkills.has(value)) {
                            nextSkills.delete(value);
                        } else {
                            nextSkills.add(value);
                        }
                        PROJECT_FILTER_STATE.skills = Array.from(nextSkills);
                    }
                }

                syncProjectFilterButtons(filters);
                applyProjectFilters();
            });
        });

        const resetButton = filters.querySelector('[data-filter-reset]');
        if (resetButton) {
            resetButton.addEventListener('click', function() {
                PROJECT_FILTER_STATE.status = 'all';
                PROJECT_FILTER_STATE.skills = [];
                syncProjectFilterButtons(filters);
                applyProjectFilters();
            });
        }
    }

    syncProjectFilterButtons(filters);
    updateProjectFiltersLanguage(language);
    applyProjectFilters(language);
}

function syncProjectFilterButtons(filters = document.querySelector('.projects-filters')) {
    if (!filters) {
        return;
    }

    filters.querySelectorAll('.filter-chip').forEach((button) => {
        const group = button.dataset.filterGroup;
        const value = button.dataset.filterValue;
        let isActive = false;

        if (group === 'status') {
            isActive = value === PROJECT_FILTER_STATE.status;
        }

        if (group === 'skill') {
            isActive = value === 'all'
                ? PROJECT_FILTER_STATE.skills.length === 0
                : PROJECT_FILTER_STATE.skills.includes(value);
        }

        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });

    updateProjectFilterSummaries(document.documentElement.lang || 'fr');
}

function updateProjectFiltersLanguage(language) {
    const result = document.querySelector('[data-filter-result]');
    if (!result) {
        return;
    }

    const content = getPageContent('projects', language);
    const filterContent = content.filters || {};
    const common = getCommonContent(language);

    setText('[data-filter-label="status"]', filterContent.statusLabel || 'Statut');
    setText('[data-filter-label="skill"]', filterContent.skillLabel || 'Compétences');
    setText('[data-filter-reset]', filterContent.reset || 'Réinitialiser');

    document.querySelectorAll('.filter-chip').forEach((button) => {
        const group = button.dataset.filterGroup;
        const value = button.dataset.filterValue;

        if (group === 'status') {
            if (value === 'all') {
                button.textContent = filterContent.status?.all || 'Tous';
            } else {
                button.textContent = common.projectStatus?.[value] || value;
            }
        }

        if (group === 'skill') {
            button.textContent = filterContent.skills?.[value] || value;
        }
    });

    updateProjectFilterSummaries(language);
    updateProjectFilterResult(language);
}

function updateProjectFilterSummaries(language) {
    const content = getPageContent('projects', language);
    const filterContent = content.filters || {};
    const common = getCommonContent(language);

    const statusSummary = PROJECT_FILTER_STATE.status === 'all'
        ? (filterContent.status?.all || 'Tous')
        : (common.projectStatus?.[PROJECT_FILTER_STATE.status] || PROJECT_FILTER_STATE.status);

    let skillsSummary = filterContent.skills?.all || 'Toutes';
    if (PROJECT_FILTER_STATE.skills.length === 1) {
        const skill = PROJECT_FILTER_STATE.skills[0];
        skillsSummary = filterContent.skills?.[skill] || skill;
    } else if (PROJECT_FILTER_STATE.skills.length > 1) {
        const template = filterContent.selectedMany || '{{count}} sélectionnées';
        skillsSummary = template.replace('{{count}}', PROJECT_FILTER_STATE.skills.length);
    }

    setText('[data-filter-summary="status"]', statusSummary);
    setText('[data-filter-summary="skill"]', skillsSummary);
}

function applyProjectFilters(language = document.documentElement.lang || 'fr') {
    const cards = document.querySelectorAll('.projets-layout .projet');
    if (!cards.length) {
        return;
    }

    cards.forEach((card) => {
        const status = card.querySelector('.project-status')?.dataset.projectStatus || '';
        const skills = (card.dataset.skills || '').split(',').map((item) => item.trim()).filter(Boolean);
        const matchesStatus = PROJECT_FILTER_STATE.status === 'all' || status === PROJECT_FILTER_STATE.status;
        const matchesSkill = PROJECT_FILTER_STATE.skills.length === 0 || PROJECT_FILTER_STATE.skills.some((selectedSkill) => skills.includes(selectedSkill));
        const shouldShow = matchesStatus && matchesSkill;

        card.hidden = !shouldShow;
        card.classList.toggle('is-hidden', !shouldShow);
        card.setAttribute('aria-hidden', String(!shouldShow));
    });

    updateProjectFilterResult(language);
}

function updateProjectFilterResult(language) {
    const result = document.querySelector('[data-filter-result]');
    if (!result) {
        return;
    }

    const content = getPageContent('projects', language);
    const filterContent = content.filters || {};
    const visibleCount = document.querySelectorAll('.projets-layout .projet:not(.is-hidden)').length;

    if (visibleCount === 0) {
        result.textContent = filterContent.results?.zero || 'Aucun projet ne correspond à ces filtres.';
        return;
    }

    if (visibleCount === 1) {
        result.textContent = filterContent.results?.one || '1 projet affiché';
        return;
    }

    const template = filterContent.results?.other || '{{count}} projets affichés';
    result.textContent = template.replace('{{count}}', visibleCount);
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
        const clickedImage = event.target.closest('.photos img, .carrousel-img, #lore-carousel-image');
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

function getSkillSafeIndex(total, index) {
    if (total <= 0) {
        return 0;
    }
    return ((index % total) + total) % total;
}

function applySkillContent(skill, safeIndex, total, elements) {
    if (!skill) {
        return;
    }
    if (typeof skill === 'string') {
        elements.label.textContent = skill;
        elements.detail.textContent = '';
    } else {
        elements.label.textContent = skill.label || '';
        elements.detail.textContent = skill.detail || '';
    }
    elements.index.textContent = String(safeIndex + 1);
    elements.total.textContent = String(total);
}

function animateSkillCard(card, direction, onApply) {
    card.classList.remove('is-entering-next', 'is-entering-prev', 'is-leaving-next', 'is-leaving-prev');
    const leaveClass = direction === 'next' ? 'is-leaving-next' : 'is-leaving-prev';
    const enterClass = direction === 'next' ? 'is-entering-next' : 'is-entering-prev';
    card.classList.add(leaveClass);
    card.onanimationend = () => {
        card.classList.remove(leaveClass);
        onApply();
        card.classList.add(enterClass);
        card.onanimationend = () => {
            card.classList.remove(enterClass);
            card.onanimationend = null;
        };
    };
}

function setupSkillsAutoplay(carousel, prevBtn, nextBtn, toggleBtn) {
    let timerId;
    const api = {
        renderFn: null,
        getToggleLabel: () => '',
        stopAuto() {
            if (timerId) {
                clearInterval(timerId);
            }
            timerId = undefined;
        },
        startAuto() {
            api.stopAuto();
            if (carousel.dataset.mode !== 'auto' || typeof api.renderFn !== 'function') {
                return;
            }
            timerId = setInterval(() => {
                const current = Number.parseInt(carousel.dataset.currentIndex || '0', 10);
                api.renderFn(current + 1, 'next', true);
            }, 3200);
        }
    };

    prevBtn.addEventListener('click', () => {
        const current = Number.parseInt(carousel.dataset.currentIndex || '0', 10);
        if (typeof api.renderFn === 'function') {
            api.renderFn(current - 1, 'prev', true);
        }
        api.startAuto();
    });

    nextBtn.addEventListener('click', () => {
        const current = Number.parseInt(carousel.dataset.currentIndex || '0', 10);
        if (typeof api.renderFn === 'function') {
            api.renderFn(current + 1, 'next', true);
        }
        api.startAuto();
    });

    toggleBtn.addEventListener('click', () => {
        carousel.dataset.mode = carousel.dataset.mode === 'auto' ? 'manual' : 'auto';
        toggleBtn.textContent = api.getToggleLabel();
        api.startAuto();
    });

    carousel._skillsAutoplayApi = api;
    carousel.dataset.initialized = 'true';
    carousel.dataset.mode = carousel.dataset.mode || 'auto';
    api.startAuto();
    return api;
}

function initSkillsCarousel(language) {
    const carousel = document.querySelector('[data-skills-carousel]');
    if (!carousel) {
        return;
    }

    const content = getPageContent('skills', language);
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

    const elements = { label: labelElement, detail: detailElement, index: indexElement, total: totalElement };

    function render(index, direction = 'next', animate = true) {
        const safeIndex = getSkillSafeIndex(skills.length, index);
        carousel.dataset.currentIndex = String(safeIndex);
        const applyContent = () => applySkillContent(skills[safeIndex], safeIndex, skills.length, elements);
        if (!animate) {
            applyContent();
            return;
        }
        animateSkillCard(card, direction, applyContent);
    }

    const getToggleLabel = () => (carousel.dataset.mode === 'auto' ? content.wheelControls.pause : content.wheelControls.auto);

    let autoplayApi = carousel._skillsAutoplayApi;
    if (carousel.dataset.initialized !== 'true' || !autoplayApi) {
        autoplayApi = setupSkillsAutoplay(carousel, prevBtn, nextBtn, toggleBtn);
    }

    autoplayApi.renderFn = render;
    autoplayApi.getToggleLabel = getToggleLabel;
    toggleBtn.textContent = autoplayApi.getToggleLabel();
    autoplayApi.startAuto();
    render(Number.parseInt(carousel.dataset.currentIndex || '0', 10), 'next', false);
}

function updateCarouselLanguage(language) {
    const dots = document.querySelectorAll('.dot');
    const caption = document.getElementById('carrousel-caption');
    const activeImage = document.querySelector('.carrousel-img.active') || document.querySelector('.carrousel-img');
    const dotLabel = getCommonContent(language).carouselDot;

    dots.forEach((dot, index) => {
        dot.setAttribute('aria-label', dotLabel.replace('{{index}}', String(index + 1)));
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

    const dotLabel = getCommonContent(language).carouselDot;

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
            dot.setAttribute('aria-label', dotLabel.replace('{{index}}', String(index + 1)));
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
    const dotLabel = getCommonContent(language).carouselDot;
    document.querySelectorAll('.project-carousel-dots .dot').forEach((dot, index) => {
        dot.setAttribute('aria-label', dotLabel.replace('{{index}}', String(index + 1)));
    });
}

function buildLoreCarouselDots(dotsContainer, totalPages, dotLabel, onDotClick) {
    dotsContainer.innerHTML = '';
    for (let index = 1; index <= totalPages; index += 1) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'dot' + (index === 1 ? ' active' : '');
        dot.setAttribute('aria-label', dotLabel.replace('{{index}}', String(index)));
        dot.addEventListener('click', () => onDotClick(index));
        dotsContainer.appendChild(dot);
    }
}

function createLoreKeydownHandler(prevBtn, nextBtn) {
    return (event) => {
        if (event.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (event.key === 'ArrowRight') {
            nextBtn.click();
        }
    };
}

function createLoreSwipeHandler(prevBtn, nextBtn) {
    let startX = 0;
    return {
        onStart(event) { startX = event.changedTouches[0].clientX; },
        onEnd(event) {
            const delta = event.changedTouches[0].clientX - startX;
            if (Math.abs(delta) < 45) {
                return;
            }
            if (delta < 0) {
                nextBtn.click();
            } else {
                prevBtn.click();
            }
        }
    };
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
    const dotLabel = getCommonContent(language).carouselDot;

    function renderPage() {
        viewer.src = `../images/lore/lore${currentPage}.png`;
        viewer.alt = `Page ${currentPage} du lore Yume no Fukushuu`;
        wrapper.dataset.currentPage = String(currentPage);
        dotsContainer.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index + 1 === currentPage);
        });
        updateLoreIndicatorLabel(language);
    }

    buildLoreCarouselDots(dotsContainer, totalPages, dotLabel, (index) => {
        currentPage = index;
        renderPage();
    });

    viewer.addEventListener('error', () => {
        const jpgFallback = `../images/lore/lore${currentPage}.jpg`;
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

    document.addEventListener('keydown', createLoreKeydownHandler(prevBtn, nextBtn));

    const swipe = createLoreSwipeHandler(prevBtn, nextBtn);
    wrapper.addEventListener('touchstart', swipe.onStart, { passive: true });
    wrapper.addEventListener('touchend', swipe.onEnd, { passive: true });

    renderPage();
}

function updateLoreIndicatorLabel(language) {
    const wrapper = document.getElementById('lore-carousel-wrapper');
    const indicator = document.getElementById('lore-page-indicator');
    const content = getPageContent('lore', language);
    if (!wrapper || !indicator || !content) {
        return;
    }

    const total = Number.parseInt(wrapper.dataset.totalPages || '10', 10);
    const current = Number.parseInt(wrapper.dataset.currentPage || '1', 10);
    if (!window.i18next) {
        indicator.textContent = `Page ${current} / ${total}`;
        return;
    }

    indicator.textContent = i18next.t('pages.lore.indicator', {
        lng: language,
        current,
        total
    });
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

