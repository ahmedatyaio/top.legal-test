import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/styles/theme';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
