import { Modal } from "antd";
import React, { useEffect, useMemo } from "react";
import { UseAuthentication } from "../../hooks/useAuth";
import { UseModal } from "../../hooks/useModal";
import { ModalType } from "../../utils/const";
import { ModalLogin } from "./Login";
import ModalRegister from "./Register";
import ModalUploadMusic from "./UploadMusic";

const checkModal = (Type) => {
  switch (Type) {
    case ModalType.LOGIN:
      return ModalLogin;
    case ModalType.REGISTER:
      return ModalRegister;
    case ModalType.UPLOAD_MUSIC:
    case ModalType.EDIT_UPLOAD_MUSIC:
      return ModalUploadMusic;
    default:
      return null;
  }
};
export const ModalComponents = () => {
  const { accessToken } = UseAuthentication();
  const { resultModal, toggle } = UseModal();
  const { type, open, title } = resultModal;

  const WrapperModal = useMemo(() => checkModal(type), [type]);

  useEffect(() => {
    toggle({ type: ModalType.NULL, title: "" });
  }, [accessToken, toggle]);

  if (!WrapperModal) return null;
  return (
    <Modal
      visible={open}
      centered
      title={title}
      onOk={toggle}
      onCancel={toggle}
      footer={null}
      className="group__modal overflow-hidden"
    >
      <WrapperModal {...resultModal} />
    </Modal>
  );
};
