import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Collections = () => {
  const [collections, setCollections] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  const item = {
    padding: "20px",
  };
  async function getAllCollections() {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/collections?page=${pageCount}`,
        {
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_ACCESAPI}`,
          },
        }
      );
      const result = response.data;
      setCollections((prev) => {
        return [...prev, ...result];
      });
      // setCollections(response.data);
      // console.log(collections);
    } catch (error) {
      console.log(error);
    }
  }
  function handleLoadMoreBtn() {
    setPageCount((e) => {
      return e + 1;
    });
  }
  // console.log(collections);
  useEffect(() => {
    getAllCollections(pageCount);
  }, [pageCount]);

  return (
    <React.Fragment>
      <div>
        <div style={{ marginLeft: "42px", marginTop: "60px" }}>
          <h1>Collections</h1>
          <p>
            Explore the world through collections of beautiful photos free to
            use under the
          </p>
          <a>Unsplash License.</a>
        </div>
        {/* images */}
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto",
              padding: " 37px 20px",
              gap: "20px 20px",
            }}
          >
            {collections.length
              ? collections.map((e) => (
                  <div key={e.id} style={item} className="allCollections">
                    <Link
                      style={{
                        textDecoration: "none",
                        outline: "none",
                        color: "black",
                        border: "none",
                      }}
                      to={`/collections/${e.id}/${e.title}`}
                    >
                      {" "}
                      <div>
                        <img
                          className="allCollectionsImg"
                          alt="img"
                          style={{
                            width: "100%",
                            // height: "100%",
                            height: "250px",
                            objectFit: "cover",
                          }}
                          src={e.cover_photo.urls.small}
                        ></img>

                        <h3>{e.title}</h3>
                        <p
                          style={{ color: "#767676" }}
                        >{`${e.total_photos} photos . Curated by ${e.user.name}`}</p>
                      </div>
                    </Link>
                    <div style={{ color: "#767676" }}>
                      <button
                        style={{ marginRight: "5px", borderRadius: "8px" }}
                      >
                        {e.tags[0].title}
                      </button>
                      <button
                        style={{ marginRight: "5px", borderRadius: "8px" }}
                      >
                        {e.tags[1].title}
                      </button>
                      <button style={{ borderRadius: "8px" }}>
                        {e.tags[2].title}
                      </button>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
        <div>
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default Collections;
