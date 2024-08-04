import { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Center,
  Container,
  Grid,
  Heading,
  HStack,
  Input,
  VStack,
} from "../../../components";
import "./Login.css";
import { loginFirebase, verifyLogin } from "../../../utils/auth";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

    // bloqueia o acesso a rotas não permitidas com base se o usuário está logado ou não
  useEffect(() => {
    verifyLogin(navigate);
  },[] );

  const loginByEmailPassword = async () => {
    // states to Sign in
    try {
      // realizar o processo de login
      const response = await loginFirebase(props.auth, email, password);
      console.log(response);
      // salva os dados de login no local storage da aplicação
      window.localStorage.setItem("user", JSON.stringify(response.user));
      //redireciona para o dashboard
      navigate("/dashboard");
    } catch (error) {
      throw error;
    }
  };

  return (
    <form onSubmit={(event) => event.preventDefault}>
      <Grid width="100%" height="100vh" bg="primary.200">
        <Center height="100%">
          <VStack p={50} borderRadius="md" space={4}>
            <Center>
              <Avatar size="2xl"></Avatar>
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
            <Grid>
              <Button onPress={loginByEmailPassword}>Log in</Button>
            </Grid>
          </VStack>
        </Center>
      </Grid>
    </form>
  );
};

export default Login;
