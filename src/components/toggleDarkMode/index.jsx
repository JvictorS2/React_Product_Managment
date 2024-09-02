
import { Grid, IconButton } from "../../components";

import React, { useContext } from "react";
import { globalContext, MyContext } from "../../context/statesGlobal";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
const ToggleDarkMode = () => {
   const { dataGlobal, setDataGlobal } = useContext(globalContext);

  return (
    <Grid justifyContent="center">
      <Grid py={2} flexDirection="row" justifyContent="space-between">
        <IconButton
          icon={
            dataGlobal.darkMode ? (
              <DarkModeIcon fontSize="large" />
            ) : (
              <WbSunnyIcon fontSize="large" />
            )
          }
          onPress={() =>
            setDataGlobal({
              ...dataGlobal,
              darkMode: !dataGlobal.darkMode,
            })
          }
          color="secondary.200"
        />
      </Grid>
    </Grid>
  );
};

export default ToggleDarkMode;
