import styles from './style.module.css'
import { Grid, IconButton } from "../../components";

import React, { useContext } from "react";
import { MyContext } from "../../context/statesGlobal";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
const ToggleDarkMode = () => {
    const { dataGlobal, setDataGlobal } = useContext(MyContext);

  return (
    <Grid justifyContent="center" pr={2}>
      <Grid px={3} py={2} flexDirection="row" justifyContent="space-between" >
        <IconButton 
          icon={
            dataGlobal.darkMode ? (
              <WbSunnyIcon fontSize="large" />
            ) : (
              <DarkModeIcon fontSize="large" />
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