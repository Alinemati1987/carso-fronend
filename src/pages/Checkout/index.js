import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import CheckoutComponent from "../../components/Checkout";
import { fetchcarBrands } from "../../store/carBrands/actions";
import { selectCarBrands } from "../../store/carBrands/selectors";
import { fetchkitByCarModel } from "../../store/kits/actions";
import { selectCarModelKits } from "../../store/kits/selectors";
import { selectUser } from "../../store/user/selectors";

export default function Checkoutpage() {
  const { carModelId, kitId, sellerId } = useParams();

  const dispatch = useDispatch();

  const allFetchedData = useSelector(selectCarModelKits);
  //   console.log("allFetchedData in checkout page is:", allFetchedData);

  const specificKit = allFetchedData.find((kit) =>
    parseInt(kitId) === kit.kitId ? true : false
  );
  console.log("specificKit in  ckeckout page is:", specificKit);

  const CarBrands = useSelector(selectCarBrands);
  // console.log("CarBrands in  ckeckout page is:", CarBrands);

  const theCar = CarBrands.map((car, i) =>
    car.carModels.find((c) => (parseInt(carModelId) === c.id ? true : false))
  );
  // console.log("theCar in  ckeckout page is:", theCar);

  const specificCar = theCar.filter((car) =>
    car === undefined ? false : true
  );
  // console.log("specificCar in checkout page is:", specificCar);

  const user = useSelector(selectUser);
  console.log("user is:", user);

  useEffect(() => {
    dispatch(fetchkitByCarModel(kitId, carModelId));
    dispatch(fetchcarBrands());
  }, [dispatch]);

  return (
    <div>
      {specificCar &&
        specificCar.map((k) => (
          <CheckoutComponent
            key={user.id}
            modelName={k.modelName}
            soundUrl={k.soundUrl}
            imageUrl={k.imageUrl}
            name={user.name}
            phone={user.phone}
            address={user.address}
            email={user.email}
            kitName={specificKit.kit.kitName}
            companyName={specificKit.kit.seller.companyName}
            kitimageUrl={specificKit.kit.imageUrl}
            kitPrice={specificKit.kit.kitPrice}
          />
        ))}
    </div>
  );
}
