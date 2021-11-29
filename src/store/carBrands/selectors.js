export const selectCarBrands = (reduxState) =>
  reduxState.carBrands.allCarBrands;

export const selectModelDetails = (reduxState) =>
  reduxState.carBrands.modelDetails;

export const selectCarById = (reduxState) => reduxState.carBrands.carDetailById;
