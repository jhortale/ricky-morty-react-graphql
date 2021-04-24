import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import ListCharacters from '../../components/ListCharacters';

const GET_CHARACTERS = gql`
  query Characters {
    characters {
      results {
        id
        name
        gender
        status
        image
      }
    }
  }
`;

interface Character {
  id: string;
  name: string;
  status: string;
  gender: string;
  image: string;
}

const Characters: React.FC = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  const characters = data.characters.results as Character[];

  return <ListCharacters characters={characters} />;
};

export default Characters;
