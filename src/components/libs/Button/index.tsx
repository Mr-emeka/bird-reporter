import {ButtonProps, ButtonStyle} from "./style";
import {FC} from "react";

const Button: FC<ButtonProps> = (props) => {
  return <ButtonStyle {...props}>
    {props.children}
  </ButtonStyle>
}


export default Button;
