import './App.css';
import React, {Component} from 'react'
import GiphyInfo from './GiphyInfo';

class App extends Component {

  constructor(){
    super()

    this.state = {
      baseurl: process.env.REACT_BASE_URL
    }
  }

  render() {
    console.log(this)
    return (
      <div className="App">

      </div>
    );    
  }

}

export default App;
