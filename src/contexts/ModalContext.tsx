/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from 'react';

type ModalContextType = {
  showModal: boolean;
  setShowModal: (newValue: boolean) => void;
};

type ProviderChildren = {
  children: React.ReactNode;
};

const initialValue = {
  showModal: false,
  setShowModal: () => {},
};

export const ModalContext = createContext<ModalContextType>(initialValue);

export const ModalProvider = ({ children }: ProviderChildren) => {
  const [showModal, setShowModal] = useState(initialValue.showModal);

  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
};
