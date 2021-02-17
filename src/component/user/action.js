import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from "./types";

import axios from "axios";

export const fetchUserRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUserSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUserError = (errMsg) => ({
  type: FETCH_USERS_ERROR,
  payload: errMsg,
});

const getRequest = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest);
    axios
      .get(
        "https://api.airtable.com/v0/appub3y7rG18vRxIm/users?maxRecords=3&view=Grid%20view",
        {
          headers: {
            Authorization: "Bearer keyvWZ3up4HNQODin",
          },
        }
      )
      .then((response) => {
        const users = response.data.records[0].fields;
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        const errMsg = error.message;
        console.log(errMsg);
        dispatch(fetchUserError(errMsg));
      });
  };
};
export default getRequest;
