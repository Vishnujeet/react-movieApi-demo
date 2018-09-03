import React, { Component } from 'react'
var imgStyle = {

  };
  
const MoiveIndetails = (props) => {
    return ( 
        <div className='row'>
            <div className='col s4'>
                <a class="left-align" href='/'>Go Back To Home</a>
                <div className='card'>
                    <div className='card-image'>
                        <img style={imgStyle} src={'https://image.tmdb.org/t/p/w500/'+props.movie.backdrop_path} alt={props.movie.title}/>
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
            <div className='col s8 '>
            <div>
            <p class="left-align">Movie Title : {props.movie.original_title}</p>
            <p class="left-align">Move Overview : {props.movie.overview}</p>
            <p class="left-align">Release Date : {props.movie.release_date}</p>
            <p class="left-align">Average Vote : {props.movie.vote_average}</p>
          </div>
                <div></div> <br/>
                <div></div> <br/>
                <div></div> <br/>
            </div>
         </div>
        
     );
}
 
export default MoiveIndetails;