import React from 'react';

class Test extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            description: [],
            isbn: [],
            titleAuthor: [],
            responseLength: 0,
        }
    }
    handleClick = (e) => {
        console.log("klik")
    }
    render(){
        let myFutureBooks = []
                for(let i=0; i<this.state.responseLength - 1; i++){
                    myFutureBooks.push(
                        <div className="article-content">
                            <div className="article-title">{this.state.titleAuthor[i]}</div>
                            <p className="snippet">{this.state.description[i]}</p> 
                            <button onClick={this.handleClick}>+Now</button>
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

export {Test}