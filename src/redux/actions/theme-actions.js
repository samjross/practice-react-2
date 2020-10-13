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

export function thunkedToggler([theme1, theme2]) {
    return (dispatch, getState) => {
        const currentTheme = getState().theme;
        let theme;
        if (currentTheme.name === theme1.name) {
            theme = theme2;
        } else {
            theme = theme1;
        }
        dispatch({
            type: SET_THEME,
            theme
        });
    }
}
