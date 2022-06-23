import { Button } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseAuthentication } from "../../hooks/useAuth";
import { UseModal } from "../../hooks/useModal";
import { ModalType, musicMenu } from "../../utils/const";
import MenuItems from "./MenuItems";

export default function Sidebar() {
  const { resultAccount, handleOnLogOut, getProfileAPI } = UseAuthentication();
  const navigate = useNavigate();
  const { accessToken, data } = resultAccount;

  React.useEffect(() => {
    getProfileAPI();
  }, [getProfileAPI]);

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
          <img src={data.image} alt="" className="profile-avatar" />
          <h3 className="profile-name">{data.user_name}</h3>
          <span className="profile-position">{data.email}</span>
          <Button
            type="primary"
            shape="round"
            icon={
              <i className="fa fa-sign-in menu-icon" aria-hidden="true"></i>
            }
            size="large"
            onClick={() => {
              handleOnLogOut();
              navigate("/home");
            }}
          >
            Logout
          </Button>
        </div>
      )}

      <ul className="menu">
        {musicMenu.map((item, index) => (
          <MenuItems
            title={item.title}
            icon={item.Icon}
            href={item.href}
            login={!accessToken}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
}
