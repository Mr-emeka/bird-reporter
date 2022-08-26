import React, { FC } from "react";
import { Provider } from "react-redux";
import getStore from "../redux";

function withProvider<T>(Component: FC<T>) {
  return (props: T) => (
    <Provider store={getStore()}>
      <Component {...props} />
    </Provider>
  );
}

export { withProvider };
