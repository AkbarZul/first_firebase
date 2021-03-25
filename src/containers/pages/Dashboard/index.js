import React, { Component } from "react";
import { connect } from "react-redux";
import { addDataToAPI } from "../../../config/redux/action";
import "./Dasboard.scss";

class Dashboard extends Component {
  state = {
    title: "",
    content: "",
    date: "",
  };

  
  handleSavaNotes = () => {
    const { title, content } = this.state;
    const {saveNotes} = this.props
    const userData = JSON.parse(localStorage.getItem('userData'))
    const data = {
      title: title,
      content: content,
      date: new Date().getTime(),
      userId: userData.uid
    };
    saveNotes(data)
    console.log(data);
  };

  onInputChange = (e, type) => {
    this.setState({
      [type]: e.target.value,
    });
  };

  render() {
    const { title, content, date } = this.state;
    return (
      <div className="container">
        <div className="input-form">
          <input
            placeholder="title"
            className="input-title"
            value={title}
            onChange={(e) => this.onInputChange(e, "title")}
          />
          <textarea
            placeholder="content"
            className="input-content"
            value={content}
            onChange={(e) => this.onInputChange(e, "content")}
          ></textarea>
          <button onClick={this.handleSavaNotes} className="save-btn">
            simpan
          </button>
        </div>
        <hr />

        <div className="card-content">
          <p className="title">Title</p>
          <p className="date">25 maret 2021</p>
          <p className="content">conten Notes</p>
        </div>
      </div>
    );
  }
}

const reduxState = (state) => ({
    userData: state.user
})

const reduxDispatch = (dispatch) => ({
  saveNotes: (data) => dispatch(addDataToAPI(data)),
});

export default connect(reduxState, reduxDispatch)(Dashboard);
