import { combineReducers } from "redux";

import carBrands from "./carBrands/reducer";

const reducer = combineReducers({
  carBrands,
});

export default reducer;
