import React from "react";

const FreeFolioPlus = () => {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "cursive",
          marginTop: "160px",
        }}
      >
        <h1
          style={{
            wordWrap: "break-word",
            width: "500px",
            // whiteSpace: "pre-wrap",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Upgrade to <span style={{ color: "blue" }}>FreeFolio+</span> and start
          creating with exclusive, royalty-free images.
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: "40px",
          marginBottom: "70px",
        }}
      >
        <div
          style={{
            padding: "40px",
            border: "5px solid blue",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <h3>Yearly</h3>
          <p>
            <span>
              <h1>$40</h1>
            </span>
            USD per year*
          </p>
          <button
            className="plusBtn"
            style={{ borderRadius: "8px", fontWeight: "bold", padding: "3px" }}
          >
            Get FreeFolio+
          </button>
        </div>
        <div
          style={{
            padding: "40px",
            border: "5px solid blue",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <h3>Monthly</h3>
          <p>
            <span>
              <h1>$4</h1>
            </span>
            USD per month*
          </p>
          <button
            className="plusBtn"
            style={{ borderRadius: "8px", fontWeight: "bold", padding: "3px" }}
          >
            Get FreeFolio+
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FreeFolioPlus;
