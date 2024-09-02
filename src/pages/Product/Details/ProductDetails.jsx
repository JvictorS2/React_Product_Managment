import {
  Grid,
  IconButton,
  NavBar,
  Details,
} from "../../../components/";

import { getData } from "../../../utils/dataBaseActions";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../../context/authContext";
import { useNavigate, useParams } from "react-router-dom";
import UndoRoundedIcon from "@mui/icons-material/UndoRounded";
import { verifyLogin } from "../../../utils/auth";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { authStates } = useContext(authContext);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const load = async () => {
    const response = await getData(authStates.uid, "products/", id);
    setData(response);
  };

  useEffect(() => {
    verifyLogin(navigate);
  }, []);

  /* Receber os dados da API e seta em um estado */
  useEffect(() => {
    setIsLoading(true);
    load();
  }, []);

  /* Monitora o Loading */
  useEffect(() => {
    if (data !== null || data === 0) setIsLoading(false);
  }, [data]);

  return (
    <Grid bg="primary.100" h="100vh">
      <NavBar navigate={navigate}></NavBar>

      {isLoading ? "" : <Details data={data}  id={id} ></Details>}
      <IconButton
        position="absolute"
        left={16}
        top={2}
        icon={<UndoRoundedIcon fontSize="large" />}
        onPress={() => navigate("/product")}
        color="secondary.200"
      ></IconButton>
    </Grid>
  );
};

export default ProductDetails;
