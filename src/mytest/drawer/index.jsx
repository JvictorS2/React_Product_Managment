import * as React from "react";
import Drawer from "@mui/material/Drawer";

import { Button, Grid } from "../../components";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Grid w='70vw' role="presentation" onPress={toggleDrawer(false)}>
      efgqerqewg
    </Grid>
  );

  return (
    <div>
      <Button onPress={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
