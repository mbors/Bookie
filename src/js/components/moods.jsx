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
           okAsk: okAskClick,
           isGood: "",
           somethingFunny: "",
           lifeSucks: "",
       })
    }

    handleClick2 = (e) => {
        let isGoodClick = e.target.innerText
    
        this.setState({
            isGood: isGoodClick,
            somethingFunny: "",
            lifeSucks: ""
        })
    }

    handleClick3 = (e) => {
        let somethingFunnyClick = e.target.innerText
        this.setState({
            somethingFunny: somethingFunnyClick,
            lifeSucks: ""
        })
    }

    handleClick4 = (e) => {
        let lifeSucksClick = e.target.innerText
     
        this.setState({
            lifeSucks: lifeSucksClick,
            somethingFunny: ""
        })
    }


    render(){

        //frst question answers
        let noAnswer = 
        <div className="container-moods">
            <div className="question">
                 Hmmm.. I do not think I can draw a quote for you then.. What about reading an uplifting book?
                 <a href="https://www.goodreads.com/shelf/show/uplifting"> here</a> are some suggestions
            </div>
        </div>

        let life = 
        <div className="container-moods">
            <div className="question">
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
        <div className="container-moods">
            <div className="question">Good to hear that! Wanna hear something funny?</div><br/>
            <div>
                <button onClick={this.handleClick3}>That's a good idea!</button>
                <button onClick={this.handleClick3}>I would prefer something nostalgic!</button>
            </div>
        </div>

        let lifeSucks =
        <div className="container-moods">
            <div className="question">Oh no! Let's cheer you up! Wanna hear something uplifting?</div>
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

        //najpierw musze wyszukac tylko uplifting cytaty, czyli takie ktore maja tag 'uplifting' i przypisac do tablicy 
        let upliftingQuotes = []
        let upliftingAuthorTitle = []
        for(let i=0; i< this.state.responseLength; i++){
            if(this.state.tags[i] == "uplifting"){
                upliftingQuotes.push(this.state.quotes[i])
                upliftingAuthorTitle.push(this.state.titleAuthor[i])
            }
        }
        //ile mam tych cytatow? zeby wiedziec z ilu losowac
        let upliftingQuotesNumber = Number(upliftingQuotes.length) - 1
        //losuje liczbe z tego przedzialu 
        let myRandomQuoteIndex = Math.floor(Math.random() * (upliftingQuotesNumber - 0 + 1)) + 0



        //szukam nostalgic cytatow 
        let nostalgicQuotes = []
        let nostalgicAuthorTitle = []
        for(let i=0; i< this.state.responseLength; i++){
            if(this.state.tags[i] == "nostalgic"){
                nostalgicQuotes.push(this.state.quotes[i])
                nostalgicAuthorTitle.push(this.state.titleAuthor[i])
            }
        }
        //sprawdzam ile mam cytatow
        let nostalgicQuotesNumber = Number(nostalgicQuotes.length) - 1
        //losuje liczbe z tego przedzialu
        let randomNostalgicIndex  = Math.floor(Math.random() * (nostalgicQuotesNumber - 0 + 1)) + 0


        //szukam life cytatow
        let lifeQuotes = []
        let lifeAuthorTitle = []
        for(let i=0; i< this.state.responseLength; i++){
            if(this.state.tags[i] == "purpose"){
                lifeQuotes.push(this.state.quotes[i])
                lifeAuthorTitle.push(this.state.titleAuthor[i])
            }
        }
        //sprawdzam ile mam cytatow
        let lifeQuotesNumber = Number(lifeQuotes.length) - 1
        //losuje liczbe z tego przedzialu
        let randomLifeIndex  = Math.floor(Math.random() * (lifeQuotesNumber - 0 + 1)) + 0


        //szukam funny cytatow
        let funnyQuotes = []
        let funnyAuthorTitle = []
        for(let i=0; i< this.state.responseLength; i++){
            if(this.state.tags[i] == "funny"){
                funnyQuotes.push(this.state.quotes[i])
                funnyAuthorTitle.push(this.state.titleAuthor[i])
            }
        }
        //sprawdzam ile mam cytatow
        let funnyQuotesNumber = Number(funnyQuotes.length) - 1
        //losuje liczbe z tego przedzialu
        let randomFunnyIndex  = Math.floor(Math.random() * (funnyQuotesNumber - 0 + 1)) + 0
        

        //life is good. wanna hear something funny? 
        let finalLifeGood 
        if(this.state.somethingFunny == ""){
            finalLifeGood = ""
        } else if (this.state.somethingFunny  == "That's a good idea!"){
            finalLifeGood = funnyQuotes[randomFunnyIndex] + "         " + funnyAuthorTitle[randomFunnyIndex]
        } else {
            finalLifeGood = nostalgicQuotes[randomNostalgicIndex] + nostalgicAuthorTitle[randomNostalgicIndex]
        }

        //life sucks. wanna hear something uplifting? 
        let finalLifeSucks
        if(this.state.lifeSucks == ""){
            finalLifeSucks = ""
        } else if (this.state.lifeSucks  == "That's a good idea!"){
            finalLifeSucks = upliftingQuotes[myRandomQuoteIndex] + upliftingAuthorTitle[myRandomQuoteIndex]
        } else {
            finalLifeSucks = lifeQuotes[randomLifeIndex] + lifeAuthorTitle[randomLifeIndex]
        }

        //life sucks. purpose of life 

   

        return(
            <div className="main-section">
                <div className="container">
                        <div className="section1">
                            <h2 className="page-title">Bookie Moods<span> .</span></h2>
                                <div className="question">Hi there! Let me find a suitable quote for you today. But first, I'll need you to answer some questions..
                                <button onClick={this.handleClick}>Ok</button><button onClick={this.handleClick}>No</button></div>
                                <div className="myQuote">{secondQuestion}</div>
                                <div className="myQuote">{thirdQuestion}</div>
                                <div className="myQuote">{finalLifeSucks}</div>
                                <div className="myQuote">{finalLifeGood}</div>
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
