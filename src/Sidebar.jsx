import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <a href="/">
          <li className="sidebar-list-item">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </li>
        </a>
        <a href="/Products">
          <li className="sidebar-list-item">
            <BsFillArchiveFill className="icon" /> Products
          </li>
        </a>
        <a href="/Orders">
          <li className="sidebar-list-item">
            <BsFillGrid3X3GapFill className="icon" /> Orders
          </li>
        </a>
      </ul>
    </aside>
  );
}

export default Sidebar;
