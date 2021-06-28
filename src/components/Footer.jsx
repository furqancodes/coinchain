import React from "react";

const Footer = () => {
  return (
    <div
      class="ui fixed"
      style={{ width: "100%", position: "fixed", bottom: "0" }}
    >
      <div class="ui inverted vertical footer segment">
        <div class="ui container">
          <div class="ui stackable inverted divided equal height stackable grid">
            <div class="three wide column">
              <h4 class="ui inverted header">About</h4>
              <div class="ui inverted link list">
                <a href="#" class="item">
                  Sitemap
                </a>
                <a href="#" class="item">
                  Contact Us
                </a>
                <a href="#" class="item">
                  Religious Ceremonies
                </a>
                <a href="#" class="item">
                  Gazebo Plans
                </a>
              </div>
            </div>
            <div class="three wide column">
              <h4 class="ui inverted header">Services</h4>
              <div class="ui inverted link list">
                <a href="#" class="item">
                  Banana Pre-Order
                </a>
                <a href="#" class="item">
                  DNA FAQ
                </a>
                <a href="#" class="item">
                  How To Access
                </a>
                <a href="#" class="item">
                  Favorite X-Men
                </a>
              </div>
            </div>
            <div class="seven wide column">
              <h4 class="ui inverted header">Footer Header</h4>
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
