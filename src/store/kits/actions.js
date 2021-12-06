import axios from "axios";
import { apiUrl } from "../../config/constants";
import { appDoneLoading, appLoading } from "../appState/actions";

export const fetchSpecificKits = (data) => ({
  type: "KITS/fetchSpecificKits",
  payload: data,
});

export const fetchkitByCarModel = (modelName, carModelId) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.get(
        `${apiUrl}/kits/${modelName}/${carModelId}`
      );
      console.log("fetchkitByCarModel res is:", response);
      dispatch(fetchSpecificKits(response.data));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e);
      dispatch(appDoneLoading());
    }
  };
};
