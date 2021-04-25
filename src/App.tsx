import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './services/api';
import LayoutContainer from './components/LayoutContainer';
import Characters from './pages/Characters';
import Character from './pages/Character';
import Location from './pages/Location';
import Episode from './pages/Episode';
import 'antd/dist/antd.css';

const App: React.FC = () => {
  const client = createApolloClient();
  return (
    <Router>
      <ApolloProvider client={client}>
        <LayoutContainer>
          <Route exact path="/" component={Characters} />
          <Route exact path="/character/:id" component={Character} />
          <Route exact path="/location/:id" component={Location} />
          <Route exact path="/episodes/:id" component={Episode} />
        </LayoutContainer>
      </ApolloProvider>
    </Router>
  );
};

export default App;
