/* My components */
import {
  Avatar,
  Center,
  Grid,
  IconButton,
  Text,
  VStack,
  Divider,
} from "../../components";

/* Material Drawer */
import Drawer from "@mui/material/Drawer";
/* Materail Icons */
import LocalGroceryStoreRoundedIcon from "@mui/icons-material/LocalGroceryStoreRounded";
import StackedLineChartRoundedIcon from "@mui/icons-material/StackedLineChartRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import { logoutFirebase } from "../../utils/auth";
import { useContext } from "react";
import { MyContext } from "../../context/statesGlobal";


const TemporaryDrawer = (props) => {
  const { dataGlobal } = useContext(MyContext);

  const DrawerList = (
    <Grid
      w="70vw"
      flex={1}
      bg="primary.100"
      onPress={() => props.setOpen(!props.open)}
    >
      <Center flex={5} bg="primary.100">
        <IconButton
          icon={
            <LocalGroceryStoreRoundedIcon
              sx={{
                fontSize: 52,
              }}
            />
          }
          color="secondary.200"
        />
      </Center>
      <Divider m={4} w="70wv" />

      <VStack flex={16} space={2} px={2}>
        <Grid flexDirection="row" alignItems="center">
          <IconButton
            icon={<HomeRoundedIcon />}
            color="secondary.200"
            onPress={() => props.navigate("/")}
          />
          <Text onPress={() => props.navigate("/")} bold>
            Ínicio{" "}
          </Text>
        </Grid>
        <Grid flexDirection="row" alignItems="center">
          <IconButton
            icon={<StackedLineChartRoundedIcon />}
            color="secondary.200"
            onPress={() => props.navigate("/product")}
          />
          <Text onPress={() => props.navigate("/product")} bold>
            Estoque
          </Text>
        </Grid>
      </VStack>
      <Divider m={4} w="70wv" />
      <Grid flexDirection="row" alignItems="center" px={2} flex={3}>
        <Avatar
          source={{
            uri: "https://avatars.githubusercontent.com/u/106039120?s=400&u=733cda27eede61bc38d61fc23a765bdd198c3d7e&v=4",
          }}
          size="md"
        ></Avatar>
        <Grid flex={2} px={1}>
          <Text bold>JVicotS2</Text>
          <Text fontSize="xs">vssimoesdunck@gmail.com</Text>
        </Grid>
        <Grid>
          <IconButton
            icon={<ExitToAppRoundedIcon fontSize="large" />}
            color="tertiary.50"
            onPress={() =>
              logoutFirebase(dataGlobal.authFirebase, props.navigate)
            }
          />
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Drawer open={props.open} onClose={() => props.setOpen(!props.open)}>
      {DrawerList}
    </Drawer>
  );
};

export default TemporaryDrawer;
