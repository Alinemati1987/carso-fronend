import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchcarBrands } from "../../store/carBrands/actions";
import { selectCarBrands } from "../../store/carBrands/selectors";
import "./hp.scss";
import { selectAppLoading } from "../../store/appState/selectors";
import Loading from "../../components/Loading";
import Brands from "../../components/Homepage";

export default function Homepage() {
  const dispatch = useDispatch();
  const CarBrands = useSelector(selectCarBrands);
  console.log("CarBrands are:", CarBrands);

  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(fetchcarBrands());
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <p className="parag">
          Choose <br />
          your brand
        </p>
      )}
      <ul className="circle-container">
        {CarBrands.map((brand) => (
          <Brands
            key={brand.id}
            id={brand.id}
            brandLogo={brand.brandLogoUrl}
            name={brand.brandName}
            buy={brand.buyUrl}
          />
        ))}
      </ul>
    </div>
  );
}
