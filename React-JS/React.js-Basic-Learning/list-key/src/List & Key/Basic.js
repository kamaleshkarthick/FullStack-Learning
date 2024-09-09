import React from "react";

function Basic() {
  const people = [
    { name: "Kira" },
    { name: "yugi" },
    { name: "Buther" },
    { name: "Mother Milk" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        {people.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </header>
    </div>
  );
}

// ------- Basic 1 -----------

function Basic1() {
  const peoples = [
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
  return (
    <div className="App">
          <header className="App-header">
              
              {peoples.map((persons, index) => (
                <div key={index}>
                    <h2>{persons.name}</h2>

                      {persons.skills.map((skill, i) => (
                          <div key={i}>
                              <p>{skill.domin}-{skill.specification }</p>
                          </div>
                  ))}
                </div>
              ))}
              
           </header>
    </div>
  );
}

export { Basic, Basic1 };
// export default Basic;
