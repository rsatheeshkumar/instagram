import React, { useEffect } from "react";
import fetchRequest from "./action";

import UserDetail from "../user-details";

import "./index.scss";
import { connect } from "react-redux";

const User = ({ users, OnFetchRequest }) => {
  useEffect(() => {
    OnFetchRequest();
  }, []);
  return (
    <div>
      <UserDetail key={users.id} user={users} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    users: state.users.users,
  };
};
const mapDispatchToProps = (dispatch) => ({
  OnFetchRequest: () => dispatch(fetchRequest()),
});
export default connect(mapStateToProps, mapDispatchToProps)(User);
