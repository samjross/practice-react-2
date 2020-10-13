import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import autobind from 'react-autobind';
import {Provider} from "react-redux";
import {store} from './redux/reducers'; // this is from index.js
import {ConnectedComponent} from "./components/WC";
import {ConnectedConsumer as Consumer} from "./components/Consumer";


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };

        autobind(this);
    }

    render() {
        return (
            <Provider store={store}>
                <Consumer/>
                <ConnectedComponent secondaryMessage="this is the secondary message"/>
            </Provider>
        );
    }
}

export default App;

