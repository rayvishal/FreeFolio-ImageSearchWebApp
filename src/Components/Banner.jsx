import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const Banner = () => {
  const [randomImage, setRandomImage] = useState({});
  const [collections, setCollections] = useState([]);
  async function getCollections() {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/collections?per_page=5",
        {
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_ACCESSKEY}`,
          },
        }
      );
      // console.log(response.data[0].user.name);
      setCollections(response.data);

      // console.log("helo");
    } catch (error) {
      console.log(error);
    }
  }
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
      // console.log("helo");
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(randomImage);
  useEffect(() => {
    getCollections();
    getRandomImage();
  }, []);
  //   console.log(randomImage);
  return (
    <div style={{ display: "flex", margin: "15px" }}>
      {/* First div container */}
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          display: "inline-flex",
          // height: "290px",
          alignItems: "flex-end",
          flex: 2,
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
                style={{ width: "520px", height: "50px" }}
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
          flex: 1,
          border: "groove 2px",
          display: "inline-flex",
          flexDirection: "row",
          marginBottom: "0px",
          paddingBottom: "0px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "10px",
            // fontWeight: "bold",
          }}
        >
          <p style={{ fontWeight: "bold", marginBottom: "7px" }}>collections</p>
          {collections.length
            ? collections.map((e) => (
                <div
                  key={e.id}
                  onClick={() => {
                    console.log("Hello");
                  }}
                  style={{
                    display: "inline-flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    border: " groove 1.99px ",
                    borderRadius: "14px",
                    marginTop: "0px",
                    marginBottom: "7px",
                  }}
                >
                  <div>
                    <img
                      style={{
                        height: "37px",
                        width: "37px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                      src={e.preview_photos[3].urls.thumb}
                      alt="img"
                    ></img>
                  </div>
                  {/* <div> */}
                  <div style={{ marginLeft: "30px", fontSize: "12px" }}>
                    <p style={{ marginBottom: "0px", fontWeight: "bold" }}>
                      {e.title}
                    </p>
                    <p
                      style={{ marginBottom: "0px", color: "#767676" }}
                    >{`By ${e.user.name}`}</p>
                  </div>
                  {/* </div> */}
                </div>
              ))
            : null}
        </div>
        <div style={{ margin: "10px", color: "#767676", marginLeft: "40px" }}>
          <p>See all</p>
        </div>
      </div>
      {/* Third div container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          border: "groove 3px",
          justifyContent: "center",
          alignItems: "center",
          // alignItems: "flex-end",
          // margin: "0px",
        }}
      >
        {randomImage.hasOwnProperty("urls") ? (
          <React.Fragment>
            {/* <h6>Get Random Image</h6> */}
            <img
              style={{
                height: "215px",
                width: "280px",

                objectFit: "cover",
                borderRadius: "8px",
                margin: "0px 20px",
              }}
              src={randomImage.urls.thumb}
              alt="img"
            ></img>
            <button
              style={{ marginTop: "10px", padding: "5px", borderRadius: "6px" }}
              onClick={() => {
                getRandomImage();
              }}
            >
              Get Random Image
            </button>
          </React.Fragment>
        ) : (
          console.log("2")
        )}
      </div>
    </div>
  );
};

export default Banner;
