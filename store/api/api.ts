import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Image } from '@/types/image';

export interface GetPhotosAPIResponse {
  total: number;
  totalHits: number;
  hits: Image[];
}

export const api = createApi({
  reducerPath: 'pixabayApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pixabay.com/api',
  }),
  endpoints: (builder) => ({
    getPhotos: builder.query<GetPhotosAPIResponse, { searchQuery: string }>({
      query: ({ searchQuery }) => {
        return {
          url: '/',
          params: {
            key: process.env.NEXT_PUBLIC_PIXABAY_API_KEY,
            q: searchQuery,
            image_type: 'photo',
          },
        };
      },
    }),
  }),
});

export const { useGetPhotosQuery } = api;
