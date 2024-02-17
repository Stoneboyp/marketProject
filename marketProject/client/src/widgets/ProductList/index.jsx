import { List } from "@entities/List";
export const ProductList = ({ data, columns }) => {
  return <List data={data} columns={columns}></List>;
};
