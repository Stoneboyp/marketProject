import { useState } from "react";

export const Filter = ({ onFilter }) => {
  const [filterValue, setFilterValue] = useState("");

  const handleInputChange = (event) => {
    setFilterValue(event.target.value);
  };
  const applyFilter = () => {
    onFilter(filterValue);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="search by name"
        value={filterValue}
        onChange={handleInputChange}
      ></input>
      <button onClick={applyFilter}>find</button>
    </div>
  );
};
