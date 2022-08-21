import React, {FC} from "react";
import {ThemeProvider} from "styled-components";
import defaultTheme from "../styles/theme";

//higher order component to wrap application

function withTheme<T>(Component: FC<T>) {
  return (props: T) => (
    <ThemeProvider theme={defaultTheme}>
      <Component {...props} />
    </ThemeProvider>
  );
}

export {withTheme};
