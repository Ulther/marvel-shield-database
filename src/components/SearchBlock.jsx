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
        <form className="searchBlock" onSubmit={this.handleSubmit}> 
          <label className="inputLabel" htmlFor="searchInput">Search By Name: </label> 
        <input className="searchInput" id="searchInput" placeholder="Name" onChange={this.handleInput}></input> 
        
        <button className="submitButton" type="submit" >Search</button> 
        </form>);
    }
}

export default SearchBlock;
