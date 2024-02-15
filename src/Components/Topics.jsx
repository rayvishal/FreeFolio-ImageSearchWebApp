import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
// import Banner from "./Banner";
// import Images from "./Images";
// const axios = require("axios");
const Topics = () => {
  const [topic, setTopic] = useState([]);
  // console.log("Hi");
  // console.log(process.env.REACT_APP_ACCESSKEY);
  async function getTopics() {
    try {
      const Topics = await axios.get(
        "https://api.unsplash.com/topics",

        {
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_ACCESSKEY}`,
          },
        }
      );
      // console.log(Topics.data);
      setTopic(Topics.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getTopics();
  }, []);
  return (
    <React.Fragment>
      {/* {console.log("h")} */}
      <div style={{ marginTop: "10px", backgroundColor: "black" }}>
        <div
          style={{
            // display: "inline-block",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/stats">
            <button
              className="stats"
              // style={{
              //   display: "inline-block",
              //   marginLeft: "30px",
              //   // marginTop: "20px",
              //   // backgroundColor: "#a881af",
              //   backgroundColor: "red",
              //   padding: "10px",
              //   borderRadius: "7px",
              //   border: "none",
              //   color: "white",
              //   fontWeight: "bold",
              // }}
            >
              Stats
            </button>
          </Link>
          <div
            style={{
              display: "inline-block",
              width: "2px",
              backgroundColor: "white",
              height: "50px",
              marginLeft: "10px",
              // marginTop: "17px",
              // paddingTop: "80px",
            }}
          ></div>
        </div>

        <div className="topicSection">
          {topic.length
            ? topic.map((e) => (
                <Link to={`/topics/${e.id}`}>
                  <button
                    key={e.id}
                    className="topicBtn"
                    style={{
                      display: "inline-block",
                      fontSize: "13px",
                      padding: "10px 4px",
                      backgroundColor: "#5dbea3",
                      color: "white",
                      border: "3px solid black",
                      borderRadius: "8px",
                    }}
                  >
                    {e.title}
                  </button>
                </Link>
              ))
            : null}
        </div>
      </div>
      {/* <Banner /> */}
      {/* <Images /> */}
    </React.Fragment>
  );
};

export default Topics;
