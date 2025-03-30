import React from "react";
import style from "./TopMenu.module.css";
import CollaboratorsList from "../../../../Components/Collaborators/CollaboratorsList";
import ModeSwitcher from "../../../../Components/ModeSwitcher/ModeSwitcher";

function TopMenu() {
  return (
      <div className={style.TopMenu}>

          <div  className={style.TopMenuLeft}>

              <img src="/fs_logo.png" alt="Fancy Slideshow Logo" className={style.logo}/>
          </div>
          <div className={style.TopMenuMiddle}>
                <ModeSwitcher />
          </div>

          <div className={style.TopMenuRight}>
              <CollaboratorsList />
          </div>
      </div>
  );
}

export default TopMenu;
