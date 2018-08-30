import React, { Component } from "react"
import SingleMovie from './singleMovieDetails'
import axios from 'axios'

class TopMovieList extends Component{
    constructor(props){
        super(props)
        this.state={
            allMovie:[]
        }
    }
    componentDidMount(){
        const url='https://api.themoviedb.org/3/movie/top_rated?api_key=<your-api-key>&language=en-US&page=1'
        axios.get(url)
            .then((response) =>{
            
                this.setState({
                    allMovie:response.data.results
                })

            })
            .catch((error) => {
                console.log(error)
            })

    }
    renderSinglemovie(){
        return this.state.allMovie.map((movie) => (
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
