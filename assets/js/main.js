/**
 * Main JavaScript File for Web Development Learning Hub
 * Author: Vandana (https://github.com/Vandhu1122)
 * Features: Dark/Light Theme Management, Back-to-Top Navigation,
 * Coursework Search, Tag Filtering, and Progress Tracking.
 */

(function () {
    'use strict';

    // =========================================================================
    // Theme Management
    // =========================================================================
    const THEME_STORAGE_KEY = 'theme';
    const THEME_ATTR = 'data-theme';

    function getPreferredTheme() {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme === 'light' || savedTheme === 'dark') {
            return savedTheme;
        }
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute(THEME_ATTR, theme);
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            const isDark = theme === 'dark';
            toggleBtn.textContent = isDark ? '☀️' : '🌙';
            toggleBtn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
            toggleBtn.title = isDark ? 'Switch to light theme' : 'Switch to dark theme';
        }
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute(THEME_ATTR) || 'light';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
        applyTheme(nextTheme);
    }

    // Apply preferred theme immediately to prevent flash
    const initialTheme = getPreferredTheme();
    document.documentElement.setAttribute(THEME_ATTR, initialTheme);

    // =========================================================================
    // Floating Back to Top Button
    // =========================================================================
    function initBackToTop() {
        const backToTopBtn = document.getElementById('back-to-top');
        if (!backToTopBtn) return;

        let ticking = false;

        function handleScroll() {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (window.scrollY > 300) {
                        backToTopBtn.classList.add('visible');
                    } else {
                        backToTopBtn.classList.remove('visible');
                    }
                    ticking = false;
                });
                ticking = true;
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // =========================================================================
    // Coursework Search, Tag Filter, and Progress Tracker
    // =========================================================================
    const PROGRESS_STORAGE_KEY = 'coursework_progress';
    let activeFilterCategory = 'all';

    function getProgressData() {
        try {
            const stored = localStorage.getItem(PROGRESS_STORAGE_KEY);
            return stored ? JSON.parse(stored) : {};
        } catch (e) {
            return {};
        }
    }

    function saveProgress(id, completed) {
        const data = getProgressData();
        if (completed) {
            data[id] = true;
        } else {
            delete data[id];
        }
        try {
            localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(data));
        } catch (e) {
            console.error('Failed to save progress to localStorage', e);
        }
        dispatchProgressUpdate();
        return data;
    }

    function toggleProgress(id) {
        const data = getProgressData();
        const current = !!data[id];
        return saveProgress(id, !current);
    }

    function getProgressSummary(totalItems) {
        const data = getProgressData();
        const completedCount = Object.values(data).filter(Boolean).length;
        const total = typeof totalItems === 'number' ? totalItems : 20;
        const percentage = total > 0 ? Math.round((completedCount / total) * 100) : 0;
        return {
            completed: completedCount,
            total: total,
            percentage: percentage
        };
    }

    function dispatchProgressUpdate() {
        const summary = getProgressSummary();
        const event = new CustomEvent('coursework:progress-updated', {
            detail: summary
        });
        window.dispatchEvent(event);
    }

    function updateProgressUI() {
        const checkboxes = document.querySelectorAll('.progress-checkbox');
        const progressBarFill = document.getElementById('progress-bar-fill');
        const progressText = document.getElementById('progress-text');
        const data = getProgressData();

        const total = checkboxes.length > 0 ? checkboxes.length : 20;
        let completedCount = 0;

        checkboxes.forEach((cb) => {
            const id = cb.getAttribute('data-id');
            const isCompleted = !!data[id];
            cb.checked = isCompleted;

            const card = cb.closest('.grid-card');
            if (card) {
                if (isCompleted) {
                    card.classList.add('is-completed');
                } else {
                    card.classList.remove('is-completed');
                }
            }

            if (isCompleted) {
                completedCount++;
            }
        });

        // Also check if data has completed items even if checkboxes not present
        if (checkboxes.length === 0) {
            completedCount = Object.values(data).filter(Boolean).length;
        }

        const percentage = total > 0 ? Math.round((completedCount / total) * 100) : 0;

        if (progressBarFill) {
            progressBarFill.style.width = percentage + '%';
        }

        if (progressText) {
            progressText.textContent = `${completedCount} of ${total} assignments completed (${percentage}%)`;
        }

        const progressTrack = document.querySelector('.progress-bar-track');
        if (progressTrack) {
            progressTrack.setAttribute('aria-valuenow', percentage);
        }
    }

    function resetProgress() {
        try {
            localStorage.removeItem(PROGRESS_STORAGE_KEY);
        } catch (e) {
            console.error('Failed to reset progress from localStorage', e);
        }
        updateProgressUI();
        dispatchProgressUpdate();
    }

    function initProgressTracker() {
        updateProgressUI();

        // Listen for checkbox toggles
        document.addEventListener('change', (e) => {
            if (e.target && e.target.classList.contains('progress-checkbox')) {
                const id = e.target.getAttribute('data-id');
                if (id) {
                    saveProgress(id, e.target.checked);
                    updateProgressUI();
                }
            }
        });

        // Reset progress button
        const resetBtn = document.getElementById('reset-progress');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                resetProgress();
            });
        }
    }

    function applyAssignmentFilters() {
        const searchInput = document.getElementById('assignment-search');
        const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
        const cards = document.querySelectorAll('#assignments .grid-card');
        const emptyMsg = document.getElementById('no-assignments-msg');

        let visibleCount = 0;

        cards.forEach((card) => {
            const category = (card.getAttribute('data-category') || '').toLowerCase().trim();
            const matchesCategory = (activeFilterCategory === 'all' || category === activeFilterCategory);

            const title = card.querySelector('h3, h2, h4')?.textContent.toLowerCase() || '';
            const desc = card.querySelector('p')?.textContent.toLowerCase() || '';
            const tags = (card.getAttribute('data-tags') || '').toLowerCase();

            const matchesSearch = !query ||
                title.includes(query) ||
                desc.includes(query) ||
                tags.includes(query) ||
                category.includes(query);

            if (matchesCategory && matchesSearch) {
                card.style.display = '';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        if (emptyMsg) {
            emptyMsg.style.display = (visibleCount === 0 && cards.length > 0) ? 'block' : 'none';
        }
    }

    function initSearchAndFilters() {
        const searchInput = document.getElementById('assignment-search');
        if (searchInput) {
            searchInput.addEventListener('input', applyAssignmentFilters);
            searchInput.addEventListener('search', applyAssignmentFilters);
        }

        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                filterBtns.forEach((b) => b.classList.remove('active'));
                btn.classList.add('active');
                activeFilterCategory = (btn.getAttribute('data-filter') || btn.textContent.trim()).toLowerCase();
                applyAssignmentFilters();
            });
        });
    }

    function filterCoursework(query, cardSelector) {
        const selector = cardSelector || '.grid-card, [data-coursework-item]';
        const cards = document.querySelectorAll(selector);
        const lowerQuery = (query || '').trim().toLowerCase();

        cards.forEach((card) => {
            if (!lowerQuery) {
                card.style.display = '';
                return;
            }
            const title = card.querySelector('h2, h3, h4')?.textContent.toLowerCase() || '';
            const description = card.querySelector('p')?.textContent.toLowerCase() || '';
            const tags = card.getAttribute('data-tags')?.toLowerCase() || '';

            if (title.includes(lowerQuery) || description.includes(lowerQuery) || tags.includes(lowerQuery)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }

    function filterByTag(tag, cardSelector) {
        const selector = cardSelector || '.grid-card, [data-coursework-item]';
        const cards = document.querySelectorAll(selector);
        const targetTag = (tag || '').trim().toLowerCase();

        cards.forEach((card) => {
            if (!targetTag || targetTag === 'all') {
                card.style.display = '';
                return;
            }
            const tags = (card.getAttribute('data-tags') || '').toLowerCase().split(',').map((t) => t.trim());
            if (tags.includes(targetTag)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // =========================================================================
    // Initialization
    // =========================================================================
    function init() {
        // Apply theme and bind toggle button
        applyTheme(getPreferredTheme());
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', toggleTheme);
        }

        // Listen for system theme preference changes
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (!localStorage.getItem(THEME_STORAGE_KEY)) {
                    applyTheme(e.matches ? 'dark' : 'light');
                }
            });
        }

        // Initialize back to top button
        initBackToTop();

        // Initialize Progress Tracker
        initProgressTracker();

        // Initialize Search & Filter Controls
        initSearchAndFilters();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose helpers on global window for Phase 2 coursework features
    window.LearningHub = {
        getTheme: () => document.documentElement.getAttribute(THEME_ATTR),
        toggleTheme: toggleTheme,
        filterCoursework: filterCoursework,
        filterByTag: filterByTag,
        getProgressData: getProgressData,
        saveProgress: saveProgress,
        toggleProgress: toggleProgress,
        getProgressSummary: getProgressSummary,
        updateProgressUI: updateProgressUI,
        resetProgress: resetProgress,
        applyAssignmentFilters: applyAssignmentFilters
    };
})();
