import React from 'react';
import ReactDOM from 'react-dom';

class Quotes extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            quotes: [],
            titleAuthor: [],
            tags: [],
            responseLength: 0,
        }
    }
    render(){
        let bookieQuotes = []
                for(let i=0; i<this.state.responseLength - 1; i++){
                    bookieQuotes.push(
                        <div className="article-content">
                            <div className="article-title">{this.state.titleAuthor[i]}</div>
                            <p className="snippet">{this.state.quotes[i]}</p> 
                            <p className="tag">#{this.state.tags[i]}</p>
                        </div>
                )
            }


        return(
            <div className="main-section">
                <div className="container">
                        <div className="section1">
                            <h2 className="page-title">Bookie Quotes<span> .</span></h2>
                            {bookieQuotes}
                        </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        fetch('https://bookie-a3e9e.firebaseio.com/BookieBooks.json')
        .then(resp=>{
            return resp.json();
        }).then(response=>{
            let myQuotes = [];
            let myTitleAuthor = [];
            let myTags = [];
            let myResponseLenght = response.length;
            for (let i=1; i<response.length; i++){
                myQuotes.push(response[i].quote)
                myTitleAuthor.push(response[i].titleAuthor)
                myTags.push(response[i].tags)
            }
            this.setState({
                quotes: myQuotes,
                titleAuthor: myTitleAuthor,
                responseLength: myResponseLenght,
                tags: myTags
            })
            console.log(response)
        })
    }
}

class BookieBooksFuture extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            description: [],
            isbn: [],
            titleAuthor: [],
            responseLength: 0,
        }
    }
    render(){
        let myFutureBooks = []
                for(let i=0; i<this.state.responseLength - 1; i++){
                    myFutureBooks.push(
                        <div className="article-content">
                            <div className="article-title">{this.state.titleAuthor[i]}</div>
                            <p className="snippet">{this.state.description[i]}</p> 
                            <button>+Now</button>
                        </div>
                )
            }


        return(
            <div className="main-section">
                <div className="container">
                        <div className="section1">
                            <h2 className="page-title">Bookie Future<span> .</span></h2>
                            {myFutureBooks}
                        </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        fetch('https://bookie-a3e9e.firebaseio.com/BookieBooks.json').then(resp=>{
                return resp.json();
        }).then(response =>{
            let myDescription = [];
            let myIsbn = [];
            let myTitleAuthor = [];
            let myResponseLength = response.length;
     
            for (let i=1; i<response.length; i++){
                myDescription.push(response[i].description)
                myIsbn.push(response[i].isbn)
                myTitleAuthor.push(response[i].titleAuthor)
            }
            this.setState({
                description: myDescription,
                isbn: myIsbn,
                titleAuthor: myTitleAuthor,
                responseLength: myResponseLength
            })
          
        })
    }
}

class BookieBooksCurrent extends React.Component{
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

class BookieBooksPast extends React.Component{
    render(){
        return(
            <div className="main-section">
                <div className="container">
                        <div className="section1">
                            <h2 className="page-title">Bookie Past<span> .</span></h2>
                            <div className="article-content">
                                <div className="article-title">
                                    Book Title and Author Goes Here 
                                </div>
                                <p className="snippet">Book Description Goes Here Book Description Goes Here Book Description Goes Here</p> 
                            </div>
                        </div>
                </div>
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
                        <div className="article-title"><a href={this.state.urlTab[i]}>{this.state.headlineTab[i]}</a></div>
                        <p className="snippet">{this.state.newsTab[i]}</p> 
                        <a href={this.state.urlTab[i]}>Tell me more!</a>
                    </div>
                    )
            }
        return(
            <div className="main-section">
                <div className="container">
                        <div className="section1">
                            <h2 className="page-title">Bookie News<span> .</span></h2>
                            {mySection}
                        </div>
                </div>
                <BookieBooksFuture/>
                <BookieBooksCurrent/>
                <BookieBooksPast/>
                <Quotes/>
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

export {BookieNews}