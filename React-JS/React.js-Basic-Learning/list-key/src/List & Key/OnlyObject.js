import React from "react";

export default function Basic2() {
  const students =
  {
    name: "Kamesh",
    age: 21,
    location : 'Salem'
  };
    
    return (
      <div >
        {Object.keys(students).map(student_Key => (
          
          <p>{ students[student_Key]}</p>
          
            ) )}
      
      </div>
    );
  }