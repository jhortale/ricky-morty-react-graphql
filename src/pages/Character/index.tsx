import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import CharacterProfile from '../../components/CharacterProfile';

const GET_CHARACTERS = gql`
  query Character($charId: ID!) {
    character(id: $charId) {
      id
      name
      status
      episode {
        id
        name
      }
      location {
        id
        name
      }
    }
  }
`;

interface RouteParams {
  id: string;
}

const Characters: React.FC = () => {
  const params = useParams<RouteParams>();
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { charId: params.id },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return <CharacterProfile character={data.character} />;
};

export default Characters;
