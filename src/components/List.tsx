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
const List: React.FC = () => {
  const {loading, error, data} = useQuery(GET_CHARACTERS)
  if (loading) {
    return <div>loading...</div>
  }

  if (error) {
    return <div>error!</div>
  }

  const characters = data.characters.results
  return <div>{characters.map((item: {name: string;}) => item.name)}</div>
}

export default List
