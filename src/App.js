import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import autobind from 'react-autobind';
import {ThemeContext, themes} from './context/fakeContext';
import {Consumer} from "./components/Consumer";
import WC from "./components/WC";

class App extends Component {

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
                <label htmlFor="">foreground</label><br/>
                <input type="text" value={this.state.theme.foreground}/><br/><br/>
                <label htmlFor="">background</label><br/>
                <input type="text" value={this.state.theme.background}/><br/><br/>

                <Consumer/>

                <WC secondaryMessage="yes boi"/>
            </ThemeContext.Provider>
        );
    }
}

export default App;
