import React from "react";
import Topics from "./Topics";
import Banner from "./Banner";
import Images from "./Images";
const Home = (props) => {
  //   console.log(props.headerSearchValue);
  return (
    <React.Fragment>
      <Topics />
      <Banner />
      <Images headerSearchValue={props.headerSearchValue} />
    </React.Fragment>
  );
};

export default Home;
