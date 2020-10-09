import React from "react";
import {ConsumerWrapper} from "./ConsumerWrapper";

function WC(props) {
    const {theme, toggleTheme,setTheme} = props;

    function set() {
        setTheme('blue','red');
    }

    return (
        <div style={{color: theme.foreground, background:theme.background }}>
            <p>hello world from WC</p>
            <p>{props.secondaryMessage}</p>
            <button onClick={set}>set theme</button>
        </div>
    )
}

export default ConsumerWrapper(WC);
