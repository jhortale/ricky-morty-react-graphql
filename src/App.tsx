import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './services/api';
import Characters from './pages/Characters';
import Character from './pages/Character';

const App: React.FC = () => {
  const client = createApolloClient();
  return (
    <Router>
      <ApolloProvider client={client}>
        <Route exact path="/" component={Characters} />
        <Route exact path="/:id" component={Character} />
      </ApolloProvider>
    </Router>
  );
};

export default App;
