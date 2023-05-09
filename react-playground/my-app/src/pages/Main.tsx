import React from "react";
import { useNavigate } from "react-router";

const Main = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate("/map");
        }}
      >
        To map
      </button>
    </>
  );
};

export default Main;
