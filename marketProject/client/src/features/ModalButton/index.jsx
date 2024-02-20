import { useContext } from "react";
import { AppContext } from "@contexts/AppContexts";
import style from "./style.module.scss";
import { useDeleteCheck } from "@services/checks";
import { useDeleteProduct } from "@services/products";
import { useDeleteSeller } from "@services/sellers";
export const ModalButton = ({ dataType }) => {
  const { setIsModalOpen, selectedItem } = useContext(AppContext);
  const deleteServices = {
    seller: useDeleteSeller(),
    product: useDeleteProduct(),
    check: useDeleteCheck(),
  };

  const handleModalOpen = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleDelete = async () => {
    const { id } = selectedItem;
    const deleteService = deleteServices[dataType];
    if (!deleteService) {
      console.error("Unsupported data type for deletion:", dataType);
      return;
    }

    try {
      await deleteService.mutateAsync(id);
      console.log(`${dataType} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting ${dataType}:`, error);
    }
  };

  return (
    <div className={style.container}>
      <button className={style.modalButton} onClick={handleModalOpen}>
        Add
      </button>
      <button className={style.modalButton} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
