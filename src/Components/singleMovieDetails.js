import React from 'react'


const singleMovieDetails= ({movie}) =>(
    
    <div className='col s4'>
        <div className='card'>
            <div className='card-image'>
                <img src={'https://image.tmdb.org/t/p/w500/'+movie.backdrop_path} alt={movie.title}/>
                <span className='card-title'>{movie.title}</span>
            </div>
            <div className='card-content'>
                <p>{movie.title}</p>
             </div>    
             <div className='card-action'>
                <a href={movie.title} target='_blank'>Full article </a>
             </div>
        </div>
     </div>
)
export default singleMovieDetails