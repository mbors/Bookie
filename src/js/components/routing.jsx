import React from 'react';
import ReactDOM from 'react-dom'; 
import {Bookie} from './bookie.jsx'
import {Future} from './future.jsx'
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';

class Routing extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
        <Router history={hashHistory}>
            <Route path="/" component={Bookie}/>
            {/* <Route path='/' component={Bookie}> */}
                <Route path='/future' component={Future}/>
            {/* </Route> */}
        </Router>
        )
    }
}

export {Routing}


