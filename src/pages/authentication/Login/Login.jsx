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
import "./Login.css";
import { loginFirebase, verifyLogin } from "../../../utils/auth";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../../context/statesGlobal";

const Login = () => {
  const { dataGlobal, setDataGlobal } = useContext(MyContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // bloqueia o acesso a rotas não permitidas com base se o usuário está logado ou não
  useEffect(() => {
    verifyLogin(navigate);
  }, []);

  const loginByEmailPassword = async () => {
    // states to Sign in
    try {
      // realizar o processo de login
      const response = await loginFirebase(
        dataGlobal.authFirebase,
        email,
        password
      );
      if (response) {
        //redireciona para o dashboard
        navigate("/dashboard");
      } else {
        alert("email não verificado");
        return;
      }
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
              <Heading fontSize="4xl" color="text.100" alignSelf="center">
                Log in
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
                  onPress={loginByEmailPassword}
                >
                  <Text>Log in</Text>
                </Button>
              </Grid>
              <Grid>
                <Text
                  bold
                  alignSelf="center"
                  cursor="pointer"
                  onPress={() => navigate("/recovery")}
                >
                  Esqueci minha senha
                </Text>
              </Grid>
            </VStack>
            <Grid justifyContent="end" flexGrow={10}>
              <Text
                bold
                alignSelf="center"
                fontSize="2xl"
                cursor="pointer"
                onPress={() => navigate("/signup")}
              >
                Cadastrar
              </Text>
            </Grid>
          </VStack>
        </Center>
      </form>
    </Grid>
  );
};

export default Login;

