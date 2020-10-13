import React from "react";
import {connect} from 'react-redux';
import {toggleTheme, setTheme} from '../redux/actions/theme-actions'


// functional consumer
export const Consumer = props => {
    const {theme, toggleTheme} = props;
    return (
        <div>

                <button
                    onClick={toggleTheme}
                    // onClick={() => setTheme({foreground: 'orange', background: 'black'})}
                    style={{color:theme.foreground, background:theme.background}}
                >
                    Toggle Theme
                </button>

        </div>
    )
}

export const ConnectedConsumer = connect(
    (state) => ({
        theme: state.theme
    }),
    (dispatch) => ({
        toggleTheme: () => dispatch(toggleTheme()),
        setTheme: (...args) => dispatch(setTheme(...args))
    }) // this is the more verbose alternative to the syntax in WC, where you just pass an object here instead of a function
)(Consumer);
