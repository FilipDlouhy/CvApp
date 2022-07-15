import React from "react";
function EducationForm (){
    return <div className="personal-info">
    <input placeholder="University name" type="text" name="university"  
className="form-input"></input>
<input placeholder="Degree" type="text" name="degree"  
className="form-input"></input>
<input placeholder="Subject" type="text" name="subject"  
className="form-input"></input>
<input placeholder="City" type="text" name="location" 
className="form-input"></input>
<input placeholder="From" type="text" name="start" 
className="form-input"></input>
<input placeholder="To" type="text" name="end"
className="form-input"></input>
 </div>
}
export default EducationForm