import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import ListCharacters from '../../components/ListCharacters';

const GET_CHARACTERS = gql`
  query Characters($gender: String!, $status: String!, $page: Int!) {
    characters(filter: { status: $status, gender: $gender }, page: $page) {
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
  const [gender, setGender] = React.useState<string>('');
  const [status, setStatus] = React.useState<string>('');
  const [page, setPage] = React.useState(1);
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page, gender, status },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  const toggleGenderFilters = (value: string) => {
    setGender(prevState => (prevState === value ? '' : value));
  };
  const toggleStatusFilters = (value: string) => {
    setStatus(prevState => (prevState === value ? '' : value));
  };

  return (
    <ListCharacters
      characters={data.characters.results}
      pages={data.characters.info.pages}
      page={page}
      setPage={setPage}
      toggleGenderFilters={toggleGenderFilters}
      toggleStatusFilters={toggleStatusFilters}
      genderFilter={gender}
      statusFilter={status}
    />
  );
};

export default Characters;
