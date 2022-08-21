import styled from "styled-components";

export const NavigationMenuStyle = styled.header`
padding: 1.313rem 6.25rem 1.313rem  2.188rem;
border-bottom: 2px solid ${props => props.theme.colors.grey};
display: flex;
justify-content: space-between;

& > div:nth-child(1){
 display: flex;
 align-items:center;
 cursor: pointer;
 
 & > svg:nth-child(1){
   margin-right: 2.558rem;
 } 
}

& > nav {
  display: flex;
  align-items: center;
  h5 {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */
    
    text-align: right;
    
    color: ${props => props.theme.colors.purple};  
    margin-left: 0.688rem;
  }

}
`
