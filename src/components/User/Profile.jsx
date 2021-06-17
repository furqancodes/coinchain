/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../css/Login.css";

const Profile = ({ data }) => {
  console.log(data);
  return (
    <div class="ui container top-10">
      <div class="ui middle aligned center aligned grid">
        <div class="ui card ">
          <div class="content">
            <header class="header">{data.user.name}</header>
            <div class="meta">
              <span class="date">Age {data.user.age}</span>
            </div>
            <div class="description">
              {data.user.name} is an art director living in New York.
            </div>
          </div>
          <div class="extra content">
            <a>
              <i class="user icon"></i>
              22 Friends
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
