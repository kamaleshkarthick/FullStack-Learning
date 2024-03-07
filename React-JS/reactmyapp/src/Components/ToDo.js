import React, { useEffect, useState } from "react";
// import { tododata } from "./ArrayTODo";

// export default function ToDO() {
//   const [data, setdata] = useState(tododata);
//     // console.log(data);
//     // setdata(tododata)
//   return (
//     <>
//       {data.map((val,i) => (
//         <ul key={i} >
//           <li>{val.id}</li>
//           <li>{val.todo}</li>
//           <li>{val.todostatus}</li>
//         </ul>
//       ))}
//     </>
//   );
// }

const TodoComponent = () => {
  const [data, setData] = useState();
  // const getDataTodo = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos"
  //     );
  //     const Data = await response.json();
  //     setData(Data);
  //   } catch (err) {
  //     console.log(`Error for the API ${err}`);
  //   }
  // };
  useEffect(() => {
    getDataTodo();
  }, []);

  // data
  // console.log(`below the api`);
  // console.log(data);

  // --- Fetch Api
  const getDataTodo = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((Data) => setData(Data))
      .catch((err) => console.log(`Error for the API ${err}`));
  };

  return (
    <>
      <h1> Welcome to list</h1>
      <label></label>
      {data && <ToDo tododata={data} />}
    </>
  );
};

export const ToDo = (props) => {
  console.log(props);
  const [remov, setRemove] = useState(props.tododata);
  console.log(remov);
  const Deleting = (id) => {
    // const newItems = remov.filter((item) => item.id !== prop.id)

    setRemove(remov.filter((item) => item.id !== id));
    // console.log(newItems)
    console.log(id);
  };
  return (
    <>
      <div>
        <h3> To Do List</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>DELET</th>
            </tr>
          </thead>
          <tbody>
            {remov.map((tododt, index) => (
              <tr key={index}>
                <td>{tododt.id} </td>
                <td>{tododt.title} </td>
                <td>
                  <button onClick={() => Deleting(tododt.id)}>Delet</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TodoComponent;
