let url = " http://3.7.50.225/api/admin/get-all-sessions";
// let xhr = new XMLHttpRequest();

// xhr.open("GET", url);
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         console.log(JSON.parse(this.response))
//     }
//     else {
//         console.log("Error")
//     }
// }
// xhr.send();

// fetch(url)
//   .then((res) => {
//     // console.log(res);
//     // console.log(res.json());
//     return res.json();
//   })
//   .then((data) => {
//       console.log(data);
//     let tabvalue;
//     data.forEach(values => {
//       // console.log(values);

//       tabvalue+= `<tr>
//       <th scope="row">${values.session_id}</th>
//       <td>${values.user_id}</td>
//       <td>${values.name}</td>
//       <td>${values.phone}</td>
//       <td>${values.email_id}</td>
//       <td>${values.created_at}</td>
//       <td>${values.approved}</td>
//       <td>${values.ipaddress}</td>
//   </tr> `;
//     });
//     //   console.log(tabvalue)
//     document.getElementById("tbody").innerHTML = tabvalue;
//   });

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);

    data.forEach((values) => {
      var tabvalue = document.createElement("tr");

      tabvalue.innerHTML = `
        <td scope="row">${values.session_id}</td>
        <td>${values.user_id}</td>
        <td>${values.name}</td>
        <td>${values.phone}</td>
        <td>${values.email_id}</td>
        <td>${values.created_at}</td>
        <td>${values.approved}</td>
        <td>${values.ipaddress}</td>
      `;

      document.getElementById("tbody").appendChild(tabvalue);
    });
  });

// fetch(url)
//   .then((res) => {
//     // console.log(res);
//     // console.log(res.json());
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);

//     data.forEach((values) => {
//       // console.log(values);
//       let tabvalue;
//       tabvalue = `<tr>
//       <th >${values.session_id}</th>
//       <td>${values.user_id}</td>
//       <td>${values.name}</td>
//       <td>${values.phone}</td>
//       <td>${values.email_id}</td>
//       <td>${values.created_at}</td>
//       <td>${values.approved}</td>
//       <td>${values.ipaddress}</td>
//   </tr> `;
//       console.log(tabvalue);
//       document.getElementById("tbody").innerHTML=tabvalue;
//     });
//     //   console.log(tabvalue)
//   });
