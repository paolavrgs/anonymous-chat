import firebase from 'firebase'

export const createChat = (users, group = false) => {
  const db = firebase.firestore()

  db.collection("chats").add({
    users,
    group
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  })
}