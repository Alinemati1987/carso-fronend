import axios from "axios";
import { apiUrl } from "../../config/constants";

export const fetchAllCarBrands = (data) => ({
  type: "CARBRANDS/fetchdata",
  payload: data,
});

export const fetchcarBrands = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}`);
    // console.log("All carBrands res is:", response.data);
    dispatch(fetchAllCarBrands(response.data));
  };
};

export const fetchSpecificModels = (data) => ({
  type: "CARMODEL/fetchSpecificModel",
  payload: data,
});

export const fetchModelByName = (name) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/brands/${name}`);
    // console.log("fetchModelByName res is:", response);
    dispatch(fetchSpecificModels(response.data));
  };
};

export const fetchSpecificCar = (data) => ({
  type: "CARMODEL/fetchSpecificCarbyID",
  payload: data,
});

export const fetchCarById = (name, id) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/brands/${name}/${id}`);
    // console.log("fetchModelById res is:", response.data.specificCarById);
    dispatch(fetchSpecificCar(response.data.specificCarById));
  };
};
