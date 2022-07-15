import React, { useState } from "react";




import CVForm from "./CVForm";
function  Container(){
let loadText;
  const [loadBool,setLoadBool] = useState(true)
  const [expValuesArray,setExpValuesArray] = useState([   {position:'', company:"",city:'',from:'',to:''}])
    const load = ()=>{
      setLoadBool(!loadBool)
  
    }
  const [edValuesArray,setEdValuesArray] = useState([ {university:'', degree:'',subject:'',city:"",location:'',start:'',end:''}])
 let initialValues ={firstName:"",secondName:"",title:"",adress:"",phoneNumber:"",email:"",description:"",photo:"" ,position:""}
 const [formValues,setFormValues] = useState(initialValues)

 const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormValues({ ...formValues, [name]: value });

 }

  const [educationtList, setEducationList]= useState([{university:'', degree:'',subject:'',city:"",location:'',start:'',end:''},{university:'', degree:'',subject:'',city:"",location:'',start:'',end:''}]);

  const handleaddclickEXP=()=>{  
    setEducationList([...educationtList,{university:'', degree:'',subject:'',city:"",location:'',start:'',end:''}])
    setEdValuesArray([...edValuesArray,{university:'', degree:'',subject:'',city:"",location:'',start:'',end:''}]);
  }
  const handleremoveEXP= ()=>{
    const list=[...educationtList];
    list.pop();
  
    setEducationList(list)
    const EDPLIST = [...edValuesArray]
    EDPLIST.splice(EDPLIST.length-1,1)
   setEdValuesArray(EDPLIST)
  }


const handleEXPChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;

 const newA = expValuesArray.map((obj,index) => {
   
    if (event.target.id == index) {

      return {...obj, [name]: value};
    }

    
    return obj;

 
  });

  



  setExpValuesArray(newA);

};
const loadExample = ()=>{
  setFormValues({firstName:"Phillipe",secondName:"Augustus",title:"Inženýr",adress:"Brno kralovo pole",phoneNumber:"773683500",email:"fi.dlo@email.cz",description:"The one true emperor of rome",photo:"https://pixabay.com/get/gc3267c29cb8a00899f80c0d0be7f528a9ef137053d94001a3cf4176eb4edc336ce395a91fe707cf681fa1175b8af8cedff81460b34f90ef9f9e6415cb64758bb_1920.jpg" ,position:"Front End BRO"})
  setExpValuesArray([   {position:'PIKR', company:"Albert",city:'Zlin',from:'2021',to:'2022'},{position:'Front end Dev', company:"Madeo",city:'Zlin',from:'2022',to:'2024'}])

  setEdValuesArray([ {university:'GYMZL', degree:'Maturita',subject:'včechno',city:"Zlin",location:'lesni ctvrt',start:'2018',end:'2022'}, {university:'VUT FIT', degree:'Bakalari',subject:'FIT',city:"BRNO",location:'KRPOLE',start:'2022',end:'2025'}])
}

const handleEdChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;

 const newA = edValuesArray.map((obj,index) => {
   
    if (event.target.id == index) {

      return {...obj, [name]: value};
    }

    
    return obj;

 
  });

  


  setEdValuesArray(newA);

};
let initialExpiriencetList = [{position:'', company:"",city:'',from:'',to:''},{position:'', company:"",city:'',from:'',to:''}];
  const [expiriencetList, setExpiriencetList]= useState(initialExpiriencetList);
  const handleaddclickWRK=()=>{  
   
    setExpiriencetList([...expiriencetList,{position:'', company:"",city:'',from:'',to:''}])
    setExpValuesArray([...expValuesArray,{position:'', company:"",city:'',from:'',to:''}]);

  }

  const handleremoveWRK= ()=>{
    const list=[...expiriencetList];
    list.splice(list.length-1,1);
    setExpiriencetList(list)
   const EXPLIST = [...expValuesArray]
   EXPLIST.splice(EXPLIST.length-1,1)
   setExpValuesArray(EXPLIST)
  }
    return <div className="container">

<div className="form-container">

{loadBool &&<div className="form">
<div className="personal-info">
<h1> Personal Information</h1>

<input placeholder="First Name" type="text" name="firstName" onChange={handleChange}   className="form-input"></input>
<input placeholder="Second Name"  onChange={handleChange} type="text"name="secondName" className="form-input"></input>
<input placeholder="Title" onChange={handleChange} type="text" name="title"  className="form-input"></input>
<input placeholder="Adress" onChange={handleChange} type="text" name="adress"  
className="form-input"></input>

<input placeholder="Phone-number" onChange={handleChange} type="text" name="phoneNumber"
className="form-input"></input>
<input placeholder="Email" type="text" onChange={handleChange} name="email"  
className="form-input"></input>
<input placeholder="Position" type="text" onChange={handleChange} name="position"  
className="form-input"></input>
<input placeholder="Photo url" type="text" onChange={handleChange} name="photo"  
className="form-input"></input>
<textarea placeholder="Description" onChange={handleChange}  name="description"  
className="form-input"></textarea>

</div>
<h1 className="form-header">Expirience</h1>
<div>
{expiriencetList.map((list,index)=>{
  
    return <div key={index} id={index} className="personal-info">
    <input placeholder="Company name" type="text" id={index} name="company" onChange={handleEXPChange}  
className="form-input"></input>
<input placeholder="Position" type="text"  id={index}  name="position" onChange={handleEXPChange}    
className="form-input"></input>

<input placeholder="City" type="text" id={index} onChange={handleEXPChange} name="city"  
className="form-input"></input>
<input placeholder="From" type="text"  id={index} onChange={handleEXPChange}    name="from" 
className="form-input"></input>
<input placeholder="To" type="text" id={index} onChange={handleEXPChange}name="to" 
className="form-input"></input>
 </div>
})}
</div>
    <div className="buttons">
    <button onClick={handleaddclickWRK}>Add</button>
        <button onClick={handleremoveWRK}>Delete</button>
    </div>
    <h1 className="form-header">Education</h1>
<div>{educationtList.map((list,index)=>{

    return <div key={index} id={index} className="personal-info">
    <input placeholder="University name" id={index}  onChange={handleEdChange} type="text" name="university"
className="form-input"></input>
<input placeholder="Degree" type="text" id={index}  onChange={handleEdChange} name="degree"   
className="form-input"></input>
<input placeholder="Subject" type="text" id={index} onChange={handleEdChange}  name="subject"  
className="form-input"></input>
<input placeholder="City" type="text" id={index} onChange={handleEdChange}  name="city" 
className="form-input"></input>
<input placeholder="From" type="text" id={index} onChange={handleEdChange} name="start" 
className="form-input"></input>
<input placeholder="To" type="text" id={index}   onChange={handleEdChange} name="end"  
className="form-input"></input>
 </div>
})  }</div>

<div className="buttons">
<button onClick={handleaddclickEXP}>Add</button>
        <button onClick={handleremoveEXP}>Delete</button>
    </div>


        </div>
         }


 <CVForm props={formValues} exp={expValuesArray} ed={edValuesArray}/>
  
</div>
 <div className="BTNS">
<button className="example" onClick={load}>  {loadBool ?loadText="View":loadText="change CV" } </button> 
        <button className="example" onClick={loadExample}>Load Example</button> 
        <button className="reset" onClick={()=>{window.location.reload()}}>Reset</button> 
</div>
  

    </div>
}
export default Container