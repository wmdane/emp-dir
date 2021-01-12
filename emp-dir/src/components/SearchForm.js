import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div>
        <form className="form">
          <input
            className="form-control"
            type="text"
            onChange={props.handleInputChange}
            name="search"
            value={props.search}
            placeholder="Search Employee Name"
          />
        </form>
      </div>
    </form>
  )
}

export default SearchForm;