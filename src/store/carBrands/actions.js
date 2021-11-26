import axios from "axios";
import { apiUrl } from "../../config/constants";

export const fetchAllCarBrands = (data) => ({
  type: "CARBRANDS/fetchdata",
  payload: data,
});

export const fetchcarBrands = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/carso`);
    console.log("All carBrands res is:", response.data);
    dispatch(fetchAllCarBrands(response.data));
  };
};

export const fetchSpecificModels = (data) => ({
  type: "CARMODEL/fetchSpecificModel",
  payload: data,
});

export const fetchModelByName = (name) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/carso/${name}`);
    console.log("fetchModelByName res is:", response);
    dispatch(fetchSpecificModels(response.data));
  };
};
