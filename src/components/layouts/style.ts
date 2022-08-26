import styled from "styled-components";
import {device} from "../../helpers/breakpoints";

export const Frame = styled.div`
  display: flex;

  & > aside {
    padding: 2.563rem  2.5rem 0;
    top: 0;
    height: 100vh;
    @media ${device.tablet} {
      position: fixed !important;
    }
    & > div {
      display: flex;
      flex-direction: column;
      & > svg {
        margin-bottom: 1.313rem;
        cursor: pointer;
      }
    }
  }

  & > main {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-y: auto;
    padding: 2.188rem 6.25rem 0 0;
    
    & > h6 {
      font-size: ${props => props.theme.fontSize["h6"].fontSize};
      line-height:${props => props.theme.fontSize["h6"].lineHeight};
      font-style: normal;
      font-weight: 700;
      /* identical to box height */
      margin-top: 27px;

      color: ${props => props.theme.colors.purple};
    }
  }
`;
