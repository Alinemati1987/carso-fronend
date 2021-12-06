import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchcarBrands } from "../../store/carBrands/actions";
import { selectCarBrands } from "../../store/carBrands/selectors";
import "./hp.scss";
import { selectAppLoading } from "../../store/appState/selectors";
import Loading from "../../components/Loading";
import Brands from "../../components/Homepage";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Homepage() {
  const dispatch = useDispatch();
  const CarBrands = useSelector(selectCarBrands);
  console.log("CarBrands are:", CarBrands);

  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(fetchcarBrands());

    Aos.init({ duration: 3000 });
  }, [dispatch]);

  return (
    <div>
      <p className="parag" data-aos="fade-up">
        Choose <br />
        your brand
      </p>

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
