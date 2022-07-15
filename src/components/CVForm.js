import React from "react";

import EducationPiece from "./EducationPiece";
import WorkPiece from "./WorkPiece";
function CVForm(props){
console.log(props.props.photo)
    return<div className="cv-form-load">

    <div className="cv-head">
      <h1>{props.props.firstName + " " + props.props.secondName}</h1>
      <h2>{props.props.position }</h2>
    </div>
    
    <div className="cv-container">
    
    
    
    
    
    <div className="work">
    <h1 className="work-header">Description</h1>
    <div className="cv-description">{props.props.description}</div>
    <h1 className="work-header">Expirience</h1>
    <WorkPiece props={props.exp}/>
    <h1 className="work-header">Education</h1>
    <EducationPiece  props={props.ed}/>
    </div>
    
    <div className="personal"> 

    <div className="pesonal-info">
      <img src={props.props.photo} width={200} height={200}></img>
    <h2>Pesonal 
      Info</h2>
    <h3>Adress</h3>
    <p>{props.props.adress}</p>
    <h3>Education</h3>
    <p>{props.props.title}</p>
    <h3>Email</h3>
    <p>{props.props.email}</p>
    <h3>Phone number</h3>
    <p>{props.props.phoneNumber}</p> 
    </div>
    
    </div>
    
    
    
    </div>
    
        </div>
}
export default CVForm 