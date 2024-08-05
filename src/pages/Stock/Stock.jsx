import { useNavigate } from "react-router-dom";
import "./Stock.css";
import { useEffect, useState } from "react";
import { verifyLogin } from "../../utils/auth";
import { DataTable, Grid, Heading } from "../../components";
import axios from "axios";

const Stock = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  // bloqueia o acesso a rotas não permitidas com base se o usuário está logado ou não

  useEffect(() => {
    verifyLogin(navigate);
    GetDataByUrl();
  }, []);



  const GetDataByUrl = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = response.data;
      setData(FilterData(data));
    } catch (error) {
      throw error;
    }
  };

  const FilterData = async (data) => {
    const keysToKeep = ["id", "title", "category", "price"];

    const filteredObject = await data.map((item, index) =>
      Object.fromEntries(
        Object.entries(item).filter(([key]) => keysToKeep.includes(key))
      )
    );

    setData(filteredObject);
  };

  const HeadTable = [
    { name: "ID", size: 2 },
    { name: "Nome", size: 20 },
    { name: "Categoria", size: 5 },
    { name: "Preço", size: 5 },
  ];

  return (
    <Grid width="100%" height="100vh" bg="primary.800">
      <Grid height="8vh" justifyContent="center" alignItems="center">
        <Heading size="xl">Estoque</Heading>
      </Grid>
      <Grid>
        <DataTable data={data} HeadTable={HeadTable}></DataTable>
      </Grid>
    </Grid>
  );
};

export default Stock;
