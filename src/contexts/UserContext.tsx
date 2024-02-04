import React, { createContext } from 'react'
import * as firebaseAuth from 'firebase/auth'
import {auth} from '../FirebaseConfig'

const UserContext = createContext<string | null>('')
const UserContextProvider = async (props: any) => {
  const  [uId, setUId] = React.useState<string | null>('')
  
  await firebaseAuth.signInWithEmailAndPassword(auth, 'mateusmayan@icloud.com', '123456').then(
  user => console.log(user.user.uid))
  .catch(error => console.log('error', error))
  
  return (
    <UserContext.Provider value={uId}>
      {props.children}
      </UserContext.Provider>
  )
}

export default UserContext