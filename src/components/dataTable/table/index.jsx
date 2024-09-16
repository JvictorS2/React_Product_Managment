import { FlatList } from "native-base";
import { Divider, FloatBtn, Grid, IconButton } from "../..";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Htable from "../Htable";
import Btable from "../Btable";

/* 
  Tabela para visualização de dados durante o uso da API firebase ou outras
*/

const DataTable = ({ HeadTable, data, navigate,Load }) => {

  // Tabela completa
  return (
    <>
      <Grid px={1} flex={1} bg="primary.100">
        
        <Htable HeadTable={HeadTable}></Htable>
        <Divider mb={2} />
        {/* Redenriza os itens da tabela */}
        {data != null ? (

          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Btable item={item} HeadTable={HeadTable} navigate={navigate} Load={Load} />
            )}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <></>
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
