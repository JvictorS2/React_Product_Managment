import { FlatList } from "native-base";
import { Grid, HStack, Text } from "..";

/* 
========================================================================================

  Tabela para visualização de dados durante o uso da API firebase ou outras

========================================================================================
*/

const DataTable = (props) => {
    // Cabeçalho da tabela

  const CheadTable = () => {
    return (
      <>
        {props.HeadTable.map((item, index) => (
          <Grid key={index} flex={item.size}>
            <Text textAlign="center" bold>
              {item.name}
            </Text>
          </Grid>
        ))}
      </>
    );
  };
  // Item da tabela
  const CiItemTable = ({ item }) => {
    const valuesArray = Object.values(item);
    
    return (
      <>
        <Grid>
          <HStack p={3} justifyContent="space-between" >
            {valuesArray.map((item, index) => (
              <Grid key={index} flex={props.HeadTable[index].size}>
                <Text textAlign="center">{item}</Text>
              </Grid>
            ))}
          </HStack>
        </Grid>
      </>
    );
  };

  // Tabela completa
  return (
    <>
      <Grid flexWrap='wrap' overflowX="scroll" bg="primary.100">
        <HStack bg="primary.600" p={3} justifyContent="space-between">
          <CheadTable></CheadTable>
        </HStack>
        {/* Redenriza os itens da tabela */}
        <FlatList
          data={props.data}
          renderItem={CiItemTable}
          keyExtractor={(item) => item.id}
        />
      </Grid>
    </>
  );
};

export default DataTable;
