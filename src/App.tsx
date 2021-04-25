import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './services/api';
import Characters from './pages/Characters';
import Character from './pages/Character';
import Location from './pages/Location';
import Episode from './pages/Episode';

const App: React.FC = () => {
  const client = createApolloClient();
  return (
    <Router>
      <ApolloProvider client={client}>
        <Route exact path="/" component={Characters} />
        <Route exact path="/character/:id" component={Character} />
        <Route exact path="/location/:id" component={Location} />
        <Route exact path="/episodes/:id" component={Episode} />
      </ApolloProvider>
    </Router>
  );
};

export default App;
