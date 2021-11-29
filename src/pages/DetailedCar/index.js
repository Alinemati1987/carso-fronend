import React, { useEffect } from "react";
import { Button, Container, Jumbotron } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Cardetail from "../../components/Cardetail";
import { fetchCarById } from "../../store/carBrands/actions";
import { selectCarById } from "../../store/carBrands/selectors";

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
      <Jumbotron
        style={{
          height: "100px",
          padding: "20px 40px",
          background: "linear-gradient(to bottom, #0b090a, #a4161a)",
          boxShadow: "0px 7px 5px #a4161a , 3px 7px 3px #0b090a",
        }}
      >
        <h4
          style={{
            textAlign: "center",
            fontFamily: "'Comforter', cursive",
            fontWeight: "bolder",
            fontSize: "30px",
            paddingTop: "27px",
          }}
        >
          {carbyid.brandName}
        </h4>
      </Jumbotron>

      <Container>
        {car &&
          car.map((model, i) => (
            <div key={i}>
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
