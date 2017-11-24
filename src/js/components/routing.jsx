import React from 'react';
import ReactDOM from 'react-dom'; 
import {Bookie} from './bookie.jsx';
import {Future} from './future.jsx';
import {Current} from './current.jsx';
import {Past} from './past.jsx';
import {Quotes} from './quotes.jsx';
import {Moods} from './moods.jsx';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';

//redux do zrobienia, zeby routing sie nie zmienial

class Routing extends React.Component{
    constructor(props){
        super(props)
      
    }

   
    render(){
        return (
        <Router history={hashHistory}>
            <Route path="/" component={Bookie}/>
            {/* <Route path='/' component={Bookie}> */}
                <Route path='/future' component={Future} />
                <Route path='/current' component={Current}/>
                <Route path='/past' component={Past}/>
                <Route path='/quotes' component={Quotes}/>
                <Route path='/moods' component={Moods}/>
                
            {/* </Route> */}
        </Router>
        )
    }
}

export {Routing}


