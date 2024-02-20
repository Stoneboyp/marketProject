import { createContext, useState } from "react";

export const AppContext = createContext({
  sellers: [],
  products: [],
  checks: [],
  cart: [],
  setCart: () => {},
  setSellers: () => {},
  setProducts: () => {},
  setCheks: () => {},
});

export const AppProvider = ({ children }) => {
  const [filterValue, setFilterValue] = useState("");
  const [cart, setCart] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        selectedItem,
        setSelectedItem,
        setIsModalOpen,
        filterValue,
        setFilterValue,
        cart,
        setCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
