import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import ListCharacters from '../../components/ListCharacters';

const GET_CHARACTERS = gql`
  query Characters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        gender
        status
        image
      }
      info {
        pages
      }
    }
  }
`;

const Characters: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }
  return (
    <ListCharacters
      characters={data.characters.results}
      pages={data.characters.info.pages}
      setPage={setPage}
    />
  );
};

export default Characters;
