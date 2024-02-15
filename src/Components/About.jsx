import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <React.Fragment>
      <div style={{ fontFamily: "monospace" }}>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h3>FreeFolio is internet's source of freely usable images</h3>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            gap: "20px",
            marginTop: "50px",
            padding: "30px 50px",
          }}
        >
          <div>
            <img
              alt="img"
              style={{ height: "300px", width: "300px" }}
              src="https://unsplash-assets.imgix.net/marketing/misc/img01.jpg?auto=format&fit=crop&q=60"
            ></img>
            <p style={{ fontWeight: "bold", marginTop: "15px" }}>
              Over three million curated photos
            </p>
            <p>
              We hand-select every photo and accept only the best, so that no
              matter what you need—you’ll find exactly what you’re looking for
              on Unsplash.
            </p>
          </div>
          <div>
            <img
              alt="img"
              style={{ height: "300px", width: "300px" }}
              src="https://unsplash-assets.imgix.net/marketing/misc/img02.jpg?auto=format&fit=crop&q=60"
            ></img>
            <p style={{ fontWeight: "bold", marginTop: "15px" }}>
              A community of 293,995 photographers
            </p>
            <p>
              Unsplash is home to a growing community of photographers—from
              hobbyists, professionals, emerging brands and everyone in between.
            </p>
          </div>
          <div>
            <img
              alt="img"
              style={{ height: "300px", width: "300px" }}
              src="https://unsplash-assets.imgix.net/marketing/misc/img03.jpg?auto=format&fit=crop&q=60"
            ></img>
            <p style={{ fontWeight: "bold", marginTop: "15px" }}>
              Fuelling your favourite platforms
            </p>
            <p>
              With partners like BuzzFeed, Squarespace and Trello being powered
              by our API, the Unsplash library is more widely accessible than
              ever.
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "70px",
          }}
        >
          <Link to="/">
            <button style={{ padding: "10px", borderRadius: "8px" }}>
              Start browsing
            </button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
