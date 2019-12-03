import React from "react";
import placeholderImage from "./placeholderImage.jpg";

const Profile = ({ heroData }) => {
  console.log(heroData, "herodata");
  let heroImage;
  if (heroData) {
    heroImage = heroData.image.url;
  } else {
    heroImage = placeholderImage;
  }
  return (
    <div className="profileContent">
      <img className="profileImage" src={heroImage} alt="Image">
      </img>
      <ul>
        <label htmlFor="heroName">Known as: </label>
          <li id="heroName">{heroData.name}</li>

          <label htmlFor="heroRealName">Full-name: </label>
          <li id="heroRealName">{heroData.biography["full-name"]}</li>

          <label htmlFor="heroAlignment">Alignment: </label>
          <li id="heroAlignment">{heroData.biography.alignment[0].toUpperCase()+heroData.biography.alignment.slice(1)}</li>

          <label htmlFor="heroAffiliation">Affiliations: </label>
          <li id="heroAffiliation">{heroData.connections["group-affiliation"]}</li>
      </ul>
    </div>
  );
};

export default Profile;
