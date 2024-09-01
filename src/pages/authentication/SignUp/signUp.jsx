import { useContext, useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Center,
  Container,
  Grid,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from "../../../components";

import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { signupFirebase, verifyLogin } from "../../../utils/auth";
import { MyContext } from "../../../context/statesGlobal";
import { authContext } from "../../../context/authContext";

const SignUp = (props) => {
  // states to Sign in
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { authStates, setAuthStates } = useContext(authContext);

  // bloqueia o acesso a rotas não permitidas com base se o usuário está logado ou não
  useEffect(() => {
    verifyLogin(navigate);
  });

  const signup = async () => {
    try {
      await signupFirebase(authStates.authFirebase, email, password);
    } catch (error) {
      throw error;
    }
  };

  return (
    <Grid width="100%" height="100vh" bg="primary.100">
      <form onSubmit={(event) => event.preventDefault}>
        <Center height="100vh">
          <VStack flex={1} p={50} borderRadius="md" space={2}>
            <Grid justifyContent="center" flexGrow={4}>
              <Heading fontSize="4xl" alignSelf="center">
                Cadastar
              </Heading>
            </Grid>
            <VStack space={6}>
              <Grid>
                <Input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Insira seu email"
                />
              </Grid>
              <Grid>
                <Input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Insira sua senha"
                />
              </Grid>
              <Grid>
                <Button
                  size="md"
                  width="70%"
                  alignSelf="center"
                  onPress={signup}
                >
                  <Text>Cadastrar</Text>
                </Button>
              </Grid>
            </VStack>
            <Grid justifyContent="end" flexGrow={10}>
              <Text
                bold
                alignSelf="center"
                fontSize="2xl"
                cursor="pointer"
                onPress={() => navigate("/login")}
              >
                Login
              </Text>
            </Grid>
          </VStack>
        </Center>
      </form>
    </Grid>
  );
};

export default SignUp;
