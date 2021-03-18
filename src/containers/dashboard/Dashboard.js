import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import AsyncComponentLoader from "../../hoc/asyncComponentLoader/AsyncComponentLoader";
import MainLayout from "../../hoc/layout/mainLayout/MainLayout";
import PageNotFound from "../../components/pageNotFound/PageNotFound";
import AlertModal from "../../components/UI/modals/alertModal/AlertModal";
import { resetErrorAuth } from "../../store/actions";

const Home = AsyncComponentLoader({
  loader: () => import("../home/Home"),
});
const Products = AsyncComponentLoader({
  loader: () => import("../products/Products"),
});
const EditProduct = AsyncComponentLoader({
  loader: () => import("../products/editProduct/EditProduct"),
});
const CreateProduct = AsyncComponentLoader({
  loader: () => import("../products/createProduct/CreateProduct"),
});
const Customers = AsyncComponentLoader({
  loader: () => import("../customers/Customers"),
});
const CreateCustomer = AsyncComponentLoader({
  loader: () => import("../customers/createCustomer/CreateCustomer"),
});
const EditCustomer = AsyncComponentLoader({
  loader: () => import("../customers/editCustomer/EditCustomer"),
});
const Orders = AsyncComponentLoader({
  loader: () => import("../orders/Orders"),
});

class Dashboard extends Component {
  state = {
    isOpenModal: false,
  };

  toggleModal = () => {
    if (this.state.isOpenModal) {
      this.props.resetErrorAuth();
    }
    this.setState((state, props) => ({
      isOpenModal: !state.isOpenModal,
    }));
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.error.code && !this.state.isOpenModal) {
      this.setState({
        isOpenModal: true,
      });
    }
    return true;
  }

  render() {
    const { error } = this.props;
    const { isOpenModal } = this.state;
    return (
      <MainLayout>
        {
          <Switch>
            <Route
              exact
              path={`${this.props.match.url}`}
              render={() => <Redirect to={`${this.props.match.url}/home`} />}
            />
            <Route path={`${this.props.match.url}/home`} component={Home} />
            <Route
              path={`${this.props.match.url}/products`}
              component={Products}
            />
            <Route
              path={`${this.props.match.url}/createProduct`}
              component={CreateProduct}
            />
            <Route
              path={`${this.props.match.url}/editProduct/:id`}
              component={EditProduct}
            />
            <Route
              path={`${this.props.match.url}/customers`}
              component={Customers}
            />
            <Route
              path={`${this.props.match.url}/createCustomer`}
              component={CreateCustomer}
            />
            <Route
              path={`${this.props.match.url}/editCustomer/:id`}
              component={EditCustomer}
            />
            <Route path={`${this.props.match.url}/orders`} component={Orders} />
            <Route component={PageNotFound} />
          </Switch>
        }
        <AlertModal
          title="Unexpected Error"
          isOpenModal={isOpenModal}
          toggleModal={this.toggleModal}
        >
          {error.message}
        </AlertModal>
      </MainLayout>
    );
  }
}

Dashboard.propTypes = {
  error: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    error: state.authData.error,
  };
};

const mapDispatchToProps = {
  resetErrorAuth: resetErrorAuth.trigger,
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
