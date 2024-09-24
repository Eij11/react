import React from "react";

const ProfilePic = () => {
  const imageUrl = "../src/assets/pfp.jpg";

  const handleClick = () => alert("Hi Pogi!");

  const handleClick2 = (e) => {
    e.target.style.display = "none";
    alert("tinago ang imahe");
  };

  return (
    <div>
      <img src={imageUrl} alt="profile-picture.img" onClick={handleClick} />

      <img
        src={imageUrl}
        alt="profile-picture.img"
        onClick={(e) => handleClick2(e)}
      />
    </div>
  );
};

export default ProfilePic;

//inintegrate lang yung onclick event sa image
