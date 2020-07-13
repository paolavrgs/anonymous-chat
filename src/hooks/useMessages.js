import { useEffect, useState } from 'react'
import firebase from 'firebase'

export default function useMessages(chat_id) {
  const [messages, setMessages] = useState([])
  
  useEffect(() => {
    const db = firebase.firestore()
    let data

    db.collection("messages").orderBy("created_at")
      .onSnapshot(querySnapshot => {
        data = querySnapshot.docs.map(doc => {
          const docData = doc.data()
          const { id } = doc
          return { ...docData, id }
        })
        const newData = data.filter(message => message.chat_id === chat_id)

        setMessages(newData)
      })
  }, [chat_id])

  return messages
}

