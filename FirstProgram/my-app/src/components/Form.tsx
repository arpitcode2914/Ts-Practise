import React, { useState } from 'react'

interface UserType{
    name:string
    email:string
}
const Form = () => {
    const [user,setUSer] = useState<UserType | null>()
    const handleSIgnin = () =>{
        setUSer({
            name:"arpit",
            email:"arpit@arpit.com"
        })
    }
    const hanldeLogout = () =>{
        setUSer(null)

    }
  return (
    <div>
        {
            !user ? (
                <button onClick={handleSIgnin}>Sign in</button>
            ) : (
                <button onClick={hanldeLogout}>Sign out</button>
            )
        }
      
       

        <div>
            <h1>{user?.name}</h1>
            <h1>{user?.email}</h1>
            <h1>{!user && " pls login"}</h1>
        </div>
    </div>
  )
}

export default Form