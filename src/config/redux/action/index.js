import firebase from "../../firebase";

export const actionUserName = () => (dispatch) => {
  // return (dispatch) => {
  setTimeout(() => {
    return dispatch({ type: "CHANGE_USER", value: "Akbar zulfikar" });
  }, 2000);
  // }
};

export const registerUserApi = (data) => (dispatch) => {
  dispatch({ type: "CHANGE_LOADING", value: true });
  return firebase
    .auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    .then((user) => {
      console.log("ini hasil firebase", user);
      dispatch({ type: "CHANGE_LOADING", value: false });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      dispatch({ type: "CHANGE_LOADING", value: false });
      console.log("ini error", errorCode, errorMessage);
    });
};
