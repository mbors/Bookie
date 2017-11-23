import React from 'react';
import ReactDOM from 'react-dom';


//main page - BookieNews
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
                            <h2 className="page-title">Bookie<span> .</span></h2>
                            <h3>Bookie News</h3>
                            {mySection}
                        </div>
                </div>
                {/* <Moods/> */}
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