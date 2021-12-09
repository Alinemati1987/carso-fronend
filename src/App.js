import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import CarModelpage from "./pages/CarModelpage";
import Homepage from "./pages/Homepage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { getUserWithStoredToken } from "./store/user/actions";
import { selectAppLoading } from "./store/appState/selectors";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import DetailsCar from "./pages/DetailedCar";
import ModelKitpage from "./pages/ModelKitpage";
import Checkoutpage from "./pages/Checkout";
import Cloudinary from "./components/Cloudinary";
import MyProfile from "./pages/MyProfile";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div style={{ fontFamily: "Arial" }}>
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/brands/:name" component={CarModelpage} />
        <Route exact path="/brands/:name/:id" component={DetailsCar} />
        <Route
          exact
          path="/kits/:modelName/:carModelId"
          component={ModelKitpage}
        />
        <Route
          exact
          path="/checkout/:carModelId/:kitId/:sellerId"
          component={Checkoutpage}
        />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/myprofile" component={MyProfile} />
        <Route path="/loading" component={Loading} />
        <Route path="/cloudinary" component={Cloudinary} />
      </Switch>
    </div>
  );
}

export default App;
