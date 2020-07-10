import React, { useEffect, useState } from 'react'
import { List } from 'antd';
import firebase from 'firebase'

export default function ListOfUsers() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  function getUsers() {
    const db = firebase.firestore()
    let data

    db.collection("users")
      .get()
      .then(querySnapshot => {
        data = querySnapshot.docs.map(doc => doc.data());
      }).then(() => {
        setUsers(data)
      })
  }

  return (
    <List
      size="large"
      bordered
      dataSource={users}
      renderItem={({user}) => <List.Item>{user.id}</List.Item>}
    />
  )
}