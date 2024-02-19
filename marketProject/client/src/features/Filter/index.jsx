import { useContext, useState } from "react";
import { AppContext } from "@contexts/AppContexts";
import style from "./style.module.scss";

export const Filter = ({ onFilter }) => {
  const { filterValue, setFilterValue } = useContext(AppContext);

  const handleInputChange = (event) => {
    setFilterValue(event.target.value);
  };

  return (
    <div className={style.filterContainer}>
      <input
        type="text"
        placeholder="search by value"
        value={filterValue}
        onChange={handleInputChange}
        className={style.inputField}
      />
    </div>
  );
};
