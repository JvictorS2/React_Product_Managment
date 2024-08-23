import "./Stock.css";
/* hook */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
/* my */
import { verifyLogin } from "../../utils/auth";
import { DataTable, Grid, NavBar } from "../../components";
/* Externo */
import axios from "axios";


const Stock = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  // bloqueia o acesso a rotas não permitidas com base se o usuário está logado ou não
  useEffect(() => {
    verifyLogin(navigate);
    GetDataByUrl();
  }, []);


  /* Acessa os dados de uma API externa */
  const GetDataByUrl = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = response.data;
      setData(FilterData(data));
    } catch (error) {
      throw error;
    }
  };

  /* Filtrar os dados, deveolver apenas os dados com as keys no array */
  const FilterData = async (data) => {
    const keysToKeep = ["id", "title", "category", "price"];

    const filteredObject = await data.map((item, index) =>
      Object.fromEntries(
        Object.entries(item).filter(([key]) => keysToKeep.includes(key))
      )
    );

    setData(filteredObject);
  };

  /* Objeto usado no componente DataTable o nome se refere a coluna e
   size ao tamanho propocional que a coluna ocupa na tela */

  const HeadTable = [
    { name: "ID", size: 2 },
    { name: "Nome", size: 20 },
    { name: "Categoria", size: 5 },
    { name: "Preço", size: 5 },
  ];

  return (
    <Grid bg="primary.100" h="100vh">
      <NavBar navigate={navigate} auth={props.auth}></NavBar>
      <DataTable HeadTable={HeadTable} data={data}></DataTable>
    </Grid>
  );
};

export default Stock;
