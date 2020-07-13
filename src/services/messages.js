import firebase from 'firebase'

export const createMessage = (chat_id, owner, participant, body) => {
  const db = firebase.firestore()

  const created_at = new Date()

  db.collection("messages").add({
    chat_id,
    body,
    owner,
    participant,
    created_at
  })
  .then(function(docRef) {
    // console.log("Message created: ", docRef.id)
  })
  .catch(function(error) {
    console.error("Error adding document: ", error)
  })
}