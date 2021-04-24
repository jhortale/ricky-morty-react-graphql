import * as React from 'react';
import { Link } from 'react-router-dom';
import { Character } from '../ListCharacters';

interface CharacterProfile extends Character {
  episode: {
    id: number;
    name: string;
  }[];
  location: {
    id: number;
    name: string;
  };
}

interface Props {
  character: CharacterProfile;
}

const CharacterProfile: React.FC<Props> = ({ character }) => {
  return (
    <div>
      <div>
        <Link to="/">back</Link>
      </div>
      <h1>{character.name}</h1>
      <p>Status: {character.status}</p>
      <p>
        Episodes:
        <ul>
          {character.episode.map(episode => (
            <li key={episode.id}>{episode.name}</li>
          ))}
        </ul>
      </p>
      <p>
        Location:
        <Link to={`/location/${character.location.id}`}>
          {character.location.name}
        </Link>
      </p>
    </div>
  );
};

export default CharacterProfile;
