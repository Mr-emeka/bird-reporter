import styled from "styled-components";
import {device} from "../../../../helpers/breakpoints";

export const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${device.tablet} {
   flex-direction: column;
  }
  & > div:nth-child(1){
    > h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      color: ${props => props.theme.colors.darkBlue};
    }
    > p {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: #7E8299;
    }
  }
  
  & > div:nth-child(2){
    display: flex;
    align-items:center;
    justify-content: space-between;
    
    & > div {
      margin-right: 23px;
    }
  }
`


export const NoReportSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: inherit;
  & > h3{    
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    
    color: #011F4B;
    margin-bottom: 4px;
  }
  & > p {
    max-width: 470px;
    min-height: 57px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    
    color: #7E8299;
    margin-bottom: 3.188rem;
  }
`;

export interface ReportStyleProps {
  generatedReport: boolean
}

export const ReportStyle = styled.div<ReportStyleProps>`
  display: flex;
  padding-top: 27px;
  @media ${device.tablet} {
   flex-direction: column;
  }
  & > div:nth-child(1){
    margin-right: ${props => props.generatedReport ? "31px" : "0"};
    padding: 18px 24px;
    width: ${(props) => (props.generatedReport ? "688px" : "100%")};
    
    background: #F1FAFE;
    border-radius: 10px;
  }
  & > div:nth-child(2){
    display: ${(props) => props.generatedReport ? "block" : "none"}
  }
`;


export const ReportHeader = styled.div`
  height: 71px;
  cursor: pointer;
  
  background: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 26px 24px;
  border-radius: 10px;
  margin: 34px 0 14px 0;

  & > h5 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */
    
    
    color: #011F4B;
  }
  & > h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 164.4%;
    /* or 26px */
    
    text-align: right;
    
    color: #011F4B;
  }
`
