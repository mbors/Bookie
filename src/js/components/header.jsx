import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';


class BookieBooksSubNav extends React.Component{
    constructor(props){
            super(props);
            this.state={
                submenu: ""
            }
        }

        handleMouseOver = () => {
            let submenuShow = 
            <ul className="main-nav-submenu">
                {/* <li><a href="">Future</a></li> */}
                <li><Link to="/test">Test</Link></li>
                <li><a href="">Current</a></li>
                <li><a href="">Past</a></li>
            </ul> 
        
            this.setState({
              submenu: submenuShow
            })
        }

        handleMouseOut = () => {
            let submenuHide = ""
            this.setState({
                submenu: submenuHide
            })
        }
        render(){
            return(
                <nav className="main-nav">
               <ul className="main-nav-list">
                   <li onMouseLeave={this.handleMouseOut} onMouseEnter={this.handleMouseOver}><a href="">Bookie Books</a>
                            {this.state.submenu}
                    </li>
                   <li><a href="">Bookie Quotes</a>
                    </li>
                   <li><a href="">Bookie Moods</a></li>
               </ul>
           </nav>
            )
        }
}



class BookieHiddenNav extends React.Component {
    render(){
        let styleDisplay = this.props.isOpen === true ? "block" : "none";
        return(
        <div className="bar-nav" style={{display: styleDisplay}}>
            <nav className="main-nav-list-bar">
                    <ul className="main-nav-list">
                        <li><a href="" className="main-link">Bookie Books</a></li>
                        <li><a href="">Future</a></li>
                        <li><a href="">Now</a></li>
                        <li><a href="">Past</a></li>
                        <li><a href="" className="main-link">Bookie Quotes</a></li>
                        <li><a href="" className="main-link">Bookie Moods</a></li>
                    </ul>
            </nav>
        </div>
        )
    }
}



 class Header extends React.Component {  
     constructor(props){
         super(props)
         this.state = {
             isOpen: false
         }
     }

     handleClick = () => {
         this.setState({
            isOpen: !this.state.isOpen //== true ? false : true
         })
     }

    render(){
        return (
            <div>
            <header className="main-header">
       <div className="container">
            <h1 className="main-logo">
                <a href="#"><span>Bookie</span></a>
                <a href="#">
                    <img className="first-unicorn" src="mock-ups/img/unicorn.png"/>
                    <img className="second-unicorn" src="mock-ups/img/unicorn2.png"/>
                </a>
            </h1>
            <BookieBooksSubNav/>
           <div onClick={this.handleClick} className="main-nav-toggle">
               <img src="mock-ups/img/book3.png"/>
           </div>

        </div>
    </header>
    <BookieHiddenNav isOpen={this.state.isOpen}/>
    </div>
        )
    }
 }


export {Header}