import React from "react";
import API from "../utils/API";
import EmployeeTable from "./EmployeeTable";

class Search extends React.Component {
  state = {
    employees: []
  };

  componentDidMount() {
    this.printEmployees()
  };

  printEmployees = () => {
    API()
    .then(res => this.setState({ employees: res.data.results }))
    .catch(err => console.log(err));
  };

  filterEmployees = (event) => {
    const searchTerm = event.target.value;
    const filteredList = this.state.employees.input((employee) => {
      return 
    })
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this
  // }

  render() {
    return (
      <div>
        {console.log(this.state.employees)}
        <EmployeeTable
        results = {this.state.employees}
        />
      </div>
    )
  }

}

export default Search;