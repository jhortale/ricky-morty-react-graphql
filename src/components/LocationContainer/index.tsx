import * as React from 'react';
import { Link } from 'react-router-dom';

interface Location {
  id: number;
  name: string;
  residents: {
    id: number;
    name: string;
  }[];
}

interface Props {
  location: Location;
}

const LocationContainer: React.FC<Props> = ({ location }) => {
  return (
    <div>
      <div>
        <Link to="/">back</Link>
      </div>
      <h1>{location.name}</h1>
      <p>
        Residents:
        <ul>
          {location.residents.map(resident => (
            <li key={resident.id}>{resident.name}</li>
          ))}
        </ul>
      </p>
    </div>
  );
};

export default LocationContainer;
