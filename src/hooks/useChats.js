import { useEffect, useState } from 'react'
import firebase from 'firebase'

export default function useChats() {
  const [chats, setChats] = useState([])
  
  useEffect(() => {
    getChats()
  }, [])

  function getChats() {
    const db = firebase.firestore()
    let data

    db.collection("chats")
      .onSnapshot(querySnapshot => {
        data = querySnapshot.docs.map(doc => {
          const docData = doc.data()
          const { id } = doc
          return { ...docData, id }
        });
        // console.log(data)
        setChats(data)
      })
  }

  return chats
}

