// Autentificação do Login

import {
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth/cordova";

// Realiza o processo de login por email e senha
const loginFirebase = async (auth, email, password) => {
  try {
    // Verifica se a senha e o email estão corretos
    const response = await signInWithEmailAndPassword(auth, email, password);
    // Dados do usuário logado
    const user = response.user;
 
    // Verifica se o email do usuário está verificado
    if (user.emailVerified) {
      // salva os dados de login no local storage da aplicação
      window.localStorage.setItem("user", JSON.stringify(user));
      return true;
    } else {
      try {
        // Envia um email de verificação para o endereço do usuário 
        await sendEmailVerification(user);
        return false;

      } catch(error) {
        console.log(error)
      }
    }
  } catch (error) {
    throw error;
  }
};

// Bloqueia o acesso a certas rotas dependendo se o usuário está logado ou não.
const verifyLogin = (navigate) => {
  // logado e não está na tela de login e recoveryPassword
  if (
    window.localStorage.getItem("user") &&
    window.location.pathname !== "/login" &&
    window.location.pathname !== "/recoveryPassword"
  ) {
    return;
    // logado mas está na tela de login ou password
  } else if (
    window.localStorage.getItem("user") &&
    (window.location.pathname === "/login" ||
      window.location.pathname === "/recoveryPassword")
  ) {
    navigate("/Dashboard");
  } else {
    // não está logado
    navigate("/Login");
  }
};

// Log out
const logoutFirebase = async (auth) => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

// exportação para outros arquivos
export { loginFirebase, verifyLogin, logoutFirebase };
