import React from "react";
import style from "./TopMenu.module.css";
import CollaboratorsList from "../../../../Components/Collaborators/CollaboratorsList";
import ModeSwitcher from "../../../../Components/ModeSwitcher/ModeSwitcher";
import ZoomSelector from "../../../../Components/ZoomSelector/ZoomSelector";

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
              <button className="bg-indigo-700 text-sm text-white p-4 h-10 flex items-center rounded-md">
                  Share
              </button>
              <ZoomSelector />
          </div>

      </div>
  );
}

export default TopMenu;
