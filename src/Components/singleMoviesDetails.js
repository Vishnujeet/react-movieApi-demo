import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class singleMoviesDetails extends Component{
    constructor(props){
        super(props)
        this.state={
            movie:[]
        }
    }
    componentDidMount(){
        this.setState({
            movie:this.props.movie            
        })
    }
    render(){
        return(
        <div className='col s3'>
            <div className='card'>
                <div className='card-image'>
                    <img src={'https://image.tmdb.org/t/p/w500/'+this.state.movie.backdrop_path} alt={this.state.movie.title}/>
                    <span className='card-title'>{this.state.movie.title}</span>
                </div>
                <div className='card-content'>
                    <p>{this.state.movie.original_title}</p>
                 </div>    
                 <div className='card-action'>
                    <div>
                    <Link to={`/movie/${this.props.movie.id}`}>
                        <span>Vote : {this.state.movie.vote_average}     </span>
                        <a href={this.state.movie.title} target='_blank'>View More... </a>
                    </Link>   
                    </div>
                 </div>
            </div>
         </div>
        )
    }
}

export default singleMoviesDetails