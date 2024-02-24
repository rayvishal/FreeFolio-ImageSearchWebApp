import React from "react";
import Topics from "./Topics.jsx";
import Banner from "./Banner.jsx";
import Images from "./Images.jsx";
const Home = () => {
  //   console.log(props.headerSearchValue);
  return (
    <React.Fragment>
      <Topics />
      <Banner />
      <Images />
    </React.Fragment>
  );
};

export default Home;
