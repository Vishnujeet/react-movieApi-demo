import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Allmovie from './Components/topMovieList'
import MovieInDetails from './Components/movieInDetails';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      allMovie:[]
    }
  }
  componentDidMount(){
    const url='https://api.themoviedb.org/3/movie/top_rated?api_key=<your-api-key>&language=en-US'
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
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Switch>
            <Route exact path='/' render={(props)=>(
              <Allmovie movies={this.state.allMovie}/>              
            )}/>           
            <Route exact path='/movie/:id' render={(props) => {
                let movieId = props.location.pathname.replace('/movie/', '');
                const movieIndex=this.state.allMovie.findIndex(function(movie,index){
                  return movie.id == movieId
                })
                
                return(
                  <MovieInDetails movie={this.state.allMovie[movieIndex]}/>
                )
              }}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
