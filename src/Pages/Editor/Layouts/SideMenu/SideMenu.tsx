// SideMenu.jsx

import React from "react";
import style from "./SideMenu.module.css";
import { FaImage, FaShapes, FaFont, FaUser } from "react-icons/fa"; // Import icons from react-icons library

interface MenuItemProps {
    icon: JSX.Element;
    text: string;
}

function SideMenu() {
    return (
        <div className={style.SideMenu}>
            <div className={style.verticalMenu}>
                <MenuItem icon={<FaImage />} text="Images" />
                <MenuItem icon={<FaShapes />} text="Shapes" />
                <MenuItem icon={<FaFont />} text="Text" />

                <div className={style.bottomMenu}>
                    <MenuItem icon={<FaUser />} text="Account" />
                </div>
            </div>
        </div>
    );
}

// MenuItem.jsx


const MenuItem = ({ icon, text } :  MenuItemProps) => (
    <div className={style.menuItem}>
        {icon}
        <span>{text}</span>
    </div>
);

export default SideMenu;
