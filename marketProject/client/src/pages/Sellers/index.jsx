import { List } from "@entities/List";
import { Filter } from "@features/Filter";
import { AppContext } from "@contexts/AppContexts";
import { AddValueModal } from "@features/AddValueModal";
import { ModalButton } from "@features/ModalButton";
import { useContext } from "react";
import { useGetSellers } from "@services/sellers";
import styles from "@pages/style.module.scss";
export const Sellers = () => {
  const { data, isLoading, error } = useGetSellers();
  const { isModalOpen, setIsModalOpen, sellers, setSellers } =
    useContext(AppContext);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Filter />
          <ModalButton dataType={"seller"} />
        </div>
        <List data={data.data} columns={data.columns} />
      </div>
      {isModalOpen && <AddValueModal dataType={"seller"} />}
    </>
  );
};
