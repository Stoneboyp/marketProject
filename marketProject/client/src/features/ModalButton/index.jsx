import { useContext } from "react";
import { AppContext } from "@contexts/AppContexts";
import style from "./style.module.scss";
export const ModalButton = () => {
  const { setIsModalOpen, isModalOpen } = useContext(AppContext);
  const handleModalOpen = () => {
    setIsModalOpen((prev) => !prev);
  };
  return (
    <button className={style.modalButton} onClick={handleModalOpen}>
      Add Seller
    </button>
  );
};
