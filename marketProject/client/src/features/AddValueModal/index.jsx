import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { useAddSeller, useAddProduct, useAddCheck } from "@services/sellers";
import { AppContext } from "@contexts/AppContexts";
import styles from "./style.module.scss";

export const AddValueModal = ({ dataType }) => {
  const { isModalOpen, setIsModalOpen } = useContext(AppContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    productType: "",
  });

  const addSellerMutation = useAddSeller();
  const addProductMutation = useAddProduct();
  const addCheckMutation = useAddCheck();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleButton = () => {
    setIsModalOpen(false);
  };

  const handleAddValue = () => {
    const { firstName, lastName, productType } = formData;
    if (dataType === "seller") {
      addSellerMutation.mutate({ firstName, lastName });
    } else if (dataType === "product") {
      addProductMutation.mutate({ productType });
    } else if (dataType === "check") {
      addCheckMutation.mutate({ firstName, lastName, productType });
    }
    setIsModalOpen(false);
  };

  return createPortal(
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-content"]}>
        <div className={styles["modal-header"]}>
          <h2 style={{ color: "black" }}>Add {dataType}</h2>
        </div>
        <div className={styles["modal-body"]}>
          {(dataType === "seller" || dataType === "check") && (
            <>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                placeholder="Enter first name"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                placeholder="Enter last name"
                onChange={handleInputChange}
              />
            </>
          )}
          {dataType === "check" && (
            <input
              type="text"
              name="productType"
              value={formData.productType}
              placeholder="Enter product type"
              onChange={handleInputChange}
            />
          )}
          {dataType === "product" && (
            <input
              type="text"
              name="productType"
              value={formData.productType}
              placeholder="Enter product type"
              onChange={handleInputChange}
            />
          )}
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
