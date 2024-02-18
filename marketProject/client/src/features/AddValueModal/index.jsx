import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { useAddSeller, useAddProduct, useAddCheck } from "@services/sellers";
import { AppContext } from "@contexts/AppContexts";
import styles from "./style.module.scss";

export const AddValueModal = ({ dataType, addData }) => {
  const { isModalOpen, setIsModalOpen } = useContext(AppContext);
  const [value, setValue] = useState("");
  const addSellerMutation = useAddSeller();
  const addProductMutation = useAddProduct();
  const addCheckMutation = useAddCheck();

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };
  const handleAddValue = () => {
    if (addData === "seller") {
      addSellerMutation.mutate(value);
    } else if (addData === "product") {
      addProductMutation.mutate(value);
    } else if (addData === "check") {
      addCheckMutation.mutate(value);
    }
    setIsModalOpen(false);
  };

  const handleButton = () => {
    setIsModalOpen(!isModalOpen);
  };

  return createPortal(
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-content"]}>
        <div className={styles["modal-header"]}>
          <h2>Add {dataType}</h2>
        </div>
        <div className={styles["modal-body"]}>
          <input
            type="text"
            value={value}
            placeholder="Enter value"
            onChange={handleInputChange}
          />
        </div>
        <div className={styles["modal-footer"]}>
          <button onClick={handleAddValue}>Add</button>
          <button onClick={handleButton}>Cancel</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};
