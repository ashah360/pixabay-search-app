import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from './Input';
import { Button } from './Button';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
/**
 * Styles
 */

const Container = styled.div`
  display: flex;
  gap: 8px;
`;

const PageInputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const PaginationInput = styled(Input)`
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding-right: 0;
`;

const InputSuffix = styled.div`
  display: flex;
  height: 36px;
  border: 1px solid ${({ theme }) => theme.color.input.border.idle};
  border-left: 0;
  background: ${({ theme }) => theme.color.input.background};
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.text.secondary};
  padding: 0px 12px;
  width: 100%;
  border-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  padding-left: 0;
`;

/**
 * Interfaces
 */

interface PaginationProps {
  page: number;
  numPages: number;
  onChangePage: (nextPage: number) => void;
}

/**
 * Component
 */

export default function Pagination({
  page,
  numPages,
  onChangePage,
}: PaginationProps): JSX.Element {
  const [inputPageValue, setInputPageValue] = useState(page);

  useEffect(() => {
    setInputPageValue(page);
  }, [page]);

  useEffect(() => {
    if (inputPageValue > numPages || inputPageValue < 1) {
      setInputPageValue(page);
    }
  }, [inputPageValue, numPages, page]);

  return (
    <Container>
      <Button
        disabled={page === 1}
        onClick={() => onChangePage(Math.max(page - 1, 1))}
      >
        <FiChevronLeft />
      </Button>
      <PageInputContainer>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onChangePage(inputPageValue);
          }}
        >
          <PaginationInput
            type='number'
            value={inputPageValue}
            min={1}
            max={numPages}
            onChange={(e) => setInputPageValue(parseInt(e.target.value))}
          />{' '}
        </form>{' '}
        <InputSuffix>
          {'/ '}
          {numPages}
        </InputSuffix>
      </PageInputContainer>

      <Button
        disabled={page === numPages}
        onClick={() => onChangePage(Math.min(page + 1, numPages))}
      >
        <FiChevronRight />
      </Button>
    </Container>
  );
}
