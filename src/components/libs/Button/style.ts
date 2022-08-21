import styled from "styled-components";
import {ButtonHTMLAttributes, ReactNode} from "react";
import ButtonState from "./types/ButtonState";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonState;
  padding?: string;
  children: ReactNode;
  border_radius?: string;

  [key: string]: any;
}

export const ButtonStyle = styled.button<ButtonProps>`
  width: auto;
  display: flex;
  align-items: center;
  font-weight: 400;
  height: 1.875rem;
  border-radius: ${(props) =>
  props.border_radius ? props.border_radius : props.theme.borderRadius.sm};
  background: ${(props) => props.theme.buttonPalette[props.variant].background};
  color: ${(props) => props.theme.buttonPalette[props.variant].color};
  outline: none;
  padding: ${(props) => (props.padding ? props.padding : "")};
  border: none;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
