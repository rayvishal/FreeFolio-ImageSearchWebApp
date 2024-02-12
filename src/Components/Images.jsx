import React, { useEffect, useState } from "react";
import axios from "axios";

const Images = ({ headerSearchValue }) => {
  const [data, setData] = useState([]);
  const [photoCount, setPhotoCount] = useState(0);
  const item = {
    padding: "20px",
    fontSize: "20px",
  };

  console.log(headerSearchValue);
  async function getSearchPhotos() {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${headerSearchValue}&page=1&per_page=20`,
        {
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_ACCESSKEY}`,
          },
        }
      );
      console.log(response.data.results);
      setPhotoCount(response.data.total);
      setData(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getSearchPhotos();
  }, [headerSearchValue]);
  console.log("image");
  return (
    <React.Fragment>
      <p style={{ color: "#767676" }}>Photos {photoCount}</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          padding: " 37px 20px",
          gap: "20px 20px",
        }}
      >
        {data.length
          ? data.map((e) => (
              <div style={item} ket={e.id}>
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
          : console.log("no")}
      </div>
    </React.Fragment>
  );
};

export default Images;
