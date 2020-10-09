import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import autobind from 'react-autobind';
import {ThemeContextProvider} from './context/ThemeContext';
import {Consumer} from "./components/Consumer";
import WC from "./components/WC";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };

        autobind(this);
    }

    render() {
        return (
            <ThemeContextProvider>
                <Consumer/>
                <WC secondaryMessage="yes boi"/>
            </ThemeContextProvider>
        );
    }
}

export default App;
