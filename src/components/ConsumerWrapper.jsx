import React from "react";
import {ThemeContext} from "../context/fakeContext";
import hoistNonReactStatic from 'hoist-non-react-statics';

export function ConsumerWrapper(WrappedComponent) {
    const EndComponent = props => {
        return (
            <ThemeContext.Consumer>
                {({theme, toggleTheme, setTheme}) => (
                    <WrappedComponent {...props} theme={theme} toggleTheme={toggleTheme} setTheme={setTheme}/>
                )}
            </ThemeContext.Consumer>
        )
    };
    EndComponent.displayName = `ConsumerWrapper(${getDisplayName(WrappedComponent)})`;
    hoistNonReactStatic(EndComponent, WrappedComponent);
    return EndComponent;
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
