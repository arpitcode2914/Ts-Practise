import "./App.css";
import Form from "./components/Form";
import HomePage from "./components/HomePage";
import ObjectData from "./components/ObjectData";

function App() {

  const stDetails ={
      name:"rahul",
      rollno:21,
      std:9,
      age:15
  }

  const arryData = ['arpit','krishna']
  const arryData1 = [true,false]

  const arryOdObjects =[
    {
    brand:"nike",
    color:"black",
    size:5
  },{
    brand:"puma",
    color:"color",
    size:9
  },{
    brand:"adidas",
    color:"green",
    size:8
  }
]
  return (
    <div className="App">
      {/* <HomePage 
      name="arpit"
      age={21}
      gender='male'
      greduated={true}
      
      /> */}
      {/* <ObjectData 
      stDetails={stDetails} 
      arryData={arryData} 
      arryData1={arryData1}
      arryOdObjects={arryOdObjects}
      /> */}

      <Form/>
    </div>
  );
}

export default App;
