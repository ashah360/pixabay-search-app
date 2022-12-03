import { GetPhotosAPIResponse } from '@/store/api/api';
import React from 'react';
import styled from 'styled-components';
import SearchResult from './SearchResult';

/**
 * Styles
 */

const SearchResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.text.secondary};
  flex: 1;
`;

/**
 * Interfaces
 */

interface SearchResultsProps {
  data: GetPhotosAPIResponse | undefined;
  isError: boolean;
  isLoading: boolean;
}

/**
 * Component
 */

export default function SearchResults({
  data,
  isError,
  isLoading,
}: SearchResultsProps): JSX.Element {
  if (data && data.hits.length > 0) {
    return (
      <SearchResultsContainer>
        {data.hits.map((image) => (
          <SearchResult image={image} key={image.id} />
        ))}
      </SearchResultsContainer>
    );
  }
  if ((data && data.hits.length == 0) || isError) {
    return <ErrorContainer>No Results Found.</ErrorContainer>;
  }

  return <div />;
}
