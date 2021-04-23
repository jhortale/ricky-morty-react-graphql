import * as React from 'react';
import { gql, useQuery } from '@apollo/client';

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

const Characters: React.FC = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }

  return (<div>{JSON.stringify(data)}</div>)
}

export default Characters