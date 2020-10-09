import React, {Component} from 'react';
import autobind from 'react-autobind';
import {ThemeContext} from '../context/fakeContext';


// functional consumer
export const Consumer = props => {
    return (
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <button
                    onClick={toggleTheme}
                    style={{color:theme.foreground, background:theme.background}}
                >
                    Toggle Theme
                </button>
            )}
        </ThemeContext.Consumer>
    )
}

// stateful consumer
// export class Consumer extends React.Component {
//
//     constructor(props) {
//         super(props);
//
//         autobind(this);
//     }
//
//     render() {
//         return (
//             <ThemeContext.Consumer>
//                 {({theme, toggleTheme}) => (
//                     <button
//                         onClick={toggleTheme}
//                         >
//                         Toggle Theme
//                     </button>
//                 )}
//             </ThemeContext.Consumer>
//         )
//     }
// }