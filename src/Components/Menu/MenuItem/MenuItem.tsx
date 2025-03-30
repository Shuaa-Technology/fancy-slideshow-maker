import React from "react";
import style from "./MenuItem.module.scss";
import { IconType } from "react-icons"; // Import IconType from react-icons
interface MenuItemProps {
    icon: React.ReactElement<IconType>; // Use ReactElement with IconType
    text: string;
}

function MenuItem({ icon, text } :  MenuItemProps) {
    return (
        <div className={style.menuItem}>
            {icon}
            <span>{text}</span>
        </div>
    );
}

export default MenuItem; 
