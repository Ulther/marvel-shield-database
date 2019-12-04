import React from "react";
import placeholderImage from "./placeholderImage.jpg";

const Profile = ({heroData}) => {

    return (
        <ul className="heroList"> 
          { heroData.map(hero => {
            let heroImage;
            if (hero) {
                heroImage = hero.image.url;
            } else {
                heroImage = placeholderImage;
            }
              return(

                
                <li key = {hero.id} className="heroProfileListItem">
                    <img className="profileImage"
                        src={
                            heroImage
                        }
                        alt="Image"></img>
                    <ul className="heroDetailslist">
                        <label htmlFor="heroName">Known as:
                        </label>
                        <li id="heroName">
                            {
                            hero.name
                        }</li>

                        <label htmlFor="heroRealName">Full-name:
                        </label>
                        <li id="heroRealName">
                            {
                            hero.biography["full-name"]
                        }</li>

                        <label htmlFor="heroAlignment">Alignment:
                        </label>
                        <li id="heroAlignment">
                            {
                            hero.biography.alignment[0].toUpperCase() + hero.biography.alignment.slice(1)
                        }</li>

                        <label htmlFor="heroAffiliation">Affiliations:
                        </label>
                        <li id="heroAffiliation">
                            {
                            hero.connections["group-affiliation"]
                        }</li>
                    </ul>
                </li>
              )
              })
        } </ul>
    );
};

export default Profile;
