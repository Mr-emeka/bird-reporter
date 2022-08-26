import {BreakdownStyle, Span} from "./style";
import {FC, Fragment} from "react";

interface BreakdownProps {
  data: Array<Record<string, any>>
}

const Breakdown: FC<BreakdownProps> = ({data}) => {
  return <BreakdownStyle>
    {data.map(({value, color}, index) => {
      return <Fragment key={index + 1}>
        <Span color={color} />
        <li >{value}</li>
      </Fragment>
    })}
  </BreakdownStyle>
}


export default Breakdown;
