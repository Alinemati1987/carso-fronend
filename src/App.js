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
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/loading" component={Loading} />
      </Switch>
    </div>
  );
}

export default App;
