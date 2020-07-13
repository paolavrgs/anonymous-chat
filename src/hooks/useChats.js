import { useEffect, useState } from 'react'
import firebase from 'firebase'

export default function useChats(currentUser) {
  const [chats, setChats] = useState([])
  
  useEffect(() => {
    const db = firebase.firestore()

    db.collection("chats")
      .onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          const docData = doc.data()
          const { id } = doc
          return { ...docData, id }
        })

        const newData = data.filter(chat => (chat.users.some(user => user.id === currentUser.id)))

        setChats(newData)
      })
  }, [currentUser])

  return chats
}

