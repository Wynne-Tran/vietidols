import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

import {
  resetPassword,
  sendResetPasswordLinkToUser,
} from "../../services/auth.service";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";

const ResetPassword = () => {
  const location = useLocation();
  const params = queryString.parse(location.search);
  const { token, username } = params;

  const [successfulSubmit, setSuccessfulSubmit] = useState(false);
  const [loaderSubmit, setLoaderSubmit] = useState(false);
  const [messageSubmit, setMessageSubmit] = useState("");

  const [loaderRequest, setLoaderRequest] = useState(false);
  const [messageRequest, setMessageRequest] = useState("");

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Must not be empty"),
    }),
    onSubmit: (values) => {
      setLoaderSubmit(true);

      resetPassword(token, username, values.password)
        .then((res) => {
          console.log(res.data);
          setLoaderSubmit(false);
          setSuccessfulSubmit(true);
          setMessageSubmit("Password has been changed!");
        })
        .catch((err) => {
          console.log(err.response.data);
          setLoaderSubmit(false);
          setSuccessfulSubmit(false);
          setMessageSubmit("Unable to change password, please try again!");
        });
    },
  });

  const sendAnotherHandler = () => {
    setLoaderRequest(true);
    sendResetPasswordLinkToUser(username)
      .then((res) => {
        setLoaderRequest(false);
        setMessageRequest(`Sent to ${username}`);
      })
      .catch((err) => {
        console.log(err.response.data);
        setLoaderRequest(false);
        setMessageRequest(`Failed to send`);
      });
  };

  const afterAction = messageSubmit ? (
    <>
      <div className="mt-2">{messageSubmit}</div>
      <hr />
      {successfulSubmit ? (
        <div>
          Please login again <a href="/">click here</a>
        </div>
      ) : (
        <>
          <Button
            variant="danger"
            onClick={sendAnotherHandler}
            disabled={loaderRequest}
          >
            {loaderRequest ? <Loader /> : "Request another link"}
          </Button>
          <br />
          {messageRequest}
        </>
      )}
    </>
  ) : null;

  return (
    <>
      <Navbar />
      <Container className="mt-5 col-lg-4">
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter new password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <Form.Text className="text-muted">
              {formik.errors.password}
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formGridLastName">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password again"
              name="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
            <Form.Text className="text-muted">
              {formik.errors.confirmPassword}
            </Form.Text>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="mt-4"
            disabled={loaderSubmit}
          >
            {loaderSubmit ? <Loader /> : "Submit"}
          </Button>
        </Form>

        {afterAction}
      </Container>
      <Footer fixed />
    </>
  );
};

export default ResetPassword;
