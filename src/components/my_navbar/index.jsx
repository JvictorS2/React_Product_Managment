/* my components */
import { Grid, IconButton, TemporaryDrawer, ToggleDarkMode, VStack } from "..";
/* Hooks */
import React, {  useState } from "react";
/* Icons */
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const NavBar = (props) => {
  const [open, setOpen] = useState(false);
 
  return (
    <VStack bg="primary.100">
      <Grid
        px={3}
        py={2}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <IconButton
          icon={<MenuRoundedIcon fontSize="large" />}
          onPress={() => setOpen(!open)
          }
          color="secondary.200"
        />

        <ToggleDarkMode></ToggleDarkMode>
      </Grid>

      <TemporaryDrawer
        open={open}
        setOpen={setOpen}
        navigate={props.navigate}
      ></TemporaryDrawer>
    </VStack>
  );
};

export default NavBar;
