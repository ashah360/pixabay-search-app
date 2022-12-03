import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { api } from '@/store/api/api';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ApiProvider api={api}>
        <Component {...pageProps} />
      </ApiProvider>
    </Provider>
  );
}
