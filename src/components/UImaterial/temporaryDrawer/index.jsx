/* My components */
import {
  Avatar,
  Center,
  Grid,
  IconButton,
  Text,
  VStack,
  Divider,
  ToggleDarkMode,
  Logout,
} from "../../../components";

import { useContext } from "react";
import { authContext } from "../../../context/authContext";

/* Material Drawer */
import Drawer from "@mui/material/Drawer";
/* Materail Icons */
import LocalGroceryStoreRoundedIcon from "@mui/icons-material/LocalGroceryStoreRounded";
import StackedLineChartRoundedIcon from "@mui/icons-material/StackedLineChartRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CloseIcon from "@mui/icons-material/Close";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";


const TemporaryDrawer = (props) => {

  const { authStates } = useContext(authContext);

  const DrawerList = (
    <Grid
      w={{ base: "100vw", md: "50vw", lg: "30vw", xl: "25vw" }}
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
            Ínicio
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
        <Grid flexDirection="row" alignItems="center">
          <IconButton
            icon={<AddToPhotosIcon />}
            color="secondary.200"
            onPress={() => props.navigate("/product/new")}
          />
          <Text onPress={() => props.navigate("/product/new")} bold>
            Adicionar produto
          </Text>
        </Grid>
      </VStack>
      <Divider m={4} mb={0} w="70wv" />
      <Grid flexDirection="row" alignItems="center" gap={3} p={3} flex={2}>
        <Avatar
          source={{
            uri: "https://avatars.githubusercontent.com/u/106039120?s=400&u=733cda27eede61bc38d61fc23a765bdd198c3d7e&v=4",
          }}
          size="md"
        ></Avatar>
        <Grid flex={2} px={1}>
          <Text bold>{authStates.displayName}</Text>
          <Text fontSize="xs">{authStates.email}</Text>
        </Grid>
        <Grid>
          <Logout navigate={props.navigate}></Logout>
        </Grid>
      </Grid>
      <Grid
        position="absolute"
        w="100%"
        flexDirection="row"
        alignItems="center"
        p={2}
        justifyContent="space-between"
      >
        <IconButton
          icon={<CloseIcon fontSize="large" />}
          onPress={() => props.setOpen(!props.open)}
          color="secondary.200"
        ></IconButton>
        <ToggleDarkMode></ToggleDarkMode>
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
