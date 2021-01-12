import React from "react";
import API from "../utils/API";

class Search extends React.Component {
  state = {
    Employees: []
  };

  componentDidMount() {
    this.printEmployees()
  };

  printEmployees = () => {
    API().then(res => this.setState({ Employees: res.data.results })).catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

}

export default Search;