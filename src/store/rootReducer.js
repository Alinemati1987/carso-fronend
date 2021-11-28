import { combineReducers } from "redux";

import carBrands from "./carBrands/reducer";
import user from "./user/reducer";
import appState from "./appState/reducer";

const reducer = combineReducers({
  carBrands,
  user,
  appState,
});

export default reducer;
