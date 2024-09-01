import { onValue, ref, remove, set } from "firebase/database";

const writeUserData = async (db, uid, email) => {
  try {
    const idFinal = await findCurrentId(db, uid);
    const idCurrent = parseInt(idFinal[idFinal.length - 1], 10);

    const dbRef = ref(db, `users/${uid}/products/${idCurrent + 1}`);

    set(dbRef, {
      ID: idCurrent + 1,
      email: "vssimoes@gamil.com",
    });

    alert("ok");
  } catch (error) {
    throw error;
  }
};

// Função para ler dados do usuário
const readUserData = (db, uid, setData) => {
  const dbRef = ref(db, `users/${uid}/products`);

  onValue(dbRef, (snapshot) => {
    const dado = snapshot.val();
    setData(dado);
  });
};

/* remover o resgrito */
const removeUserData = async (db, uid, id) => {
  const dbRef = ref(db, `users/${uid}/products/${id}`);
  await remove(dbRef);
};

/*Encontra o id do ultimo produto, Para garantir que a função irá atribuir o valor antes de continuar está função retorná uma promise */
const findCurrentId = async (db, uid) => {
  return new Promise((resolve, reject) => {
    const dbRef = ref(db, "users/" + uid);

    onValue(
      dbRef,
      (snapshot) => {
        const key = snapshot.val();
        if (key !== undefined) {
          const id = Object.keys(key.products);
          resolve(id); // Resolve a promessa com o valor de idCurrent
        } else {
          reject("ID não encontrado");
        }
      },
      (error) => {
        reject(error); // Rejeita a promessa em caso de erro
      }
    );
  });
};

export { writeUserData, readUserData, removeUserData };
