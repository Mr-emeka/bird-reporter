import styled from "styled-components";
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  textAlign,
  TextAlignProps,
  space,
  SpaceProps,
  grid,
  GridProps,
  system,
  ZIndexProps,
  zIndex,
  OverflowProps,
  overflow,
} from "styled-system";

const cursor = system({ cursor: true });

interface CursorProps {
  cursor: string;
}

const Div = styled.div<
  | BorderProps
  | TextAlignProps
  | BackgroundProps
  | LayoutProps
  | ColorProps
  | PositionProps
  | FlexboxProps
  | SpaceProps
  | CursorProps
  | GridProps
  | ZIndexProps
  | OverflowProps
  >`
  ${border}
  ${textAlign}
  ${background}
  ${layout}
  ${color}
  ${position}
  ${flexbox}
  ${space}
  ${cursor}
  ${grid}
  ${zIndex}
  ${overflow}
`;

export default Div;
