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
    <div>
      <img src={heroImage} alt="Image">
      </img>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <p>Block of text</p>
    </div>
  );
};

export default Profile;
