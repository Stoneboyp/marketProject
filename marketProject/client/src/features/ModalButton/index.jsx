import { useContext } from "react";
import { AppContext } from "@contexts/AppContexts";
export const ModalButton = () => {
  const { setIsModalOpen, isModalOpen } = useContext(AppContext);
  const handleModalOpen = () => {
    setIsModalOpen((prev) => !prev);
  };
  return <button onClick={handleModalOpen}>Add Seller</button>;
};
