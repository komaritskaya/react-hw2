import React, { SyntheticEvent, useState } from 'react';
import './search.css';

interface SearchProps {
  handleSubmit: (arg0: string) => void;
}

const Search = ({ handleSubmit }: SearchProps) => {
  const [value, setValue] = useState('');

  const handleFormSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();
    handleSubmit(value);
  };

  return (
    <form className="search" onSubmit={handleFormSubmit}>
      <input
        className="search__input"
        type="text"
        placeholder="What do you want to watch?"
        onChange={(evt) => setValue(evt.target.value)}
        value={value}
      />
      <button className="search__button" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
