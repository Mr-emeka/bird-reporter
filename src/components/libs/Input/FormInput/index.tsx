import {ChangeEventHandler, FC} from "react";
import {InputStyle} from "./style";

export interface InputProps {
  type: string
  value: any
  name: string
  placeholder: string
  handleChange: ChangeEventHandler<HTMLInputElement>
}

const FormInput: FC<InputProps> = ({type, name, value, placeholder,handleChange}) => {
  return <InputStyle>
    <input type={type} name={name} value={value} placeholder={placeholder} onChange={handleChange}/>
  </InputStyle>
}


export default FormInput;
