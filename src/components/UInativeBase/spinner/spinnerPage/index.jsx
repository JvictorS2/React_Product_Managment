import { Spinner } from "native-base";

const SpinnerPage = () => {
    return (
      <>
        <Spinner
          position="absolute"
          top="50%"
          left="50%"
          style={{ transform: "translate(-50%, -50%)" }}
          size={"lg"}
          color="secondary.100"
        ></Spinner>
      </>
    );
}

export default SpinnerPage;