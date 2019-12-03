import React from "react";

class SearchBlock extends React.Component {

  state = {searchInput: ""}
  
  handleInput = event =>{
    this.setState({searchInput : event.target.value})
  }

  handleSubmit = event =>{
    event.preventDefault()
    this.props.stateUpdater(this.state.searchInput)

  }
    render() {
        return(
        <form onSubmit={this.handleSubmit}> 
          <label htmlFor="searchInput">Search By Name: </label> 
        <input id="searchInput" placeholder="Name" onChange={this.handleInput}></input> 
        
        <button type="submit" >Search</button> 
        </form>);
    }
}

export default SearchBlock;
