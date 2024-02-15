import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Topics from "./Topics";

const SingleTopic = () => {
  const [topic, setTopic] = useState({});
  const [topicPhoto, setTopicPhoto] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  console.log(useParams);
  const { id } = useParams();

  const item = {
    padding: "20px",
    fontSize: "20px",
  };

  async function getSingleTopic() {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/topics/${id}`,
        {
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_ACCESSKEY}`,
          },
        }
      );
      console.log(response.data);
      // const result = response.data;
      // console.log(result);
      // setTopicPhoto((prev) => {
      //   [...prev, result];
      // });
      setTopic(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  //   getSingleTopic();

  async function getSingleTopicPhotos() {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/topics/${id}/photos?per_page=10&page=${pageCount}`,
        {
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_ACCESSKEY}`,
          },
        }
      );
      console.log(response.data);
      // setTopicPhoto(response.data);
      const result = response.data;
      setTopicPhoto((prev) => {
        return [...prev, ...result];
      });
    } catch (error) {
      console.log(error);
    }
  }
  function handleLoadMoreBtn() {
    setPageCount((prev) => {
      return prev + 1;
    });
  }

  console.log(id);
  useEffect(() => {
    getSingleTopic();
    getSingleTopicPhotos();
  }, [id, pageCount]);
  return (
    <React.Fragment>
      <Topics />
      {topic.hasOwnProperty("cover_photo") ? (
        // <React.Fragment>
        <div style={{ position: "relative", color: "white" }}>
          <div>
            <img
              alt="img"
              style={{ objectFit: "cover", width: "100%", height: "500px" }}
              src={topic.cover_photo.urls.raw}
            ></img>
          </div>
          <div style={{ position: "absolute", bottom: "40%", left: "70px" }}>
            <h1>{topic.title}</h1>
            <p style={{ width: "60%", margin: "30px 0px" }}>
              {topic.description}
            </p>
            <button
              style={{ padding: "10px", borderRadius: "8px", border: "none" }}
            >
              Submit to {topic.title}
            </button>
          </div>
        </div>
      ) : null}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          padding: " 37px 20px",
          gap: "20px 20px",
        }}
      >
        {topicPhoto.length
          ? topicPhoto.map((e) => (
              <div style={item} key={e.id}>
                <img
                  alt="img"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  src={e.urls.regular}
                ></img>
              </div>
            ))
          : null}
      </div>
      {topicPhoto.length ? (
        <div>
          <button
            onClick={handleLoadMoreBtn}
            style={{
              width: "100%",
              height: "60px",
              marginBottom: "50px",
              // margin: "10px 30px",
            }}
          >
            Load more
          </button>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default SingleTopic;
