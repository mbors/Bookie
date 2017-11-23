import React from 'react';
import {Header} from './header.jsx'
import {Footer} from './footer.jsx'

class QuotesMainSection extends React.Component{
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

class Quotes extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <QuotesMainSection/>
                <Footer/>
            </div>
        )
    }
}

export {Quotes}