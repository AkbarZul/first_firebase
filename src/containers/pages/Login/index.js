import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actionUserName } from '../../../config/redux/action';

class Login extends Component {
    changeUser = () => {
        this.props.changeUserName()
    }
    render() {
        // console.log(this.props.popupProps)
        return (
            <div>
                <p>Login Page {this.props.userName}</p>
                <button onClick={this.changeUser}>change user</button>
                <button>Go To Dashboard</button>
            </div>
        )
    }
}




// ambil state global
const reduxState = (state) =>({
    popupProps: state.popup,
    userName: state.user
})

// merubah value reducer
const reduxDispatch = (dispatch) => ({
    changeUserName: () => dispatch(actionUserName())
})

export default connect(reduxState, reduxDispatch)(Login);