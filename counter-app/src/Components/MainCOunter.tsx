import React, { useState } from 'react'

interface CountType{
    countNumb:number
}

const MainCOunter:React.FC<CountType> = ({countNumb}) => {
    const [count,setCount] = useState<number>(countNumb)

   const handleIncrease = () =>{
         
    setCount(count + 1)
   }
   const handleDecrease = () =>{
    setCount(count - 1)
   }
  return (
    <div>
        <h1>count :{count}</h1>
        <button onClick={handleIncrease}>increase</button>
        <button onClick={handleDecrease}>decrease</button>
    </div>
  )
}

export default MainCOunter