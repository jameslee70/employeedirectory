import React from "react";
import "./style.css";
import Moment from 'react-moment';
import { Table } from "react-bootstrap";

let EmployeeTable = (props) => {
  return (
    <Table striped bordered hover variant="dark" className="employeeTable">
      <thead>
        <tr>
          <th>Employee Image</th>
          <th onClick={props.sortByName}>Name</th>
          <th>Phone</th>
          <th>E-mail</th>
          <th>DOB</th>
        </tr>
      </thead>

      <tbody className="">
        {props.results.map((result) => (
          <tr className="table" key={result.login.uuid}>
            <td>
              {" "}
              <img
                className=""
                src={result.picture.medium}
                alt=""
              />
            </td>

            <td>{result.name.first + " " + result.name.last} </td>

            <td>{result.cell}</td>
            <td className="email">
              <a href={result.email}>{result.email}</a>
            </td>
            <td><Moment format="MM/DD/YYYY">{result.dob.date}</Moment></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default EmployeeTable;