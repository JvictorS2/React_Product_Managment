import { useEffect, useState } from "react";
import {
  Avatar,
  Center,
  Container,
  Grid,
  Heading,
  HStack,
  Input,
  VStack,
} from "../../components";


import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { verifyLogin } from "../../utils/auth";

const SignUp = (props) => {
  // states to Sign in
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // bloqueia o acesso a rotas não permitidas com base se o usuário está logado ou não
  useEffect(() => {
    verifyLogin(navigate);
  }, );

  return (
    <Grid width="100%" height="100vh" bg="primary.200">
      <Center height="100%">
        <VStack p={50} borderRadius="md" space={4}>
          <Center>
            <Heading>Cadastre-se</Heading>
          </Center>
          <Grid>
            <Input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              shadow={2}
              bg="coolGray.800"
              placeholder="Insira seu email"
            />
          </Grid>
          <Grid>
            <Input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              shadow={2}
              bg="coolGray.800"
              placeholder="Insira sua senha"
            />
          </Grid>
        </VStack>
      </Center>
    </Grid>
  );
};

export default SignUp;
