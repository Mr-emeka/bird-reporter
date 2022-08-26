import {TotalCardStyle} from "./style";
import {FC} from "react";
import {withTheme} from "../../../hoc/withTheme";


interface TotalCardProps {
  text: string
  amount: string
}

const TotalCard: FC<TotalCardProps> = ({text, amount }) => {
  return <TotalCardStyle data-testid={"total-card"}>
    <h3 data-testid={'h3-text'}>{text} | {amount}</h3>
  </TotalCardStyle>
}


export default withTheme<TotalCardProps>(TotalCard);
