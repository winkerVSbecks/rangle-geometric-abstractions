import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import App from './App';
import './styles.css';
// import * as serviceWorker from './serviceWorker';
import netlifyIdentity from 'netlify-identity-widget';

window.netlifyIdentity = netlifyIdentity;
netlifyIdentity.init();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
