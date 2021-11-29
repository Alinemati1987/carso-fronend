import { combineReducers } from "redux";

import carBrands from "./carBrands/reducer";
import user from "./user/reducer";
import appState from "./appState/reducer";
import kits from "./kits/reducer";

const reducer = combineReducers({
  carBrands,
  user,
  appState,
  kits,
});

export default reducer;
