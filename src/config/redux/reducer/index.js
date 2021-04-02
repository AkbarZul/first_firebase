const initialState = {
    popup: false,
    isLogin: false,
    isLoading: false,
    user: {},
    notes: [],
    err: '',
    verif: '',
  }
  
  const reducer = (state = initialState, action) => {
    if(action.type === 'CHANGE_POPUP') {
      return {
        ...state,
        popup: action.value
      }
    }
    if(action.type === 'CHANGE_ISLOGIN') {
      return {
        ...state,
        isLogin: action.value
      }
    }
    if(action.type === 'CHANGE_USER') {
      return {
        ...state,
        user: action.value
      }
    }
    if(action.type === 'CHANGE_LOADING') {
      return {
        ...state,
        isLoading: action.value
      }
    }
    if(action.type === 'GET_NOTES') {
      return {
        ...state,
        notes: action.value
      }
    }
    if(action.type === 'CHANGE_ERR') {
      return {
        ...state,
        err: action.value
      }
    }
    if(action.type === 'CHANGE_VERIF') {
      return {
        ...state,
        verif: action.value
      }
    }
    return state
  }

  export default reducer;