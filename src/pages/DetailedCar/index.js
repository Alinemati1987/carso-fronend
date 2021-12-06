import React, { useEffect } from "react";
import { Container, Jumbotron } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Cardetail from "../../components/Cardetail";
import { fetchCarById } from "../../store/carBrands/actions";
import { selectCarById } from "../../store/carBrands/selectors";
import "./cardetail.css";

export default function DetailsCar() {
  const { name, id } = useParams();

  // console.log("name of details is:", name);
  // console.log("id of details is:", id);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCarById(name, id));
  }, [dispatch, name, id]);

  const carbyid = useSelector(selectCarById);
  console.log("carById is:", carbyid);

  const car = carbyid.carModels;
  console.log("car is:", car);

  return (
    <div>
      <Jumbotron id="carDetailJumbotron">
        <h4 id="carDetailH4">{carbyid.brandName}</h4>
      </Jumbotron>

      <Container>
        {car &&
          car.map((model, i) => (
            <div key={i} id="carDetailDiv">
              <Cardetail
                acceleration={model.acceleration}
                capacity={model.capacity}
                fuel={model.fuel}
                imageUrl={model.imageUrl}
                modelName={model.modelName}
                soundUrl={model.soundUrl}
                speed={model.speed}
                id={model.id}
                key={model.id}
                carPrice={model.carPrice}
                buyUrl={carbyid.buyUrl}
                brandId={carbyid.id}
              />
            </div>
          ))}
      </Container>
    </div>
  );
}
