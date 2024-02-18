import React, { useContext } from "react";
import style from "./style.module.scss";
import { AppContext } from "@contexts/AppContexts";

export const List = ({ data, columns }) => {
  const { filterValue } = useContext(AppContext);
  let filteredData = data;
  if (filterValue.trim() !== "") {
    filteredData = data.filter((item) => {
      return Object.values(item).some((field) =>
        field.toString().toLowerCase().includes(filterValue.toLowerCase())
      );
    });
  }

  return (
    <div className={style.tableContainer}>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              {columns.map((column, columnIndex) => (
                <td key={columnIndex}>{item[column.dataField]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
