import React from "react";
import { List } from "@entities/List";
export const SellerList = ({ data, columns }) => {
  console.log(data, columns);
  return <List data={data} columns={columns} />;
};
