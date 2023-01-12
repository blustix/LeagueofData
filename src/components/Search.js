import React from "react"
import axios from "axios"

class Search extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      searchText: '',
      playerData: {}
    };
  }
  handleChange = event => {
    this.setState({ searchText: event.target.value })
    console.log(event.target.value)    
  }


  sendPost = event => {
    var apiCallString = 'http://localhost:8000'
    axios.get(apiCallString,{params: {search: this.state.searchText}}).then((response) => {
      this.setState({playerData: response.data})
      console.log(response.data)
    })
    console.log(this.state.playerData)
  }

  render() {
    return (
      <React.Fragment>
        <h2>League of Data!</h2>
        <input 
          type="text"
          name = "searchText"
          value = {this.state.searchText}
          onChange={this.handleChange}/>
        <button onClick={this.sendPost}>Search for Player</button>
        <div>
          {JSON.stringify(this.state.playerData) !== '{}' ? 
          <>
          <p>{this.state.playerData.name}</p>
          <img width={100} height={100} src={"http://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/"
           + this.state.playerData.profileIconId + ".png"} alt={"profile icon"}></img>
          <p>Summoner Level: {this.state.playerData.summonerLevel}</p> 
          </>
          : <p> No Player Data</p>}
        </div>
      </React.Fragment>
    );
  }

}
export default Search