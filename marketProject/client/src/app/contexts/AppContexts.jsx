import { createContext, useState } from "react";

export const AppContext = createContext({
  sellers: [],
  products: [],
  checks: [],
  setSellers: () => {},
  setProducts: () => {},
  setCheks: () => {},
});

export const AppProvider = ({ children }) => {
  const [filterValue, setFilterValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <AppContext.Provider
      value={{ isModalOpen, setIsModalOpen, filterValue, setFilterValue }}
    >
      {children}
    </AppContext.Provider>
  );
};
