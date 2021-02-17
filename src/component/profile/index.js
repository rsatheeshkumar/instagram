import React from "react";

import User from "../user";
import Posts from "../posts";

const Profile = () => {
  return (
    <div className="App">
      <User />
      <hr />
      <Posts />
    </div>
  );
};

export default Profile;
