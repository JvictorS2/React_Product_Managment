import { useNavigate } from "react-router-dom";
import "./Product.css";
import { useEffect } from "react";
import { verifyLogin } from "../../utils/auth";


const Product = (props) => {
  const navigate = useNavigate();

  // bloqueia o acesso a rotas não permitidas com base se o usuário está logado ou não
  useEffect(() => {
    verifyLogin(navigate);
  }, []);

  return (
    <>
      <h1>Products</h1>
    </>
  );
};

export default Product;
