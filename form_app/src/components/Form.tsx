import React, { useEffect, useState } from 'react'
import FormData from './FormData'


interface UserType{
    id:number,
     email:string,
    password:string
}

const Form = () => {

    const [user,setUser] = useState<UserType>({
        id:0,
        email:"",
        password:""
    })

    const [users ,setUsers] = useState<UserType[]>([])

    // useEffect(() => {
      
    //     const getUsers = localStorage.getItem("Usersdata");
    //     if (getUsers) {
    //       setUsers(JSON.parse(getUsers))
    //     }
        
    // }, []);

    const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) :void =>{

     setUser({
        ...user,
        [e.target.name] : e.target.value
     })
        
    }

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>):void =>{
        e.preventDefault()
        // console.table(user);
        if (user.email && user.password) {
          
          const userData:UserType ={
            id:Math.floor(Math.random()*10000),
            email:user.email,
            password:user.password
          }

          const updatedUsers = [...users,userData]
          setUsers(updatedUsers)
          localStorage.setItem('Usersdata',JSON.stringify(updatedUsers))
          console.table(users);
          setUser({ id: 0, email: '', password: '' }); // Reset the form
        }
        
        
    }
 
    
  return (
    <div>
        <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name='email'
            onChange={handleOnChange}
            value={user.email}
          />
        
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name='password'
            onChange={handleOnChange}
            value={user.password}
          />
        </div>
       
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <div>
          <FormData users={users} setUsers={setUsers}/>
      </div>
    </div>
  )
}

export default Form