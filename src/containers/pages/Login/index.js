import React, { Component } from 'react'
import { connect } from 'react-redux';

class Login extends Component {
    render() {
        // console.log(this.props.popupProps)
        return (
            <div>
                <p>Login Page {this.props.popupProps}</p>
                <button>Go To Register</button>
                <button>Go To Dashboard</button>
            </div>
        )
    }
}

// ambil state global
const reduxState = (state) =>({
    popupProps: state.popup
})


export default connect(reduxState, null)(Login);