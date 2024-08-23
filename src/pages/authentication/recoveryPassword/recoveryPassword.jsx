import "./recoveryPassword.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { recoveryPasswordFirebase, verifyLogin } from "../../../utils/auth";
import { Button, Center, Grid, Heading, Input, Text, VStack } from "../../../components";

const RecoveryPassword = (props) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // bloqueia o acesso a rotas não permitidas com base se o usuário está logado ou não
  useEffect(() => {
    verifyLogin(navigate);
  }, []);

  const recoveryPassword = async () => {
    // states to Sign in
    try {
      await recoveryPasswordFirebase(props.auth, email);

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
                Recuperar senha
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
                <Button
                  size="md"
                  width="70%"
                  alignSelf="center"
                  onPress={recoveryPassword}
                >
                  <Text>Enviar solicitação</Text>
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

export default RecoveryPassword;
