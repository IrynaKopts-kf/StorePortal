import React from 'react';
import { SearchInput, SearchIcon, SearchComponent } from './styles';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';

interface SearchProps {
}

const Search = ({}: SearchProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <SearchComponent>
      <SearchInput type='search' placeholder={t(translations.home.searchPlaceholder)} />
      <SearchIcon src='assets/images/search.svg' alt='search' />
    </SearchComponent>
  );
};

export default Search;
