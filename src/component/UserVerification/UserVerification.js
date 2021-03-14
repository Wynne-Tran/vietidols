import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Container, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";
import Footer from "../Footer/Footer";

import {
  sendVerificationLinkToUser,
  verifyUser,
} from "../../services/auth.service";

const UserVerification = () => {
  const { userId, secretCode } = useParams();
  const [successful, setSuccessful] = useState(false);
  const [loader, setLoader] = useState(false);
  const [sendMessage, setSendMessage] = useState("");
  const [show, setShow] = useState(false);

  const closeHandler = () => {
    setShow(false);
  };

  const sendLinkHandler = () => {
    setLoader(true);
    sendVerificationLinkToUser(userId)
      .then(() => {
        setSendMessage("Sent successfully.");
        setShow(true);
      })
      .catch(() => {
        setSendMessage("Unable to send.");
        setShow(true);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  useEffect(() => {
    setLoader(true);
    verifyUser(userId, secretCode)
      .then((res) => {
        setLoader(false);
        if (res.status === 200) {
          setSuccessful(true);
        } else {
          setSuccessful(false);
        }
      })
      .catch((err) => {
        setSuccessful(false);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [userId, secretCode]);

  return (
    <>
      <Modal
        title="User Notification"
        content={sendMessage}
        show={show}
        handleClose={closeHandler}
      />
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
                  <Button
                    onClick={() => {
                      <Redirect to="/" />;
                    }}
                  >
                    Return to main menu
                  </Button>
                ) : (
                  <>
                    <Button
                      onClick={() => {
                        <Redirect to="/signup" />;
                      }}
                      className="mr-2 mt-2"
                    >
                      Sign up
                    </Button>
                    <Button onClick={sendLinkHandler} className="mr-2 mt-2">
                      Request send
                    </Button>
                  </>
                )}
              </Card.Body>
            </>
          )}
        </Card>
      </Container>

      <Footer fixed />
    </>
  );
};

export default UserVerification;
