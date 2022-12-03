import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { api } from '@/store/api/api';
import { defaultTheme } from 'styles/theme';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ApiProvider api={api}>
        <ThemeProvider theme={defaultTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApiProvider>
    </Provider>
  );
}
