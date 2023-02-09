import React, { Component } from "react";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import UsersList from "./pages/UsersList";
import UserDetails from "./pages/UserDetails";

export default class App extends Component {
  state = {
    isAuthorized: false,
    isAdmin: false,
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) this.setState({ isAuthorized: true });
 
    const admin = localStorage.getItem("admin")
    if(admin === "true") this.setState({isAdmin:true})
  }

  login = () => {
    this.setState({ isAuthorized: true });
  };

  admin = () => {
    this.setState({isAdmin:true})
  }

  logout = () => {
    this.setState({ isAuthorized: false });
    this.setState({ isAdmin: false });
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("admin");
  };

  render() {
    return (
      <div className="App">
        <Routes>
          <Route index={true} element={<Navigate to="/Sign-in" />} />
          <Route
            path="/Sign-in"
            element={
              this.state.isAuthorized ? (
                <Navigate to="/Home" />
              ) : (
                <SignIn admin={this.admin} login={this.login} />
              )
            }
          />
          <Route
            path="/Sign-up"
            element={
              this.state.isAuthorized ? (
                <Navigate to="/Home" />) : (
                <SignUp login={this.login} />
              )
            }
          />

          <Route
            path="/Home"
            element={
              this.state.isAuthorized ? (
                <ProtectedRoute
                  admin={this.state.isAdmin}
                  logout={this.logout}
                />
              ) : (
                <Navigate to="/Sign-in" />
              )
            }
          >
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route
              path="userslist"
              element={
                this.state.isAdmin ? <UsersList /> : <Navigate to="/Home" />
              }
            />
            <Route
              path="userslist/:id"
              element={
                this.state.isAdmin ? <UserDetails /> : <Navigate to="/Home" />
              }
            />
          </Route>
        </Routes>
      </div>
    );
  }
}
