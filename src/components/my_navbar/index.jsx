/* my components */
import {
  Grid,
  IconButton,
  TemporaryDrawer,
  VStack,
} from "..";
/* Hooks */
import React, { useState } from "react";
/* Icons */
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const NavBar = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <VStack flex={1} shadow={4}>
      <Grid px={3} py={2} justifyContent="center" bg="primary.50">
        <IconButton
          icon={<MenuRoundedIcon fontSize="large" />}
          onPress={() => setOpen(!open)}
        />
      </Grid>
      {/* Drawer */}
      <TemporaryDrawer
        open={open}
        setOpen={setOpen}
        navigate={props.navigate}
        auth={props.auth}
      ></TemporaryDrawer>
    </VStack>
  );
};

export default NavBar;
