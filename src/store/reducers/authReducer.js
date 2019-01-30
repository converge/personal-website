const initialState = {
  isAuthenticated: false,
  signInError: {},
  signUpError: {}, // not used yet
  userInfo: {}
}

const authReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'SIGNIN_ERROR':
      console.log('login error')
      return {
        // keep it and doesnt replace the state
        ...state,
        // signInError: 'Sign In Failed'
        signInError: action.errors
      }
    case 'SIGNIN_SUCCESS':
      console.log('Sign in success')
      console.log(action.userInfo)
      return {
        ...state,
        isAuthenticated: true,
        userInfo: action.userInfo
      }
    case 'SIGNOUT_SUCCESS':
      console.log('signout success')
      return state
    default:
      return state
  }
}
console.log('delete me')

export default authReducer