import React from "react";
function EducationPiece(props){
    console.log(props.props)


    return <div>{props.props.map((obj,index)=>{
   return <div key={index} className="work-piece">
        <p>
           {obj.start} - {obj.end}
            </p>
            <div>
                <p>{obj.university}, {obj.city}</p>
                <p>Degree: {obj.degree}</p>
                <p>Subject:  {obj.subject}</p>
            </div>
      
    </div>
    })}</div>
    
    /**/
    
    }
    export default EducationPiece