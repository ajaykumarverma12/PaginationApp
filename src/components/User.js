import React from 'react'
const User = ({ user }) => {
  return (
    <div>
      <hr />
      <center><img src={user.avatar} /></center>
     <center> <p>{`Full Name: ${user.first_name } ${user.last_name}`}</p></center>
      <center><p>{`Email Id: ${user.email }`}</p></center>
    </div>
  )
}

export default User
