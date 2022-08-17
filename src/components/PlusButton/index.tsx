/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import Text from '../UI/Text';

const PlusButton = () => {
  return (
    <div className="flex gap-3 my-6 items-center">
      <div className="bg-mainColor w-8 h-8 rounded-full flex items-center justify-center text-white font-medium cursor-pointer">
        +
      </div>

      <Text>Clique no "+" para criar uma anotação</Text>
    </div>
  );
};

export default PlusButton;
