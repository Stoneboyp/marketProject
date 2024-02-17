import { SellerList } from "@widgets/SellerList";
import { SellerFilter } from "@pages/Sellers/SellerFilter";
import { AppContext } from "@contexts/AppContexts";
import { AddValueModal } from "@features/AddValueModal";
import { ModalButton } from "@features/ModalButton";
import { useContext } from "react";
import { useGetSellers } from "@services/sellers";
import styles from "@pages/style.module.scss";
export const Sellers = () => {
  const { data, isLoading, error } = useGetSellers();
  const { isModalOpen, setIsModalOpen } = useContext(AppContext);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <SellerFilter />
          <ModalButton />
        </div>
        <SellerList data={data.data} columns={data.columns} />
      </div>
      {isModalOpen && <AddValueModal />}
    </>
  );
};
