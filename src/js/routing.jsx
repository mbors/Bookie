import React from 'react';
import {Bookie} from './components/bookie/bookie.jsx'
import {Future} from './components/bookiebooks/future.jsx'

import ReactDOM from 'react-dom'; import { Router,
  Route,
  Link,
  IndexLink,
  IndexRoute,
  hashHistory
} from 'react-router';


class Routing extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Router history={hashHistory}>
                <Route path='/' component={Bookie}/>
                <Route path='/future' component={Future} />
            </Router>
        )
    }
}

export {Routing}