import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Nav from '../Nav';

export default class ProtectedRoute extends Component {
  render() {
    return (
      <>
        <Nav logout={this.props.logout} admin={this.props.admin} />
        <Outlet />;
      </>
    );
  }
}