// src/components/ShoppingForm.js
import React, { useContext } from 'react';
import { ShoppingListContext } from '../ShoppingListContext';
import { useInput } from '../useInput';

const ShoppingForm = () => {
  const { addItem } = useContext(ShoppingListContext);
  const { value, onChange, reset } = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addItem(value);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={onChange} placeholder="Add new item" />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ShoppingForm;
