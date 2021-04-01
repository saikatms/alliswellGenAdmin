import React from "react";
import PropTypes from "prop-types";
import Carousel from "./Carousel";
// import Slider from "./Slider";

const CustomImage = (props) => {
  // console.log(props);
  // if (!props.downloadPath && props.isImgDefault) {

  if (props.isImgDefault) {
    return (
      <img className="iconDetail" src={props.defaultPath} alt={props.alt} />
    );
  } else if (props.downloadPath) {
    // console.log("**********");

    const { downloadPath } = props;
    const settings = {
      customPaging: function (i) {
        return (
          <a>
            <img src={props.downloadPath[i].downloadPath} />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      // <img className="iconDetail" src={props.downloadPath} alt={props.alt} />
      <Carousel images={downloadPath} />
      // <Slider {...settings}>
      //   {downloadPath.map((img) => (
      //     <div>
      //       <img src={img.downloadPath} />
      //     </div>
      //   ))}
      // </Slider>
    );
  } else {
    return null;
  }
};

CustomImage.propTypes = {
  downloadPath: PropTypes.string.isRequired,
  isImgDefault: PropTypes.bool,
  alt: PropTypes.string,
};

export default CustomImage;
