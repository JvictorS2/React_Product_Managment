import { Spinner } from "native-base";
import { Grid } from "../../..";

const SpinnerSuspense = () => {
  return (
    <Grid  h="100%" w="100vw" position="relative" bg="primary.100" >
      <Spinner
        position="absolute"
        top="50%"
        left="50%"
        style={{ transform: "translate(-50%, -50%)" }}
        size={"lg"}
        color="secondary.100"
      ></Spinner>
    </Grid>
  );
};

export default SpinnerSuspense;
