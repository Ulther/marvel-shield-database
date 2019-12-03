import React from "react";
import SearchBlock from "./SearchBlock";
import Profile from "./Profile";

class HeroPage extends React.Component {
  state = { hero: null, id: "151" };

  render() {
    return (
      <section>
        <SearchBlock />
        <Profile heroData={this.state.hero} />
      </section>
    );
  }

  componentDidMount = () => {
    this.fetchHeroById(this.state.id);
  };

  fetchHeroById = heroId => {
    fetch(`https://www.superheroapi.com/api.php/3136178393064071/${heroId}`)
      .then(buffer => {
        return buffer.json();
      })
      .then(response => {
        console.log("Response>", response);
        this.setState({ hero: response });
      });
  };
}

export default HeroPage;
