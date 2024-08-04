import "./LogOut.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { logoutFirebase, verifyLogin } from "../../../utils/auth";
import { Button } from "../../../components";

const LogOut = (props) => {
  const navigate = useNavigate();

  // bloqueia o acesso a rotas não permitidas com base se o usuário está logado ou não
  useEffect(() => {
    verifyLogin(navigate);
  }, []);
    
    const logout = async () => {
      try {
        logoutFirebase(props.auth);
        window.localStorage.removeItem("user");
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    };
    
  return (
    <>
          <h1>LogOut</h1>
          <Button onPress={() => logout()} >Log out</Button>
    </>
  );
};

export default LogOut;
