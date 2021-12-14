import './App.css';
import React, {Component} from 'react'
import GiphyInfo from './GiphyInfo';

class App extends Component {

  constructor(){
    super()

    this.state = {
      baseurl: process.env.REACT_APP_BASEURL,
      api_key: 'api_key=' + process.env.REACT_APP_APIKEY,
      query: '&q=',
      giphyTitle: '',
      searchEndPoint: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      giphyTitle: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({
      searchEndPoint: this.state.baseurl + this.state.api_key + this.state.query + this.state.giphyTitle 
    }, () => {
      fetch(this.state.searchEndPoint)
      .then(res => res.json())
      .then(json => this.setState({
          giphs: json.data,
          giphyTitle: ''
      }))
    }) 
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="giphy title" value={this.state.giphyTitle} onChange={this.handleChange}/>
          <input type="submit" />
        </form>
        {
          this.state.giphs ? <GiphyInfo giphs={this.state.giphs} /> : ''
        }
      </>
    );    
  }

}

export default App;
