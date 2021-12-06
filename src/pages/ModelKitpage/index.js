import React, { useEffect } from "react";
import { Col, Jumbotron, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import CarKits from "../../components/CarKits";
import { fetchkitByCarModel } from "../../store/kits/actions";
import { selectCarModelKits } from "../../store/kits/selectors";
import "./modelkit.css";

export default function ModelKitpage() {
  const { modelName, carModelId } = useParams();

  // console.log("brandId", brandId);
  // console.log("id", id);

  const allFetchedData = useSelector(selectCarModelKits);
  // console.log("allFetchedData in page is:", allFetchedData);

  const kits = allFetchedData.map((kit, i) => kit.kit);
  console.log("Kits in page is:", kits);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchkitByCarModel(modelName, carModelId));
  }, [dispatch, modelName, carModelId]);

  return (
    <div>
      <Jumbotron id="kitJumbotron">
        <h4 id="kitH4">Sound kit</h4>
      </Jumbotron>
      <Row>
        {kits.map((kit, i) => (
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
        ))}
      </Row>
    </div>
  );
}
