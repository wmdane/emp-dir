import React from "react";

function EmployeeTable(props) {
  return (
    <thead>
      <tr>
        <th>
          <img src={props.picture} alt={props.firstName}/>
        </th>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.email}</td>
        <td>{props.phone}</td>
      </tr>
    </thead>
  );
};

export default EmployeeTable;