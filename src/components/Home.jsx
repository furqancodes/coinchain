import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div class="pusher">
      <div
        class="ui inverted vertical masthead center aligned segment"
        style={{ marginTop: "84px", marginBottom: "84px" }}
      >
        <div
          class="ui text container"
          style={{ paddingBottom: "12%", paddingTop: "12%" }}
        >
          <h1 class="ui inverted header">Feeling Insecure ?</h1>
          <h2>Transfer your money more securely and fast.</h2>
          <h1>COINCHAIN</h1>
          <Link to="/signup">
            <div class="ui huge primary button">
              Get Started <i class="right arrow icon"></i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
