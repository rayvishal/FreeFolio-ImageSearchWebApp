import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const Banner = () => {
  const [randomImage, setRandomImage] = useState({});
  async function getRandomImage() {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/photos/random",
        {
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_ACCESSKEY}`,
          },
        }
      );
      //   console.log(response.data.urls.thumb);
      setRandomImage(response.data);
      console.log("helo");
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getRandomImage();
  }, []);
  //   console.log(randomImage);
  return (
    <div style={{ display: "flex" }}>
      {/* First div container */}
      <div
        style={{
          backgroundColor: "pink",
          width: "50%",
          display: "inline-flex",
          height: "290px",
          alignItems: "flex-end",
        }}
      >
        <div>
          <h1>FreeFolio</h1>
          <p>The internet's source for visuals.</p>
          <p>Powered by creators everywhere.</p>
          {/* <input placeholder="Search high resolution images"></input> */}
          <nav className="navbar ">
            {/* navbar-light bg-light */}

            <form className="form-inline">
              <input
                style={{ width: "590px", height: "50px" }}
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </nav>
        </div>
      </div>
      {/* Second div container */}
      <div
        style={{
          display: "inline-flex",
          // alignItems: "flex-end",
          // margin: "0px",
        }}
      >
        {randomImage.hasOwnProperty("urls") ? (
          <img
            style={{
              height: "290px",
              width: "300px",
              // marginBottom: "0px",
              // padding: "0px",
              // objectFit: "cover",
            }}
            src={randomImage.urls.thumb}
            // src="data:image/jpeg;base64,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"
            alt="img"
          ></img>
        ) : null}
      </div>
      {/* Third div container */}
      <div></div>
    </div>
  );
};

export default Banner;
