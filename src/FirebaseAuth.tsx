import React from 'react'
import * as firebaseAuth from 'firebase/auth'
import {auth} from './FirebaseConfig'


const FirebaseAuth = () => {
  const  [login, setLogin] = React.useState<string | null>('')
  
  firebaseAuth.signInWithEmailAndPassword(auth, 'mateusmayan@icloud.com', '123456').then(
  user => setLogin(user.user.uid))
  .catch(error => console.log('error', error))
  
  return (
    <></>
  )
}

export default FirebaseAuth