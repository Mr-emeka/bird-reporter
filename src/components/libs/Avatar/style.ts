import styled from "styled-components";

export interface AvatarWidgetProps {
  name: string
}

export const AvatarWidget = styled.div`
  min-width: 2.688rem;
  min-height: 2.688rem;
  background: ${props => props.theme.colors.yellow};
  border-radius: ${(props) => props.theme.borderRadius.sm};
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  
  /* Font */
  font-weight: 700;
  font-size: 23px;
  line-height: 27px;
  /* identical to box height */
  text-align: center;
  color: ${props => props.theme.colors.white};
`
