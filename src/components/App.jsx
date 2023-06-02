import { useEffect, useState } from 'react';
import { Main } from './App.styled';
import SearchForm from './SearchForm/SearchForm';
import ImageGallery from './ImageGallery/ImageGallery';

const App = () => {
  const [search, setSearch] = useState('');

  const handleSearch = value => {
    setSearch(value);
  };

  useEffect(() => {
    setSearch('');
  }, []);

  return (
    <Main>
      <SearchForm handleSearch={handleSearch} />
      <ImageGallery key={search} search={search} />
    </Main>
  );
};

export default App;
