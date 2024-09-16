import "./recoveryPassword.css";

import { recoveryPasswordFirebase, verifyLogin } from "../../../utils/auth";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
import { authContext } from "../../../context/authContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import EmailIcon from "@mui/icons-material/Email";

const RecoveryPassword = () => {
  const navigate = useNavigate();
  const { authStates } = useContext(authContext);
  const [isLoadingState, setLoadingState] = useState(false);

  // bloqueia o acesso a rotas não permitidas com base se o usuário está logado ou não
  useEffect(() => {
    verifyLogin(navigate);
  }, []);

  const schema = yup
    .object({
      emailRecovery: yup
        .string("Valor inválido")
        .email("O campo precisa ser um email válido ex: react@gmail.com")
        .required("Campo obrigatório")
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const recoveryPassword = async (data) => {
    // states to Sign in
    setLoadingState(true);
    try {
      await recoveryPasswordFirebase(
        authStates.authFirebase,
        data.emailRecovery
      );
      toast.success("Email enviado com sucesso", {
        position: "top-right",
      });
      setLoadingState(false);
      navigate("/login");
    } catch (error) {
      toast.error("Falha ao enviar email", {
        position: "top-right",
      });
      setLoadingState(false);
    }
  };

  return (
    <Grid width="100%" height="100vh">
      <Grid
        w={{ base: "100%", lg: "50%", xl: "40%" }}
        bg={{ base: "primary.100", md: "" }}
        zIndex={1}
        alignSelf="end"
      >
        <form>
          <Center height="100vh">
            <VStack
              bg={{ md: "tertiary.300" }}
              p={{ base: 6, md: 16, xl: 38 }}
              borderRadius={8}
              opacity={0.9}
              space={12}
            >
              <Grid justifyContent="center" flexGrow={4}>
                <Heading fontSize="4xl" alignSelf="center">
                  Recuperar senha
                </Heading>
              </Grid>
              <VStack space={4}>
                <LabelInput
                  control={control}
                  name={"emailRecovery"}
                  placeholder="Insira o email de recuperação"
                  title="Email de recuperação"
                  errorMessage={errors.emailRecovery?.message}
                  InputLeftElement={
                    <IconButton
                      icon={<EmailIcon />}
                      size={5}
                      mx="2"
                      color="muted.400"
                    />
                  }
                ></LabelInput>

                <Grid>
                  <Button
                    alignSelf="center"
                    onPress={handleSubmit(recoveryPassword)}
                    isLoading={isLoadingState}
                    isLoadingText="verificando..."
                  >
                    Enviar solicitação
                  </Button>
                </Grid>
              </VStack>
              <Grid justifyContent="end" flexGrow={10}>
                <Text
                  alignSelf="end"
                  cursor="pointer"
                  color="text.200"
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

export default RecoveryPassword;
