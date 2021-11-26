import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import BrandCarModels from "../../components/Carmodels";
import { fetchModelByName } from "../../store/carBrands/actions";
import { selectModelDetails } from "../../store/carBrands/selectors";

export default function CarModelpage() {
  const { name } = useParams();
  console.log("name is:", name);

  const carmodel = useSelector(selectModelDetails);
  const dispatch = useDispatch();

  console.log("carmodel is:", carmodel);

  useEffect(() => {
    dispatch(fetchModelByName(name));
  }, [dispatch, name]);

  return <div></div>;
}
