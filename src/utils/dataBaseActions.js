import { get, getDatabase, onValue, ref, remove, set } from "firebase/database";

const db = getDatabase();

//gera um código para criptografar o id
const generateUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

//Salva um registro na tabela informada
const saveData = async (uid, table, data) => {
  const id = generateUUID();

  try {
    await set(ref(db, `users/${uid}/${table}/${id}`), {
    email: "vssimoes@gamil.com",
    });
    
  } catch (error) {
    throw error
  }
};

//Atualiza um registro
const updateData = async (uid, table, data, id) => {
  await set(ref(db, `users/${uid}/${table}/${id}`), {
    email: "accudi@gamil.com",
  });
};

//Deleta um registro setando seu valor para null
const deleteData = async (uid, table, id) => {
  await set(ref(db, `users/${uid}/${table}/${id}`), null);
};

//R
const getAllData = async (uid,table) => {
  const snapshot = await get(ref(db, `users/${uid}/${table}`));
 
  if (snapshot.exists()) {
    const data = snapshot.val(); // retorna um json de json
   
    const keys = Object.keys(data);
    const result = [];
    // converte o retorno do snapshot em um array de json 
    keys.forEach((key) => {
      result.push({
        id: key,
        ...data[key],
      });
    });

    return result;
  }
  return 0;
};

//Recuperar os dados de um registro especifico
const getData = async (uid,table, id) => {
  const snapshot = await get(ref(db, `users/${uid}/${table}/${id}`));
  if (snapshot.exists()) {
    return snapshot.val();
  }
  return null;
};


export { saveData, updateData, deleteData, getAllData, getData };
