import React from "react";
import API from "../utils/API";
import EmployeeTable from "./EmployeeTable";
import SearchForm from "./SearchForm";

class Search extends React.Component {
  state = {
    employees: [],
    search: ""
  };

  componentDidMount() {
    this.printEmployees()
  };

  printEmployees = () => {
    API()
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      search: value
    });
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this
  // }

  render() {
    const filteredList = this.state.employees.filter(employee => 
      employee.name.first.toLowerCase().includes(this.state.search.toLowerCase()));

    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <EmployeeTable
          results={filteredList}
        />
      </div>
    )
  }

}

export default Search;