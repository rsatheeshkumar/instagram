import React from "react";

import "./index.scss";
const UserDetail = ({ user }) => {
  return (
    <div>
      <div className=" d-flex flex-row card m-5">
        <img src={user.picture} className="card profile-img" alt={user.name} />
        <div className="card-body">
          <button className="card-title">Likes</button>
          <button className="card-title">Following</button>
          <button className="card-title">Followers</button>
          <h1 className="card-title">{user.username}</h1>
          <p className="card-text">{user.description}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
