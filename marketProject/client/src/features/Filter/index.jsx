import { useContext, useState } from "react";
import { AppContext } from "@contexts/AppContexts";
export const Filter = ({ onFilter }) => {
  const { filterValue, setFilterValue } = useContext(AppContext);

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
        placeholder="search by value"
        value={filterValue}
        onChange={handleInputChange}
      ></input>
      <button onClick={applyFilter}>find</button>
    </div>
  );
};
