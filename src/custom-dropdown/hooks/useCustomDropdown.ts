import { useState } from 'react';

import { Item } from '../interface/dropdownInterface';

export const useCustomDropdown = () => {
  const [itemSelected, setItemSelected] = useState<Item>();

  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen((value) => !value);
  };

  const handleItemSelected = ({ label, value }: { label: string; value: string }) => {
    setItemSelected((item) => (item?.value === value ? { label, value: '' } : { label, value }));
    setIsOpen((value) => !value);
  };

  return {
    // properties
    isOpen,
    itemSelected,
    // methods
    handleIsOpen,
    handleItemSelected,
  };
};
