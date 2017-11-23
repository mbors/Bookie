import React from 'react';
import {Header} from './header.jsx'
import {Footer} from './footer.jsx'

class CurrentMainSection extends React.Component{
    render(){
        return(
            <div className="main-section">
                <div className="container">
                        <div className="section1">
                            <h2 className="page-title">Bookie Current<span> .</span></h2>
                            <div className="article-content">
                                <div className="article-title">Book Title and Author Goes Here</div>
                                <p className="snippet">Book Description Goes Here</p> 
                                <a href="">+Past</a>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

class Current extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <CurrentMainSection/>
                <Footer/>
            </div>
        )
    }
}


export {Current}
