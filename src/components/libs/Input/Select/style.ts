import {ReactElement} from "react";
import styled from "styled-components";
import {device} from "../../../../helpers/breakpoints";

export interface OptionProp {
  value: string;
  text: string;
}

export interface SelectProps {
  name: string;
  label?: string;
  options: Array<OptionProp>;
  disabled?: boolean;
  icon?: ReactElement;

  [key: string]: any;
}


export const SelectStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  

  label {
    font-style: normal;
    font-weight: normal;
    font-size: ${(props) => props.theme.fontSize["h3"].fontSize};
    line-height: ${(props) => props.theme.fontSize["h3"].lineHeight};
  }

  select {
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
    height: 1.875rem;
    margin: 0.375rem 0;
    padding: 0.5rem 0.625rem;
    background: ${(props) => props.theme.colors.blue};
    box-sizing: border-box;
    border-radius: ${(props) => props.theme.borderRadius.sm};
    outline: none;
    border: none;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    min-width: 135px;
    color: ${props=> props.theme.colors.white};
  }

  .arrow {
    top: 1rem;
    right: 0.513rem;
    position: absolute;
  }

  /* Inside Auto Layout */
  margin: 0.375rem 0;
  // @media ${device.tablet} {
  //   min-width: 100%;
  // }
`;
