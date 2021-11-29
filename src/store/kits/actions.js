import axios from "axios";
import { apiUrl } from "../../config/constants";

export const fetchSpecificKits = (data) => ({
  type: "KITS/fetchSpecificKits",
  payload: data,
});

export const fetchkitByCarModel = (modelName, carModelId) => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      `${apiUrl}/kits/${modelName}/${carModelId}`
    );
    console.log("fetchkitByCarModel res is:", response);
    dispatch(fetchSpecificKits(response.data));
  };
};
