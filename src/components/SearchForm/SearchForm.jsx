import { Error, SearchBtn, SearchInput } from './SearchForm.styled';
import PropTypes from 'prop-types';
import { useState } from 'react';

const SearchForm = ({ handleSearch }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();

    if (input.trim() === '') {
      setError('Please enter some word');
      return;
    }

    setError('');
    handleSearch(input);
  };

  const handleChange = e => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={input}
        onChange={handleChange}
      />
      <SearchBtn type="submit">Search</SearchBtn>
      {error && <Error>{error}</Error>}
    </form>
  );
};

SearchForm.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchForm;
