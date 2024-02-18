import React from "react";
import { List } from "@entities/List";
export const SellerList = ({ data, columns }) => {
  return <List data={data} columns={columns} />;
};
