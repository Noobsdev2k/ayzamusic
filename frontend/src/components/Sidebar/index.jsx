import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { UseAuthentication } from "../../hooks/useAuth";
import { musicMenu } from "../../utils/const";

export default function Sidebar({ setOpenModal }) {
  const { accessToken, resultAccount } = UseAuthentication();

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
              setOpenModal(true);
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
