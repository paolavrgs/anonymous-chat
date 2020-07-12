import firebase from 'firebase'

export const createUser = (userSessionNickname) => {
  const db = firebase.firestore()

  db.collection("users").add({
    nickname: userSessionNickname
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  })
}