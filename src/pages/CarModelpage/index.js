import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchModelByName } from "../../store/carBrands/actions";
import { selectModelDetails } from "../../store/carBrands/selectors";
import Models from "../../components/Carmodels";
export default function CarModelpage() {
  const { name } = useParams();
  console.log("name is:", name);

  const carmodel = useSelector(selectModelDetails);
  const dispatch = useDispatch();

  console.log("carmodel is:", carmodel);

  useEffect(() => {
    dispatch(fetchModelByName(name));
  }, [dispatch, name]);

  return (
    <div>
      {carmodel.map((model) => (
        <Models
          key={model.id}
          id={model.id}
          brandLogo={model.brandLogoUrl}
          name={model.brandName}
          buy={model.buyUrl}
          models={model.carModels}
        />
      ))}
    </div>
  );
}
