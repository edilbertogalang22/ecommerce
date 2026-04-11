import { useState } from "react";
const useModal = () => {
  const [modaType, setModalType] = useState(null);
  const [modalData, setModalData] = useState(null);

  const openModal = (type, data = null) => {
    setModalData(type);
    setModalType(data);
  };

  const closeModal = () => {
    setModalData(null);
    setModalType(null);
  };
  return {
    openModal,
    closeModal,
    modaType,
    modalData,
  };
};

export default useModal;
