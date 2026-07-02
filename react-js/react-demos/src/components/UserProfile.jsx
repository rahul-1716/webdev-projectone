import { UserContext } from "./UserContext";
import { useContext } from "react";

import React from 'react'

const UserProfile = () => {
    const {user} = useContext(UserContext)

  return (
    <div>
        <h1>User Profile:</h1>
        <h1>User Name: {user.name}</h1>
    </div>
  )
}

export default UserProfile