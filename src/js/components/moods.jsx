import React from 'react';
import {Header} from './header.jsx'
import {Footer} from './footer.jsx'
import {Link} from 'react-router'

class MoodsMainSection extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            okAsk: "",
            isGood: "",
            somethingFunny: "",
            lifeSucks: "",
            responseLength: 0,
            quotes: [],
            tags: [],
            titleAuthor: []
        }
    }

    handleClick = (e) => {
       let okAskClick= e.target.innerText

       this.setState({
           okAsk: okAskClick
       })
    }

    handleClick2 = (e) => {
        let isGoodClick = e.target.innerText
    
        this.setState({
            isGood: isGoodClick
        })
    }

    handleClick3 = (e) => {
        let somethingFunnyClick = e.target.innerText
       
        this.setState({
            somethingFunny: somethingFunnyClick
        })
    }

    handleClick4 = (e) => {
        let lifeSucksClick = e.target.innerText
     
        this.setState({
            lifeSucks: lifeSucksClick
        })
    }


    render(){

        //frst question answers
        let noAnswer = 
        <div className="article-content">
            <div className="article-title">
                    Hmmm.. I do not think I can draw a quote for you then.. What about reading an uplifting book?
            </div>
                <p className="snippet"><a href="https://www.goodreads.com/shelf/show/uplifting">here</a> are some suggestions</p>
        </div>

        let life = 
        <div className="article-content">
            <div className="article-title">
                Is life good today?
            </div>
            <button onClick={this.handleClick2}>Yes!</button><button onClick={this.handleClick2}>No</button>
        </div>

       //checking what is the answer
       let secondQuestion
        if(this.state.okAsk == ""){
            secondQuestion = ""
        } else if (this.state.okAsk == "No"){
            secondQuestion = noAnswer
        } else {
            secondQuestion = life
        }

        //second question answers
        let lifeGood = 
        <div>
            <div>Good to hear that! Wanna hear something heart-warming?</div>
            <div>
                <button onClick={this.handleClick3}>That's a good idea!</button>
                <button onClick={this.handleClick3}>I would prefer something nostalgic!</button>
            </div>
        </div>

        let lifeSucks =
        <div>
            <div>Oh no! Let's cheer you up! Wanna hear something uplifting?</div>
            <div><button onClick={this.handleClick4}>That's a good idea!</button>
            <button onClick={this.handleClick4}>Naaah, tell me what's the purpose of life!</button>
            </div>
        </div>

        //checking what is the answer
        let thirdQuestion
        if(this.state.isGood == ""){
            thirdQuestion = ""
        } else if (this.state.isGood  == "No"){
            thirdQuestion = lifeSucks
        } else {
            thirdQuestion = lifeGood
        }

        //life is good. wanna hear something funny? 
        let finalLifeGood
        if(this.state.somethingFunny == ""){
            finalLifeGood = ""
        } else if (this.state.somethingFunny  == "That's a good idea!"){
            finalLifeGood = "Tutaj jakis smieszny cytat"
        } else {
            finalLifeGood = "tutaj jakis cytat nostalgiczny "
        }

        //najpierw musze wyszukac tylko uplifting cytaty, czyli takie ktore maja tag 'uplifting' i przypisac do tablicy, popraw length... 
        let upliftingQuotes = []
        let upliftingAuthorTitle = []
        for(let i=0; i< this.state.responseLength; i++){
            if(this.state.tags[i] == "uplifting"){
                upliftingQuotes.push(this.state.quotes[i])
                upliftingAuthorTitle.push(this.state.titleAuthor[i])
            }
        }

        //ile mam tych cyatow? zeby wiedziec z ilu losowac
        let upliftingQuotesNumber = Number(upliftingQuotes.length)
        //losuje randomowa liczbe z tego przedzialu 
        let myRandomQuoteIndex = Math.floor(Math.random() * (upliftingQuotesNumber - 0 + 1)) + 0
        console.log(myRandomQuoteIndex)
    


        //life sucks. wanna hear something funny? 
        let finalLifeSucks
        if(this.state.lifeSucks == ""){
            finalLifeSucks = ""
        } else if (this.state.lifeSucks  == "That's a good idea!"){
            finalLifeSucks = this.state.quotes[myRandomQuoteIndex] + this.state.titleAuthor[myRandomQuoteIndex]
        } else {
            finalLifeSucks = "tutaj jakas prawda o zyciu "
        }

        return(
            <div className="main-section">
                <div className="container">
                        <div className="section1">
                            <h2 className="page-title">Bookie Moods<span> .</span></h2>
                                <div>Hi there! Let me find a suitable quote for you today. But first, I'll need you to answer some questions..</div>
                                <div><button onClick={this.handleClick}>Ok</button><button onClick={this.handleClick}>No</button></div>
                                {secondQuestion}
                                {thirdQuestion}
                                {finalLifeGood}
                                {finalLifeSucks}
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
            // console.log(response.length)
            // tutaj widzi response.length
            let myQuotes = [];
            let myTags = [];
            let myTitleAuthor = [];
            let myResponseLength = response.length;
            for (let i=1; i<response.length; i++){
                myQuotes.push(response[i].quote)
                myTags.push(response[i].tags)
                myTitleAuthor.push(response[i].titleAuthor)
            }
            this.setState({
                quotes: myQuotes,
                responseLength: myResponseLength,
                tags: myTags,
                titleAuthor: myTitleAuthor
            })
        })
    }
}

class Moods extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <MoodsMainSection/>
                <Footer/>
            </div>
        )
    }
}


export {Moods}
