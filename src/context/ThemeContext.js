import React, {Component} from 'react';

export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

export const ThemeContext = React.createContext({
    theme: themes.dark, // default value
    toggleTheme: () => {},
    setTheme: () => {}
});

import autobind from 'react-autobind';


export class ThemeContextProvider extends React.Component {

    constructor(props) {
        super(props);

        let defaultTheme = themes.dark;
        const localStorageTheme = localStorage.getItem('ThemeContext.theme');
        if (localStorageTheme) {
            defaultTheme = JSON.parse(localStorageTheme);
        }

        this.state = {
            theme: defaultTheme,
            toggleTheme: this.toggleTheme.bind(this),
            setTheme: this.setTheme.bind(this)
        };

        autobind(this);
    }

    toggleTheme() {
        this.setState(state => ({
            theme:
                state.theme === themes.dark
                    ? themes.light
                    : themes.dark,
        }), this.newStateCallback);
    }

    setTheme(foreground, background) {
        const newState = Object.assign(this.state);
        newState.theme = {
            foreground, background
        }
        this.setState(newState, this.newStateCallback);
    }

    newStateCallback() {
        const theme = this.state.theme;
        localStorage.setItem('ThemeContext.theme', JSON.stringify(theme));
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}