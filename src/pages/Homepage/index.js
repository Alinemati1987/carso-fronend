import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchcarBrands } from "../../store/carBrands/actions";
import { selectCarBrands } from "../../store/carBrands/selectors";
import Brands from "../../components/Homepage";
import "./index.scss";
import { Link } from "react-router-dom";

export default function Homepage() {
  const dispatch = useDispatch();
  const CarBrands = useSelector(selectCarBrands);
  console.log("CarBrands are:", CarBrands);

  const brands = CarBrands.map((car) => car.brandLogoUrl);
  const names = CarBrands.map((car) => car.brandName);
  // console.log("names is:", names);

  useEffect(() => {
    dispatch(fetchcarBrands());
  }, [dispatch]);

  return (
    <div>
      <p>
        Choose <br />
        your brand
      </p>
      <ul className="circle-container">
        {CarBrands.map((car, i) => {
          return (
            <Link key={i} to={`/carso/${car.brandName}`}>
              <li>
                <img src={car.brandLogoUrl} alt="" />
              </li>
            </Link>
          );
        })}
      </ul>

      {/* <Brands brands={brands} names={names} />
      {CarBrands.map((car) => (
        <Brands
          key={car.id}
          id={car.id}
          brandLogo={car.brandLogoUrl}
          name={car.brandName}
          buyUrl={car.buyUrl}
          models={car.carModels}
        />
      ))} */}
    </div>
  );
}

// class="d-flex justify-content-center align-items-center"
