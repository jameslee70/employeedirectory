import React from "react";
import "./style.css"


function SearchBar(props) {
    return (
        <div>
            <form>
                <input 
                  onChange={props.handleInputChange}
                  value={props.value}
                  id="employee"
                  type="text"
                  className="inputBox"
                  placeholder="Search by name" 
                  />
            </form>
        </div>
    )
}
export default SearchBar;
