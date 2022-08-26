import React, {FC, Fragment, useEffect} from "react";
import {Frame} from "./style";
import NavigationMenu from "../libs/NavigationMenu";
import {DashboardIcon, GraphIcon, HomeIcon, LogOffIcon, PcIcon} from "../../assets/icons";
import {useDispatch, useSelector} from "react-redux";
import {getUserAsync} from "../../redux/modules/user/actions";
import {RootState} from "../../redux";

interface LayoutProps {
  [key: string]: any;
}

const MainDashboardLayout: FC<LayoutProps> = ({type, children, ...props}) => {
  const dispatch = useDispatch<any>()
  const {data} = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(getUserAsync())
    //eslint-disable-next-line
  }, [])

  return (
    <Fragment>
      <NavigationMenu name={`${data.firstName} ${data.lastName}`}/>
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
