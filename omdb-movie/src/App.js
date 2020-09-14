import React, {Component} from 'react';
import './App.css';
import Videolist from './components/movie_list';
import NavBar from './components/navbar';

const APIKEY = '5d473619';
const APIURL = 'http://www.omdbapi.com/?';

// function fetchMovies(search = 'back to the future') {
//   return fetch(APIURL + 's=' + search + '&apikey=' + APIKEY).then(res => res.json()).then(apiResult => console.log(apiResult));
// }

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      totalCount: 0
    }
  }

  fetchMovies = (search = '') => {
    return fetch(APIURL + 's=' + search + '&apikey=' + APIKEY).then(res => res.json())  ;
  }

  searchMovies = (term = '') => {
     if(term.length < 3){
       return
     }
     this.fetchMovies(term).then(res => {
       console.log(this)
      this.setState({
        movies : res.Search,
        totalCount : res.totalResults
      })
    })
  };

  componentDidMount(){
    this.searchMovies('back to the future')
  }


  render() {
    return (
      <div className="App">
        <NavBar onSearchTerm = {this.searchMovies} />
          <div className="container">
            <Videolist movies = {this.state.movies}/>
          </div>
      </div>
    );
  }
}

export default App;
