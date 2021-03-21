import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// the render function (only for the React testing librarys render function) returns with an Object
// the object is a collection of helper functions (getBy, findBy, queryBy, getAllBy, findAllBy, QueryAllBy 
// https://testing-library.com/docs/react-testing-library/cheatsheet/)


// different html elements have different roles on the screen such as a button versus headers or img tag
