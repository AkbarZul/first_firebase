import React, { Component } from "react";
import "./Register.scss";
import firebase from '../../../config/firebase';

class Register extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChangeText = (e) => {
    // console.log(e.target.id)
    this.setState({
      // kalo ini jadi sama
      // email: e.target.value,
      // password: e.target.value,
      // diginiin biar narget id
      [e.target.id]: e.target.value,
    });
  };

  handleRegisterSubmit = () => {
    // console.log(this.state.email);
    // console.log(this.state.password);
    const {email, password} = this.state;
    console.log("berhasil", email, password);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("ini hasil firebase", user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log('ini error', errorCode, errorMessage);
      });
  };

  render() {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <p className="auth-title">Register Page</p>
          <input
            className="input"
            id="email"
            placeholder="email"
            type="text"
            onChange={this.handleChangeText}
          />
          <input
            className="input"
            id="password"
            placeholder="password"
            type="password"
            onChange={this.handleChangeText}
          />
          <button onClick={this.handleRegisterSubmit} className="btn">
            Register
          </button>
          {/* <button>Go To Dashboard</button> */}
        </div>
      </div>
    );
  }
}

export default Register;
