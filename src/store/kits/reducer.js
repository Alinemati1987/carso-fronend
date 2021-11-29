const initialState = {
  modelKits: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "KITS/fetchSpecificKits":
      console.log("Action is:", action);

      return {
        ...state,
        modelKits: action.payload.specificKitsForCarModel,
      };

    default:
      return state;
  }
}
