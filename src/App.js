import './App.css';
import React, {Component} from 'react'
import GiphyInfo from './GiphyInfo';

class App extends Component {

  constructor(){
    super()

    this.state = {
      baseurl: 'https://api.giphy.com/v1/gifs/search?',
      api_key: 'api_key=' + '4B9b9lcflmEmNTgHwvULf4AIhhLNYARY',
      query: '&q=',
      giphyTitle: '',
      searchEndPoint: ''
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
