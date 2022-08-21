import {NavigationMenuStyle} from "./style";
import {HamburgerIcon, Logo} from "../../../assets/icons";
import Avatar from "../Avatar";
import {FC} from "react";
import {withTheme} from "../../../hoc/withTheme";

interface NavigationMenuProps {
  name: string
}

const NavigationMenu: FC<NavigationMenuProps> = ({name}) => {
  return <NavigationMenuStyle data-testid={"bird-navigation-menu"}>
    <div data-testid={"bird-brand-section"}>
      <Logo/>
      <HamburgerIcon/>
    </div>
    <nav data-testid={"bird-nav-items"}>
      <Avatar name={"John Doe"}/>
      <h5>John Doe</h5>
    </nav>
  </NavigationMenuStyle>
}


export default withTheme<NavigationMenuProps>(NavigationMenu)
