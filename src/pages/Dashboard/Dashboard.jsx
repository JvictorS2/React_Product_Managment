import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { useEffect } from "react";
import { verifyLogin } from "../../utils/auth";


const DashBoard = (props) => {
  const navigate = useNavigate();

  // bloqueia o acesso a rotas não permitidas com base se o usuário está logado ou não
  useEffect(() => {
    verifyLogin(navigate);
  }, []);

  return (
    <>
      <h1>DashBoard</h1>
    </>
  );
};

export default DashBoard;
