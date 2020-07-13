import firebase from 'firebase'

export const createUser = (userSessionNickname) => {
  const db = firebase.firestore()

  const data = db.collection("users").add({
    nickname: userSessionNickname
  })
  .then(function(docRef) {
    const { id } = docRef
    return {id}
  })
  .catch(function(error) {
    console.error("Error adding document: ", error)
  })

  return data
}