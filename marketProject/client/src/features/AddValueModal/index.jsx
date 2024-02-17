import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { AppContext } from "@contexts/AppContexts";
import styles from "./style.module.scss";
export const AddValueModal = () => {
  const { isModalOpen, setIsModalOpen } = useContext(AppContext);
  const [sellerName, setSellerName] = useState("");

  const handleInputChange = (event) => {
    setSellerName(event.target.value);
  };

  const handleButton = () => {
    setIsModalOpen(!isModalOpen);
  };

  return createPortal(
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-content"]}>
        <div className={styles["modal-header"]}>
          <h2>Add Seller</h2>
        </div>
        <div className={styles["modal-body"]}>
          <input
            type="text"
            value={sellerName}
            placeholder="Enter value"
            onChange={handleInputChange}
          />
        </div>
        <div className={styles["modal-footer"]}>
          <button onClick={handleButton}>Add</button>
          <button onClick={handleButton}>Cancel</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};
