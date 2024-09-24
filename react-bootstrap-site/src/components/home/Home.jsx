import React from "react";

import "./home.css";
import { Container, Image } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      {/* the <Conatiner> limits the width of the image kaya niremove */}

      <div className="position-absolute top-50 start-50 translate-middle text-black text-center">
        <h2>Eme Title</h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eius!
        </p>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Home;
