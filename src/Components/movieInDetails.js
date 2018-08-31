import React, { Component } from 'react'

const MoiveIndetails = (props) => {
    return ( 
        <div className='row'>
            <div className='col s6'>
                <div className='card'>
                    <div className='card-image'>
                        <img src={'https://image.tmdb.org/t/p/w500/'+props.movie.backdrop_path} alt={props.movie.title}/>
                        <span className='card-title'>{props.movie.title}</span>
                    </div>
                    <div className='card-content'>
                    
                        <p>{props.movie.original_title}</p>
                    </div>    
                    <div className='card-action'>
                        <div>
                            <span>Vote : {props.movie.vote_average}     </span>
                            {/* <a href={props.movie.title} target='_blank'>View More... </a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='col s6'>
            </div>
         </div>
        
     );
}
 
export default MoiveIndetails;