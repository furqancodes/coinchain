/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import "../../css/Login.css";

const Profile = ({ data, userProfile, wallet }) => {
  // console.log(data);
  // console.log(wallet);
  useEffect(() => {
    userProfile();
  }, []);
  return (
    <div class="h ui container top-10">
      <div class="h ui middle aligned center aligned grid">
        <div class="ui card h">
          <div class="content">
            <header class="header">{data.name}</header>
            <div class="meta">
              <span class="date">Age {data.age}</span>
            </div>
            <div class="description">
              {data.name} is an art director living in New York.
            </div>
          </div>
          <div class="extra content">Balance {wallet.balance}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
