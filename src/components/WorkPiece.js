import React from "react";

function WorkPiece(props){


return<div>
    {props.props.map((piece,index)=>{
        return<div  key={index}className="work-piece">
        <p>
            {piece.from} - {piece.to}
            </p>
            <div>
                <p>{piece.position}</p>
                <p>{piece.company}, {piece.city}</p>
            </div>
      
    </div>
    })}
    
</div> 

}
export default WorkPiece

/* 
{educationtList.map((list,index)=>{

    return <div key={index} id={index} className="personal-info">
    <input placeholder="University name" id={index}  type="text" name={list.university}  
className="form-input"></input>
<input placeholder="Degree" type="text" id={index}  name={list.degree}   
className="form-input"></input>
<input placeholder="Subject" type="text" id={index}  name={list.subject}  
className="form-input"></input>
<input placeholder="City" type="text" id={index}  name={list.city}  
className="form-input"></input>
<input placeholder="From" type="text" id={index}  name={list.start}  
className="form-input"></input>
<input placeholder="To" type="text" id={index}  name={list.end}  
className="form-input"></input>
 </div>
})  }*/