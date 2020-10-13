import React from "react";
import {connect} from 'react-redux';
import {toggleTheme, setTheme, thunkedToggler} from '../redux/actions/theme-actions';

function WC(props) {
    const {theme, loading, toggleTheme, thunkedToggler, setTheme} = props;
    console.log('props', props);

    function set() {
        if (theme.name === 'blue') {
            setTheme({
                name: 'red',
                foreground: 'red',
                background: 'blue'
            });
        } else {
            setTheme({
                name: 'blue',
                foreground: 'blue',
                background: 'red'
            });
        }
    }

    function toggleOrangePurple() {
        const themes = [];
        themes.push({
            name: 'purple',
            foreground: 'purple',
            background: 'orange'
        });
        themes.push({
            name: 'orange',
            foreground: 'orange',
            background: 'purple'
        });
        thunkedToggler(themes);
    }

    return (
        <div style={{color: theme.foreground, background:theme.background }}>
            <p>hello world from WC</p>
            <p>{props.secondaryMessage}</p>
            <button onClick={set}>set theme to red and blue</button>
            <button onClick={toggleOrangePurple}>toggle orange / purple</button>
            {loading && <p>loading...</p>}
        </div>
    )
}

export const ConnectedComponent = connect(
    (state) => ({
        theme: state.theme,
        loading: state.theme.loading
    }),
    {
        toggleTheme, setTheme, thunkedToggler
    } // see the alternative in Consumer for the more verbose version
)(WC);
