import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="search">
        <i className="search-icon fa fa-search"></i>
        <input
          type="text"
          inputmode="search"
          placeholder="Search for song, arties etc..."
          className="search-input"
        />
      </div>
      <div className="tool">
        <i className="fa fa-bell tool-icon"></i>
        <i className="tool-icon fa fa-cog"></i>
        <a href="#" className="upgrade">
          Upgrade plan
        </a>
      </div>
    </div>
  );
}
