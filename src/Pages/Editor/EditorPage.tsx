import React from "react";
import LeftPanel from "./Layouts/LeftPanel/LeftPanel";
import RightPanel from "./Layouts/RightPanel/RightPanel";
import SideMenu from "./Layouts/SideMenu/SideMenu";
import TopMenu from "./Layouts/TopMenu/TopMenu";
import MainContainer from "./Layouts/MainContainer/MainContainer";

import style from "./EditorPage.module.css";

function EditorPage() {
    return (
        <div className={style.EditorPage}>
            <TopMenu></TopMenu>
            <div className={style.MainLayout}>
                <SideMenu></SideMenu>
                <LeftPanel></LeftPanel>
                <MainContainer />
                <RightPanel></RightPanel>
            </div>
        </div>
    );
}

export default EditorPage;
