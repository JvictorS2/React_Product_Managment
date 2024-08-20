// Autentificação do Login

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
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
      } catch (error) {
        console.log(error);
      }
    }
  } catch (error) {
    throw error;
  }
};

/* Sign up */

const signupFirebase = async (auth,email,password) => {
  try {
    await createUserWithEmailAndPassword(auth,email,password)
  } catch (error) {
    throw error;
  }
}

// Bloqueia o acesso a certas rotas dependendo se o usuário está logado ou não.
const verifyLogin = (navigate) => {
  // logado e não está na tela de login e recoveryPassword
  if (
    window.localStorage.getItem("user") &&
    window.location.pathname !== "/login" &&
    window.location.pathname !== "/recovery" &&
    window.location.pathname !== "/signup"
  ) {
    return;
    // logado mas está na tela de login ou password
  } else if (
    window.localStorage.getItem("user") &&
    (window.location.pathname === "/login" ||
      window.location.pathname === "/recovery" ||
      window.location.pathname === "/signup")
  ) {
    navigate("/Dashboard");
  } else if (
    !window.localStorage.getItem("user") &&
    (window.location.pathname === "/login" ||
      window.location.pathname === "/recovery" ||
      window.location.pathname === "/signup")
  ) {
    return;
  } else {
    navigate("/login");
  }
};

/* Recovery password by email */
const recoveryPasswordFirebase = async (auth, email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw error;
  }
};

// Log out
const logoutFirebase = async (auth,navigate) => {
  try {
    await signOut(auth);
    window.localStorage.removeItem("user");
    navigate("/login");
  } catch (error) {
    throw error;
  }
};

// exportação para outros arquivos
export {
  loginFirebase,
  verifyLogin,
  logoutFirebase,
  recoveryPasswordFirebase,
  signupFirebase,
};
