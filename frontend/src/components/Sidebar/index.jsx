import React from "react";
import { Link } from "react-router-dom";
import { musicMenu } from "../../utils/const";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile">
        <img
          src="https://cdn.dribbble.com/users/3960463/screenshots/13952774/media/1083c2b91054c7d7ee7c0bd47d60d5e0.png?compress=1&resize=800x600"
          alt=""
          className="profile-avatar"
        />
        <h3 className="profile-name">Evondev</h3>
        <span className="profile-position">Frontend Developer</span>
      </div>
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
