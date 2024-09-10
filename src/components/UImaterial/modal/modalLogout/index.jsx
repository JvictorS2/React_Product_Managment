import { Grid, Heading, Button, Text, Divider } from "../../..";
import { useContext } from "react";
import { authContext } from "../../../../context/authContext";
import { logoutFirebase } from "../../../../utils/auth";

const ModalLogout = ({navigate, setOpen, open}) => {
  const { authStates } = useContext(authContext);

  return (
    <Grid
      color="#fff"
      position="absolute"
      w={{ base: "100vw", md: "auto" }}
      top="50%"
      left="50%"
          p={8}
          m={2}
      bg="primary.100"
      borderRadius={4}
      style={{ transform: "translate(-50%, -50%)" }}
      gap={4}
    >
      <Grid>
        <Heading>Deseja mesmo sair? </Heading>
      </Grid>
      <Divider/>
      <Grid gap={4} flexDirection={{md:'row'}}>
        <Button w={{ md: "auto" }} onPress={() => setOpen(!open)}>
          Cancelar
        </Button>
        <Button
          w={{ md: "auto" }}
          bg="tertiary.200"
          onPress={() => logoutFirebase(authStates.authFirebase, navigate)}
        >
          Sair
        </Button>
      </Grid>
    </Grid>
  );
};

export default ModalLogout;
