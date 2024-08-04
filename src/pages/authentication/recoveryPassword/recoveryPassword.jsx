import "./recoveryPassword.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { verifyLogin } from "../../../utils/auth";

const ForgetMyPassword = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    verifyLogin(navigate);
  }, []);

  return (
    <>
      <h1>ForgetMyPassword</h1>
    </>
  );
};

export default ForgetMyPassword;
