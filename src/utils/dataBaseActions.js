import {  onValue, ref, set } from "firebase/database";

function writeUserData(userId, name, email, imageUrl, db, numDados) {
  try {
    set(ref(db, "users/" + userId + "/dados/" + numDados), {
      username: name,
      email: email,
      profile_picture: imageUrl,
    });
  } catch (error) {
    throw error;
  }
}

const readUerData = (db) => {
  const starCountRef = ref(db, "users/");
  onValue(starCountRef, (snapshot) => {
     return snapshot.val();

  });
};

export { writeUserData, readUerData };
