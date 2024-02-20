import { List } from "@entities/List";
import { Filter } from "@features/Filter";
import { AppContext } from "@contexts/AppContexts";
import { AddValueModal } from "@features/AddValueModal";
import { ModalButton } from "@features/ModalButton";
import { useContext } from "react";
import styles from "@pages/style.module.scss";
import { useGetChecks } from "@services/checks";

export const Checks = () => {
  const { data, isLoading, error } = useGetChecks();
  const { isModalOpen, setIsModalOpen, checks, setCheks } =
    useContext(AppContext);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Filter />
          <ModalButton dataType={"check"} />
        </div>
        <List data={data.data} columns={data.columns} />
      </div>
      {isModalOpen && <AddValueModal dataType={"check"} />}
    </>
  );
};
