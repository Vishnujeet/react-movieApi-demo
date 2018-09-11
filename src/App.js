import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Allmovies from './Components/topMoviesList'
import MoviesInDetails from './Components/moviesInDetails';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      allMovie:[]
    }
  }
  componentDidMount(){
    const url='https://api.themoviedb.org/3/movie/top_rated?api_key=<your key>&language=en-US'
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
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <div class="nav-wrapper ">
              <a href="#" class="brand-logo center">Top Reated movies by themoviedb.org</a>          
            </div>
          </nav>
        
          <Switch>
            <Route exact path='/' render={(props)=>(
              <Allmovies movies={this.state.allMovie}/>              
            )}/>           
            <Route exact path='/movie/:id' render={(props) => {
                let movieId = props.location.pathname.replace('/movie/', '');
                const movieIndex=this.state.allMovie.findIndex(function(movie,index){
                  return movie.id == movieId
                })
                
                return(
                  <MoviesInDetails movie={this.state.allMovie[movieIndex]}/>
                )
              }}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
