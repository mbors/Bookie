import React from 'react';
import ReactDOM from 'react-dom'; 
import {Bookie} from './bookie.jsx'
import {Test} from './test.jsx'
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';

class Routing extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
        <Router history={hashHistory}>
            <Route path='/' component={Bookie}>
                <Route path='test' component={Test}/>
            </Route>
        </Router>
        )
    }
}

export {Routing}


