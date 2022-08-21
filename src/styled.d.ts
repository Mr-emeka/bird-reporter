// styled.d.ts
import "styled-components";

interface IPalette {
  background: string;
  color: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Record<string, any>;
    font: Record<string, any>;
    fontSize: Record<string, any>;
    borderRadius: Record<string, any>;
    buttonPalette: {
      primary: IPalette;
      secondary: IPalette;
      tertiary: IPalette;
    };
  }
}
