import React from "react";
import style from "./LeftPanel.module.scss";
import { FaFont, FaImage, FaShapes, FaUser } from "react-icons/fa";
import MenuItem from "../../../../Components/Menu/MenuItem/MenuItem";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import ImageList from "../../../../Components/Assets/Images/ImagesList";

function LeftPanel() {

  return (
    <div className={style.LeftPanel}>
      <Tabs className={style.reactTabs}>
        <TabList className={style.tabList}>
          <Tab className={style.tabsItem}>
            <MenuItem icon={<FaImage />} text="Images" />
          </Tab>
          <Tab className={style.tabsItem}>
            <MenuItem icon={<FaShapes />} text="Shapes" />
          </Tab>
          <Tab className={style.tabsItem}>
            <MenuItem icon={<FaFont />} text="Text" />
          </Tab>
          <li className={style.accountItem}>
            <MenuItem icon={<FaUser />} text="Account" />
          </li>
        </TabList>

        <div className={style.tabContent}>
          <TabPanel className={style.tabsPanel}>
             <ImageList></ImageList>
          </TabPanel>
          <TabPanel className={style.tabsPanel}>
            <h2>Content for Shapes</h2>
          </TabPanel>
          <TabPanel className={style.tabsPanel}>
            <h2>Content for Text</h2>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
}

export default LeftPanel;
