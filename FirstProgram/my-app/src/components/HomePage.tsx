interface UserData {

    name:string,
    age:number,
    gender:String
    greduated:boolean
}


const HomePage = ({name,age,gender,greduated}:UserData) => {
  return (
    <div>
      
        <h1>Name: {name}</h1>
        <h1>Age: {age < 18 ? "you are not adult" :"you are 18+"}</h1>
        <h1>Gender: {gender}</h1>
        <h1>Education: {greduated ? "you are graduate" : "you are not graduate"}</h1>
    </div>
  )
}

export default HomePage     