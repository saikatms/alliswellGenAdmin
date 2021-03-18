import React from "react";
import { NavLink } from "react-router-dom";
import { ErrorMessage } from "formik";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput,
  FormFeedback,
} from "reactstrap";
import CustomErrorMsg from "../../UI/customErrorMsg/CustomErrorMsg";
import "./ProductForm.scss";
import CustomImage from "../../UI/customImage/CustomImage";
import defaultPath from "../../../assets/images/medicine_default.png";
import { PATH_PRODUCTS } from "../../../shared/constant";

const ProductForm = (props) => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    setFieldValue,
    setFieldTouched,
    touched,
    iconDefault,
  } = props;
  let fileName = "";
  if (values.icon) {
    fileName = values.icon.name;
  }
  return (
    <React.Fragment>
      <Row className="mb-3">
        <Col lg={12}>
          All fields with &nbsp;
          <span className="required-asterisk">*</span>
          &nbsp; are mandatory
        </Col>
      </Row>
      <CustomImage
        downloadPath={values.downloadPath}
        defaultPath={defaultPath}
        isImgDefault={iconDefault}
        alt="Product icon"
      />
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col sm={6} md={4}>
            <FormGroup>
              <Label for="category">Select Product Category</Label>
              <Input
                type="select"
                name="category"
                id="category"
                value={values.value}
                onChange={handleChange}
              >
                <option value="" label="Select a Category" />
                <option value="ethical" label="Ethical" />
                <option value="generic" label="Generic" />
                <option value="general" label="General" />
                <option value="surgical" label="Surgical" />
              </Input>
            </FormGroup>
          </Col>

          <Col sm={6} md={4}>
            <FormGroup>
              <Label for="productName">
                Product Name <span className="required-asterisk">*</span>
              </Label>
              <Input
                type="text"
                name="productName"
                id="productName"
                invalid={errors.productName && touched.productName}
                placeholder="Enter Product Name"
                title="product title"
                value={values.productName}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <ErrorMessage name="productName" component={CustomErrorMsg} />
            </FormGroup>
          </Col>
          <Col sm={6} md={4}>
            <FormGroup>
              <Label for="manufacturerName">
                Manufacturer Name <span className="required-asterisk">*</span>
              </Label>
              <Input
                type="text"
                name="manufacturerName"
                id="manufacturerName"
                invalid={errors.manufacturerName && touched.manufacturerName}
                placeholder="Enter Manufacturer Name"
                title="product manufacturerName"
                value={values.manufacturerName}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <ErrorMessage
                name="manufacturerName"
                component={CustomErrorMsg}
              />
            </FormGroup>
          </Col>
          {values.category === "ethical" || values.category === "generic" ? (
            <Col xs={6} sm={4} md={3}>
              <FormGroup>
                <Label for="tabletCount">
                  Tablets in Strip <span className="required-asterisk">*</span>
                </Label>
                <Input
                  type="text"
                  name="tabletCount"
                  id="tabletCount"
                  invalid={errors.tabletCount && touched.tabletCount}
                  placeholder="e.g. 15"
                  title="Tablets in Strip"
                  value={values.tabletCount}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <ErrorMessage name="tabletCount" component={CustomErrorMsg} />
              </FormGroup>
            </Col>
          ) : null}
        </Row>
        <Row>
          <Col xs={6} sm={4} md={3}>
            <FormGroup>
              <Label for="price">
                Price <span className="required-asterisk">*</span>
              </Label>
              <Input
                type="text"
                name="price"
                id="price"
                invalid={errors.price && touched.price}
                placeholder="e.g. 99.99"
                title="price"
                value={values.price}
                onBlur={(event) => {
                  let value = event.target.value;
                  if (event.target.value && !isNaN(event.target.value)) {
                    value = parseFloat(event.target.value).toFixed(2);
                  }
                  setFieldTouched("price", true);
                  setFieldValue("price", value);
                }}
                onChange={handleChange}
              />
              <ErrorMessage name="price" component={CustomErrorMsg} />
            </FormGroup>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <FormGroup>
              <Label for="discount">
                Discount <span className="required-asterisk">*</span>
              </Label>
              <Input
                type="text"
                name="discount"
                id="discount"
                invalid={errors.discount && touched.discount}
                placeholder="e.g. 10"
                title="discount"
                value={values.discount}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <ErrorMessage name="discount" component={CustomErrorMsg} />
            </FormGroup>
          </Col>

          <Col xs={6} sm={4} md={3}>
            <FormGroup>
              <Label for="amount">
                Net Amount <span className="required-asterisk">*</span>
              </Label>
              <Input
                type="text"
                name="amount"
                id="amount"
                invalid={errors.amount && touched.amount}
                placeholder={values.amount}
                title="amount"
                value={values.amount}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <ErrorMessage name="amount" component={CustomErrorMsg} />
            </FormGroup>
          </Col>

          {values.category !== "ethical" ? (
            <Col sm={6} md={4}>
              <FormGroup>
                <div className="label-upload-file mb-1">Cover image</div>
                <CustomInput
                  type="file"
                  id="icon"
                  name="icon"
                  title={fileName || "choose an image file"}
                  label={fileName || "choose an image file"}
                  invalid={touched.icon && !!errors.icon}
                  multiple
                  onChange={(event) => {
                    setFieldTouched("icon", true);
                    setFieldValue("icon", event.currentTarget.files);
                  }}
                />
                {touched.icon && errors.icon && (
                  <FormFeedback className="invalid-feedback-file">
                    {errors.icon}
                  </FormFeedback>
                )}
                <div className="mt-1">
                  Maximum size: 5MB
                  <br />
                  Allowed extensions: .jpeg,&nbsp;&nbsp;.jpg,&nbsp;&nbsp;.png
                </div>
              </FormGroup>
            </Col>
          ) : null}
        </Row>
        <div className="mt-3">
          <Button
            type="submit"
            color="primary"
            className="pull-right"
            size="lg"
          >
            Save Product
          </Button>
          <NavLink exact to={PATH_PRODUCTS}>
            <Button color="secondary" size="lg">
              Back
            </Button>
          </NavLink>
        </div>
      </Form>
    </React.Fragment>
  );
};

export default ProductForm;
