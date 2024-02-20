import { useContext, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useAddSeller } from "@services/sellers";
import { useAddProduct } from "@services/products";
import { useAddCheck } from "@services/checks";
import { AppContext } from "@contexts/AppContexts";
import styles from "./style.module.scss";

export const AddValueModal = ({ dataType }) => {
  const { isModalOpen, setIsModalOpen, cart } = useContext(AppContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    productType: "",
  });

  useEffect(() => {
    if (dataType === "check" && cart) {
      setFormData(cart);
    }
  }, [dataType, cart]);

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
    <div className={styles.overlay}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2>Add {dataType}</h2>
        </div>
        <div className={styles.body}>
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
        <div className={styles.footer}>
          <button onClick={handleAddValue}>
            {dataType === "check" ? "Buy" : "Add"}
          </button>
          <button onClick={handleButton}>Cancel</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};
