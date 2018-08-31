import React, { Component } from "react"
import SingleMovie from './singleMovieDetails'
import axios from 'axios'

// const TopMovieList = (props) => {
//     return ( 
//         <div className='row'>
//         {
//              props.movies.map((movie) =>(
//                  <SingleMovie key={movie.id} movie={movie}/>
//              ))
//         }
      
//         </div>
//      )
// }
 
// export default TopMovieList;

class TopMovieList extends Component{
    constructor(props){
        super(props)
        this.state={
            allMovie:[]
        }
    }
    
    renderSinglemovie(){
        return this.props.movies.map((movie) => (
            <SingleMovie key={movie.id} movie={movie}/>
        ))
        
    }
    render(){
        return(
            <div className='row'>
                {this.renderSinglemovie()}
            </div>
            )
        }
}
export default TopMovieList
