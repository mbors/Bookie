import React from 'react';
import ReactDOM from 'react-dom';

class BookieBooksSubNav extends React.Component{
    constructor(props){
            super(props);
            this.state={
                submenu: ""
            }
        }

        handleMouseOver = () => {
            let submenuShow = <ul className="main-nav-submenu"><li><a href="">Future</a></li><li><a href="">Now</a></li><li><a href="">Past</a></li></ul> 
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
                        <li><a href="" className="main-link">Bookie Quotes</a>
                            </li>
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
                <span>Bookie</span>
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


class Bookie extends React.Component {
    render(){
        return  (
            <div>
            <Header/>
    <div className="main-section">
        <div className="container">
             <div className="section1">
                    Pie bear claw jelly-o. Dragée jelly macaroon macaroon ice cream. Powder dragée pie ice cream. Cheesecake pastry pie lemon drops gummies cake oat cake gummi bears lemon drops. Wafer pie tootsie roll marshmallow dragée gummies. Dragée candy canes fruitcake. Ice cream bear claw cotton candy powder tiramisu bonbon lemon drops. Sweet dessert gummies chupa chups cake muffin. Chocolate cake pie danish. Sugar plum lollipop chocolate cake croissant carrot cake. Cupcake halvah caramels bear claw sesame snaps jelly-o. Apple pie pastry oat cake soufflé donut dessert.
                    Soufflé pie candy. Powder sweet brownie lemon drops fruitcake pie carrot cake chocolate. Carrot cake chocolate tiramisu. Chocolate cake oat cake sweet fruitcake topping. Danish jelly-o chocolate pastry wafer. Jelly-o macaroon tiramisu chocolate pudding candy macaroon carrot cake soufflé. Cheesecake gummies pie danish cotton candy cotton candy tart. Tart candy sweet topping apple pie. Ice cream pie danish sweet dragée sweet roll pudding. Liquorice jelly beans cheesecake chocolate sesame snaps cupcake. Sesame snaps gummies gummies. Pudding pastry toffee cupcake fruitcake sesame snaps chocolate cake. Icing jelly-o ice cream soufflé.
             </div>
        </div>
    </div>
    <footer className="main-footer">
        <div className="container">
            <div className="bookie-map">
                <a href="#">About Bookie</a>
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
    </div>
        )
    }
}



ReactDOM.render(
    <Bookie/>,
    document.getElementById('app')
);

export {Bookie}