import * as React from 'react'
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './services/api';
import Characters from './Characters'

const App: React.FC = () => {
  const client = createApolloClient();
  return (
  <ApolloProvider client={client} >
    <Characters />
  </ApolloProvider>
)};

export default App;
