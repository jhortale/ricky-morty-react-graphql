import * as React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        gender
        image
      }
    }
  }
`;

interface Character {
  id: string;
  name: string;
  gender: string;
  image: string;
}

const CharacterProfile: React.FC = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }

  return <h1>Single profile</h1>;
};

export default CharacterProfile;
