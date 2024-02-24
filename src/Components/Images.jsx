import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { searchData } from "../App.js";
import { useNavigate } from "react-router-dom";
const Images = ({}) => {
  const [data, setData] = useState([]);
  const [photoCount, setPhotoCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [initialRender, setInitialRender] = useState(true);
  const [headerSearchValue, setheaderSearchValue] = useContext(searchData);
  const navigate = useNavigate();

  const item = {
    padding: "20px",
    fontSize: "20px",
    height: "400px",
    marginTop: "0px",
    paddingTop: "0px",
  };

  // console.log(headerSearchValue);
  async function getSearchPhotos(pageCount) {
    // console.log(pageCount);
    navigate("/");

    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${headerSearchValue}&page=${pageCount}&per_page=10`,
        {
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_ACCESAPI}`,
          },
        }
      );
      // console.log(response.data.results);
      setPhotoCount(response.data.total);
      // setData(response.data.results);

      const result = response.data.results;
      setData((p) => [...p, ...result]);
    } catch (error) {
      console.log(error);
    }
  }

  function handleLoadMoreBtn() {
    setPageCount((prev) => {
      return prev + 1;
    });
  }
  // console.log(data.length);
  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return;
    }
    setData([]);
    getSearchPhotos();
    // console.log("mango apple");
  }, [headerSearchValue]);
  // console.log("hello");
  useEffect(() => {
    getSearchPhotos(pageCount);
  }, [pageCount]);

  return (
    <React.Fragment>
      {/* {console.log("inside")} */}
      <p
        style={{
          color: "#767676",
          marginBottom: "0px",
          marginLeft: "40px",
          fontFamily: "cursive",
          color: "red",
        }}
      >
        Photos: {photoCount}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          padding: " 20px 20px",

          gap: "20px 20px",
          marginTop: "0px",
        }}
      >
        {data.length
          ? data.map((e) => (
              <React.Fragment key={e.id}>
                <div style={item} key={e.id}>
                  <img
                    key={e.id}
                    alt="img"
                    style={{
                      width: "100%",
                      // height: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={e.urls.regular}
                  ></img>
                </div>
              </React.Fragment>
            ))
          : null}
      </div>
      {data.length ? (
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

export default Images;
