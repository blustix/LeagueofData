import React from "react"
import axios from "axios"

class Search extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      searchText: '',
      playerData: ''
    };
  }
  handleChange = event => {
    this.setState({ searchText: event.target.value })
    console.log(event.target.value)    
  }

  sendPost = event => {
    var apiCallString = 'http://localhost:8000'
    axios.get(apiCallString, this.searchText).then((response) => {
      console.log(response.data)
      this.setState({playerData: response.data})
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>League of Data!</h1>
        <input 
          type="text"
          name = "searchText"
          value = {this.state.searchText}
          onChange={this.handleChange}
        />
        <button onClick={this.sendPost}>Search for Player</button>
      </React.Fragment>
    );
  }

}
export default Search