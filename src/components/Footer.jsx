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
              <p>© 2021 coinchain.com</p>
            </div>
            <div class="seven wide column ui inverted">
              <a class="field" style={{ color: "white" }}>
                Contact: furqanashraf+admin@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
