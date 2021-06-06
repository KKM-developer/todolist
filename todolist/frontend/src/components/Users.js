import React from 'react'


const UserItem = ({NewUser}) => {
   return (
       <tr>
           <td>
               {NewUser.user_name}
           </td>
           <td>
               {NewUser.first_name}
           </td>
           <td>
               {NewUser.last_name}
           </td>
           <td>
               {NewUser.email}
           </td>
       </tr>
   )
}


const UserList = ({users}) => {
   return (
       <table>
           <th>
               User Name
           </th>
           <th>
               First name
           </th>
           <th>
               Last Name
           </th>
           <th>
               E-mail
           </th>
           {users.map((NewUser) => <UserItem NewUser={NewUser} />)}
       </table>
   )
}


export default UserList