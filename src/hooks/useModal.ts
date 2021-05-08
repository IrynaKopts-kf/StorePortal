import { useState } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalopen] = useState(false);

  const handleModalOpen = () => {
    setIsModalopen(true);
  };

  const handleModalClose = () => {
    setIsModalopen(false);
  };

  return { isModalOpen, handleModalOpen, handleModalClose };
};
