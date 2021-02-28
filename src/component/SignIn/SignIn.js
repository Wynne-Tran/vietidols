import React, { useState } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { signin } from "../../services/auth.service";
import Loader from "../Loader/Loader";

const SignIn = () => {
  const history = useHistory();
  const [state, setState] = useState({
    name: "",
    password: "",
  });
  const [loader, setLoader] = useState(false);

  const [mess, setMess] = useState("");

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    signin(state.name, state.password).then(
      () => {
        setLoader(false);
        history.push("/");
        window.location.reload();
      },
      (error) => {
        setLoader(false);
        const resMess = error.response.data.errors;
        setMess(resMess);
      }
    );
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <div className="form-group">
            <label>Name:</label>
            <br />
            <input
              type="email"
              name="name"
              value={state.name}
              onChange={handleChange}
              required
            />
          </div>

          <br />
          <div className="form-group">
            <label>Password:</label>
            <br />
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              required
            />
          </div>
          {mess && <div className="alert alert-danger">{mess}</div>}

          <br />
          <div className="alert alert-info">
            <Link to="/signup">
              Don't have an account? <br /> Click here to Sign Up
            </Link>
          </div>
          <button
            className="btn btn-primary btn-block"
            type="submit"
            disabled={loader}
          >
            {loader ? <Loader /> : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
