import React, { createContext, useMemo, useState } from 'react';

type ModalContextType = {
  showModal: boolean;
  setShowModal: (newValue: boolean) => void;
};

type ProviderChildren = {
  children: React.ReactNode;
};

const initialValue = {
  showModal: false,
  setShowModal: () => ({}),
};

export const ModalContext = createContext<ModalContextType>(initialValue);

export const ModalProvider = ({ children }: ProviderChildren) => {
  const [showModal, setShowModal] = useState(initialValue.showModal);
  const providerValues = useMemo(
    () => ({
      showModal,
      setShowModal,
    }),
    [showModal]
  );

  return (
    <ModalContext.Provider value={providerValues}>
      {children}
    </ModalContext.Provider>
  );
};
