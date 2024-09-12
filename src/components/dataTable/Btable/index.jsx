import { useContext, useEffect, useState } from "react";
import { Grid, HStack, IconButton, Text } from "../..";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { deleteData } from "../../../utils/dataBaseActions";
import { authContext } from "../../../context/authContext";

const Btable = ({ item, HeadTable, navigate,Load }) => {
  const ObjectArrayToObjectKeysArray = (HeadTable) => {
    const array = [];
    HeadTable.forEach((item) =>
      item.name !== undefined ? array.push(item.name) : null
    );
    return array;
  };

  const deleteProduct = async (id) => {
    await deleteData(authStates.uid, "products", id);
    navigate("/product");
  };

  /*   const findOutIfInHeadTable = (findThis, HeadTableArray) => {
     Retorna true caso o findThis estaja contido no Headtable e false caso o contrário 

    HeadTable.forEach((item) =>
      item.name !== undefined ? HeadTableArray.push(item.name) : null
    );

    const result = HeadTableArray.find(
      (itemInHeadTable) => itemInHeadTable === findThis
    );

    return result !== undefined ? true : false;
  }; */
  const { authStates } = useContext(authContext);
  const [HeadTableArray, setHeadTableArray] = useState(
    ObjectArrayToObjectKeysArray(HeadTable)
  );

  useEffect(() => {
    setHeadTableArray(ObjectArrayToObjectKeysArray(HeadTable));
  }, [HeadTable]);
    
    useEffect(() => {
      Load()
    }, [item]);

  return (
    <>
      <HStack m={3} justifyContent="space-between">
        {HeadTableArray.map((itemArray, index) => {
          if (HeadTableArray[index] !== "id") {
            return (
              <Grid flex={HeadTable[index]?.size} py={1} key={itemArray}>
                <Text textAlign="center">
                  {HeadTable[index]?.name === "price" ? (
                    <>R$ {item[itemArray]}</>
                  ) : (
                    <> {item[itemArray]}</>
                  )}
                </Text>
              </Grid>
            );
          } else {
            return null;
          }
        })}

        {HeadTableArray.length >= 5 ? (
          <Grid flex={6} flexDirection="row" gap={4} justifyContent="center">
            <Grid>
              <IconButton
                icon={<MoreHorizIcon fontSize="medium" />}
                color="secondary.200"
                onPress={() => navigate(`/Product/Details/${item.id}`)}
              />
            </Grid>

            <Grid>
              <IconButton
                icon={<DeleteRoundedIcon fontSize="medium" />}
                color="#FEF7FF"
                onPress={() => deleteProduct(item.id)}
              />
            </Grid>
            <Grid>
              <IconButton
                icon={<ModeEditRoundedIcon fontSize="medium" />}
                color="#FEF7FF"
                onPress={() => navigate(`/Product/Edit/${item.id}`)}
              />
            </Grid>
          </Grid>
        ) : (
          <Grid flex={6} flexDirection="row" justifyContent="space-evenly">
            <Grid alignItems="center">
              <IconButton
                icon={<MoreHorizIcon fontSize="large" />}
                color="secondary.200"
                onPress={() => navigate(`/Product/Details/${item.id}`)}
              />
            </Grid>
          </Grid>
        )}
      </HStack>
    </>
  );
};

export default Btable;

/*  */
