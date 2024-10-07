import React from 'react'

interface StudentDetailsType{
    stDetails :{
        name:string,
        rollno:number,
        std:number,
        age:number

    },
    arryData:string[],
    arryData1:boolean[],

    arryOdObjects:{
        brand:string,
        color:string,
        size:number
    }[]
}
const ObjectData = ({stDetails,arryData,arryData1,arryOdObjects}:StudentDetailsType) => {

  return (
    <>
        {/* object data  */}
    <div>
        <h1>name: {stDetails.name}</h1>
        <h1>rollno: {stDetails.rollno}</h1>
        <h1>std: {stDetails.std}</h1>
        <h1>age: {stDetails.age}</h1>
    </div>

        {/* arr data  */}
    <div>
        <h1>{arryData}</h1>
    </div>

            {/* booleand arry  */}
    {/* <div>
            <h1>{arryData1}</h1>
    </div> */}


    {/* arry of objects  */}
    <div>
        {
            arryOdObjects?.map(arr =>(
                <>
                
                    <h1>{arr.brand}</h1>
                    <h1>{arr.color}</h1>
                    <h1>{arr.size}</h1>
                
                </>
            ))
        }
    </div>
    </>
  )
}

export default ObjectData