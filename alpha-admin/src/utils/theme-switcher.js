
export default function setupThemeSwitcher() {
    const THEME_KEY = 'theme';
    const CLASS_DARK = 'dark';
    const htmlElement = document.documentElement;


    function applySavedTheme() {
        const savedTheme = localStorage.getItem(THEME_KEY);
        if (savedTheme === CLASS_DARK) {
            htmlElement.classList.add(CLASS_DARK);
        }
    }


    function toggleTheme() {
        if (htmlElement.classList.contains(CLASS_DARK)) {
            htmlElement.classList.remove(CLASS_DARK);
            localStorage.setItem(THEME_KEY, 'light');
        } else {
            htmlElement.classList.add(CLASS_DARK);
            localStorage.setItem(THEME_KEY, CLASS_DARK);
        }
    }


    applySavedTheme();

    return {
        toggleTheme,
        getIsDark: () => htmlElement.classList.contains(CLASS_DARK),
    };
}

