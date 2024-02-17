import { ProductList } from "@widgets/ProductList";
import { ProductFilter } from "@pages/ProductTypes/ProductFilter";
import { AppContext } from "@contexts/AppContexts";
import { AddValueModal } from "@features/AddValueModal";
import { useGetProducts } from "@services/sellers";
import { ModalButton } from "@features/ModalButton";
import { useContext } from "react";
import styles from "@pages/style.module.scss";

export const ProductTypes = () => {
  const { data, isLoading, error } = useGetProducts();

  const { isModalOpen, setIsModalOpen } = useContext(AppContext);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <ProductFilter />
          <ModalButton />
        </div>
        <ProductList data={data.data} columns={data.columns} />
      </div>
      {isModalOpen && <AddValueModal />}
    </>
  );
};
