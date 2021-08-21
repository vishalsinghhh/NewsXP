import React from "react";
import './Components.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <Loader className=
      type="Puff"
      color="#424787"
      height={100}
      width={100}
    />
  );
};

export default Loading;
