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

        this.state = {
            theme: themes.dark,
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
        }));
    }

    setTheme(foreground, background) {
        const newState = Object.assign(this.state);
        newState.theme = {
            foreground, background
        }
        this.setState(newState);
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}