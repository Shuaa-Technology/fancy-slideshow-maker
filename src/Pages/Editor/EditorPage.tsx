import React from "react";
import LeftPanel from "./Layouts/LeftPanel/LeftPanel";
import RightPanel from "./Layouts/RightPanel/RightPanel";
import SideMenu from "./Layouts/SideMenu/SideMenu";
import TopMenu from "./Layouts/TopMenu/TopMenu";
import Viewport from "./Layouts/Viewport/Viewport";

import style from "./EditorPage.module.css";

function EditorPage() {
    return (
        <div className={style.EditorPage}>
            <TopMenu></TopMenu>
            <div className={style.MainLayout}>
                <SideMenu></SideMenu>
                <LeftPanel></LeftPanel>
                <Viewport></Viewport>
                <RightPanel></RightPanel>
            </div>
        </div>
    );
}

export default EditorPage;
