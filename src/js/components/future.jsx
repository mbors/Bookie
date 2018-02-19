import React from 'react';
import {Header} from './header.jsx'
import {Footer} from './footer.jsx'


class FutureMainSection extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            description: [],
            isbn: [],
            titleAuthor: [],
            status: [],
            responseLength: 0
        }
    }
   

    render(){
        let myFutureBooks = []
                for(let i=0; i<this.state.responseLength - 1; i++){
                    myFutureBooks.push(
                        <div className="article-content">
                            <div className="article-title">{this.state.titleAuthor[i]}</div>
                            <p className="snippet">{this.state.description[i]}</p> 
                            <div className="article-title">{this.state.status[i]}</div>
                        </div>
                )
            }


        return(
            <div className="main-section">
                <div className="container">
                        <div className="section1">
                            <h2 className="page-title">Bookie Books<span> .</span></h2>
                            <div className="article-content">
                                <p className="snippet">Author & Title</p>
                                <p className="snippet">Description</p> 
                                <p className="snippet">Status</p>
                            </div>
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
            let myStatus = [];
            let myResponseLength = response.length;
            console.log(response)
            for (let i=1; i<response.length; i++){
                myDescription.push(response[i].description)
                myIsbn.push(response[i].isbn)
                myTitleAuthor.push(response[i].titleAuthor)
                myStatus.push(response[i].status)
            }
            this.setState({
                description: myDescription,
                isbn: myIsbn,
                titleAuthor: myTitleAuthor,
                status: myStatus,
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


export {Future}