import React, { Component } from "react";
import "./Register.scss";
import Button from "../../../components/atoms/Button";
import { connect } from 'react-redux';
import { registerUserApi } from '../../../config/redux/action';

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

  handleRegisterSubmit = async () => {
    // console.log(this.state.email);
    // console.log(this.state.password);
    const {email, password} = this.state;
    console.log("berhasil", email, password);
    const user = await this.props.registerAPI({
      email,
      password,
    }).catch(err => err)
    if(user){
      this.setState({
        email: '',
        password: '',
      })
    }
  };

  render() {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <p className="auth-title">Register Page</p>
          <p>{this.props.err}</p>
          <input
            className="input"
            id="email"
            placeholder="email"
            type="text"
            onChange={this.handleChangeText}
            value={this.state.email}
          />
          <input
            className="input"
            id="password"
            placeholder="password"
            type="password"
            onChange={this.handleChangeText}
            value={this.state.password}
          />
          <Button onClick={this.handleRegisterSubmit} title="Register" loading={this.props.isLoading} />
          {/* <button>Go To Dashboard</button> */}
        </div>
      </div>
    );
  }
}

// ambil state global
const reduxState = (state) => ({
  isLoading: state.isLoading,
  err: state.err,
})

// merubah action
const reduxDispatch = (dispatch) => ({
  registerAPI: (data) => dispatch(registerUserApi(data))
})

export default connect(reduxState, reduxDispatch)(Register);
