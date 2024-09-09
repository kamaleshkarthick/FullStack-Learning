import React from "react";

export default function DataCollect() {

    
    const data = [
        {
          name: "Gasper",
          skills: [{ domin: "Frontend", specification: "React.js" }],
        },
    
        {
          name: "Kamesh",
          skills: [{ domin: "Backend", specification: "Node.js" }],
        },
        {
          name: "Sowmy",
          skills: [{ domin: "Music", specification: "Carnadic" }],
        },
    ];
    
    /* let listTemplate;

    if (data.length) {
        listTemplate = data.map((person, index) => <div key={index}> <h2>{person.name}</h2> {person.skills.map((skill, i) => <p key={i}>{skill.domin}-{skill.specification}</p>)} </div>)
        
    }
    else {
      listTemplate = <li>No Data</li>  
    } */


    let condition = (

        data.length ? (data.map((person, index) => <div key={index}> <h2>{person.name}</h2> {person.skills.map((skill, i) => <p key={i}>{skill.domin}-{skill.specification}</p>)} </div>)) : (<li>No Data</li>)
    );



    return (
        <>
            {/* <div>{listTemplate}</div>  */}
            <div>{condition}</div> 
        </>
    );
}