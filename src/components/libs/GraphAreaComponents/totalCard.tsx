import {TotalCardStyle} from "./style";
import {FC} from "react";


interface TotalCardProps {
  text: string
  amount: string
}

const TotalCard: FC<TotalCardProps> = ({text = "GATEWAY TOTAL", amount = "4,000 USD"}) => {
  return <TotalCardStyle>
    <h3>{text} | {amount}</h3>
  </TotalCardStyle>
}


export default TotalCard;
