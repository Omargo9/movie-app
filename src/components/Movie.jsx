import React, { Component } from 'react';


class Card extends Component {
    constructor () {
        super()
    }
   
    render() { 
        return (this.props.movies.map((current)=>{
            return(
                   
             <div className="film-card">

                <span className="movie-note">{current.note}</span>
                
                
                 <img className="movie-pic" src={current.link}></img>
                 <span className="movie-name">{current.name}</span>
              </div>
              
             ) }
            )
        )
       
          
        }}
    


    
        




 
export default Card;