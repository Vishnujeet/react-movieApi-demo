import React, { Component } from 'react'
var imgStyle = {

  };
  
  class MoivesIndetails extends Component{
      constructor(props){
          super(props)
          this.state={
            moivesIndetail:[]
          }        
      }
      
      componentDidMount(){
          this.setState({
              moivesIndetail:this.props.movie
          })
      }
      render(){
        return ( 
            <div className='row'>
                <div className='col s4'>
                    <a class="left-align" href='/'>Go Back To Home</a>
                    <div className='card'>
                        <div className='card-image'>
                            <img style={imgStyle} src={'https://image.tmdb.org/t/p/w500/'+this.props.movie.backdrop_path} alt={this.state.moivesIndetail.title}/>
                            <span className='card-title'>{this.state.moivesIndetail.title}</span>
                        </div>
                        <div className='card-content'>
                        
                            <p>{this.state.moivesIndetail.original_title}</p>
                        </div>    
                        <div className='card-action'>
                            <div>
                                <span>Vote : {this.state.moivesIndetail.vote_average}     </span>
                                {/* <a href={props.movie.title} target='_blank'>View More... </a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col s8 '>
                <div>
                <p class="left-align">Movie Title : {this.state.moivesIndetail.original_title}</p>
                <p class="left-align">Move Overview : {this.state.moivesIndetail.overview}</p>
                <p class="left-align">Release Date : {this.state.moivesIndetail.release_date}</p>
                <p class="left-align">Average Vote : {this.state.moivesIndetail.vote_average}</p>
              </div>
                    <div></div> <br/>
                    <div></div> <br/>
                    <div></div> <br/>
                </div>
             </div>
            
         );
      }
  }
// const MoivesIndetails = (props) => {
    
// }
 
export default MoivesIndetails;