import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import EpisodeContainer from '../../components/EpisodeContainer';

const GET_EPISODE = gql`
  query Episode($epiId: ID!) {
    episode(id: $epiId) {
      id
      name
      characters {
        id
        name
      }
    }
  }
`;

interface RouteParams {
  id: string;
}

const Episode: React.FC = () => {
  const params = useParams<RouteParams>();
  const { loading, error, data } = useQuery(GET_EPISODE, {
    variables: { epiId: params.id },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return <EpisodeContainer episode={data.episode} />;
};

export default Episode;
