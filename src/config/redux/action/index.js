import firebase, { database } from "../../firebase";

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
        var userSend = firebase.auth().currentUser;
        if (userSend) {
          if (user.user.emailVerified === false) {
            userSend.sendEmailVerification();
          }
        }
        dispatch({ type: "CHANGE_LOADING", value: false });
        resolve(true);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        dispatch({ type: "CHANGE_LOADING", value: false });
        dispatch({ type: "CHANGE_ERR", value: errorMessage });
        reject(false);
        console.log("ini error", errorCode, errorMessage);
      });
  });
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
          emailVerified: user.user.emailVerified,
          refreshToken: user.user.refreshToken,
        };
        
        console.log("success ", user);
        dispatch({ type: "CHANGE_LOADING", value: false });
        dispatch({ type: "CHANGE_ISLOGIN", value: true });
        dispatch({ type: "CHANGE_USER", value: dataUser });
        resolve(dataUser);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        
        dispatch({ type: "CHANGE_LOADING", value: false });
        dispatch({ type: "CHANGE_ISLOGIN", value: false });
        dispatch({
          type: "CHANGE_ERR",
          value: errorMessage,
        });
        var userSend = firebase.auth().currentUser;
        if (userSend) {
          if (userSend.emailVerified === false) {
            dispatch({ type: "CHANGE_VERIF", value: 'anjing' });
            window.alert('Email belum diverifikasi, silakan verifikasi email sebelum login ke Panggilin.')
          }
        }
        reject(false);
        console.log("ini error", errorCode, errorMessage);
      });
  });
};

export const addDataToAPI = (data) => (dispatch) => {
  database.ref("notes/" + data.userId).push({
    title: data.title,
    content: data.content,
    date: data.date,
  });
};

export const getDataFromAPI = (userId) => (dispatch) => {
  const urlNotes = database.ref("notes/" + userId);
  return new Promise((resolve, reject) => {
    urlNotes.on("value", function (snapshot) {
      // updateStarCount(postElement, snapshot.val());
      console.log("get data: ", snapshot.val());
      // manipulasi data
      const data = [];
      Object.keys(snapshot.val()).map((key) => {
        data.push({
          id: key,
          data: snapshot.val()[key],
        });
      });
      dispatch({ type: "GET_NOTES", value: data });
      resolve(snapshot.val());
    });
  });
};

export const updateDataAPI = (data) => (dispatch) => {
  const urlNotes = database.ref(`notes/${data.userId}/${data.noteId}`);
  return new Promise((resolve, reject) => {
    urlNotes.set(
      {
        title: data.title,
        content: data.content,
        date: data.date,
      },
      (err) => {
        if (err) {
          reject(false);
        } else {
          resolve(true);
        }
      }
    );
  });
};

export const deleteDataAPI = (data) => (dispatch) => {
  const urlNotes = database.ref(`notes/${data.userId}/${data.noteId}`);
  return new Promise((resolve, reject) => {
    urlNotes.remove();
  });
};
