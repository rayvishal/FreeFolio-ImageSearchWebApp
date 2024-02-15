import React from "react";

const Advertise = () => {
  const company = { height: "100px", width: "100px" };

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          padding: "0px 70px",
          paddingTop: "90px",
        }}
      >
        <div>
          <h1 style={{ marginBottom: "30px" }}>Advertise on FreeFolio</h1>
          <p style={{ marginBottom: "30px" }}>
            The world's most popular creative platform.
          </p>
          <button
            style={{
              padding: "12px",
              borderRadius: "8px",
              color: "white",
              backgroundColor: "black",
            }}
          >
            Get in touch with us
          </button>
        </div>
        <div>
          <img
            alt="img"
            style={{ borderRadius: "10px" }}
            src="data:image/jpeg;base64,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"
          ></img>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "50px",
        }}
      >
        <div style={{ marginBottom: "65px", fontFamily: "sans-serif" }}>
          <p>
            Join the world's biggest brands that we're proud to call partners
          </p>
        </div>
        <div style={{ marginBottom: "50px" }}>
          <div
            style={{
              display: "flex",
              //   justifyContent: "space-around",
              gap: "80px",
            }}
          >
            <img
              style={company}
              alt="img"
              src="https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-grammarly.svg?auto=format&fit=crop&q=60"
            ></img>
            <img
              alt="img"
              style={company}
              src="https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-printful.svg?auto=format&fit=crop&q=60"
            ></img>
            <img
              alt="img"
              style={company}
              src="https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-buzzfeed.svg?auto=format&fit=crop&q=60"
            ></img>
            <img
              alt="img"
              style={company}
              src="https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-fiverr.svg?auto=format&fit=crop&q=60"
            ></img>
            <img
              alt="img"
              style={company}
              src="https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-skillshare.svg?auto=format&fit=crop&q=60"
            ></img>
          </div>
          <div style={{ display: "flex", gap: "80px", marginTop: "60px" }}>
            <img
              alt="img"
              style={company}
              src="https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-meetup.svg?auto=format&fit=crop&q=60"
            ></img>
            <img
              alt="img"
              style={company}
              src="https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-canva.svg?auto=format&fit=crop&q=60"
            ></img>
            <img
              alt="img"
              style={company}
              src="https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-hotjar.svg?auto=format&fit=crop&q=60"
            ></img>
            <img
              alt="img"
              style={company}
              src="https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-loom.svg?auto=format&fit=crop&q=60"
            ></img>
            <img
              alt="img"
              style={company}
              src="https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-msft.svg?auto=format&fit=crop&q=60"
            ></img>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Advertise;
