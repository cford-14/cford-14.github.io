import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Preview from './Preview';
import * as serviceWorker from './serviceWorker';

/*things to render
banner
book pages
page forward/page back
author info on click
*/

/*class NewApp extends React.Component {
    constructor() {

    }
    banner
    render() {
        return <h1>Your code goes heres</h1>;
    }
}*/
ReactDOM.render(<Preview />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
