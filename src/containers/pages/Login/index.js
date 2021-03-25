import React, { Component } from "react";
import { connect } from "react-redux";
// import { actionUserName } from "../../../config/redux/action";
import Button from "../../../components/atoms/Button";
import { loginUserApi } from '../../../config/redux/action';

class Login extends Component {
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

  handleLoginSubmit = async () => {
    // console.log(this.state.email);
    // console.log(this.state.password);
    const { email, password } = this.state;
    const {history} = this.props
    console.log("berhasil", email, password);
    const user = await this.props.loginAPI({
      email,
      password,
    }).catch(err => err)
    if(user){
        console.log("ini hasil firebase login", user);

        localStorage.setItem('userData', JSON.stringify(user))
        this.setState({
          email: "",
          password: "",
        });
        history.push('/')
    } else{
        console.log('login gagal')
    }
  };

  render() {
    // console.log(this.props.popupProps)
    return (
      <div className="auth-container">
        <div className="auth-card">
          <p className="auth-title">Login Page</p>
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
          <Button
            onClick={this.handleLoginSubmit}
            title="Login"
            loading={this.props.isLoading}
          />
          {/* <button>Go To Dashboard</button> */}
        </div>
      </div>
    );
  }
}

// ambil state global
// ambil state global
const reduxState = (state) => ({
    isLoading: state.isLoading
  })
  
  // merubah action
  const reduxDispatch = (dispatch) => ({
    loginAPI: (data) => dispatch(loginUserApi(data))
  })

export default connect(reduxState, reduxDispatch)(Login);
