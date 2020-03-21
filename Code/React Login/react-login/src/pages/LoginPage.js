import React from "react";
import Login from "../ReactComponents/Login";
import "./LoginPage.css";

class LoginPage extends React.Component {


  render() {
    return (
      <div className="background">
        <div className="login-container">
          <Login />
        </div>
      </div>
    );
  }
}

export default LoginPage;
