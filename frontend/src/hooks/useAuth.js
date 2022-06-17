import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getProfile,
  loginGoogle,
  postLogout,
  signIn,
  signUp,
} from "../store/actions/auth";
import { accountStore } from "../store/reducer/auth";
import { onLogOutRemoveData } from "../store/reducer/history";

const accessTokenLocal = localStorage.getItem("accessToken");
export const UseAuthentication = () => {
  const dispatch = useDispatch();

  const resultAccount = useSelector(accountStore);
  const { accessToken, loading, loadingGoogle } = resultAccount;

  // dispatch api
  const handlePostLogin = (data) => dispatch(signIn(data));
  const handlePostRegister = (data) => dispatch(signUp(data));
  const handleOnLogOut = React.useCallback(
    () =>
      accessToken && dispatch(onLogOutRemoveData()) && dispatch(postLogout()),
    [dispatch, accessToken]
  );
  const loginGoogleAPI = React.useCallback(
    (token) => dispatch(loginGoogle(token)),
    [dispatch]
  );
  const getProfileAPI = React.useCallback(
    () => accessTokenLocal && dispatch(getProfile()),
    [dispatch]
  );

  const responseGoogle = (response) => {
    const { tokenId } = response;
    if (tokenId) loginGoogleAPI(tokenId);
  };

  return {
    resultAccount,
    handleOnLogOut,
    loginGoogleAPI,
    responseGoogle,
    handlePostLogin,
    getProfileAPI,
    handlePostRegister,
    accessToken,
    loading,
    loadingGoogle,
  };
};
