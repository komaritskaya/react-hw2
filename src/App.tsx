import React, { useState } from 'react';
import Header from './components/header';
import './App.css';
import Counter from './components/counter';
import MoviesList from './components/movies-list';
import Search from './components/search';
import Toggle from './components/toggle';

function App() {
  const [searchString, setSearchString] = useState('');
  const [activeGenre, setActiveGenre] = useState('');

  return (
    <div className="ui very padded container segment" style={{ marginTop: '50px' }}>
      <Header />
      <div className="ui segment">
        <Counter />
      </div>
      <div className="ui segment">
        <Toggle activeGenre={activeGenre} handleToggle={setActiveGenre} />
        <Search handleSubmit={setSearchString} />
        <MoviesList filter={searchString} activeGenre={activeGenre} />
      </div>
    </div>
  );
}

export default App;
