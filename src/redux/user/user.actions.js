import userActionTypes from './user.types';

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START
});

export const signInSuccess = user => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error
});

export const emailSignInStart = (email, password) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: {
    email,
    password
  }
});

export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION
});
