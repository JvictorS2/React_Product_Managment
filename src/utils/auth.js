// Autentificação do Login

import { signInWithEmailAndPassword, signOut } from "firebase/auth/cordova";

// Login
const loginFirebase = async (auth, email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
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
