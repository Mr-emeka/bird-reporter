import React from "react";
import Div from "../Div";
import { ScaleLoader } from "react-spinners";

const TransparentLoader: React.FC = () => {
  return (
    <Div
      position="fixed"
      height="100vh"
      width="100vw"
      background="#444b"
      zIndex={30}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <ScaleLoader color="#F6CA00" />
    </Div>
  );
};

export default TransparentLoader;
