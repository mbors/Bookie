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


class BookieNews extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            headlineTab: [],
            newsTab: [],
            urlTab: [],
        }
    }

    render(){ 
        let mySection = []
                for(let i=0; i<5; i++){
                     mySection.push(
                     <div className="article-content">
                         <div className="article-title">{this.state.headlineTab[i]}</div>
                        <p className="snippet">{this.state.newsTab[i]}</p> 
                        <a href={this.state.urlTab[i]}>Tell me more!</a>
                    </div>
                    )
            }
            console.log(mySection)
        return(
            <div className="main-section">
                <div className="container">
                        <div className="section1">
                            <h2 className="page-title">Bookie News<span> .</span></h2>
                            {mySection}
                        </div>
                </div>
            </div>
        )

    }
    componentDidMount(){
            fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=651f2d666d474593a7166bd2238e94aa&q=books')
            .then(resp=>{
                return resp.json();
            })
            .then(response=>{
                let myHeadlines = [];
                let myNews = [];
                let myUrls = [];
                for(let i=0; i<5; i++){
                    myHeadlines.push(response.response.docs[i].headline.main)
                    myNews.push( response.response.docs[i].snippet)
                    myUrls.push(response.response.docs[i].web_url)
                }
                this.setState({
                    headlineTab: myHeadlines,
                    newsTab: myNews,
                    urlTab: myUrls
                })
            })
        }
}

class Bookie extends React.Component {
    render(){
        return  (
            <div>
            <Header/>
            <BookieNews/>
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
    </div>
        )
    }
}



ReactDOM.render(
    <Bookie/>,
    document.getElementById('app')
);

export {Bookie}