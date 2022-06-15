import { Button } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseAuthentication } from "../../hooks/useAuth";
import { UseModal } from "../../hooks/useModal";
import { ModalType, musicMenu } from "../../utils/const";

export default function Sidebar() {
  const { accessToken, resultAccount, handleOnLogOut } = UseAuthentication();
  const navigate = useNavigate();
  const { toggle } = UseModal();
  return (
    <div className="sidebar">
      {!accessToken ? (
        <div className="profile">
          <h5 className=" profile-name">
            Đăng nhập để khám phá những playlist dành riêng cho chính bạn.
          </h5>
          <Button
            type="primary"
            shape="round"
            className="profile-position"
            icon={
              <i className="fa fa-sign-in menu-icon" aria-hidden="true"></i>
            }
            size="large"
            onClick={() => {
              toggle({
                type: ModalType.LOGIN,
                title: "Login",
              });
            }}
          >
            Login
          </Button>
        </div>
      ) : (
        <div className="profile">
          <img
            src={resultAccount.data.image}
            alt=""
            className="profile-avatar"
          />
          <h3 className="profile-name">{resultAccount.data.user_name}</h3>
          <span className="profile-position">{resultAccount.data.email}</span>
          <Button
            type="primary"
            shape="round"
            icon={
              <i className="fa fa-sign-in menu-icon" aria-hidden="true"></i>
            }
            size="large"
            onClick={() => {
              handleOnLogOut();
              navigate("/");
            }}
          >
            Logout
          </Button>
        </div>
      )}

      <ul className="menu">
        {musicMenu.map((item, index) => (
          <li className="menu-item" key={index}>
            <Link to={item.href} className="menu-link">
              {item.Icon}
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
