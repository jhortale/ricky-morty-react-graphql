import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import LocationContainer from '../../components/LocationContainer';

const GET_LOCATION = gql`
  query Location($locId: ID!) {
    location(id: $locId) {
      id
      name
      residents {
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
  const { loading, error, data } = useQuery(GET_LOCATION, {
    variables: { locId: params.id },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return <LocationContainer location={data.location} />;
};

export default Characters;
