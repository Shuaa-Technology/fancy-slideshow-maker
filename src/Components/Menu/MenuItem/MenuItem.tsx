import React from "react";
import style from "./MenuItem.module.scss";

interface MenuItemProps {
    icon: JSX.Element;
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
