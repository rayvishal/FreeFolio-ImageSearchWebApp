import React from "react";
import axios from "axios";

// const axios = require("axios");
const Topics = () => {
  console.log("Hi");
  console.log(process.env.REACT_APP_ACCESSKEY);
  async function getTopics() {
    try {
      const Topics = await axios.get("https://api.unsplash.com/topics", {
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_ACCESSKEY}`,
        },
      });
      console.log(Topics.data);
    } catch (error) {
      console.log(error);
    }
  }
  getTopics();
  return (
    <div>
      <p style={{ display: "inline-block" }}>Stats</p>
      <div
        style={{
          display: "inline-block",
          width: "2px",
          backgroundColor: "black",
          height: "20px",
          marginLeft: "10px",
        }}
      ></div>
    </div>
  );
};

export default Topics;
