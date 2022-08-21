import React, {FC, Fragment} from "react";
import {Frame} from "./style";
import NavigationMenu from "../libs/NavigationMenu";
import {DashboardIcon, GraphIcon, HomeIcon, LogOffIcon, PcIcon} from "../../assets/icons";

interface LayoutProps {
  [key: string]: any;
}

const MainDashboardLayout: FC<LayoutProps> = ({type, children, ...props}) => {


  return (
    <Fragment>
      <NavigationMenu name={"John Doe"}/>
      <Frame>
        <aside>
          <div>
            <HomeIcon/>
            <DashboardIcon/>
            <GraphIcon/>
            <PcIcon/>
            <LogOffIcon/>
          </div>
        </aside>
        <main>
          {children}
        <h6>Terms&Conditions | Privacy policy</h6>
        </main>
      </Frame>
    </Fragment>
  );
};
export default MainDashboardLayout;
