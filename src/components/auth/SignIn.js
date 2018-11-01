import "../../styles/signIn.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { signInWithGoogle, signIn } from "../../actions";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";

class Signin extends Component {
  state = {
    email: "",
    password: ""
  };
  static contextTypes = {
    router: PropTypes.object
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handeSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { auth } = this.props;
    console.log("auth login: ", auth);
    if (auth && auth.uid) return <Redirect to="/todos" />;
    return (
      <div className="row social-signin-container">
        <div className="col s10 offset-s1 center-align">
          <h4 className="grey-text text-darken-3">Sign in</h4>
          <form onSubmit={this.handeSubmit}>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">Login</button>
              <div className="red-text center">
                {auth && auth.authError ? <p>{auth.authError}</p> : null}
              </div>
            </div>
          </form>

          <p />
          <a
            href="#"
            className="waves-effect waves-light btn social google red darken-1"
            onClick={this.props.signInWithGoogle}
          >
            <i className="fa fa-google social-signin-icon" /> Sign in with
            google
          </a>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      signIn,
      signInWithGoogle
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);
