/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useEffect, useMemo, useState } from 'react';

import { NoteType } from '../types/NoteType';

type NoteContextType = {
  list: NoteType[];
  setList: (item: NoteType[]) => void;
  mutationValue: number;
  setMutationValue: (newValue: number) => void;
};

type ProviderChildren = {
  children: React.ReactNode;
};

const initialValue = {
  list: [],
  setList: () => {},
  mutationValue: 0,
  setMutationValue: () => {},
};

export const NoteContext = createContext<NoteContextType>(initialValue);

export const NoteProvider = ({ children }: ProviderChildren) => {
  const [list, setList] = useState<NoteType[]>(initialValue.list);
  const [mutationValue, setMutationValue] = useState(
    initialValue.mutationValue
  );

  useEffect(() => {
    const items = localStorage.getItem('InkNotes:NOTES');
    if (items) {
      setList(JSON.parse(items));
    }
  }, [mutationValue]);

  const providerValues = useMemo(
    () => ({ list, mutationValue, setList, setMutationValue }),
    [list, mutationValue]
  );

  return (
    <NoteContext.Provider value={providerValues}>
      {children}
    </NoteContext.Provider>
  );
};
