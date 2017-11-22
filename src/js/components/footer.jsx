import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component{
    render(){
        return(
    <footer className="main-footer">
        <div className="container">
            <div className="bookie-map">
                <a href="#">About Bookie</a>
                <a href="#"><img src="mock-ups/img/png/internet.png"/></a>
            </div>
            <div className="social-media">
                <a href="#"><img src="mock-ups/img/png/facebook.png"/></a>
                <a href="#"><img src="mock-ups/img/png/instagram.png"/></a>
                <a href="#"><img src="mock-ups/img/png/twitter.png"/></a>
            </div>
            <div className="copyright">
                   Copyright &copy; Martyna Bors
            </div>
        </div>
    </footer>
        )
    }
}

export {Footer}