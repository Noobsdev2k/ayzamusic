import React from "react";
import { UseAuthentication } from "../../hooks/useAuth";
import { UseModal } from "../../hooks/useModal";
import { ModalType } from "../../utils/const";

export default function Header() {
  const { toggle } = UseModal();
  const { accessToken } = UseAuthentication();

  return (
    <div className="header">
      <div className="search">
        <i className="search-icon fa fa-search"></i>
        <input
          type="text"
          inputMode="search"
          placeholder="Search for song, arties etc..."
          className="search-input"
        />
      </div>
      {accessToken && (
        <div className="tool">
          <i className="fa fa-bell tool-icon"></i>
          <i className="tool-icon fa fa-cog"></i>
          <a
            className="upgrade"
            onClick={() => {
              toggle({
                type: ModalType.UPLOAD_MUSIC,
                title: "UploadMusic",
              });
            }}
          >
            Upgrade plan
          </a>
        </div>
      )}
    </div>
  );
}
