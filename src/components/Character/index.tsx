import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import { List, Avatar } from 'antd';

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id,
        name, 
        gender,
        image,
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

const Character: React.FC = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }

  const characters = data.characters.results as Character[];

  return (
    <h1>Single profile</h1>
  )
}

export default Character