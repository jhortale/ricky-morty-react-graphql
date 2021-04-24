import * as React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './services/api';
import Characters from './components/Characters'
import Character from './components/Character'

const App: React.FC = () => {
  const client = createApolloClient();
  return (
  <Router>

  <ApolloProvider client={client} >
    <Route exact path="/" component={Characters}/>
    <Route exact path="/:id" component={Character}/>
  </ApolloProvider>
  </Router>
)};

export default App;
