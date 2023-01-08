import React from "react";
import { Link } from "react-router-dom";
import { UseModal } from "../../hooks/useModal";
import { ModalType } from "../../utils/const";

export default function MenuItems({ href, icon, title, login }) {
  const { toggle } = UseModal();
  return login ? (
    <li className="menu-item">
      <a
        onClick={() => toggle({ type: ModalType.LOGIN, title: "Đăng nhập" })}
        className="menu-link"
      >
        {icon}
        <span>{title}</span>
      </a>
    </li>
  ) : (
    <li className="menu-item">
      <Link to={href} className="menu-link">
        {icon}
        <span>{title}</span>
      </Link>
    </li>
  );
}
