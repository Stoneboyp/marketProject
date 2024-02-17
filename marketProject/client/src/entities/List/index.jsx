import React from "react";
import style from "./style.module.scss";

export const List = ({ data, columns }) => {
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
          {data.map((item, index) => (
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
