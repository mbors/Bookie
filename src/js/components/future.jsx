import React from 'react';
import {Header} from './header.jsx'
import {Footer} from './footer.jsx'
//importuje komponent currentMainSection gdzie bedzie przekazywany props o dodaniu
import {CurrentMainSection} from './current.jsx'

class FutureMainSection extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            description: [],
            isbn: [],
            titleAuthor: [],
            responseLength: 0,
            descriptionToMove: "",
            authorToMove: ""
        }
    }
   
    handleClick = (e, i) => {
        let myIndex = i
        let clickDescriptionToMove = this.state.description[myIndex]
        let clickauthorToMove = this.state.titleAuthor[myIndex]
      
        this.setState({
            descriptionToMove: clickDescriptionToMove,
            authorToMove: clickauthorToMove
        })
        
    }

    render(){
        console.log(this.state.authorToMove)
        console.log(this.state.descriptionToMove)
        let myFutureBooks = []
                for(let i=0; i<this.state.responseLength - 1; i++){
                    myFutureBooks.push(
                        <div className="article-content">
                            <div className="article-title">{this.state.titleAuthor[i]}</div>
                            <p className="snippet">{this.state.description[i]}</p> 
                            <button onClick={e => this.handleClick(e, i)} >+Now</button>
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
            // console.log(response)
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

class Future extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <FutureMainSection/>
                <Footer/>
            </div>
        )
    }
}


//tworze sobie fake parenta, ktory bedzie laczyl moj komponent Future i Current
class FakeParent extends React.Component{
    constructor(props){
        super(props)
        //przez state bede przekazywac info
        this.state = {
            description: this.props.descriptionToMove,
            author: this.props.authorToMove,
        }
    }

    render(){
        //renderuje dwa komponenty, ktore chce polaczyc
        console.log("lalalalal",this.state)
        return(
        <div>
            <CurrentMainSection/>
            <FutureMainSection descriptionToMove={this.state.descriptionToMove} authorToMove={this.state.authorToMove}/>
        </div>
        )
    }
} 

export {Future}