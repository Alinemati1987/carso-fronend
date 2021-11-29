const initialState = {
  allCarBrands: [],
  modelDetails: [],
  carDetailById: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "CARBRANDS/fetchdata":
      // console.log("Action is:", action);
      return {
        ...state,
        allCarBrands: [...action.payload.allCarBrands],
      };

    case "CARMODEL/fetchSpecificModel":
      // console.log("Action is:", action);

      return {
        ...state,
        modelDetails: action.payload.specificBrandList,
      };

    case "CARMODEL/fetchSpecificCarbyID":
      // console.log("Action is:", action);

      return {
        ...state,
        carDetailById: action.payload,
      };

    default:
      return state;
  }
}
