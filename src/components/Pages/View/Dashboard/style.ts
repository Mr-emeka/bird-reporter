import styled from "styled-components";

export const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  
  & > div:nth-child(1){
    > h1 {
      font-style: normal;
      font-weight: 700;
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
