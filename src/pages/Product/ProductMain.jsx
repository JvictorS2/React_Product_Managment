/* hook */
import { useContext, useEffect, useRef, useState } from "react";
/* my */
import { verifyLogin } from "../../utils/auth";
import { Button, DataTable, Grid, NavBar, SpinnerPage } from "../../components";
/* Externo */
import { authContext } from "../../context/authContext";
import { getAllData } from "../../utils/dataBaseActions";
import { useNavigate } from "react-router-dom";
import { useBreakpointValue } from "native-base";

/* Lógica para carrega os dados:
1° cenárii: refresh na página, sempre que ocorre um refresh na página proprosital aparecerá as vezes
um butão para carregar os dados manualmente quando clicado ele some e carrega os dados.
2° cenário: banco vazio, quando vazio aparece o butão para carregar os dados caso não consiga, pois está vazio,
ele some
3° cenário: Carregamento normal, a página carrega os dados com o loading normalmente.
*/

const Stock = () => {
  const navigate = useNavigate();
  const { authStates } = useContext(authContext);
  const [data, setData] = useState([]);
  const [dataBrut, setDataBrut] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  /* Quando a página sofre refresh proposital as vezes os dados não são carregados, para resolver isso este
  estado exibi um butão para tentar carregar os dados manualmente */
  const [tryLoading, setTryLoading] = useState(false);

  const currentBreakpoint = useBreakpointValue({
    base: "base", // Para telas pequenas (base)
    sm: "sm", // Para telas médias
    md: "md",
    lg: "lg", // Para telas grandes
    xl: "xl", // Para telas extra grandes
  });

  const HeadTable = useBreakpointValue({
    base: [
      { name: "id" },
      { name: "name", size: 10 },
      { name: "Detalhe", size: 6 },
    ], // Para telas pequenas (base)
    sm: [
      { name: "id" },
      { name: "name", size: 10 },
      { name: "price", size: 6 },
      { name: "Detalhe", size: 6 },
    ], // Para telas médias
    md: [
      { name: "id" },
      { name: "name", size: 10 },
      { name: "price", size: 5 },
      { name: "stock", size: 5 },
      { name: "Detalhe", size: 6 },
    ],
    lg: [
      { name: "id" },
      { name: "name", size: 15 },
      { name: "price", size: 6 },
      { name: "stock", size: 5 },
      { name: "weight", size: 5 },
      { name: "validateDate", size: 5 },
      { name: "Detalhe", size: 6 },
    ], // Para telas grandes
    xl: [
      { name: "id" },
      { name: "name", size: 12 },
      { name: "price", size: 6 },
      { name: "stock", size: 5 },
      { name: "validateDate", size: 5 },
      { name: "weight", size: 5 },
      { name: "provider", size: 5 },
      { name: "Detalhe", size: 6 },
    ], // Para telas extra grandes
  });

  const Load = async () => {
    try {
      const response = await getAllData(authStates.uid, "products");
      setDataBrut(response);
    } catch (error) {
      console.log(error);
    }
  };

  const isFirstRender = useRef(true);

  // bloqueia o acesso a rotas não permitidas com base se o usuário está logado ou não
  useEffect(() => {
    verifyLogin(navigate);
  }, []);

  /* Receber os dados da API (dados brutos) e seta no dataBrut */
  useEffect(() => {
    Load();
  }, []);

  /* Caso os dados brutos tenham sido carregados, filtra eles e exibir na página */
  useEffect(() => {
    if (dataBrut !== null || dataBrut === 0) {
      FilterData(dataBrut);
      setIsLoading(false);
    }
  }, [dataBrut]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setIsLoading(true);
    FilterData(dataBrut);
    console.log(currentBreakpoint);
  }, [currentBreakpoint]);

  useEffect(() => {
    if (data !== null && data !== 0) {
      setIsLoading(false)
      
    }
  },[data])

  const FilterData = async (data) => {
    if (data !== 0) {
      setTryLoading(true);
      const keysToKeep = [];

      HeadTable.forEach((item) => keysToKeep.push(item.name));

      const filteredObject = await data.map((item, index) =>
        Object.fromEntries(
          Object.entries(item).filter(([key]) => keysToKeep.includes(key))
        )
      );
      
      setData(filteredObject);
    }
  };

  return (
    <Grid bg="primary.100" h="100vh">
      <NavBar navigate={navigate}></NavBar>

      {isLoading ? (
        <>
          <SpinnerPage />
         
        </>
      ) : (
        <>
          <DataTable HeadTable={HeadTable} data={data}></DataTable>
          {tryLoading ? (
            ""
          ) : (
            <Button
              position="absolute"
              top="60%"
              left="50%"
              style={{ transform: "translate(-50%, -50%)" }}
              onPress={() => {
                setTryLoading(true);
                Load();
              }}
              w="30%"
            >
              Tentar Carregar dados manualmente
            </Button>
          )}
        </>
      )}
    </Grid>
  );
};

export default Stock;
