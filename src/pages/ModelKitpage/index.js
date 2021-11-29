import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import CarKits from "../../components/CarKits";
import { fetchkitByCarModel } from "../../store/kits/actions";
import { selectCarModelKits } from "../../store/kits/selectors";

export default function ModelKitpage() {
  const { modelName, carModelId } = useParams();

  // console.log("brandId", brandId);
  // console.log("id", id);

  const allFetchedData = useSelector(selectCarModelKits);
  // console.log("Kits in page is:", kits);

  const kits = allFetchedData.map((kit, i) => kit.kit);
  console.log("Kits in page is:", kits);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchkitByCarModel(modelName, carModelId));
  }, [dispatch, modelName, carModelId]);

  return (
    <div>
      {kits.map((kit) => (
        <CarKits
          key={kit.id}
          id={kit.id}
          imageUrl={kit.imageUrl}
          inStock={kit.inStock}
          kitName={kit.kitName}
          kitPrice={kit.kitPrice}
          seller={kit.seller}
        />
      ))}
    </div>
  );
}
