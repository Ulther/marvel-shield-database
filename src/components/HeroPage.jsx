import React from "react";
import SearchBlock from "./SearchBlock";
import Profile from "./Profile";
import Error from "./Error"

class HeroPage extends React.Component {
  state = { hero: null, searchName: "" };

  render() {
    let notFound = false;
    if(this.state.hero === "" && this.state.searchName !== ""){
       notFound = true
    }
    return (
      <section className="heroPage">
        <SearchBlock stateUpdater={this.heroSearchNameUpdater} />
        {(this.state.hero) && <Profile heroData={this.state.hero}  />}
        {notFound && <Error searchAttempt={this.state.searchName} />}
      </section>
    );
  }

  componentDidMount (){
    if (this.state.searchName!== ""){
      this.fetchHeroByName(this.state.searchName);
    }
  };

  componentDidUpdate(prevProps,prevState) {
    if (this.state.searchName!== prevState.searchName){
      this.fetchHeroByName(this.state.searchName);
    }
  };

heroSearchNameUpdater = (searchInput)=>{

  this.setState({searchName : searchInput})
}


  fetchHeroByName = searchName => {
   
    fetch(`https://www.superheroapi.com/api.php/3136178393064071/search/${searchName}`)
      .then(buffer => {
        return buffer.json();
      })
      .then(({results}) => {
        if(results.length>0){
          this.setState({ hero: results });
        }else{
          this.setState({ hero: "" });
    
        }
      });
  };


  fetchHeroById = heroId => {
    fetch(`https://www.superheroapi.com/api.php/3136178393064071/${heroId}`)
      .then(buffer => {
        return buffer.json();
      })
      .then(response => {
        this.setState({ hero: response });
      });
  };
}

export default HeroPage;
