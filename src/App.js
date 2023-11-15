
import './App.css'
import React, { useState }
 from 'react';



function App(){
  const[name,Setname]=useState("");
  const[number,Setnumber]=useState("");
  const[email,Setemail]=useState("");
  const[dateofbirth,Setdateofbirth]=useState("");
  const[county,Setcounty]=useState("");
  const[age,Setage]=useState("");
  const[gender,Setgender]=useState("");
  const[status,Setstatus]=useState("");
return(

<div className="App">

<h1>"My name is George Kimani K"</h1>
<form action='kimani' className="kimani">

<input placeholder='name'type = "text" value={name} onChange={(event)=>Setname(event.target.value)}/>
<input  placeholder='number' type = "number" value={number} onChange={(event)=>Setnumber(event.target.value)}/>
<input  placeholder='email' type = "text" value={Text} onChange={(event)=>Setemail(event.target.value)}   />
<input  placeholder='dateofbirth' type = "date"value={Date} onChange={(event)=>Setdateofbirth(event.target.value)}/>
<input  placeholder='county' type = "number"value={county} onChange={(event)=>Setcounty(event.target.value)}/>
<input  placeholder='age' type = "number" onChange={(event)=>Setage(event.target.value)}/>
<input  placeholder='gender' type = "text" onChange={(event)=>Setgender(event.target.value)}/>
<input  placeholder='Status' type = "text" onChange={(event)=>Setstatus(event.target.value)}/>

  


</form>
<div>
  <h1>Name: {name}</h1>
  <h1>Number: {number}</h1>
  <h1>Email: {email}</h1>
  <h1>D.O.B: {dateofbirth}</h1>
  <h1>Place of Origin: {county}</h1>
  <h1>Age: {age}</h1>
  <h1>Gender: {gender}</h1>
  <h1>Status: {status}</h1>
</div>

</div>


)
}

export default App ;