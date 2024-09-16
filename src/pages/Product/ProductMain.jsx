/* hook */
import { useContext, useEffect, useState } from "react";
/* my */
import { verifyLogin } from "../../utils/auth";
import { DataTable, Grid, NavBar, SpinnerPage } from "../../components";
/* Externo */
import { authContext } from "../../context/authContext";
import { getAllData } from "../../utils/dataBaseActions";
import { useNavigate } from "react-router-dom";
import { useBreakpointValue } from "native-base";
import { toast } from "react-toastify";

/* Lógica para carrega os dados:
1° cenárii: refresh na página, sempre que ocorre um refresh na página proprosital aparecerá as vezes
um butão para carregar os dados manualmente quando clicado ele some e carrega os dados.
2° cenário: banco vazio, quando vazio aparece o butão para carregar os dados caso não consiga, pois está vazio,
ele some
3° cenário: Carregamento normal, a página carrega os dados com o loading normalmente.
*/

const Stock = () => {
  
  /* Quando a página sofre refresh proposital as vezes os dados não são carregados, para resolver isso este
  estado exibi um butão para tentar carregar os dados manualmente */
  const Load = async () => {
    /* Carrega os dados brutos do Banco de dados */
    try {
      
      const response = await getAllData(authStates.uid, "products");
      setData(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };


  const HeadTable = useBreakpointValue({
    base: [
      { name: "id" },
      { name: "name", size: 10, namePort: "Nome" },
      { size: 6, namePort: "Ações" },
    ], // Para telas pequenas (base)
    sm: [
      { name: "id" },
      { name: "name", size: 10, namePort: "Nome" },
      { name: "price", size: 6, namePort: "Preço" },
      { size: 6, namePort: "Ações" },
    ], // Para telas médias
    md: [
      { name: "id" },
      { name: "name", size: 10, namePort: "Nome" },
      { name: "price", size: 5, namePort: "Preço" },
      { name: "stock", size: 5, namePort: "Estoque" },
      { size: 6, namePort: "Ações" },
    ],
    lg: [
      { name: "id" },
      { name: "name", size: 10, namePort: "Nome" },
      { name: "price", size: 5, namePort: "Preço" },
      { name: "stock", size: 5, namePort: "Estoque" },
      { name: "provider", size: 5, namePort: "Fornecedor" },
      { size: 6, namePort: "Ações" },
    ],
  });

  const navigate = useNavigate();
  const { authStates } = useContext(authContext);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // bloqueia o acesso a rotas não permitidas com base se o usuário está logado ou não
  useEffect(() => {
    verifyLogin(navigate);
  }, []);

  /* Receber os dados da API (dados brutos) e seta no dataBrut */
  useEffect(() => {
    Load();
    
  }, []);


  return (
    <Grid bg="primary.100" h="100vh">
      <NavBar navigate={navigate}></NavBar>

      {isLoading ? (
        <>
          <SpinnerPage />
        </>
      ) : (
        <DataTable
          HeadTable={HeadTable}
            data={data}
            navigate={navigate}
            Load={Load}
        ></DataTable>
      )}
    </Grid>
  );
};

export default Stock;
