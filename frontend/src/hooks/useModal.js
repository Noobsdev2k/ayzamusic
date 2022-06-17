import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalStore, openModal } from "../store/reducer/modal";

export const UseModal = () => {
  const resultModal = useSelector(modalStore);
  const dispatch = useDispatch();
  const toggle = React.useCallback(
    (data) => {
      dispatch(openModal(data));
    },
    [dispatch]
  );
  return { resultModal, toggle };
};
