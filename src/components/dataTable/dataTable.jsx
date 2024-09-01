import { FlatList } from "native-base";
import { Divider, FloatBtn, Grid, HStack, IconButton, Modal, ModalCreateProduct, Text } from "..";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {  useState } from "react";


/* 
  Tabela para visualização de dados durante o uso da API firebase ou outras
*/

const DataTable = ({HeadTable,data}) => {
  // Cabeçalho da tabela
  const [openModal, setOpenModal] = useState(false);


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
        <FlatList
          data={data}
          renderItem={CiItemTable}
          keyExtractor={(item) => item.ID}
        />
      </Grid>
      <FloatBtn onPress={() => setOpenModal(true)} bg={"secondary.100"}>
        <IconButton
          icon={<AddRoundedIcon fontSize="large" />}
          color="#FEF7FF"
          pointerEvents="none"
        />
      </FloatBtn>
      <Modal open={openModal} setOpen={setOpenModal}>
        <ModalCreateProduct></ModalCreateProduct>
      </Modal>
    </>
  );
};

export default DataTable;
