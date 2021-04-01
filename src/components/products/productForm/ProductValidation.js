import Yup from "yup";

const ProductValidation = Yup.object().shape({
  productName: Yup.string().required("Required field"),
  manufacturerName: Yup.string().required("Required field"),

  price: Yup.string()
    .matches(/^\d+(?:\.{0,1}\d{0,2})$/, {
      message: "Enter a valid amount",
      excludeEmptyString: true,
    })
    .required("Required field"),

  discount: Yup.string().matches(/^0*(?:[0-9][0-9]?|100)$/, {
    message: "Enter a valid discount percent",
    excludeEmptyString: true,
  }),
  // .required("Required field"),
  amount: Yup.string()
    .matches(/^\d+(?:\.{0,1}\d{0,2})$/, {
      message: "Enter a valid Amount",
      excludeEmptyString: true,
    })
    .required("Required field"),
  icon: Yup.mixed()
    .test("fileType", "Unsupported File Format", function (value) {
      value = !value ? {} : value;
      const arrayTypes = ["image/jpg", "image/jpeg", "image/png"];
      if (value.type === undefined || arrayTypes.includes(value.type)) {
        return true;
      } else {
        return false;
      }
    })
    .test("fileSize", "File Size is too large", function (value) {
      value = !value ? {} : value;
      const maxSize = 4000000;
      if (value.size === undefined || value.size <= maxSize) {
        return true;
      } else {
        return false;
      }
    }),
});

export default ProductValidation;
