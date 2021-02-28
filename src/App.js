import { Switch, Route, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";

import "./App.css";

import Home from "./component/Home/Home";
import SignUp from "./component/SignUp/SignUp";
import SignIn from "./component/SignIn/SignIn";

function App() {
  const isLogged = () => {
    console.log("called");
    let token = localStorage.getItem("currentUser") || null;
    if (token) {
      token = JSON.parse(token);
      const exp = jwt_decode(token.token).exp;
      if (Date.now() >= exp * 1000) {
        // token expired
        localStorage.removeItem("currentUser");
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  };

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            if (isLogged()) {
              return <Home />;
            } else {
              return <Redirect to="/signin" />;
            }
          }}
        />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route render={() => <h1>404 Error</h1>} />
      </Switch>
    </div>
  );
}

export default App;
