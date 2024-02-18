import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const SingleCollection = () => {
  const [collectionPhotos, setCollectionPhotos] = useState([]);
  const [collection, setCollection] = useState({});
  const [pageCount, setPageCount] = useState(1);
  const [relatedCollections, setRelatedCollections] = useState([]);

  const { title, id } = useParams();
  const item = {
    padding: "20px",
    fontSize: "20px",
    marginTop: "0px",
  };
  console.log(title, id);

  async function getSingleCollectionPhotos() {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/collections/${id}/photos?page=${pageCount}`,
        {
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_ACCESSKEY}`,
          },
        }
      );
      const result = response.data;
      setCollectionPhotos((prev) => {
        return [...prev, ...result];
      });
      // setCollections(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getSingleCollection() {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/collections/${id}`,
        {
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_ACCESSKEY}`,
          },
        }
      );
      setCollection(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getRelatedCollections() {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/collections/${id}/related`,
        {
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_ACCESSKEY}`,
          },
        }
      );
      setRelatedCollections(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleLoadMoreBtn() {
    setPageCount((e) => {
      return e + 1;
    });
  }
  useEffect(
    (e) => {
      getSingleCollectionPhotos();
      getSingleCollection();
      getRelatedCollections();
      window.scrollTo(0, 0);
    },
    [pageCount, id]
  );
  // console.log(collectionPhotos, collection);
  return (
    <React.Fragment>
      <div>
        {collection.hasOwnProperty("title") ? (
          <div
            style={{
              fontFamily: "cursive",
              marginLeft: "50px",
              marginTop: "50px",
            }}
          >
            <h1>{collection.title}</h1>
            <p>{collection.description}</p>
          </div>
        ) : (
          <h1>No Collection</h1>
        )}

        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto",
              padding: " 37px 20px",
              gap: "20px 20px",
            }}
          >
            {collectionPhotos.length
              ? collectionPhotos.map((e) => (
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
        </div>
        {collectionPhotos.length ? (
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
        ) : (
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontFamily: "cursive" }}>Opps!</h1>
            <h3>Sorry We don't have photos in this collection</h3>
          </div>
        )}
        <div>
          <h3 style={{ marginLeft: "30px", marginBottom: "0px" }}>
            You might also like
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto",
              padding: " 37px 20px",
              gap: "20px 20px",
            }}
          >
            {relatedCollections.length
              ? relatedCollections.map((e) => (
                  <div style={item} className="relatedCollections">
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
                    <div>
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
          {/* </div> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleCollection;
