import { FlatList } from "native-base";
import { Divider, FloatBtn, Grid, HStack, IconButton, Text } from "..";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useNavigate } from "react-router-dom";

/* 
  Tabela para visualização de dados durante o uso da API firebase ou outras
*/

const DataTable = ({ HeadTable, data }) => {
  const navigate = useNavigate();
  // Cabeçalho da tabela

  const CheadTable = () => {
    return (
      <Grid bg="secondary.100">
        <HStack justifyContent="space-between">
          {HeadTable.map((item, index) =>
            /* Bloqueia o acesso ao id */
            item.name !== "id" ? (
              <Grid py={3} key={index} flex={item.size}>
                <Text textAlign="center" bold>
                  {item.name}
                </Text>
              </Grid>
            ) : (
              ""
            )
          )}
        </HStack>
      </Grid>
    );
  };
  // Item da tabela
  const CiItemTable = ({ item }) => {

    
    
    return (
      <>
        <HStack m={3} justifyContent="space-between">
          {/* {valuesArray.map((item, index) =>
              Bloqueia o acesso ao id  
            HeadTable[index].name !== "id" ? (
              <Grid flex={HeadTable[index].size} py={1} key={index}>
                <Text textAlign="center">
                  
                  {HeadTable[index].name === "price" ? (
                    <>R$ {item}</>
                  ) : (
                    <> {item}</>
                  )}
                </Text>
              </Grid>
            ) : (
              <></>
            )
          )} */}

          <Grid flex={6} alignItems="center">
            <IconButton
              icon={<MoreHorizIcon fontSize="large" />}
              color="secondary.200"
              onPress={() => navigate(`/Product/Details/${item.id}`)}
            />
          </Grid>

          {/* <Grid flex={6} flexDirection="row" justifyContent="space-evenly">
            <Grid alignItems="center">
              <IconButton
                icon={<MoreHorizIcon fontSize="large" />}
                color="secondary.200"
                onPress={() => navigate(`/Product/Details/${item.id}`)}
              />
            </Grid>
            <Grid alignItems="center">
              <IconButton
                icon={<MoreHorizIcon fontSize="large" />}
                color="secondary.200"
                onPress={() => navigate(`/Product/Details/${item.id}`)}
              />
            </Grid>
            <Grid alignItems="center">
              <IconButton
                icon={<MoreHorizIcon fontSize="large" />}
                color="secondary.200"
                onPress={() => navigate(`/Product/Details/${item.id}`)}
              />
            </Grid> */}
        </HStack>
      </>
    );
  };

  // Tabela completa
  return (
    <>
      <Grid px={1} flex={1} bg="primary.100">
        <CheadTable></CheadTable>
        <Divider mb={2} />
        {/* Redenriza os itens da tabela */}
        {data != null ? (
          <FlatList
            data={data}
            renderItem={CiItemTable}
            keyExtractor={(item) => item.id}
          />
        ) : (
          ""
        )}
      </Grid>
      <FloatBtn
        position={"absolute"}
        right={4}
        bottom={4}
        onPress={() => navigate("/Product/new")}
        bg={"secondary.100"}
      >
        <IconButton
          icon={<AddRoundedIcon fontSize="large" />}
          color="#FEF7FF"
          pointerEvents="none"
        />
      </FloatBtn>
    </>
  );
};

export default DataTable;
