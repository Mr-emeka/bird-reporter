import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import TransparentLoader from "../../libs/TransparentLoader";
import {withTheme} from "../../../hoc/withTheme";
import {withProvider} from "../../../hoc/withProvider";

 const ReduxSuspense: React.FC = () => {
  const suspended = useSelector((state: RootState) => state.suspense);

  return suspended ? <TransparentLoader /> : null;
};

export default withProvider(withTheme(ReduxSuspense))
