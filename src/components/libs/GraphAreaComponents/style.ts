import styled from "styled-components";

export const BreakdownStyle = styled.ul`
  min-width: 521px;
  height: 53px;
  
  background: #F1FAFE;
  border-radius: 10px;
  display: flex;
  align-items:center;
  padding: 18px 23px;
  margin-bottom: 94px;
  
  li {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    
    color: #011F4B;
    margin: 0 44px 0 0;
    list-style-type:none;
  }
`

export const Span = styled.span`
  width: 15px;
  height: 15px;
  left: 842px;
  top: 215px;
  
  background: ${props=> props.color};
  border-radius: 5px;
  margin-right: 12px;
`

export const GraphStyle = styled.div`
  height: 269.4415588378906px;
  width: 269.99951171875px;
  margin: 0 auto;
`

export const TotalCardStyle = styled.div`
  min-width: 521px;
  height: 53px;
  background: #F1FAFE;
  border-radius: 10px;
  display: flex;
  align-items:center;
  padding: 17px 20px;
  margin-top: 87.5px;
  
  & > h3 {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */
  color: #011F4B;
  }
`
