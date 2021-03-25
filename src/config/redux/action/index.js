import firebase from "../../firebase";

export const actionUserName = () => (dispatch) => {
  // return (dispatch) => {
  setTimeout(() => {
    return dispatch({ type: "CHANGE_USER", value: "Akbar zulfikar" });
  }, 2000);
  // }
};

export const registerUserApi = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: "CHANGE_LOADING", value: true });
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((user) => {
        console.log("ini hasil firebase", user);
        dispatch({ type: "CHANGE_LOADING", value: false });
        resolve(true)
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        dispatch({ type: "CHANGE_LOADING", value: false });
        reject(false)
        console.log("ini error", errorCode, errorMessage);
      });
  })
};

export const loginUserApi = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: "CHANGE_LOADING", value: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then((user) => {
        const dataUser = {
          email: user.user.email,
          uid: user.user.uid,
          emailVerified: user.user.emailVerified
        }
        console.log("success ", user);
        dispatch({ type: "CHANGE_LOADING", value: false });
        dispatch({ type: "CHANGE_ISLOGIN", value: true });
        dispatch({ type: "CHANGE_USER", value: dataUser });
        resolve(true)
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        dispatch({ type: "CHANGE_LOADING", value: false });
        dispatch({ type: "CHANGE_ISLOGIN", value: false });
        reject(false)
        console.log("ini error", errorCode, errorMessage);
      });
  })
};
