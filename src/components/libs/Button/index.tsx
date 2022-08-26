import {ButtonProps, ButtonStyle} from "./style";
import {FC} from "react";
import {withTheme} from "../../../hoc/withTheme";

const Button: FC<ButtonProps> = (props) => {
  return <ButtonStyle {...props}>
    {props.children}
  </ButtonStyle>
}


export default withTheme<ButtonProps>(Button);
