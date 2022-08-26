import {ChangeEventHandler, FC} from "react";
import {InputStyle} from "./style";
import {withTheme} from "../../../../hoc/withTheme";

export interface InputProps {
  type: string
  value: any
  name: string
  placeholder?: string
  handleChange: ChangeEventHandler<HTMLInputElement>
}

const FormInput: FC<InputProps> = ({type, name, value, placeholder,handleChange}) => {
  return <InputStyle>
    <input type={type} name={name} value={value} placeholder={placeholder} onChange={handleChange} data-testid={"bird-input"}/>
  </InputStyle>
}


export default withTheme<InputProps>(FormInput);
