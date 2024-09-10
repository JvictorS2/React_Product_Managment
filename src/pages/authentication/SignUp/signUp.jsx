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

import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { signupFirebase, verifyLogin } from "../../../utils/auth";

//hook Form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import PersonIcon from "@mui/icons-material/Person";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import { authContext } from "../../../context/authContext";

const SignUp = (props) => {
  // Estados

  const [show, setShow] = useState(true);
  const { authStates } = useContext(authContext);
  const navigate = useNavigate();

  // bloqueia o acesso a rotas não permitidas com base se o usuário está logado ou não
  useEffect(() => {
    verifyLogin(navigate);
  });

  // Regras de validação

  const schema = yup
    .object({
      userName: yup
        .string("Valor inválido")
        .min(3, "O campo precisar ter mais de 3 caracteres")
        .max(30, "O campo não pode ter mais de 40 caracteres")
        .required("Campo obrigatório"),
      email: yup
        .string("Valor inválido")
        .email("O campo precisa ser um email válido ex: react@gmail.com")
        .required("Campo obrigatório"),
      password: yup
        .string("Valor inválido")
        .min(3, "O campo precisar ter mais de 3 caracteres")
        .max(50, "O campo não pode ter mais de 40 caracteres")
        .oneOf(
          [yup.ref("passwordConform"), null],
          "As senhas precisam ser iguais"
        )
        .required("Campo obrigatório"),
      passwordConform: yup
        .string("Valor inválido")
        .min(3, "O campo precisar ter mais de 3 caracteres")
        .max(50, "O campo não pode ter mais de 40 caracteres")
        .required("Campo obrigatório"),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const signup = async (data) => {
    try {
      await signupFirebase(authStates.authFirebase, data.email, data.password);
    } catch (error) {
      throw error;
    }
  };

  return (
    <Grid width="100%" height="100vh">
      <Grid
        zIndex={1}
        w={{ base: "100%", lg: "50%", xl: "40%" }}
        alignSelf="end"
        bg={{ base: "primary.100", md: "" }}
      >
        <form onSubmit={(event) => event.preventDefault}>
          <Center height="100vh">
            <VStack
              bg={{ md: "tertiary.300" }}
              p={{ base: 6, md: 16, xl: 38 }}
              borderRadius="md"
              space={8}
            >
              <Grid justifyContent="center" flexGrow={4}>
                <Heading fontSize="4xl" alignSelf="center">
                  Cadastro
                </Heading>
              </Grid>
              <VStack space={2}>
                <LabelInput
                  control={control}
                  name={"userName"}
                  placeholder="Insira o de usuário"
                  title="Usuário"
                  errorMessage={errors.userName?.message}
                  InputLeftElement={
                    <IconButton
                      icon={<PersonIcon />}
                      size={5}
                      mx="2"
                      color="muted.400"
                    />
                  }
                ></LabelInput>
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
                <LabelInput
                  control={control}
                  name={"passwordConform"}
                  placeholder="Confirmar senha"
                  title="Confirmar Senha"
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
                  <Button alignSelf="center" onPress={handleSubmit(signup)}>
                    Cadastrar
                  </Button>
                </Grid>
              </VStack>
              <Grid justifyContent="end" flexGrow={10}>
                <Text
                  bold
                  alignSelf="end"
                  cursor="pointer"
                  textDecorationLine="underline"
                  onPress={() => navigate("/login")}
                >
                  Login
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

export default SignUp;
