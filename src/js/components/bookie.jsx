import React from 'react';
import ReactDOM from 'react-dom';
import {Footer} from './footer.jsx';
import {Header} from './header.jsx';
import {BookieNews} from './main_section.jsx'



class Bookie extends React.Component {
    render(){
        return  (
        <div>
            <Header/>
            <BookieNews/>
            <Footer/>
        </div>
        )
    }
}

export {Bookie}