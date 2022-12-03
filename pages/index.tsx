import { useGetPhotosQuery } from '@/store/api/api';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pagination from '@/components/Pagination';
import modifyQueryString from 'util/modifyQueryString';
import Input from '@/components/Input';
import { Button } from '@/components/Button';
import SearchResults from '@/components/SearchResults';
import { useRouter } from 'next/router';

const ImagesSection = styled.section`
  max-width: 1600px;
  margin: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 24px;

  h1 {
    font-size: 32px;
    margin-bottom: 16px;
  }
`;

const NavigationInputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SearchInputForm = styled.form`
  display: flex;
  gap: 10px;
`;

export default function Home() {
  const router = useRouter();

  const { q, page } = router.query;
  const searchQuery = Array.isArray(q) ? q[0] : q;
  const pageQuery = Array.isArray(page) ? page[0] : page;
  const pageNumber = pageQuery ? parseInt(pageQuery) : 1;

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchQuery) {
      setSearchTerm(searchQuery);
    }
  }, [searchQuery]);

  const { data, isLoading, isError } = useGetPhotosQuery({
    searchQuery: searchQuery || '',
    page: pageNumber,
  });

  return (
    <div>
      <Head>
        <title>Pixabay Search</title>
      </Head>

      <ImagesSection>
        <h1>Search Images</h1>
        <NavigationInputsWrapper>
          <SearchInputForm
            onSubmit={(e) => {
              e.preventDefault();

              modifyQueryString(router, '/', (q) => ({
                ...q,
                q: searchTerm,
                page: '1',
              }));
            }}
          >
            <Input
              type='text'
              value={searchTerm}
              placeholder='Search for images...'
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <Button type='submit'>Search</Button>
          </SearchInputForm>
          <Pagination
            page={pageNumber}
            numPages={Math.ceil((data?.totalHits || 0) / 50)}
            onChangePage={(nextPage: number) => {
              modifyQueryString(router, '/', (q) => ({
                ...q,
                page: `${nextPage}`,
              }));
            }}
          />
        </NavigationInputsWrapper>

        <SearchResults data={data} isLoading={isLoading} isError={isError} />
      </ImagesSection>
    </div>
  );
}
