import * as React from 'react';
import { Link } from 'react-router-dom';

interface Episode {
  id: number;
  name: string;
  characters: {
    id: number;
    name: string;
  }[];
}

interface Props {
  episode: Episode;
}

const LocationContainer: React.FC<Props> = ({ episode }) => {
  return (
    <div>
      <div>
        <Link to="/">back</Link>
      </div>
      <h1>{episode.name}</h1>
      <p>
        Residents:
        <ul>
          {episode.characters.map(character => (
            <li key={character.id}>
              <Link to={`/${character.id}`}>{character.name}</Link>
            </li>
          ))}
        </ul>
      </p>
    </div>
  );
};

export default LocationContainer;
