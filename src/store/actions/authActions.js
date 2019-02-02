import api from '../../services/api'

export const signInError = (errors) => {
  return { type: 'SIGNIN_ERROR', errors }
}

export const signIn = (credentials, redirect) => async dispatch => {
  console.log('signin...')
  let response = await api.post('/user/signin', credentials)
  console.log('code: ', response.status)
  if (response.status === 200) {
    let { userInfo } = response.data
    dispatch({type: 'SIGNIN_SUCCESS', userInfo: userInfo})
    console.log('redirecting to...')
    redirect()
  } else {  
    console.log('login error: ', response.status)
    let data = null
    dispatch({type: 'SIGNIN_ERROR', data})
    }
}

export const signOut = (redirect) => {
  console.log('sign out!')
  return (dispatch, getState) => {
    dispatch({type: 'SIGNOUT_SUCCESS'});
    redirect();
  }
}
