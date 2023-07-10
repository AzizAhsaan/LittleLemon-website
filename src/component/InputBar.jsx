import React, { useEffect, useState } from 'react';

const getFilteredItems = (query, items) => {
  if (!query) {
    return items;
  }
  return items.filter((dish) => dish.title.includes(query));
};

const InputBar = ({ choosemenu, onFilteredItemsChange }) => {
  const [query, setQuery] = useState('');
  const tracks = choosemenu;
  const items = tracks;
  const filteredItems = getFilteredItems(query, items);

  useEffect(() => {
    onFilteredItemsChange(filteredItems);
  }, [filteredItems, onFilteredItemsChange]);

  const inputFieldStyle = {
    border: '1px solid white    ',
    color: 'white',
    background: '#536D95',
    borderRadius: '1rem',
    width: '14rem',
    height: '2.5rem',
    padding: '4px',
    margin: '0.5rem', 
  };

  return (
    <div>
      <div className="w-[15rem] h-[40rem]">
        <input
          className="input-field"
          style={inputFieldStyle}
          placeholder="Dish's Name"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default InputBar;
