import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Row, Col } from "reactstrap";
import CustomImage from "../../../UI/customImage/CustomImage";
import defaultPath from "../../../../assets/images/medicine_default.png";
import "./BoxDetail.scss";

const BoxDetail = (props) => {
  const { product } = props;
  let images = [];

  if (product.imageDatas) {
    images = product.imageDatas;
  } else {
    images = defaultPath;
  }

  return (
    <React.Fragment>
      <Row>
        <Col xs="12" md="7" lg="7" className="mb-3">
          <CustomImage
            // downloadPath={images}
            downloadPath={images}
            defaultPath={defaultPath}
            isImgDefault={true}
            alt="Medicine icon"
          />
        </Col>
        <Col xs="12" md="5" lg="5">
          <div className="title-link">
            <NavLink exact to={`editProduct/${product.id}`}>
              {product.productName}
            </NavLink>
          </div>
          <br />
          <div className="subtitle">
            {product.manufacturerName}
            <br />
            {`Price  ₹ ${parseFloat(product.price).toFixed(2)}`}
            <br />
            {`Discount   ${product.discount} %`}
            <br />
            {`Amount  ₹ ${parseFloat(product.amount).toFixed(2)}`}
            <br />
          </div>
          {product.category === "generic" || product.category === "ethical" ? (
            <h6>{product.tabletCount} Tablets in Strip</h6>
          ) : null}

          <br />
          <NavLink exact to={`editProduct/${product.id}`}>
            Edit
          </NavLink>
          <span> | </span>
          <NavLink
            to=""
            onClick={(event) => {
              const { product } = props;
              event.preventDefault();
              props.toggleDelete(event, product);
            }}
          >
            <span style={{ color: "red", fontSize: "medium" }}>Delete</span>
          </NavLink>
        </Col>
      </Row>
    </React.Fragment>
  );
};

BoxDetail.propTypes = {
  product: PropTypes.object.isRequired,
  toggleDelete: PropTypes.func.isRequired,
};

export default BoxDetail;
