import React, { useState } from 'react';
import ErrorBoundary from '../components/error-boundary/error-boundary';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import MoviesList from '../components/movies-list/movies-list';
import Navbar from '../components/navbar/navbar';
import { SortType } from '../types';

const MainPage = () => {
  const [searchString, setSearchString] = useState('');
  const [activeGenre, setActiveGenre] = useState('');
  const [activeSortType, setActiveSortType] = useState(SortType.Asc);

  return (
    <>
      <Header handleSearchSubmit={setSearchString} />
      <main className="page-main">
        <div className="page-main__container container">
          <Navbar
            activeGenre={activeGenre}
            handleGenreToggle={setActiveGenre}
            activeSortType={activeSortType}
            handleSortChange={setActiveSortType}
          />
          <ErrorBoundary>
            <MoviesList
                filter={searchString}
                activeGenre={activeGenre}
                activeSortType={activeSortType}
            />
          </ErrorBoundary>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
