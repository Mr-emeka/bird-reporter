import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import TransparentLoader from "../../libs/TransparentLoader";

export const ReduxSuspense: React.FC = () => {
  const suspended = useSelector((state: RootState) => state.suspense);

  return suspended ? <TransparentLoader /> : null;
};
