export const actionUserName = () => (dispatch) => {
    // return (dispatch) => {
        setTimeout(() => {
            return dispatch({type: 'CHANGE_USER', value: "Akbar zulfikar"})
        }, 2000)
    // }
}