import React, {Component} from 'react';
import './App.css';
import Clock from './Clock';

const clocks = [
  {
    secs : 1,
    country : 'Italy',
    timezone : 1
  },
  {
    secs : 1,
    country : 'Russia',
    timezone : 1
  },
  {
    secs : 1,
    country : 'Cuba',
    timezone : 1
  }
]

  // const test = <h2> Test </h2>;

class App extends Component {

  getClocks() {
    return clocks.map( ({secs, country, timezone}) => {
      return <Clock
              key = {country}
              secs= {secs}
              country={country}
              timezone={timezone}
      />
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <h1> Hello world </h1>
        </div>
        <ul>
          {this.getClocks()}
        </ul>
      </React.Fragment>
    );
  }
}

export default App;
