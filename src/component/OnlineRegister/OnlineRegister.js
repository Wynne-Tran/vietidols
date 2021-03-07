import React from "react";
import { Form, Col, Button, Container, FormControl } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

import Navbar from "../Navbar/Navbar";

const OnlineRegister = () => {
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      address: "",
      gender: "male",
      city: "",
      country: "",
      code: "",
      dob: "",
      phone: "",
      song1: "",
      song2: "",
      files: [],
    },
    validationSchema: Yup.object({
      fname: Yup.string().required("First name is required"),
      lname: Yup.string().required("Last name is required"),
      address: Yup.string().required("Address is required"),
      gender: Yup.string().required("Gender is required"),
      city: Yup.string().required("City is required"),
      country: Yup.string().required("Country is required"),
      code: Yup.string().required("ZIP/Postal Code is required"),
      dob: Yup.string().required("Date of birth is required"),
      phone: Yup.string().required("Phone is required"),
      song1: Yup.string().required("First song is required"),
      song2: Yup.string().required("Second song is required"),
      files: Yup.mixed().required("Files are required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <Navbar />
      <Container className="mt-5">
        <Form onSubmit={formik.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="fname"
                onChange={formik.handleChange}
                value={formik.values.fname}
              />
              <Form.Text className="text-muted">
                {formik.errors.fname}
              </Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="lname"
                onChange={formik.handleChange}
                value={formik.values.lname}
              />
              <Form.Text className="text-muted">
                {formik.errors.lname}
              </Form.Text>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridAddress" md="10">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="1234 Main St"
                name="address"
                onChange={formik.handleChange}
                value={formik.values.address}
              />
              <Form.Text className="text-muted">
                {formik.errors.address}
              </Form.Text>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                onChange={formik.handleChange}
                value={formik.values.gender}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Control>
              <Form.Text className="text-muted">
                {formik.errors.gender}
              </Form.Text>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your city"
                name="city"
                onChange={formik.handleChange}
                value={formik.values.city}
              />
              <Form.Text className="text-muted">{formik.errors.city}</Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your country"
                name="country"
                onChange={formik.handleChange}
                value={formik.values.country}
              />
              <Form.Text className="text-muted">
                {formik.errors.country}
              </Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip/Postal Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter zip/postal code"
                name="code"
                onChange={formik.handleChange}
                value={formik.values.code}
              />
              <Form.Text className="text-muted">{formik.errors.code}</Form.Text>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridDateOfBirth">
              <Form.Label>Date of birth</Form.Label>
              <Form.Control
                type="text"
                placeholder="1990/12/31"
                name="dob"
                onChange={formik.handleChange}
                value={formik.values.dob}
              ></Form.Control>
              <Form.Text className="text-muted">{formik.errors.dob}</Form.Text>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridTelephone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="1112225555"
                name="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
              ></Form.Control>
              <Form.Text className="text-muted">
                {formik.errors.phone}
              </Form.Text>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridSongSelection1">
              <Form.Label>Song 1</Form.Label>
              <Form.Control
                type="text"
                placeholder="Song name 1"
                name="song1"
                onChange={formik.handleChange}
                value={formik.values.song1}
              ></Form.Control>
              <Form.Text className="text-muted">
                {formik.errors.song1}
              </Form.Text>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridSongSelection2">
              <Form.Label>Song 2</Form.Label>
              <Form.Control
                type="text"
                placeholder="Song name 2"
                name="song2"
                onChange={formik.handleChange}
                value={formik.values.song2}
              ></Form.Control>
              <Form.Text className="text-muted">
                {formik.errors.song2}
              </Form.Text>
            </Form.Group>
          </Form.Row>

          <Form.Group>
            <Form.File
              type="file"
              name="files"
              multiple
              label="Select files to be submitted"
              onChange={(e) => {
                formik.setFieldValue("files", e.target.files);
              }}
            />
            <Form.Text className="text-muted">{formik.errors.files}</Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-4">
            Submit
          </Button>
        </Form>

        <div className="mt-4">
          <p>
            Hồ sơ đính kèm bản sao CMND/ hộ chiếu – 1 ảnh chân dung và 1 toàn
            thân
          </p>
          <p>Lệ phí: 5 CAN/ 80.000VND / 5 EUR (Ghi nội dung: Tên thí sinh).</p>
          <p>
            <strong>Nộp lệ phí vào tài khoản công ty ở Canada: </strong>
            Tên tài khoàn: <strong>HUONG DUONG UNIVERSAL MEDIA</strong>. Số Tài
            khoản: <strong>1105019</strong>. Transit: <strong>00212</strong>.
            Tên ngân hàng: <strong>CIBC</strong>. Địa chỉ ngân hàng:{" "}
            <strong>1 Eglinton Ave, E. Toronto, Ontario, Canada M4P 3A1</strong>
            . Swift code: <strong>CIBCCATT</strong>
          </p>
          <p>
            <strong>Hoặc chuyển vào tài khoản ở Việt Nam: </strong>
            Tên tài khoản: <strong>PHẠM KIỀU HOA</strong>. Số Tài khoản:
            <strong>39.888.999.68</strong>. Ngân hàng{" "}
            <strong>TMCP Sài gòn-Hà Nội. Chi nhánh Hải Phòng</strong>
          </p>
        </div>
      </Container>
    </>
  );
};

export default OnlineRegister;
