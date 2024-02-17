import { ChecksList } from "@widgets/ChecksList";
import { ChecksFilter } from "@pages/Checks/ChecksFilter";
import { AppContext } from "@contexts/AppContexts";
import { AddValueModal } from "@features/AddValueModal";
import { ModalButton } from "@features/ModalButton";
import { useContext } from "react";
import styles from "@pages/style.module.scss";
import { useGetChecks } from "@services/sellers";

export const Checks = () => {
  const { data, isLoading, error } = useGetChecks();
  const { isModalOpen, setIsModalOpen } = useContext(AppContext);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <ChecksFilter />
          <ModalButton />
        </div>
        <ChecksList data={data.data} columns={data.columns} />
      </div>
      {isModalOpen && <AddValueModal />}
    </>
  );
};
