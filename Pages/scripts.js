const STORAGE_KEYS = {
    language: 'portfolio-language',
    theme: 'portfolio-theme'
};
function getLocalePath() {
    const page = document.body ? (document.body.dataset.page || 'home') : 'home';
    return page === 'home'
        ? 'locales/{{lng}}/translation.json'
        : '../locales/{{lng}}/translation.json';
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
    let touchStartX = 0;

    dotsContainer.innerHTML = '';
    for (let index = 1; index <= totalPages; index += 1) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'dot' + (index === 1 ? ' active' : '');
        dot.setAttribute('aria-label', dotLabel.replace('{{index}}', String(index)));
        dot.addEventListener('click', () => {
            currentPage = index;
            renderPage();
        });
        dotsContainer.appendChild(dot);
    }

    function renderPage() {
        viewer.src = `../images/lore/lore${currentPage}.png`;
        viewer.alt = `Page ${currentPage} du lore Yume no Fukushuu`;
        wrapper.dataset.currentPage = String(currentPage);
        dotsContainer.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index + 1 === currentPage);
        });
        updateLoreIndicatorLabel(language);
    }

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

