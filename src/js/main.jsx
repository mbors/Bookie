import React from 'react';
import ReactDOM from 'react-dom';
import {Bookie} from './components/BookieMain/bookie.jsx'
import {Future} from './components/BookieBooks/future.jsx'

// require('../sass/main.scss');

ReactDOM.render(
    <Bookie/>,
    document.getElementById('app')
);