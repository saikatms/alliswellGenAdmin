import { withFormik } from "formik";
import PropTypes from "prop-types";
import ProductValidation from "../../components/products/productForm/ProductValidation";
import ProductForm from "../../components/products/productForm/ProductForm";

const mapPropsToValues = (props) => {
  const { product } = props;
  // console.log(product);

  return {
    id: product.id || null,
    productName: product.productName || "",
    manufacturerName: product.manufacturerName || "",
    price: product.price || "",
    discount: product.discount || "",
    tabletCount: product.tabletCount || "",
    amount: product.amount || "",
    category: product.category || "",
    downloadPath: product.downloadPath || "",
    icon: {},
  };
};

const configForm = {
  enableReinitialize: true,
  mapPropsToValues,
  validationSchema: ProductValidation,
  handleSubmit: (values, { props, setErrors }) => {
    props.onSubmit(values);
  },
};

ProductForm.propTypes = {
  product: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default withFormik(configForm)(ProductForm);
