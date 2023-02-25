import React from 'react';

import './index.css';

const AddCustomer = ({ addCustomer }) => {
  const [nameInput, setNameInput] = React.useState('');

  const generateId = (name) => `list_item_${name}_${new Date().getTime()}`;

  const handleInputChange = (e) => setNameInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nameInput) return;

    addCustomer((prev) => [...prev, { id: generateId(nameInput), name: nameInput }]);
    setNameInput('');
  };

  return (
    <form>
      <input
        type="text"
        aria-label="Input customer name"
        className="large"
        placeholder="Name"
        value={nameInput}
        data-testid="app-input"
        onChange={handleInputChange}
        autoFocus
      />
      <button type="submit" className="button ml-30" data-testid="submit-button" onClick={handleSubmit}>
        Add customer
      </button>
    </form>
  );
};

export default AddCustomer;
