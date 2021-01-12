import React from "react";
import Search from "./Search";

function EmployeeTable(props) {
  const renderT = (props) => {
    return props.results.map(result => {
      const { picture, name, phone, email, dob } = result;

      return (
        <tr>
          <td><img src={picture.large} alt={name.first} /></td>
          <td>{name.first} {name.last}</td>
          <td>{phone}</td>
          <td>{email}</td>
          <td>{dob.date}</td>
        </tr>
      )
    })
  }
  return (
    <table>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
        {renderT(props)}
    </table>
  );
};
// May need to add props.results.---

export default EmployeeTable;

// printEmployees = () => {
//   API().then(res => this.setState({ employees: res.data.results}))
//     // picture: req.picture.large,
//     // firstName: req.name.first,
//     // lastName: req.name.last,
//     // emil: req.email,
//     // phone: req.phone
//   // })) 
// .catch(err => console.log(err));
// };