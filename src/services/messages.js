import firebase from 'firebase'

export const createMessage = (chat_id, owner, participant, body) => {
  console.log({chat_id, owner, participant, body})
  const db = firebase.firestore()

  db.collection("messages").add({
    chat_id,
    body,
    owner,
    participant
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  })
}