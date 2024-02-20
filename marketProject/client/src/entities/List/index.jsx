import React, { useContext, useState } from "react";
import style from "./style.module.scss";
import { AppContext } from "@contexts/AppContexts";

export const List = ({ data, columns }) => {
  const { filterValue, cart, setCart, selectedItem, setSelectedItem } =
    useContext(AppContext);
  let filteredData = data;
  if (filterValue.trim() !== "") {
    filteredData = data.filter((item) => {
      return Object.values(item).some((field) =>
        field.toString().toLowerCase().includes(filterValue.toLowerCase())
      );
    });
  }
  const addToCart = (item) => {
    setSelectedItem(item);
    if (!document.location.pathname.includes("/checks")) {
      if (location.pathname === "/sellers") {
        setCart((prevCart) => ({
          ...prevCart,
          firstName: item.firstName,
          lastName: item.lastName,
        }));
      } else if (location.pathname === "/products") {
        setCart((prevCart) => ({ ...prevCart, productType: item.productType }));
      }
    }
  };

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
            <tr
              key={index}
              onClick={() => addToCart(item)}
              className={selectedItem === item ? style.selected : ""}
            >
              {columns.map((column, columnIndex) => (
                <td key={columnIndex}>{item[column.dataField]} </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
