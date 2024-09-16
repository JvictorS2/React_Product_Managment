import { useContext, useEffect, useState } from "react";
import {
  Button,
  Center,
  Grid,
  Heading,
  IconButton,
  ImagePage,
  LabelInput,
  Text,
  VStack,
} from "../../../components";
import "./Login.css";
import { loginFirebase, verifyLogin } from "../../../utils/auth";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../../context/authContext";
import { toast } from "react-toastify";

// hook form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Icons materail ui
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const { authStates } = useContext(authContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [isLoadingState, setLoadingState] = useState(false);

  // bloqueia o acesso a rotas não permitidas com base se o usuário está logado ou não
  useEffect(() => {
    verifyLogin(navigate);
  }, []);

  // Regras de validação

  const schema = yup
    .object({
      email: yup
        .string("Valor inválido")
        .email("O campo precisa ser um email válido ex: react@gmail.com")
        .required("Campo obrigatório"),
      password: yup.string("Valor inválido").required("Campo obrigatório"),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // realizar login
  // realizar login
  const loginByEmailPassword = async (data) => {
    // states to Sign in
    setLoadingState(true);
    try {
      // realizar o processo de login
      const response = await loginFirebase(
        authStates.authFirebase,
        data.email,
        data.password
      );
      if (response) {
        //redireciona para o dashboard
        navigate("/dashboard");
      } else {
        toast.warning("Email não verificado!, favor verificar seu email", {
          position: "top-right",
          theme: "dark",
        });
        setLoadingState(false);
        return;
      }
    } catch (error) {
      toast.error("Credênciais inválidas!", {
        position: "top-right",
        theme: "dark",
      });
      setLoadingState(false);
    }
  };

  return (
    <Grid width="100%" height="100vh">
      <Grid
        zIndex={1}
        w={{ base: "100%", lg: "50%", xl: "40%" }}
        bg={{ base: "primary.100", md: "" }}
      >
        <form>
          <Center height="100vh">
            <VStack
              bg={{ md: "tertiary.300" }}
              p={{ base: 6, md: 16, xl: 38 }}
              borderRadius="md"
              space={6}
            >
              <Grid justifyContent="center" flexGrow={4}>
                <Heading color="text.100" alignSelf="center">
                  Log in
                </Heading>
              </Grid>
              <VStack space={5}>
                <LabelInput
                  control={control}
                  name={"email"}
                  placeholder="Insira o email"
                  title="Email"
                  errorMessage={errors.email?.message}
                  InputLeftElement={
                    <IconButton
                      icon={<EmailIcon />}
                      size={5}
                      mx="2"
                      color="muted.400"
                    />
                  }
                ></LabelInput>
                <LabelInput
                  control={control}
                  name={"password"}
                  placeholder="Insira a senha"
                  title="Senha"
                  type={show ? "password" : "text"}
                  errorMessage={errors.password?.message}
                  InputRightElement={
                    <IconButton
                      icon={show ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      size={5}
                      mx="2"
                      color="muted.400"
                      onPress={() => setShow(!show)}
                    />
                  }
                ></LabelInput>
                <Grid>
                  <Text
                    cursor="pointer"
                    alignSelf="end"
                    textDecorationLine="underline"
                    onPress={() => navigate("/recovery")}
                  >
                    Esqueci minha senha
                  </Text>
                </Grid>
                <Grid>
                  <Button
                    alignSelf="center"
                    onPress={handleSubmit(loginByEmailPassword)}
                    isLoading={isLoadingState}
                    isLoadingText="verificando..."
                  >
                    Log in
                  </Button>
                </Grid>
              </VStack>
              <Grid justifyContent="end" flexGrow={10}>
                <Text
                  cursor="pointer"
                  alignSelf="end"
                  textDecorationLine="underline"
                  onPress={() => navigate("/signup")}
                >
                  Criar nova conta
                </Text>
              </Grid>
            </VStack>
          </Center>
        </form>
      </Grid>
      <ImagePage></ImagePage>
    </Grid>
  );
};

export default Login;
