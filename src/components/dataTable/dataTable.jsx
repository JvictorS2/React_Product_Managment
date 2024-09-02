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
      <HStack justifyContent="space-between">
        {HeadTable.map((item, index) => (
          <Grid py={3} key={index} flex={item.size}>
            <Text textAlign="center" bold>
              {item.name}
            </Text>
          </Grid>
        ))}
      </HStack>
    );
  };
  // Item da tabela
  const CiItemTable = ({ item }) => {
    const valuesArray = Object.values(item);
    return (
      <>
        <HStack m={3} justifyContent="space-between">
          {valuesArray.map((item, index) => (
            <Grid py={1} key={index} flex={HeadTable[index].size}>
              <Text textAlign="center">{item}</Text>
            </Grid>
          ))}
          <Grid alignItems="center" flex={6}>
            <IconButton
              icon={<MoreHorizIcon fontSize="large" />}
              color="secondary.200"
              onPress={() => navigate(`/Product/Details/${item.id}`)}
            />
          </Grid>
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
            keyExtractor={(item) => item.ID}
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
