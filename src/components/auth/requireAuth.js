import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
//Higher order component. This component will simply take another component and renders it when user is authenticated. If not, it will redirect to sign in page.
export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    };

    componentDidMount() {
      if (this.props.authenticated === null) {
        this.context.router.history.push("/");
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.history.push("/");
      }
    }

    render() {
      if (this.props.authenticated) {
        return <ComposedComponent {...this.props} />;
      }
      return null;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth };
  }

  return connect(mapStateToProps)(Authentication);
}
