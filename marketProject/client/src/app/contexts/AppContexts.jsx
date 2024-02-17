import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <AppContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </AppContext.Provider>
  );
};
