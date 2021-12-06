import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchModelByName } from "../../store/carBrands/actions";
import { selectModelDetails } from "../../store/carBrands/selectors";
import Models from "../../components/Carmodels";
import { selectAppLoading } from "../../store/appState/selectors";
import Loading from "../../components/Loading";

export default function CarModelpage() {
  const { name } = useParams();
  console.log("name is:", name);

  const carmodel = useSelector(selectModelDetails);
  const appLoading = useSelector(selectAppLoading);
  const dispatch = useDispatch();

  console.log("carmodel is:", carmodel);

  useEffect(() => {
    dispatch(fetchModelByName(name));
  }, [dispatch, name]);

  if (appLoading) return <Loading />;
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
          ribbon={model.ribbonUrl}
        />
      ))}
    </div>
  );
}
