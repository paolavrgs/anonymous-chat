import firebase from 'firebase'

export const createUser = (userSessionId) => {
  const db = firebase.firestore()

  db.collection("users").add({
    user: {
      id: userSessionId
    }
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  })
}