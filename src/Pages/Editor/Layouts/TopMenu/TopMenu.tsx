import React from "react";
import style from "./TopMenu.module.css";
import CollaboratorsList from "../../../../Components/Collaborators/CollaboratorsList";

function TopMenu() {
  return (
      <div className={style.TopMenu}>
          <CollaboratorsList />
      </div>
  );
}

export default TopMenu;
