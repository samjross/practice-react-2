export const TOGGLE_THEME = 'TOGGLE_THEME';
export const SET_THEME = 'SET_THEME';

export function toggleTheme() {
    return { type: TOGGLE_THEME }
}

export function setTheme(theme) {
    return {
        type: SET_THEME,
        theme
    }
}
