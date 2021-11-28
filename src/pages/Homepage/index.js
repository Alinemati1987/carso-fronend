import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchcarBrands } from "../../store/carBrands/actions";
import { selectCarBrands } from "../../store/carBrands/selectors";
import "./hp.scss";
import { Link } from "react-router-dom";
import { selectAppLoading } from "../../store/appState/selectors";
import Loading from "../../components/Loading";

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
        {CarBrands.map((car, i) => {
          return (
            <Link key={i} to={`/brands/${car.brandName}`}>
              <li>
                <img
                  style={{ animationDelay: `${150 * i}ms` }}
                  className="imageAnimation"
                  src={car.brandLogoUrl}
                  alt={car.brandName}
                />
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
