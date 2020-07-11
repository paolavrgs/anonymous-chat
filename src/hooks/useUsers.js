import { useEffect, useState } from 'react'
import firebase from 'firebase'

export default function useUsers() {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    getUsers()
  }, [])

  function getUsers() {
    const db = firebase.firestore()
    let data

    db.collection("users")
      .onSnapshot(querySnapshot => {
        data = querySnapshot.docs.map(doc => doc.data());
        setUsers(data)
      })
  }

  return users
}

