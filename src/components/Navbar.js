import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut, signUp } from "../actions/index.js";

const Navbar = props => {
  const { auth } = props;
  console.log("props: ", props);
  const links =
    auth && auth.uid ? (
      <ul className="right">
        <li>
          <a onClick={props.signOut}>Log Out</a>
        </li>
      </ul>
    ) : (
      <ul className="right">
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
      </ul>
    );
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo left">
          ToDo List
        </Link>
        {links}
      </div>
    </nav>
  );
};

const masStateToProps = state => {
  console.log(state);
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  masStateToProps,
  mapDispatchToProps
)(Navbar);
