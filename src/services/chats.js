import firebase from 'firebase'

export const createChat = (users, group = false) => {
  const db = firebase.firestore()

  const data = db.collection("chats").add({
    users,
    group
  })
  .then(function(docRef) {
    const { id } = docRef
    return {id}
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  })

  return data
}

export const getChat = (chatId) => {
  const db = firebase.firestore()
  db.collection("chats").doc(chatId).get()
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  })
}