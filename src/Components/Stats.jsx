import axios from "axios";
import React, { useEffect, useState } from "react";
// import axios from "axios";
export const Stats = () => {
  const [stats, setStats] = useState({});
  async function getStats() {
    try {
      const response = await axios.get("https://api.unsplash.com/stats/total", {
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_ACCESAPI}`,
        },
      });
      console.log(response.data);
      setStats(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getStats();
  }, []);
  return (
    <React.Fragment>
      {stats.hasOwnProperty("total_photos") ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontFamily: "cursive",
            // backgroundColor: "",
            marginBottom: "200px",
            marginTop: "100px",
          }}
        >
          <div style={{ display: "flex", gap: "50px", marginTop: "80px" }}>
            <div style={{ border: "5px solid green", padding: "10px" }}>
              <h3>Applications </h3>
              <p>{stats.total_photos}</p>
            </div>
            <div style={{ border: "5px solid green", padding: "10px" }}>
              <h3>Developers</h3>
              <p>{stats.developers}</p>
            </div>
            <div style={{ border: "5px solid green", padding: "10px" }}>
              <h3>Downloads</h3>
              <p>{stats.downloads}</p>
            </div>
            <div style={{ border: "5px solid green", padding: "10px" }}>
              <h3>Downloads per second</h3>
              <p>{stats.downloads_per_second}</p>
            </div>
            <div style={{ border: "5px solid green", padding: "10px" }}>
              <h3>Photographers</h3>
              <p>{stats.photographers}</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "50px", marginTop: "80px" }}>
            <div style={{ border: "5px solid green", padding: "10px" }}>
              <h3>Photos</h3>
              <p>{stats.photos}</p>
            </div>
            <div style={{ border: "5px solid green", padding: "10px" }}>
              <h3>Requests</h3>
              <p>{stats.requests}</p>
            </div>
            <div style={{ border: "5px solid green", padding: "10px" }}>
              <h3>Total Photos</h3>
              <p>{stats.total_photos}</p>
            </div>
            <div style={{ border: "5px solid green", padding: "10px" }}>
              <h3>Views</h3>
              <p>{stats.views}</p>
            </div>
            <div style={{ border: "5px solid green", padding: "10px" }}>
              <h3>Views per second</h3>
              <p>{stats.views_per_second}</p>
            </div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};
export default Stats;
