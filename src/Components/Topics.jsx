import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

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
            Authorization: `Client-ID ${process.env.REACT_APP_ACCESAPI}`,
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
      <div className="topicSection">
        {topic.length
          ? topic.map((e) => (
              <Link to={`/topics/${e.id}`} key={e.id}>
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
      {/* </div> */}
      {/* <Banner /> */}
      {/* <Images /> */}
    </React.Fragment>
  );
};

export default Topics;
