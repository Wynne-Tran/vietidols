import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { verifyUser } from "../../services/auth.service";
import { Card, Container } from "react-bootstrap";

import Navbar from "../Navbar/Navbar";
import Loader from "../Loader/Loader";

const UserVerification = () => {
  const { userId, secretCode } = useParams();
  const [successful, setSuccessful] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    verifyUser(userId, secretCode).then((res) => {
      console.log(res);
      setLoader(false);
      if (res.status === 200) {
        setSuccessful(true);
      } else {
        setSuccessful(false);
      }
    });
  }, [userId, secretCode]);

  return (
    <>
      <Navbar />
      <Container className="d-flex justify-content-center">
        <Card className="col-sm-10 mt-5 px-0">
          {loader ? (
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Loader />
              <h2>Loading</h2>
            </Card.Body>
          ) : (
            <>
              <Card.Header>User Verification</Card.Header>

              <Card.Body>
                <Card.Title>
                  {successful
                    ? "User verified successfully"
                    : "User verified failed"}
                </Card.Title>
                <Card.Text>
                  {successful
                    ? "User has been verified, is now able to use our services"
                    : "User has not been verified. It can be that the secret code has expired, please try again!"}
                </Card.Text>
                {successful ? (
                  <Card.Link href="#">Return to main menu</Card.Link>
                ) : (
                  <>
                    <Card.Link href="#">Sign up</Card.Link>
                    <Card.Link href="#">Send another link</Card.Link>
                  </>
                )}
              </Card.Body>
            </>
          )}
        </Card>
      </Container>
    </>
  );
};

export default UserVerification;
