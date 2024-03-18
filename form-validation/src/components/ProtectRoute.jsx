import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectRoute = (props) => {
  // eslint-disable-next-line react/prop-types
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (!login) {
      navigate("/");
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectRoute;
