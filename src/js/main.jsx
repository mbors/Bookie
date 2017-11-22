import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './components/header.jsx'
import {Bookie} from './components/bookie.jsx'

// require('../sass/main.scss');

ReactDOM.render(
    <Bookie/>,
    document.getElementById('app')
);