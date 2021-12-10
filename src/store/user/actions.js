import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken, selectUser } from "./selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
export const LOG_OUT = "LOG_OUT";

const loginSuccess = (userWithToken) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userWithToken,
  };
};

const tokenStillValid = (userWithoutToken) => ({
  type: TOKEN_STILL_VALID,
  payload: userWithoutToken,
});

export const logOut = () => ({ type: LOG_OUT });

export const signUp = (name, email, password, isSeller) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      // console.log("GOT HERE");
      // console.log("data for sign up are:", name, email, password, isSeller);
      const response = await axios.post(`${apiUrl}/signup`, {
        name,
        email,
        password,
        isSeller,
      });
      console.log("response from signup", response.data);
      dispatch(loginSuccess(response.data));
      dispatch(
        showMessageWithTimeout("success", true, "account created", 2000)
      );
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/login`, {
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(
          showMessageWithTimeout(
            "danger",
            true,
            error.response.data.message,
            1000
          )
        );
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    // get token from the state
    const token = selectToken(getState());

    // if we have no token, stop
    if (token === null) return;

    dispatch(appLoading());
    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await axios.get(`${apiUrl}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // token is still valid
      dispatch(tokenStillValid(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
      dispatch(appDoneLoading());
    }
  };
};

export const updateUser = (phone, address, username, password) => {
  return async (dispatch, getState) => {
    const { id, token } = selectUser(getState());

    await axios.patch(`${apiUrl}/update/${id}`, {
      phone: phone,
      address: address,
      name: username,
      password: password,
    });
    const response = await axios.get(`${apiUrl}/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("updated user is:", response.data);
    dispatch(loginSuccess(response.data));
    dispatch(
      showMessageWithTimeout("success", false, "Your profile is updated!", 2000)
    );
  };
};

export const deleteUser = (id) => {
  return async (dispatch, getState) => {
    const { token } = selectUser(getState());
    console.log("token is", token);

    console.log("Delete action run");

    await axios.delete(`${apiUrl}/user/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch(logOut());
    dispatch(
      showMessageWithTimeout("success", false, "Your account is deleted!", 2000)
    );
  };
};
