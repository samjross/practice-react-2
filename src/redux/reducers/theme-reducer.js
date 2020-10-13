import  { TOGGLE_THEME, SET_THEME, SET_LOADING }  from '../actions/theme-actions';

export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
        name: 'light',
        loading: false
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
        name: 'dark',
        loading: false
    },
};

const initialState = themes.light;

export default function(state=initialState, action) {
    switch (action.type) {
        case TOGGLE_THEME:
            if (state.name === 'light') {
                return {
                    ...state,
                    ...themes.dark
                }
            } else {
                return {
                    ...state,
                    ...themes.light
                }
            }
        case SET_THEME:
            return {
                ...state,
                ...action.theme
            };
        case SET_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        default:
            return state;
    }
}
