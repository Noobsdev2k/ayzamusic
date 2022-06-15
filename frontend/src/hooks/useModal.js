import React from "react";

import { modalStore, openModal } from "../store/reducer/modal";
import { useAppDispatch, useAppSelector } from "./useRedux";

export const UseModal = () => {
  const resultModal = useAppSelector(modalStore);
  const dispatch = useAppDispatch();
  const toggle = React.useCallback(
    (data) => dispatch(openModal(data)),
    [dispatch]
  );
  return { resultModal, toggle };
};
