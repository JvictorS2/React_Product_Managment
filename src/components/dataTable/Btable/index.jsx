import { useContext, useEffect, useState } from "react";
import { Grid, HStack, IconButton, Text } from "../..";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { deleteData } from "../../../utils/dataBaseActions";
import { authContext } from "../../../context/authContext";
import { toast } from "react-toastify";

const Btable = ({ item, HeadTable, navigate,Load }) => {
  const ObjectArrayToObjectKeysArray = (HeadTable) => {
    const array = [];
    HeadTable.forEach((item) =>
      item.name !== undefined ? array.push(item.name) : null
    );
    return array;
  };

  const deleteProduct = async (id) => {
   
    try {
      await deleteData(authStates.uid, "products", id);
      toast.success("Registro removido!", {
        position: "top-right",
      });
    } catch (error) {
      console.log(error)
      toast.error("Falha ao remover registro!", {
        position: "top-right",
      });
    }
  };


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
                color="secondary.200"
                onPress={() => deleteProduct(item.id)}
              />
            </Grid>
            <Grid>
              <IconButton
                icon={<ModeEditRoundedIcon fontSize="medium" />}
                color="secondary.200"
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
