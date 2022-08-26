import {FC} from "react";
import {SelectProps, SelectStyle} from "./style";
import {ArrowDownIcon} from "../../../../assets/icons";
import {withTheme} from "../../../../hoc/withTheme";

const Select: FC<SelectProps> = ({
                                   name,
                                   label,
                                   options,
                                   placeholder,
                                   icon,
                                   ...props
                                 }) => {
  return <SelectStyle>
    {label && <label htmlFor={props.id}>{label}</label>}
    {icon ? icon : <ArrowDownIcon className="arrow"/>}
    <select name={name} id={props.id} {...props} data-testid="select">
      <option value={""}>{placeholder}</option>
      {options.map((option, idx) => (
        <option value={option?.value} key={idx}>
          {option.text}
        </option>
      ))}
    </select>
  </SelectStyle>
}

export default withTheme<SelectProps>(Select);
