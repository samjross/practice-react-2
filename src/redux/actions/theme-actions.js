export const TOGGLE_THEME = 'TOGGLE_THEME';
export const SET_THEME = 'SET_THEME';
export const SET_LOADING = 'SET_LOADING';

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
    return async (dispatch, getState) => {
        dispatch({
            type: SET_LOADING,
            loading: true
        });

        await new Promise(r => setTimeout(r, 2000));

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

        dispatch({
            type: SET_LOADING,
            loading: false
        });
    }
}
