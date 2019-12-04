import React from "react";
import placeholderImage from "./placeholderImage.jpg";

const Profile = ({ heroData }) => {
  return (
    <ul className="heroList">
      {heroData.map(hero => {
        let heroImage;
        if (hero) {
          heroImage = hero.image.url;
        } else {
          heroImage = placeholderImage;
        }
        return (
          <li key={hero.id} className="heroProfileListItem">
            <img className="profileImage" src={heroImage} alt="Image"></img>
            <ul className="heroDetailslist">
              <label className="detailsLabel" htmlFor="heroName">
                Known as:
              </label>
              <li className="detailsText" id="heroName">
                {hero.name}
              </li>

              <label className="detailsLabel" htmlFor="heroRealName">
                Full-name:
              </label>
              <li className="detailsText" id="heroRealName">
                {hero.biography["full-name"]}
              </li>

              <label className="detailsLabel" htmlFor="heroAlignment">
                Alignment:
              </label>
              <li className="detailsText" id="heroAlignment">
                {hero.biography.alignment[0].toUpperCase() +
                  hero.biography.alignment.slice(1)}
              </li>

              <label className="detailsLabel" htmlFor="heroAffiliation">
                Affiliations:
              </label>
              <li className="detailsText" id="heroAffiliation">
                {hero.connections["group-affiliation"]}
              </li>
            </ul>
          </li>
        );
      })}{" "}
    </ul>
  );
};

export default Profile;
