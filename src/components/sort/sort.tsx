import React, { useState } from 'react';
import { SortType } from '../../types';
import './sort.css';

interface SortProps {
  activeSortType: SortType;
  handleChange: (arg0: SortType) => void;
}

const sortOptions: { [key in SortType]: string } = {
  [SortType.Asc]: 'NAME (UP)',
  [SortType.Desc]: 'NAME (DOWN)',
  [SortType.Date]: 'RELEASE DATE',
};

const Sort = ({ activeSortType, handleChange }: SortProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOptionClick = (value: SortType) => {
    handleChange(value);
    setIsOpen(false);
  };

  return (
    <div className="sort">
      <p className="sort__label">Sort by</p>
      <button
        className={`sort__options-toggle ${isOpen ? 'sort__options-toggle--opened' : 'sort__options-toggle--closed'}`}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {sortOptions[activeSortType]}
      </button>
      {isOpen && (
        <ul className="sort__options-list">
            {
                Object.keys(sortOptions).map((key) => (
                  key !== activeSortType && (
                    <li key={key} className="sort__options-item">
                      <button type="button" className="sort__options-button" onClick={() => onOptionClick(key as SortType)}>
                        {sortOptions[key as SortType]}
                      </button>
                    </li>
                  )
                ))
            }
        </ul>
      )}
    </div>
  );
};

export default Sort;
