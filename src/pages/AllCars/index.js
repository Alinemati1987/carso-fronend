import React, { useEffect } from "react";
import "./allCars.css";
import { Col, Jumbotron, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectAppLoading } from "../../store/appState/selectors";
import Loading from "../../components/Loading";
import { selectCarBrands } from "../../store/carBrands/selectors";
import { fetchcarBrands } from "../../store/carBrands/actions";

export default function AllCars() {
  const dispatch = useDispatch();
  const appLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(fetchcarBrands());
  }, [dispatch]);

  const CarBrands = useSelector(selectCarBrands);
  console.log("CarBrands are:", CarBrands);

  if (appLoading) return <Loading />;
  return (
    <div>
      <Jumbotron id="kitJumbotron">
        <h4 id="kitH4">All car models</h4>
      </Jumbotron>
      <Row>
        {/* {kits.map((kit, i) => (
          <Col
            md="4"
            id="kitCullomn"
            style={{ animationDelay: `${150 * i}ms` }}
          >
            <CarKits
              key={kit.id}
              id={kit.id}
              imageUrl={kit.imageUrl}
              inStock={kit.inStock}
              kitName={kit.kitName}
              kitPrice={kit.kitPrice}
              seller={kit.seller}
              carModelId={carModelId}
            />
          </Col>
        ))} */}
      </Row>
    </div>
  );
}
